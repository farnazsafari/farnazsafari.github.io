# farnazsafari.github.io — academic website

Personal academic website of Farnaz Safari (Ph.D. candidate, Dyson School, Cornell).
Plain hand-written HTML/CSS — no build step, no dependencies. Every edit is a plain-text
edit, doable directly in the GitHub web editor; a commit deploys in under a minute.

## Structure

| File | What it is |
|---|---|
| `index.html` | Home: bio, photo, contact, job-market notice, references |
| `research.html` | Job Market Paper (abstract inline) + working papers + work in progress |
| `teaching.html` | Teaching experience |
| `assets/style.css` | All styling (single column, ~780px, serif) |
| `assets/farnaz-safari.jpg` | Web-optimized headshot (1000px) |
| `files/Safari_CV.pdf` | CV (the `CV` nav item links straight to this) |

## How to update

- **New CV:** overwrite `files/Safari_CV.pdf` (keep the same filename — the link keeps working).
- **New paper draft:** overwrite the matching PDF in `files/`, or add a new PDF and copy-paste
  one `<div class="paper">…</div>` block in `research.html` and edit the text.
- **Abstracts:** every paper uses `<details><summary>Abstract</summary>…</details>`
  (click-to-expand, no JavaScript).
- **After the market:** remove the job-market notice (`div.market-notice` in `index.html`)
  and the References section, and update the affiliation.

## Deploy on GitHub Pages

1. Create a **public** repo named exactly `<your-github-username>.github.io`.
2. Push this folder's contents to it (or upload the files through the GitHub web UI).
3. The site is live at `https://<your-github-username>.github.io` within a minute or two.
   No settings to change — a repo with that name publishes automatically from `main`.

### Optional: custom domain (~$12/yr)

1. Buy `farnazsafari.com` at any registrar.
2. Repo → Settings → Pages → Custom domain → enter the domain (GitHub adds a `CNAME` file).
3. At the registrar, add DNS records:
   - Four `A` records for the apex: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<your-github-username>.github.io`
4. Back in Pages settings, tick **Enforce HTTPS** once the certificate is issued.

A custom domain gives you a lifetime URL that survives moves between institutions.

## Visitor analytics

Every page loads a one-line [GoatCounter](https://www.goatcounter.com) script just before `</body>`.
The dashboard at https://farnazsafari.goatcounter.com shows visits by **country**, **referrer**
(which site or search engine sent the visitor), page, browser, and screen size. GoatCounter is
free for personal sites and sets no cookies, so no consent banner is needed.

One-time setup: sign up at https://www.goatcounter.com/signup with the site code `farnazsafari`
(so the dashboard URL matches the snippet). If that code is taken, pick another and replace
`farnazsafari.goatcounter.com` in the three HTML files.

## Preview locally

Open `index.html` in a browser, or run a tiny server:

```bash
python3 -m http.server 4173
```

then visit http://localhost:4173.
