# Unreal Engine Developer Portfolio

Clean, typography‑focused portfolio for an Unreal Engine (UE5) gameplay / tools / systems developer with an "Apple‑like" minimal aesthetic.

## Current Features
* Hero + Showreel (lazy loaded videos scaffold)
* Project cards (JSON driven)
* Tech / Tool stack section
* Expertise highlights (GAS, Networking, Performance)
* Contact section + social links (Mail, LinkedIn, GitHub)
* Floating Contact CTA
* Dark / Light theme (persisted via localStorage)
* Bilingual i18n (EN default, TR optional) with instant reactive switch
* SEO meta (OG/Twitter, canonical, JSON‑LD Person schema)
* Sitemap & robots.txt
* Lighthouse CI workflow
* GitHub Pages friendly static build

## Environment
Node.js 20 LTS recommended. `.nvmrc` present at repo root.
Windows (nvm-windows):
```powershell
nvm install 20
nvm use 20
```
Alternative: download the LTS installer from https://nodejs.org

## Development
```powershell
npm install
npm run dev
```
Open: http://localhost:5173

## Build
```powershell
npm run build
```
Result goes to `dist/` (deployable to GitHub Pages).

## Deployment (GitHub Pages Project Site)
Public URL: https://blntunlan.github.io/MyWebsite/

`vite.config.ts` sets `base` to `/MyWebsite/` only in CI so local dev still uses `/`.

Initial push (if repo not yet initialized):
```powershell
git init
git add .
git commit -m "feat: initial"
git branch -M main
git remote add origin https://github.com/blntunlan/MyWebsite.git
git push -u origin main
```
After each push to `main`, the "Deploy Website" GitHub Action builds and publishes.

Verification checklist:
* Deploy workflow green
* Page loads without 404s for CSS/JS assets

Troubleshooting:
* 404 assets: check `base` path in build logs
* Changes not showing: hard refresh (Ctrl+Shift+R) or different browser / clear cache
* Failed workflow: inspect logs for the first error stack

## Content Editing
Update JSON files under `content/`. Extend or add fields as needed; you may add TypeScript interfaces for stronger typing of imported JSON.

## Roadmap / Next Ideas
* Project detail pages (modal or route)
* MDX blog / technical articles
* Analytics (Plausible or Umami)
* Real video assets + generated poster thumbnails (FFmpeg helper script)
* Additional structured data (Project schema per item)
* Performance: font subsetting & image optimization

## License
Personal use.
