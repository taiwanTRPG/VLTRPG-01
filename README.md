# VirtualLiveTRPG 線上推廣企劃

Full mirror of the Canva-designed promo site
([原網址](https://vltrpg.my.canva.site/virtuallivetrpg)) deployable as
GitHub Pages.

Animations, fonts, hash-routed slide navigation, and every internal /
external link are preserved exactly as the Canva runtime renders them.

## Layout

- `index.html` — original Canva-exported HTML, `<base href>` patched to
  `./` so the bundle works at any deploy path.
- `_assets/` — Canva runtime: JS bundles, CSS, fonts, media (≈ 33 MB).
- `_footer/index.html` — the static "Made with Canva" footer fragment
  (served at `/_footer?lang=zh-TW` thanks to directory-style routing).
- `.nojekyll` — disables Jekyll on GitHub Pages so `_`-prefixed paths
  are served as-is.

## Deploying

1. Push `main` to GitHub (already done).
2. Repo Settings → Pages → Source: `Deploy from a branch` → Branch:
   `main` / `/ (root)`.
3. Site goes live at `https://taiwantrpg.github.io/VLTRPG-01/`.

## Rebuilding from the live Canva site

```powershell
python _canva_raw/mirror_discover.py   # walk every slide, log every URL
python _canva_raw/mirror_download.py   # download all 161 assets
# Then patch index.html's <base href> back to "./"
```
