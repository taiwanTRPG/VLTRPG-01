# VirtualLiveTRPG 線上推廣企劃

Static mirror of the Canva-designed promo site
([原網址](https://vltrpg.my.canva.site/virtuallivetrpg)) deployable as
GitHub Pages.

## Layout

- `index.html` — single-file site with hash routing (`#page-1`, `#page-2`, …)
- `assets/style.css` — layout, responsive scaling, hotspot styling
- `assets/app.js` — hash router, keyboard / pager navigation
- `slides/*.webp` — 33 slide images (1366×768 @ 2x DPR, WebP q=90)
- `.nojekyll` — disables Jekyll on GitHub Pages

Each slide is a `<section>` containing the slide image plus absolute-positioned
`<a class="hotspot">` overlays for every clickable element on that slide
(internal page links + external links to game publishers, social media, etc.).
Positions are percentage-based so the layout stays accurate at any viewport size.

## Navigation

- Click the slide buttons (the green pill CTAs) to jump between pages
- Top bar links jump to the three top-level pages
- Footer pager (‹ ›) or keyboard arrows / PageUp / PageDown move sequentially

## Rebuilding from source

The site is generated from a Playwright snapshot of the live Canva page.
Source scripts live in `_canva_raw/` (gitignored).

```powershell
python _canva_raw/snapshot_all.py   # snapshot every slide
python _canva_raw/build_site.py     # generate index.html + assets
python _canva_raw/optimize.py       # PNG -> WebP
```
