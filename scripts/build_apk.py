#!/usr/bin/env python3
"""
OpenCode Android APK Builder & Signer
Packages the OpenCode mobile IDE web assets into a signed, ready-to-install Android APK.
Uses uber-apk-signer (apksig) for 100% Android-compliant v1, v2, v3 signatures & 4-byte zipalign.
"""

import os
import sys
import zipfile
import subprocess
import shutil

def find_java_binary():
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

    # Inline CSS and JS for 100% standalone on-device execution
    bundled = html.replace('<link rel="stylesheet" href="style.css">', f"<style>\n{css_content}\n</style>")
    bundled = bundled.replace('<script src="app.js"></script>', f"<script>\n{js_content}\n</script>")
    return bundled, css_content, js_content

def build_signed_apk(base_apk_path, output_apk_path, web_dir):
    print(f"[*] Reading base template APK: {base_apk_path}")
    if not os.path.exists(base_apk_path):
        raise FileNotFoundError(f"Base APK not found at {base_apk_path}")

    bundled_html, css_content, js_content = build_bundled_html(web_dir)

    entries = {}
    with zipfile.ZipFile(base_apk_path, 'r') as zin:
        for item in zin.infolist():
            # Strip all old signatures completely
            if item.filename.startswith('META-INF/') and (
                item.filename.endswith('.SF') or 
                item.filename.endswith('.RSA') or 
                item.filename.endswith('.DSA') or 
                item.filename.endswith('.MF')
            ):
                continue
            entries[item.filename] = zin.read(item.filename)

    # Patch package name in AndroidManifest.xml from com.hubg50we.dc to com.hubg50we.oc
    if 'AndroidManifest.xml' in entries:
        m = entries['AndroidManifest.xml']
        m = m.replace('com.hubg50we.dc.DYN'.encode('utf-16le'), 'com.hubg50we.oc.DYN'.encode('utf-16le'))
        m = m.replace('com.hubg50we.dc.and'.encode('utf-16le'), 'com.hubg50we.oc.and'.encode('utf-16le'))
        target = 'com.hubg50we.dc'.encode('utf-16le') + b'\x00\x00'
        replacement = 'com.hubg50we.oc'.encode('utf-16le') + b'\x00\x00'
        m = m.replace(target, replacement)

        # Disable DiscordService in AndroidManifest.xml (set android:enabled="false")
        # Pattern: attr enabled (0x05), null str, type 0x12 (boolean), value 0xffffffff (true)
        # Replace value with 0x00000000 (false)
        enabled_true = b'\x05\x00\x00\x00\xff\xff\xff\xff\x08\x00\x00\x12\xff\xff\xff\xff'
        enabled_false = b'\x05\x00\x00\x00\xff\xff\xff\xff\x08\x00\x00\x12\x00\x00\x00\x00'
        if enabled_true in m:
            m = m.replace(enabled_true, enabled_false, 1)
            print("[OK] Discord background service permanently disabled in AndroidManifest.xml")

        entries['AndroidManifest.xml'] = m

    # Inject OpenCode mobile web assets
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

    # Write unsigned intermediate APK (omits broken python pkcs7 signatures)
    out_dir = os.path.dirname(output_apk_path)
    if out_dir and not os.path.exists(out_dir):
        os.makedirs(out_dir, exist_ok=True)

    with zipfile.ZipFile(output_apk_path, 'w', compression=zipfile.ZIP_DEFLATED) as zout:
        for filename in sorted(entries.keys()):
            zout.writestr(filename, entries[filename])

    size_mb = os.path.getsize(output_apk_path) / (1024 * 1024)
    print(f"[OK] Generated clean intermediate APK: {output_apk_path} ({size_mb:.2f} MB)")

    # Apply standard Android APK Signatures (v1, v2, v3) + zipalign via uber-apk-signer
    apply_signatures(output_apk_path)
    return output_apk_path

def apply_signatures(apk_path):
    java_bin = find_java_binary()
    jar_path = os.path.join(os.path.dirname(__file__), "uber-apk-signer-1.3.0.jar")

    if not java_bin:
        raise RuntimeError("Java binary not found. Cannot sign APK.")

    if not os.path.exists(jar_path):
        raise FileNotFoundError(f"uber-apk-signer jar not found at {jar_path}")

    print(f"[*] Signing & 4-byte zipaligning APK using official apksig ({java_bin})...")
    cmd = [java_bin, "-jar", jar_path, "-a", apk_path, "--overwrite", "--verbose"]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode == 0:
        print("[OK] APK successfully signed with v1, v2 & v3 schemes and 4-byte aligned!")
    else:
        print(f"[!] Signing output: {res.stdout}\n{res.stderr}")
        raise RuntimeError("APK signing failed.")

    # Run verification check
    verify_cmd = [java_bin, "-jar", jar_path, "-y", "-a", apk_path, "--verbose"]
    verify_res = subprocess.run(verify_cmd, capture_output=True, text=True)
    if verify_res.returncode == 0:
        print("[OK] APK Signature & Zipalign verification passed!")
    else:
        print(f"[!] Verification warning: {verify_res.stderr or verify_res.stdout}")

if __name__ == '__main__':
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    web_dir = os.path.join(project_dir, 'web')
    template_apk = os.path.join(os.path.dirname(__file__), 'template.apk')
    base_apk = template_apk if os.path.exists(template_apk) else r"C:\Users\Administrator\.gemini\antigravity\scratch\dc-android.apk"
    out_apk = os.path.join(project_dir, 'opencode-android.apk')

    build_signed_apk(base_apk, out_apk, web_dir)
