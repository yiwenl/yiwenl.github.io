# GitHub Pages deployment

This repository is a Next.js app deployed to GitHub Pages via **GitHub Actions**. There is no manual copy step: pushing to **`main` or `master`** (whichever is your default production branch) builds a static export and publishes it automatically.

## How it works

1. **Workflow**: [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs on pushes and pull requests targeting `main` or `master`, and can be run manually (**Actions → Deploy to GitHub Pages → Run workflow**).

2. **Build**: `npm ci` and `npm run export` run at the repository root. Output is written to the `out/` directory (gitignored).

3. **Publish**: The workflow uploads `out/` as a Pages artifact and deploys it. Pull requests only run the build job; **deploy runs for pushes to `main` or `master`, and for `workflow_dispatch` on those branches.**

4. **Next.js**: [next.config.js](next.config.js) uses `output: 'export'`, `trailingSlash: true`, and `images: { unoptimized: true }` for static export compatibility.

## Repository settings

Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”). Do not commit the contents of `out/` to the repo.

## Local development

```bash
npm install
npm run dev
```

## Local production preview

```bash
npm run export
```

Then serve `out/` with any static file server, for example:

```bash
npx serve out
```

```bash
python -m http.server 8000 --directory out
```
