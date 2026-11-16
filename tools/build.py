#!/usr/bin/env python3
"""Build the shareable versions of the site. Standard library only.

  python3 tools/build.py                 -> preview/oem-sourcing-preview.html (one file, everything inlined)
                                            preview/oem-sourcing-site.zip     (drag-and-drop upload for Cloudflare Pages)
  python3 tools/build.py --artifact OUT  -> OUT: page fragment for a Claude artifact (fonts inlined, photos stay as files)
"""
import base64, re, sys, zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML = (ROOT / "index.html").read_text(encoding="utf-8")


def data_uri(path, mime):
    return f"data:{mime};base64," + base64.b64encode((ROOT / path).read_bytes()).decode()


def inline_fonts(html):
    return re.sub(r"url\((fonts/[a-z0-9-]+\.woff2)\)", lambda m: f"url({data_uri(m.group(1), 'font/woff2')})", html)


def inline_images(html):
    return re.sub(r'src="(img/[a-z]+\.webp)"', lambda m: f'src="{data_uri(m.group(1), "image/webp")}"', html)


def build_preview():
    out = ROOT / "preview" / "oem-sourcing-preview.html"
    out.parent.mkdir(exist_ok=True)
    out.write_text(inline_images(inline_fonts(HTML)), encoding="utf-8")
    print(out.relative_to(ROOT), out.stat().st_size // 1024, "KB")


def build_zip():
    out = ROOT / "preview" / "oem-sourcing-site.zip"
    files = ["index.html"] + sorted(str(p.relative_to(ROOT)) for d in ("fonts", "img") for p in (ROOT / d).glob("*") if p.is_file())
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for f in files:
            z.write(ROOT / f, f)
    print(out.relative_to(ROOT), out.stat().st_size // 1024, "KB,", len(files), "files")


def build_artifact(dest):
    s = inline_fonts(HTML)
    s = re.sub(r"<!doctype html>\s*", "", s, flags=re.I)
    s = re.sub(r"<html[^>]*>\s*<head>\s*", "", s)
    s = re.sub(r'<meta charset="utf-8">\s*', "", s)
    s = re.sub(r'<meta name="viewport"[^>]*>\s*', "", s)
    s = s.replace("</head>", "").replace('<body id="top">', '<div id="top"></div>').replace("</body>", "").replace("</html>", "")
    s = re.sub(r"<title>.*?</title>", "<title>OEM Sourcing Ltd</title>", s, count=1)
    Path(dest).write_text(s.strip() + "\n", encoding="utf-8")
    print(dest, len(s) // 1024, "KB")


if __name__ == "__main__":
    if len(sys.argv) == 3 and sys.argv[1] == "--artifact":
        build_artifact(sys.argv[2])
    else:
        build_preview()
        build_zip()
