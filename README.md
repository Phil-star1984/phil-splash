# Phil Splash — Der Millionen Maler

Next.js landing page for **Phil Splash** · live iPad portraits projected onto facades or shown on mobile LED screens.

Live site target domain: `https://phil-splash.de`

## Develop

```bash
npm install
npm run dev
```

Optional calendar booking (only if a real Cal.com link exists):

```bash
NEXT_PUBLIC_CAL_URL=https://cal.com/YOUR_SLUG/discovery npm run dev
```

## Build

```bash
npm run build
npm start
```

## Structure

- `src/app` — Landing, Impressum, sitemap, metadata, JSON-LD
- `src/components` — Page sections
- `src/lib` — Content + schema
- `public/llms.txt` — AI / GEO source file
- `public/media` — Optimized web assets only
- `public/downloads` — Offer PDF

## Deploy

Connected to Vercel from this repository. Root directory is the app root (this folder).
