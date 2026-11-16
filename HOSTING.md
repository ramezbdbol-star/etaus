# Hosting guide: OEM Sourcing Ltd website

## Decision in one paragraph

The site is static files, so hosting costs almost nothing. **Start with Cloudflare Pages (free)** on the company's own
domain. It is excellent worldwide, which is where the buyers are. It is **not officially supported in mainland China**
(Cloudflare's China FAQ is reported to say so, and users report slow or intermittent access), so test from China before
trusting it there. If China access matters and the test fails, move the same files to a **Hong Kong server** (no ICP
filing needed). Do not use Vercel, Netlify or GitHub Pages for this: they have the same or worse China problems and no
advantage.

| Option | Hosting cost | Worldwide | Mainland China | Effort |
| --- | --- | --- | --- | --- |
| Cloudflare Pages + own domain | $0 | Excellent | Not supported by Cloudflare; usually opens, can be slow or drop out | 15 min |
| Hong Kong server (VPS or small cloud static host) | roughly $5 to $10 a month, check current prices | Good | Good, no ICP filing needed for Hong Kong | 1 hour |
| Server inside mainland China | varies | Good | Best | Needs an ICP filing and a Chinese business licence. Not realistic for a foreign Ltd |
| Cloudflare China Network | Enterprise level | Excellent | Good | Separate partner setup and ICP. Not minimal |

Always add the domain renewal: about $10 to $12 a year for a .com. The company already owns `oemsourcingchina.com`.

## What the human must do first

Daniel (the business owner) creates the Cloudflare account himself, so the account is his. The builder is added as an
administrator. No password is ever shared. See "Message for Daniel" in the chat or the section at the end of this file.
The builder then makes an **API token** in that account and gives it to the agent as an environment variable:

- Cloudflare dashboard, My Profile, API Tokens, Create Token, Custom token
- Permissions: Account, Cloudflare Pages, Edit. For DNS changes also add Zone, DNS, Edit and Zone, Zone, Read
- Also note the **Account ID** (dashboard home, right side)

```bash
export CLOUDFLARE_API_TOKEN=...      # never commit this, never paste it into a file in the repo
export CLOUDFLARE_ACCOUNT_ID=...
```

## Steps for the AI agent

Rules: do not buy anything, enter payment details or change a registrar account without the human saying so. Never ask
for a password. If a command below has changed, check Cloudflare's current docs for `wrangler pages`.

1. **Get the code and build.**
   ```bash
   git clone https://github.com/ramezbdbol-star/etaus.git && cd etaus
   git checkout ccr-1abea930-vkpaj0
   python3 tools/build.py          # makes dist/ (index.html, fonts/, img/, _headers)
   ```
2. **Create the Pages project and deploy.** Project name must be unique on pages.dev; if `oem-sourcing` is taken, add a suffix.
   ```bash
   npx wrangler@latest pages project create oem-sourcing --production-branch main
   npx wrangler@latest pages deploy dist --project-name oem-sourcing --branch main
   ```
   Note the URL printed at the end (like `https://oem-sourcing.pages.dev`).
3. **Check it works.** Expect HTTP 200 for each, and the page text to contain "OEM Sourcing".
   ```bash
   curl -sI https://oem-sourcing.pages.dev/ | head -1
   curl -sI https://oem-sourcing.pages.dev/img/hero.webp | head -1
   curl -sI https://oem-sourcing.pages.dev/fonts/figtree.woff2 | head -1
   curl -s  https://oem-sourcing.pages.dev/ | grep -c "OEM Sourcing"
   ```
4. **Find out where the domain lives** (read only): `dig NS oemsourcingchina.com +short` and `whois oemsourcingchina.com`.
   Report the registrar, the current nameservers, and the expiry date. If it has expired, tell the human before going further.
5. **Connect the domain.**
   - Preferred: add the domain as a free Zone in Cloudflare, then ask the human to change the nameservers at the
     registrar to the two Cloudflare ones shown (this is a human step). Wait until the zone shows Active.
   - Then in Workers & Pages, the project, Custom domains: add `oemsourcingchina.com` and `www.oemsourcingchina.com`.
     DNS records are created automatically when the zone is on Cloudflare.
   - Make one name the main one and redirect the other to it (Rules, Redirect Rules, free).
   - If the human will not move the nameservers: add only `www` as a CNAME to `oem-sourcing.pages.dev` at the current
     DNS provider, and set the bare domain to redirect to `www` at the registrar. A bare-domain CNAME is not allowed.
6. **Test from China (required before calling it done).**
   - Ask the human in China to open the URL on their phone and on a computer, **with no VPN**, once on mobile data
     and once on Wi-Fi, and report how long it took and whether photos and the language buttons work.
   - Also run the domain through a multi-ISP China speed test (Chinese tools such as itdog.cn, boce.com or 17ce.com),
     covering China Telecom, China Unicom and China Mobile.
   - Pass: loads fully in about 5 seconds or less on all three networks from most test points, no time-outs.
   - Report the numbers in a small table. If it passes, stop here.
7. **Only if step 6 fails: Plan B, Hong Kong server.**
   - The human picks and pays for a small server in the Hong Kong region (Alibaba Cloud, Tencent Cloud international,
     or any Hong Kong VPS with good routes into China). 1 vCPU and 1 GB is plenty. No ICP filing is needed for Hong Kong.
   - On the server (Debian or Ubuntu), install Caddy, which gets the HTTPS certificate by itself:
     ```bash
     sudo apt update && sudo apt install -y caddy
     sudo mkdir -p /var/www/oem
     ```
     `/etc/caddy/Caddyfile`:
     ```
     oemsourcingchina.com, www.oemsourcingchina.com {
         root * /var/www/oem
         file_server
         encode gzip
     }
     ```
     ```bash
     rsync -av dist/ user@SERVER_IP:/var/www/oem/
     sudo systemctl reload caddy
     ```
   - Point the domain's `A` records (bare and `www`) at the server IP. If DNS stays on Cloudflare, set these records to
     **DNS only** (grey cloud), otherwise traffic still goes through Cloudflare. Remove or leave the Pages project.
   - Repeat step 6.
8. **Updating later.** Edit `index.html`, run `python3 tools/build.py`, then repeat step 2's deploy command (or
   rsync for Plan B).
9. **Finish.** Tell the human the live URL, the test results and the running cost. Ask them to **delete the API token**
   in Cloudflare (My Profile, API Tokens) if the agent will not need it again.

## Message for Daniel (copy and send)

```
Hi Daniel, to put your website online (free) I need a Cloudflare account in YOUR name. About 5 minutes:

1. Go to dash.cloudflare.com/sign-up and sign up with your email and a strong password. Choose the Free plan. No card needed.
2. Open the confirmation email and click the link.
3. Add me as an admin: Manage Account > Members > Invite, enter [MY EMAIL], role: Administrator, Send. I will accept it.
4. Tell me where your domain oemsourcingchina.com is registered (GoDaddy, Namecheap, Aliyun, Tencent, other) and whether you can still log in there. Do not change anything yet.
5. Please do not buy or pay for anything.

When I send you the link, open it on your phone WITHOUT a VPN, once on mobile data and once on Wi-Fi, and tell me if it loads and how fast.
```
