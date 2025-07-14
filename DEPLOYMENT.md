# GitHub Pages Deployment

This repository is configured to deploy the `wensday2` Next.js project to GitHub Pages.

## How it works

1. **GitHub Actions Workflow**: The `.github/workflows/deploy.yml` file automatically builds and deploys your site when you push to the main branch.

2. **Build Process**: 
   - The workflow runs `npm run export` in the `wensday2` directory
   - This creates static files in the `wensday2/out` directory
   - GitHub Pages serves these static files

3. **Configuration**: The `wensday2/next.config.js` is configured with:
   - `output: 'export'` - Generates static files
   - `trailingSlash: true` - Adds trailing slashes to URLs
   - `images: { unoptimized: true }` - Disables image optimization for static export

## Local Development

To test the build locally:

```bash
cd wensday2
npm install
npm run export
```

Then serve the `out` directory with a static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve out

# Using PHP
php -S localhost:8000 -t out
```

## Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   cd wensday2
   npm run export
   ```

2. Copy the contents of `wensday2/out` to your GitHub Pages source directory (usually the root or `/docs`)

## GitHub Pages Settings

Make sure your GitHub Pages settings are configured to:
- Source: "GitHub Actions" (this will use the workflow we created)
- Or if using manual deployment: Source: "Deploy from a branch" → select your branch and set the folder to `/docs` or root

The workflow will automatically handle the deployment process. 