# OEM Sourcing Ltd website

One-page website for OEM Sourcing Ltd, a purchasing agency in Guangzhou, China.
Plain HTML, CSS and JavaScript. No build step, no dependencies.

- Languages: English, Spanish, French, Chinese (switcher in the header, or `?lang=es`)
- Sections: hero, services, how Sourcing 360 works, who we help, 15-minute Google Meet call picker, FAQ, contact
- Light and dark mode follow the visitor's device

## Files

| Path | What it is |
| --- | --- |
| `index.html` | The whole site (markup, styles, script, translations) |
| `fonts/` | The site fonts, bundled so nothing loads from Google |
| `logo/` | Logo files: `logo-mark.svg`, `avatar.svg` (round-crop friendly), PNG exports and horizontal lockups for light and dark backgrounds |
| `preview/` | Single-file preview and the upload zip, made by `tools/build.py` |
| `img/` | The six live photos (WebP) |
| `img-candidates/` | The six unused alternatives, ready to swap in |
| `IMAGE-PROMPTS.md` | The prompts the photos were generated from |

## Run it locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Host it free on Cloudflare Pages

The site is plain files with no build step, and it makes no requests to other websites (fonts and photos are bundled),
so it also loads where Google is blocked, such as mainland China.

**Option 1: drag and drop (no GitHub needed, about 2 minutes)**

1. Cloudflare dashboard, Workers & Pages, Create, Pages, **Upload assets**.
2. Name the project (for example `oem-sourcing`), then drop in `preview/oem-sourcing-site.zip`.
3. Deploy. The site is live at `https://oem-sourcing.pages.dev`. Add `oemsourcingchina.com` under Custom domains when ready.

**Option 2: connect this repository (updates on every push)**

1. Workers & Pages, Create, Pages, **Connect to Git**, pick this repository.
2. Production branch: `ccr-1abea930-vkpaj0`. Framework preset: None. Build command: empty. Build output directory: `/`.

**Sharing with someone who cannot open any website:** send `preview/oem-sourcing-preview.html`. It is one file with
everything inside, works offline, and opens in any browser.

`*.pages.dev` usually loads from mainland China but can be slow or blocked on some networks. A custom domain behind
Cloudflare behaves the same way. For a site that must always load there, host it in Hong Kong or inside China.

## Rebuild the shareable files

After editing `index.html`, run `python3 tools/build.py` to refresh `preview/oem-sourcing-preview.html` and
`preview/oem-sourcing-site.zip`.

## Things to edit

All in the `<script>` at the bottom of `index.html`:

- `WINDOWS`: the hours Daniel takes calls, in China time, Monday to Friday
- `BOOKING_URL`: paste a Google Calendar appointment page link to show a live "Open booking calendar" button
- `CONTACT`: email and WhatsApp number used by the request buttons

Text: English is in the HTML itself (`data-i18n` attributes). Spanish, French and Chinese are in the `T` object in the script.
