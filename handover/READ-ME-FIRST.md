# OEM Sourcing Ltd website: read me first

This folder has everything to put your website online yourself, for free.

| File | What it is |
| --- | --- |
| `oem-sourcing-preview.html` | The whole website in one file. Double-click to look at it. Works with no VPN and no internet. |
| `oem-sourcing-site.zip` | The website, ready to upload to Cloudflare Pages. |
| `READ-ME-FIRST.md` | This page. |

## Part 1. What you do (about 10 minutes)

**Step 1. Look at it.** Open `oem-sourcing-preview.html` in your browser. Check the text, your contact details and the
language buttons (EN, ES, FR, 中文). Tell me anything to change before it goes online.

**Step 2. Make a free Cloudflare account.**
1. Go to dash.cloudflare.com/sign-up. Sign up with your email and a strong password. Choose the Free plan. No card needed.
2. Click the link in the confirmation email.

**Step 3. Put the site online.**
1. In Cloudflare: Workers & Pages, Create, Pages, **Upload assets**.
2. Project name: `oem-sourcing`. Drag in `oem-sourcing-site.zip`. Click Deploy.
3. You get an address like `https://oem-sourcing.pages.dev`.
4. Open it on your phone **without a VPN**, once on mobile data and once on Wi-Fi. If it loads, you are online.

**Step 4. Connect your domain `oemsourcingchina.com` and test properly.** Give your AI agent the box in Part 2 and let it
guide you. First check that the domain has not expired where you bought it.

**If dash.cloudflare.com does not open for you without a VPN,** tell me. The alternative is a small server in Hong Kong,
and the AI agent can set that up too (step 8 in the box).

**Things only you can check:** the call hours (the booking calendar currently offers Monday to Friday, 09:00 to 12:00,
14:00 to 18:00 and 20:00 to 22:00 China time, which are placeholders), your contact details, and the Spanish, French and
Chinese wording.

## Part 2. Instructions for your AI agent

Copy everything between the lines into your AI agent (Codex, Claude Code, Kimi, Qwen, Doubao, Trae, Cursor or any
agent that can run commands). Put `oem-sourcing-site.zip` in the folder the agent works in.

--------------------------------------------------------------------------------

You are helping me (Daniel, owner of OEM Sourcing Ltd, a sourcing agency in Guangzhou) put a finished static website
online for free on Cloudflare Pages, connect my domain, and test it from China. I am in mainland China with no VPN.
Work step by step, run the commands yourself, and tell me what you do. Ask me before anything that costs money or
changes my domain settings. Never ask me for passwords. If you cannot run commands, give me each step to do myself.

The folder you work in contains `oem-sourcing-site.zip`: the website (index.html, fonts/, img/, _headers). Do not edit
the site files unless I ask.

1. Unzip `oem-sourcing-site.zip` into a new empty folder called `site`. Check that `index.html` is at its top level.
2. Make sure Node.js 18 or newer is installed (install the LTS version if not). If npm downloads are slow or fail in
   China, add `--registry=https://registry.npmmirror.com` to the npm and npx commands.
3. Log in to my Cloudflare account with `npx wrangler login` (it opens my browser and I click Allow). If that is not
   possible, tell me how to create an API token (My Profile, API Tokens, Create Token, Custom token, permission
   Account > Cloudflare Pages > Edit) and let me set it as the environment variable CLOUDFLARE_API_TOKEN myself.
   Never ask me to paste the token into this chat.
4. From inside the `site` folder run:
       npx wrangler pages project create oem-sourcing --production-branch main
       npx wrangler pages deploy . --project-name oem-sourcing --branch main
   If the name is taken, add a suffix. Note the https://....pages.dev address that is printed.
5. Check: that address, /img/hero.webp and /fonts/figtree.woff2 must each return 200 (use curl -I), and the home page
   must contain "OEM Sourcing".
6. Test from China. Ask me to open the address on my phone without a VPN, once on mobile data and once on Wi-Fi, and
   tell you whether it loads, how many seconds it takes and whether the photos show. Also run the address through a
   China multi-network speed test (itdog.cn, boce.com or 17ce.com) and summarise the results for China Telecom, China
   Unicom and China Mobile. Pass = fully loaded in about 5 seconds or less everywhere, no time-outs.
7. My domain is oemsourcingchina.com. First check, read only (whois and dig), who the registrar is, the current
   nameservers and the expiry date. If it has expired, stop and tell me. Otherwise walk me through these steps:
   Cloudflare dashboard, Add a domain, oemsourcingchina.com, Free plan. At my registrar, replace the nameservers with the
   two Cloudflare ones shown. Then Workers & Pages, oem-sourcing, Custom domains, add oemsourcingchina.com and
   www.oemsourcingchina.com. Make one of them the main address and redirect the other to it. Repeat step 6 using the
   domain.
8. Only if step 6 fails (the site is slow or does not load in China): the fallback is a small Hong Kong server, which
   needs no ICP filing. I buy a server with 1 vCPU and 1 GB in the Hong Kong region (Alibaba Cloud, Tencent Cloud
   international, or any Hong Kong VPS provider). You install Caddy (sudo apt install -y caddy), copy the site folder
   to /var/www/oem, and use this /etc/caddy/Caddyfile:
       oemsourcingchina.com, www.oemsourcingchina.com {
           root * /var/www/oem
           file_server
           encode gzip
       }
   Then reload Caddy and point the domain's A records (bare and www) at the server IP. If the DNS stays on Cloudflare,
   set these records to "DNS only", not proxied. Repeat step 6.
9. Finish by telling me the live address, the test results and the monthly cost. Remind me to delete any API token I
   created (Cloudflare, My Profile, API Tokens).

--------------------------------------------------------------------------------

## Good to know

- Hosting on Cloudflare Pages is free. You only pay for the domain (about 10 to 12 US dollars a year).
- Cloudflare does not officially support Pages inside mainland China. It often works but can be slow or drop out, so
  the test in step 6 matters. If it fails, the Hong Kong server is the fix, at roughly 5 to 10 US dollars a month.
- To change text, hours or contact details later, ask your AI agent to edit `site/index.html` (settings are in the
  script at the bottom) and run the deploy command in step 4 again.
