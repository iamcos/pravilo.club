# GitHub Pages Deployment Guide

## Fixed Issues

The following issues have been resolved to make your site work properly on GitHub Pages:

### 1. Astro Configuration
- **Fixed**: Updated `astro.config.mjs` to use the correct site URL (`https://pravilo.club`)
- **Removed**: Incorrect `base` path that was causing routing issues
- **Result**: Site now builds correctly for root domain deployment

### 2. GitHub Actions Workflow
- **Added**: `.github/workflows/deploy.yml` for automated deployment
- **Features**: 
  - Builds on every push to `main` branch
  - Uses Node.js 20 with npm caching
  - Deploys to GitHub Pages automatically
  - Proper permissions for Pages deployment

### 3. Custom Domain Setup
- **Added**: `public/CNAME` file with `pravilo.club`
- **Added**: `public/.nojekyll` file to disable Jekyll processing
- **Result**: Custom domain will work correctly

## Next Steps

### 1. Enable GitHub Pages
1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The deployment workflow will run automatically

### 2. Configure Custom Domain
1. In GitHub Pages settings, add your custom domain: `pravilo.club`
2. Make sure your DNS is pointing to GitHub Pages:
   - Add a CNAME record: `pravilo.club` → `yourusername.github.io`
   - Or use A records pointing to GitHub's IP addresses

### 3. Verify Deployment
- Check the Actions tab in your repository to see deployment status
- Visit `https://pravilo.club` once DNS propagates (can take up to 24 hours)

## Build Commands

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview locally
npm run preview
```

## File Structure
```
dist/
├── CNAME              # Custom domain configuration
├── .nojekyll          # Disable Jekyll processing
├── index.html         # Root redirect to /ru/
├── en/                # English pages
├── ru/                # Russian pages (default)
├── zh/                # Chinese pages
└── assets/            # CSS and other assets
```

## Troubleshooting

If deployment still fails:
1. Check the Actions tab for error messages
2. Ensure all files are committed and pushed to `main` branch
3. Verify GitHub Pages is enabled in repository settings
4. Check that the custom domain DNS is properly configured
