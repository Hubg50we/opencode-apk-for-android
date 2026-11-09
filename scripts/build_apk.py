#!/usr/bin/env python3
"""
OpenCode Android APK Builder & Signer
Packages the OpenCode mobile IDE web assets into a signed, ready-to-install Android APK.
"""

import os
import sys
import zipfile
import hashlib
import base64
import datetime
from cryptography import x509
from cryptography.x509.oid import NameOID
from cryptography.hazmat.primitives import hashes, serialization
from cryptography.hazmat.primitives.asymmetric import rsa
from cryptography.hazmat.primitives.serialization import pkcs7

def generate_opencode_cert():
    key = rsa.generate_private_key(
        public_exponent=65537,
        key_size=2048,
    )
    subject = issuer = x509.Name([
        x509.NameAttribute(NameOID.COUNTRY_NAME, "US"),
        x509.NameAttribute(NameOID.ORGANIZATION_NAME, "OpenCode Community"),
        x509.NameAttribute(NameOID.COMMON_NAME, "OpenCode Android"),
    ])
    cert = (
        x509.CertificateBuilder()
        .subject_name(subject)
        .issuer_name(issuer)
        .public_key(key.public_key())
        .serial_number(x509.random_serial_number())
        .not_valid_before(datetime.datetime.now(datetime.timezone.utc) - datetime.timedelta(days=1))
        .not_valid_after(datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=3650))
        .sign(key, hashes.SHA256())
    )
    return key, cert

def build_bundled_html(web_dir):
    html_file = os.path.join(web_dir, 'index.html')
    css_file = os.path.join(web_dir, 'style.css')
    js_file = os.path.join(web_dir, 'app.js')

    with open(html_file, 'r', encoding='utf-8') as f:
        html = f.read()

    css_content = ""
    if os.path.exists(css_file):
        with open(css_file, 'r', encoding='utf-8') as f:
            css_content = f.read()

    js_content = ""
    if os.path.exists(js_file):
        with open(js_file, 'r', encoding='utf-8') as f:
            js_content = f.read()

    # Inline CSS and JS for 100% standalone reliability in any WebView version
    bundled = html.replace('<link rel="stylesheet" href="style.css">', f"<style>\n{css_content}\n</style>")
    bundled = bundled.replace('<script src="app.js"></script>', f"<script>\n{js_content}\n</script>")
    return bundled, css_content, js_content

def build_signed_apk(base_apk_path, output_apk_path, web_dir):
    print(f"[*] Reading base template APK: {base_apk_path}")
    if not os.path.exists(base_apk_path):
        raise FileNotFoundError(f"Base APK not found at {base_apk_path}")

    bundled_html, css_content, js_content = build_bundled_html(web_dir)
    key, cert = generate_opencode_cert()

    entries = {}
    with zipfile.ZipFile(base_apk_path, 'r') as zin:
        for item in zin.infolist():
            # Skip old signature files
            if item.filename.startswith('META-INF/') and (
                item.filename.endswith('.SF') or 
                item.filename.endswith('.RSA') or 
                item.filename.endswith('.DSA') or 
                item.filename.endswith('.MF')
            ):
                continue
            entries[item.filename] = zin.read(item.filename)

    # Patch package name in AndroidManifest.xml from com.hubg50we.dc to com.hubg50we.oc
    # This prevents INSTALL_FAILED_UPDATE_INCOMPATIBLE conflicts with any existing dc- apps!
    if 'AndroidManifest.xml' in entries:
        m = entries['AndroidManifest.xml']
        m = m.replace('com.hubg50we.dc.DYN'.encode('utf-16le'), 'com.hubg50we.oc.DYN'.encode('utf-16le'))
        m = m.replace('com.hubg50we.dc.and'.encode('utf-16le'), 'com.hubg50we.oc.and'.encode('utf-16le'))
        target = 'com.hubg50we.dc'.encode('utf-16le') + b'\x00\x00'
        replacement = 'com.hubg50we.oc'.encode('utf-16le') + b'\x00\x00'
        m = m.replace(target, replacement)
        entries['AndroidManifest.xml'] = m

    # Inject OpenCode web assets
    entries['assets/web/index.html'] = bundled_html.encode('utf-8')
    entries['assets/web/style.css'] = css_content.encode('utf-8')
    entries['assets/web/app.js'] = js_content.encode('utf-8')
    entries['assets/www/index.html'] = bundled_html.encode('utf-8')

    icon_path = os.path.join(web_dir, 'icon.png')
    if os.path.exists(icon_path):
        with open(icon_path, 'rb') as f:
            entries['assets/web/icon.png'] = f.read()

    fav_path = os.path.join(web_dir, 'favicon.png')
    if os.path.exists(fav_path):
        with open(fav_path, 'rb') as f:
            entries['assets/web/favicon.png'] = f.read()

    launcher_path = os.path.join(os.path.dirname(web_dir), 'android', 'app', 'src', 'main', 'res', 'drawable', 'ic_launcher.png')
    if os.path.exists(launcher_path):
        with open(launcher_path, 'rb') as f:
            entries['res/drawable/ic_launcher.png'] = f.read()

    manifest_path = os.path.join(web_dir, 'manifest.json')
    if os.path.exists(manifest_path):
        with open(manifest_path, 'rb') as f:
            entries['assets/web/manifest.json'] = f.read()

    sw_path = os.path.join(web_dir, 'sw.js')
    if os.path.exists(sw_path):
        with open(sw_path, 'rb') as f:
            entries['assets/web/sw.js'] = f.read()

    # Build MANIFEST.MF
    manifest_lines = [
        "Manifest-Version: 1.0",
        "Created-By: 1.0 (OpenCode Android Signer)",
        ""
    ]

    file_hashes = {}
    for filename in sorted(entries.keys()):
        digest = base64.b64encode(hashlib.sha256(entries[filename]).digest()).decode('ascii')
        file_hashes[filename] = digest
        manifest_lines.append(f"Name: {filename}")
        manifest_lines.append(f"SHA-256-Digest: {digest}")
        manifest_lines.append("")

    manifest_bytes = "\r\n".join(manifest_lines).encode('utf-8')

    # Build CERT.SF
    sf_lines = [
        "Signature-Version: 1.0",
        "Created-By: 1.0 (OpenCode Android Signer)",
        f"SHA-256-Digest-Manifest: {base64.b64encode(hashlib.sha256(manifest_bytes).digest()).decode('ascii')}",
        ""
    ]

    for filename in sorted(entries.keys()):
        entry_text = f"Name: {filename}\r\nSHA-256-Digest: {file_hashes[filename]}\r\n\r\n".encode('utf-8')
        entry_digest = base64.b64encode(hashlib.sha256(entry_text).digest()).decode('ascii')
        sf_lines.append(f"Name: {filename}")
        sf_lines.append(f"SHA-256-Digest: {entry_digest}")
        sf_lines.append("")

    sf_bytes = "\r\n".join(sf_lines).encode('utf-8')

    # Sign CERT.SF with PKCS#7
    builder = pkcs7.PKCS7SignatureBuilder().set_data(sf_bytes).add_signer(cert, key, hashes.SHA256())
    rsa_bytes = builder.sign(serialization.Encoding.DER, options=[pkcs7.PKCS7Options.DetachedSignature])

    # Write output APK
    out_dir = os.path.dirname(output_apk_path)
    if out_dir and not os.path.exists(out_dir):
        os.makedirs(out_dir, exist_ok=True)

    with zipfile.ZipFile(output_apk_path, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
        zout.writestr('META-INF/MANIFEST.MF', manifest_bytes)
        zout.writestr('META-INF/CERT.SF', sf_bytes)
        zout.writestr('META-INF/CERT.RSA', rsa_bytes)

        for filename in sorted(entries.keys()):
            zout.writestr(filename, entries[filename])

    size_mb = os.path.getsize(output_apk_path) / (1024 * 1024)
    print(f"[OK] Generated base APK: {output_apk_path} ({size_mb:.2f} MB)")

    # Apply APK Signature Scheme v2 & v3 + zipalign via uber-apk-signer
    apply_v2_v3_signature(output_apk_path)
    return output_apk_path

def find_java_binary():
    import shutil
    j = shutil.which("java")
    if j:
        return j

    candidates = [
        r"C:\Users\Administrator\AppData\Local\Programs\openjdk\jdk-25.0.5.0.3\bin\java.exe",
        r"C:\Users\Administrator\AppData\Roaming\.minecraft\runtime\java-runtime-gamma\windows-x64\java-runtime-gamma\bin\java.exe",
        r"C:\Users\Administrator\AppData\Roaming\.minecraft\sk_runtime\java-17\jdk-17.0.20.1+1-jre\bin\java.exe",
    ]
    for c in candidates:
        if os.path.exists(c):
            return c
    return None

def apply_v2_v3_signature(apk_path):
    import subprocess
    java_bin = find_java_binary()
    jar_path = os.path.join(os.path.dirname(__file__), "uber-apk-signer-1.3.0.jar")

    if not java_bin:
        print("[!] Java not found on system PATH; skipping v2/v3 signing block.")
        return

    if not os.path.exists(jar_path):
        print(f"[!] uber-apk-signer jar not found at {jar_path}")
        return

    print(f"[*] Applying APK Signature Scheme v2 & v3 + zipalign with {java_bin}...")
    cmd = [java_bin, "-jar", jar_path, "-a", apk_path, "--allowResign", "--overwrite"]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print(f"[OK] APK successfully verified with v2 & v3 signatures and 4-byte zipalign!")
    else:
        print(f"[!] Warning during signing: {res.stderr or res.stdout}")

if __name__ == '__main__':
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    web_dir = os.path.join(project_dir, 'web')
    template_apk = os.path.join(os.path.dirname(__file__), 'template.apk')
    base_apk = template_apk if os.path.exists(template_apk) else r"C:\Users\Administrator\.gemini\antigravity\scratch\dc-android.apk"
    out_apk = os.path.join(project_dir, 'opencode-android.apk')

    build_signed_apk(base_apk, out_apk, web_dir)
