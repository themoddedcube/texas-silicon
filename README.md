# Texas Silicon — Website

Marketing site for **Texas Silicon**, a student-led chip design team in Austin, Texas.

Built with Next.js 15 (App Router), React 19, and Tailwind CSS 4, exported as static HTML (`output: "export"`).

## Develop

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build   # static site in out/
```

## Deploy (GitHub Pages)

`.github/workflows/pages.yml` builds on every push to `main` and publishes `out/` to GitHub Pages.
In the repo settings, set **Pages → Source** to **GitHub Actions**. The workflow sets
`NEXT_PUBLIC_BASE_PATH` from the Pages config, so the site works under `/<repo>/`.

## Brand rules

Texas Silicon is not affiliated with The University of Texas at Austin. Don't use UT marks:
no "Longhorn(s)", no longhorn silhouette, no Hook 'em hand sign, and no burnt orange.
