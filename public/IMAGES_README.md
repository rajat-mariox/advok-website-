# Images for the website

- **Hero (first image):** Unchanged. It uses `lady-justice-hero.png` in `public/`. Do not replace it with tech-law imagery unless you want to change the main hero.
- **Small images:** Product blocks, problem section, and other smaller visuals use **similar web images** in the same style (neon/teal on dark, grid, digital tech) — from Pexels, each slot a different image.

## Hero (top of home page)

| File (in `public/`) | Where it appears |
|---------------------|------------------|
| **`lady-justice-hero.png`** | Full-width hero behind "Legal journey starts here." This is the main hero image; keep it as-is unless you intentionally want a different hero. |

If the hero file is missing, the site shows a dark gradient fallback.

## Small / product images (similar style from the web)

The **small** images (product blocks, problem section) use **different but similar** images from the web (Pexels): neon circuit/grid, teal/blue on dark, digital-tech look. Each slot has its own URL in `PRODUCT_IMAGES` in `src/config.js`. To change an image, replace the URL for that key with another in the same style (e.g. from a "scifi law" or "futuristic legal tech" search on Pexels or Unsplash).
