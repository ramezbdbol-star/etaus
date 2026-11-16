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
| `img/` | Photos. See `IMAGE-PROMPTS.md` for the file names and prompts |

## Run it locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## Host it free on Cloudflare Pages

1. Cloudflare dashboard, Workers & Pages, Create, Pages, connect this GitHub repository.
2. Framework preset: None. Build command: leave empty. Build output directory: `/`.
3. Deploy, then add the custom domain `oemsourcingchina.com` under Custom domains.

## Things to edit

All in the `<script>` at the bottom of `index.html`:

- `WINDOWS`: the hours Daniel takes calls, in China time, Monday to Friday
- `BOOKING_URL`: paste a Google Calendar appointment page link to show a live "Open booking calendar" button
- `CONTACT`: email and WhatsApp number used by the request buttons

Text: English is in the HTML itself (`data-i18n` attributes). Spanish, French and Chinese are in the `T` object in the script.
