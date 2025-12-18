# Deployment Instructions

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy this Next.js website:

1. **Create a GitHub repository** (if you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Raymond's Piano Website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain** (optional):
   - In Vercel dashboard, go to Settings > Domains
   - Add your custom domain (e.g., raymondpiano.com)
   - Follow DNS configuration instructions

## Alternative: Deploy to Netlify

1. **Create a GitHub repository** (same as above)

2. **Deploy to Netlify**:
   - Go to https://netlify.com
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub and select your repository
   - Build settings:
     - Build command: `pnpm build`
     - Publish directory: `.next`
   - Click "Deploy site"

## Alternative: Deploy to GitHub Pages (Static Export)

1. **Configure for static export**:
   
   Edit `next.config.ts`:
   ```typescript
   import type { NextConfig } from "next";

   const nextConfig: NextConfig = {
     output: 'export',
     basePath: '/raymond-piano-website',
     images: {
       unoptimized: true,
     },
   };

   export default nextConfig;
   ```

2. **Build and export**:
   ```bash
   pnpm build
   ```

3. **Deploy to GitHub Pages**:
   - Push the `out` folder to `gh-pages` branch
   - Enable GitHub Pages in repository settings
   - Set source to `gh-pages` branch

## Environment Variables

No environment variables are required for the basic setup. If you add features like analytics or contact forms, you may need to add them in your hosting platform's dashboard.

## Post-Deployment Checklist

- [ ] Test all three video category pages (solo, duet, concerto)
- [ ] Verify YouTube videos load correctly
- [ ] Test responsive design on mobile devices
- [ ] Check page load speed
- [ ] Set up custom domain (optional)
- [ ] Add Google Analytics (optional)
- [ ] Submit to search engines (optional)

## Updating the Live Site

After making changes:

1. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```

2. Vercel/Netlify will automatically rebuild and deploy

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Netlify: https://docs.netlify.com
- Next.js: https://nextjs.org/docs
