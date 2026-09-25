# Vercel Deployment Guide for Aryan Sharma Portfolio

Your portfolio is fully configured and optimized for zero-config **Vercel** deployment.

---

## Method 1: Deploy via Vercel Dashboard (Recommended & Easiest)

1. **Push your code to your GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "feat: Aryan Sharma portfolio with CultPulse #1 and live project links"
   git branch -M main
   git remote add origin https://github.com/Aryaa1704/aryan-portfolio.git # (or your repo name)
   git push -u origin main
   ```

2. **Open Vercel**:
   - Go to [https://vercel.com/new](https://vercel.com/new)
   - Click **"Continue with GitHub"** and select your portfolio repository.

3. **Deploy Settings**:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
   *(Vercel automatically detects these from `package.json` and `vercel.json`)*

4. Click **Deploy**!
   Your portfolio will be live at `https://your-project.vercel.app` in under 60 seconds.

---

## Method 2: Deploy directly with Vercel CLI (Instant from terminal)

If you have Node.js installed on your machine:

```bash
# 1. Install Vercel CLI (one-time)
npm i -g vercel

# 2. Login to your Vercel account
vercel login

# 3. Deploy preview
vercel

# 4. Deploy to production
vercel --prod
```

---

## What is already pre-configured for Vercel:
- **`vercel.json`**: SPA rewrite rules for instant client-side routing without 404 errors on page reload.
- **Asset caching headers**: Production asset optimization for sub-second CDN delivery.
- **Vite build pipeline**: Pristine TypeScript compilation with asset minification and tree-shaking.
