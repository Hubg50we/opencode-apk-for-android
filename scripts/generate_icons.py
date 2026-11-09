#!/usr/bin/env python3
"""
Generate OpenCode brand icons and Android launcher assets in multiple resolutions.
"""

import os
from PIL import Image, ImageDraw, ImageFilter

def create_opencode_icon(size=512):
    # Create high-res canvas
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # 1. Background rounded rectangle
    margin = int(size * 0.05)
    radius = int(size * 0.22)
    bg_box = [margin, margin, size - margin, size - margin]

    # Draw gradient or cyber dark background
    draw.rounded_rectangle(bg_box, radius=radius, fill=(13, 17, 23, 255), outline=(48, 54, 61, 255), width=int(size * 0.02))

    # Inner subtle glow
    inner_margin = margin + int(size * 0.04)
    inner_radius = int(size * 0.18)
    draw.rounded_rectangle([inner_margin, inner_margin, size - inner_margin, size - inner_margin],
                           radius=inner_radius, outline=(88, 166, 255, 60), width=int(size * 0.015))

    # 2. Draw lightning bolt polygon (centered)
    # Coordinates normalized from 0.0 to 1.0
    bolt_coords = [
        (0.55, 0.18),
        (0.32, 0.52),
        (0.48, 0.52),
        (0.42, 0.82),
        (0.70, 0.44),
        (0.52, 0.44),
    ]
    bolt_px = [(int(x * size), int(y * size)) for x, y in bolt_coords]

    # Outer glow
    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    glow_draw.polygon(bolt_px, fill=(88, 166, 255, 180))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=int(size * 0.04)))
    img.alpha_composite(glow)

    # Main electric bolt with vivid cyan-blue fill
    draw.polygon(bolt_px, fill=(88, 166, 255, 255))

    # Inner bright accent
    accent_coords = [
        (0.54, 0.23),
        (0.38, 0.50),
        (0.49, 0.50),
        (0.45, 0.74),
        (0.64, 0.46),
        (0.53, 0.46),
    ]
    accent_px = [(int(x * size), int(y * size)) for x, y in accent_coords]
    draw.polygon(accent_px, fill=(230, 245, 255, 220))

    return img

def main():
    project_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    res_dir = os.path.join(project_dir, 'android', 'app', 'src', 'main', 'res')
    web_dir = os.path.join(project_dir, 'web')

    resolutions = {
        os.path.join(res_dir, 'mipmap-mdpi'): 48,
        os.path.join(res_dir, 'mipmap-hdpi'): 72,
        os.path.join(res_dir, 'mipmap-xhdpi'): 96,
        os.path.join(res_dir, 'mipmap-xxhdpi'): 144,
        os.path.join(res_dir, 'mipmap-xxxhdpi'): 192,
        os.path.join(res_dir, 'drawable'): 192,
    }

    base_icon = create_opencode_icon(512)

    # Save 512px icon for web and store
    os.makedirs(web_dir, exist_ok=True)
    base_icon.save(os.path.join(web_dir, 'icon.png'), "PNG")
    base_icon.resize((64, 64), Image.Resampling.LANCZOS).save(os.path.join(web_dir, 'favicon.png'), "PNG")
    print(f"[OK] Generated web/icon.png and web/favicon.png")

    for folder, size in resolutions.items():
        os.makedirs(folder, exist_ok=True)
        target_icon = base_icon.resize((size, size), Image.Resampling.LANCZOS)
        out_path = os.path.join(folder, 'ic_launcher.png')
        target_icon.save(out_path, "PNG")
        round_path = os.path.join(folder, 'ic_launcher_round.png')
        target_icon.save(round_path, "PNG")
        print(f"[OK] Generated {out_path} ({size}x{size})")

if __name__ == '__main__':
    main()
