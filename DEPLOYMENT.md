# Deployment Guide for J. Vale Author

## Step 1: Push to GitHub

1. **Create a GitHub account** (if you don't have one):
   - Go to https://github.com and sign up

2. **Create a new repository**:
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name it: `jvale-author`
   - Keep it Public or Private (your choice)
   - DON'T initialize with README (we already have one)
   - Click "Create repository"

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/jvale-author.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

1. **Create a Vercel account**:
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Import your project**:
   - Click "Add New Project"
   - Import your `jvale-author` repository
   - Vercel will auto-detect it's a Next.js project
   - Click "Deploy"

3. **Your site will be live** at:
   - `https://jvale-author.vercel.app`
   - You can add a custom domain later

## Step 3: Add Your Book Images

Before or after deployment, add your images:

1. **Save these images in `/public/images/`**:
   - `marked-by-moonfire-cover.jpg` - Your first book cover
   - `shattered-world-cover.jpg` - Your second book cover  
   - `author-photo.jpg` - Your author photo

2. **Update the code** to use actual images instead of placeholders

3. **Push changes** to GitHub:
   ```bash
   git add .
   git commit -m "Add book cover images"
   git push
   ```

Vercel will automatically redeploy with your new images!

## Custom Domain (Optional)

1. Buy a domain (e.g., jvale.com) from:
   - Namecheap, GoDaddy, or Google Domains

2. In Vercel:
   - Go to your project settings
   - Click "Domains"
   - Add your custom domain
   - Follow Vercel's DNS configuration instructions

## Environment Variables (For Newsletter)

When you're ready to add newsletter functionality:

1. In Vercel dashboard:
   - Go to Settings → Environment Variables
   - Add your email service API keys
   - They'll be securely stored and used in production