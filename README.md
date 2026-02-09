# 🫖 Teatime Treasures - Website Documentation

A modern, elegant, and responsive website for Teatime Treasures - handmade crafts and devotionals.

## 📋 Table of Contents

- [Features](#features)
- [Design System](#design-system)
- [File Structure](#file-structure)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Customization Guide](#customization-guide)
- [SEO & Accessibility](#seo--accessibility)
- [Browser Support](#browser-support)

---

## ✨ Features

- **Fully Responsive**: Mobile-first design that looks perfect on all devices
- **Modern & Minimalist**: Clean aesthetic with intentional use of whitespace
- **Smooth Animations**: Subtle hover effects and scroll animations
- **Accessible**: WCAG 2.1 AA compliant with proper semantic HTML
- **Fast Loading**: Optimized CSS and vanilla JavaScript (no heavy frameworks)
- **SEO Optimized**: Proper meta tags, semantic structure, and fast performance
- **Easy to Customize**: Well-organized CSS variables and modular code

---

## 🎨 Design System

### Color Palette

The site uses a warm, craft-inspired color scheme that evokes comfort and trust:

```css
Primary Colors:
- Primary Brown: #8B6F47 (trust, earthiness)
- Primary Light: #A68A64
- Primary Dark: #6B5437

Accent Colors:
- Accent Tan: #D4A574 (warmth, comfort)
- Accent Light: #E8D5C4
- Accent Dark: #B8915F

Background Colors:
- Main: #FFFBF7 (warm off-white)
- Secondary: #F9F6F2 (light cream)
- Tertiary: #F5F1ED (soft beige)

Text Colors:
- Primary: #2C2416 (deep brown-black)
- Secondary: #5A4A3A (medium brown)
- Light: #7A6A5A (light brown-gray)
```

**Why These Colors?**
- Warm earth tones evoke handmade craftsmanship
- Soft, neutral backgrounds allow content to breathe
- High contrast ratios ensure readability (WCAG AA+)
- Colors feel inviting, like afternoon tea time

### Typography

**Display Font**: Cormorant Garamond (serif)
- Used for: Headlines, section titles, logo
- Weight: 300 (light), 400 (regular), 600 (semibold)
- Character: Elegant, refined, timeless

**Body Font**: Lora (serif)
- Used for: Body text, descriptions, UI elements
- Weight: 400 (regular), 500 (medium), 600 (semibold)
- Character: Readable, warm, literary

**Why These Fonts?**
- Both are refined serifs that evoke quality and craft
- Excellent readability at all sizes
- Free Google Fonts (no licensing concerns)
- Load quickly and render beautifully

### Responsive Breakpoints

```css
Mobile: 480px and below
Tablet: 481px to 768px
Desktop: 769px to 1024px
Wide: 1025px and above
```

### Spacing System

The site uses a consistent spacing scale:

```css
--space-xs: 0.5rem (8px)
--space-sm: 1rem (16px)
--space-md: 1.5rem (24px)
--space-lg: 2.5rem (40px)
--space-xl: 4rem (64px)
--space-xxl: 6rem (96px)
```

---

## 📁 File Structure

```
teatime-treasures/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
├── DEPLOYMENT.md       # Deployment guide
└── DESIGN-GUIDE.md     # Design system documentation
```

**Simple and GitHub Pages Ready!** Just upload these files to your repository.

---

## 🚀 GitHub Pages Deployment

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `teatime-treasures` (or your preferred name)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Via GitHub Web Interface (Easiest)**

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all your files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md` (optional)
3. Scroll down and click **Commit changes**

**Option B: Via Git Command Line**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit - Teatime Treasures website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/teatime-treasures.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, click **Settings**
2. Scroll down to **Pages** (in the left sidebar under "Code and automation")
3. Under **Source**, select **main** branch
4. Click **Save**
5. Wait 1-2 minutes for deployment

### Step 4: Access Your Live Site

Your site will be live at:
```
https://YOUR-USERNAME.github.io/teatime-treasures/
```

🎉 **That's it!** Your site is now live on the internet.

### Updating Your Site

Whenever you make changes:

**Via Web Interface:**
1. Navigate to the file in GitHub
2. Click the pencil icon (Edit)
3. Make changes
4. Scroll down and click **Commit changes**

**Via Git:**
```bash
git add .
git commit -m "Update description"
git push
```

Changes appear live in 1-2 minutes.

---

## 🎯 Customization Guide

### Changing Colors

All colors are defined in CSS variables at the top of `styles.css`:

```css
:root {
    --color-primary: #8B6F47;
    --color-accent: #D4A574;
    /* etc... */
}
```

**To change the color scheme:**
1. Open `styles.css`
2. Find the `:root` section (lines 1-30)
3. Replace hex color codes with your brand colors
4. Save and upload to GitHub

### Adding Your Logo

Replace the emoji logo (🫖) with your own:

**In `index.html`, find:**
```html
<span class="logo-icon">🫖</span>
```

**Replace with:**
```html
<img src="your-logo.png" alt="Teatime Treasures" class="logo-icon">
```

Then upload `your-logo.png` to your repository.

### Changing Fonts

**In `index.html`, find the Google Fonts link:**
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond..." rel="stylesheet">
```

**Browse fonts at**: [Google Fonts](https://fonts.google.com)

**Update CSS variables:**
```css
:root {
    --font-display: 'Your Display Font', serif;
    --font-body: 'Your Body Font', sans-serif;
}
```

### Adding Real Images

**Replace placeholder SVGs:**

1. In `index.html`, find sections with `<div class="image-placeholder">`
2. Replace entire div with:
```html
<img src="your-image.jpg" alt="Description" loading="lazy">
```
3. Upload images to your repository
4. Reference them in src attribute

**Pro Tip**: Optimize images before uploading:
- Use JPEG for photos (quality: 80-85%)
- Use PNG for graphics with transparency
- Resize images to display size (don't upload 4000px images!)
- Tools: [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)

### Modifying Content

All content is in `index.html`. To edit:

1. **Hero text**: Find `<section class="hero">`
2. **About section**: Find `<section class="about">`
3. **Products**: Find `<section class="products">`
4. **Contact info**: Find `<section class="contact">`

Simply edit the text between HTML tags and save.

---

## 🔍 SEO & Accessibility

### SEO Features Included

✅ **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`  
✅ **Meta Tags**: Title, description, keywords in `<head>`  
✅ **Alt Text**: Placeholder for all images (add descriptions when adding real images)  
✅ **Fast Loading**: Minimal dependencies, optimized CSS  
✅ **Mobile-First**: Responsive design = better Google rankings  
✅ **Clean URLs**: No query parameters or complex routing  

### Improving SEO Further

**1. Add More Meta Tags**

In `<head>` of `index.html`, add:

```html
<!-- Open Graph for social sharing -->
<meta property="og:title" content="Teatime Treasures - Handmade Crafts & Devotionals">
<meta property="og:description" content="Handcrafted treasures and heartfelt devotionals for your moments of rest">
<meta property="og:image" content="https://your-site.com/preview-image.jpg">
<meta property="og:url" content="https://your-site.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Teatime Treasures">
<meta name="twitter:description" content="Handmade crafts and devotionals">
<meta name="twitter:image" content="https://your-site.com/preview-image.jpg">
```

**2. Create a sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://your-username.github.io/teatime-treasures/</loc>
    <lastmod>2026-02-09</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

Save as `sitemap.xml` and upload to repository.

**3. Submit to Google**

- Go to [Google Search Console](https://search.google.com/search-console)
- Add your property
- Submit your sitemap

### Accessibility Features Included

✅ **Keyboard Navigation**: All interactive elements are keyboard accessible  
✅ **Focus Indicators**: Visible focus styles for keyboard users  
✅ **ARIA Labels**: Proper labels on buttons and links  
✅ **Color Contrast**: WCAG AA compliant (4.5:1 minimum for text)  
✅ **Semantic HTML**: Screen reader friendly structure  
✅ **Alt Text Ready**: Image placeholders include alt attributes  

### Accessibility Checklist

When adding content:
- [ ] All images have descriptive `alt` text
- [ ] Form inputs have associated `<label>` tags
- [ ] Links have descriptive text (avoid "click here")
- [ ] Color is not the only way to convey information
- [ ] Text can be resized to 200% without breaking layout
- [ ] Videos include captions (when added)

**Test Your Site**:
- [WAVE Web Accessibility Tool](https://wave.webaim.org)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🌐 Browser Support

**Fully Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

**Mobile Browsers:**
- iOS Safari 14+
- Chrome Mobile
- Samsung Internet

**Graceful Degradation:**
- Older browsers get basic functionality without animations
- Uses modern CSS (Grid, Flexbox, CSS Variables)
- No JavaScript required for core content (progressive enhancement)

---

## 📝 Making Form Submissions Work

Currently, forms show success messages but don't actually send data. To make them functional:

### Option 1: Formspree (Easiest, Free)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up (free for 50 submissions/month)
3. Create a new form
4. Copy your form endpoint
5. In `script.js`, add actual form submission:

```javascript
// Replace the success message section with:
fetch('https://formspree.io/f/YOUR-FORM-ID', {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
    headers: { 'Content-Type': 'application/json' }
})
.then(() => {
    showMessage('Thank you! We\'ll get back to you soon.', 'success');
    this.reset();
})
.catch(() => {
    showMessage('Oops! Something went wrong.', 'error');
});
```

### Option 2: Netlify Forms (If hosting on Netlify)

Add `netlify` attribute to your form tag:
```html
<form class="contact-form" name="contact" netlify>
```

### Option 3: Google Forms

Embed a Google Form or use the Google Forms API.

---

## 🆘 Troubleshooting

**Site not appearing after deployment?**
- Wait 2-5 minutes after enabling GitHub Pages
- Check Settings → Pages for the published URL
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)

**CSS not loading?**
- Check file names match exactly (case-sensitive)
- Verify `styles.css` is in the same folder as `index.html`

**Fonts not showing?**
- Check internet connection (Google Fonts require internet)
- Verify the Google Fonts link in `<head>` is correct

**Forms not working?**
- Follow "Making Form Submissions Work" section above
- Check browser console for errors (F12)

**Mobile menu not opening?**
- Check `script.js` is properly linked
- Look for JavaScript errors in console

---

## 📧 Support & Questions

If you need help:
1. Check this README first
2. Look for errors in browser console (F12 → Console tab)
3. Search the issue on [Stack Overflow](https://stackoverflow.com)
4. Check [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

## 📜 License

This template is free to use for your Teatime Treasures business. Feel free to customize, modify, and make it your own!

---

## 🎉 Next Steps

1. **Add Real Content**: Replace placeholder text with your story
2. **Add Images**: Upload product photos and replace SVG placeholders
3. **Set Up Forms**: Connect contact form to email service
4. **Custom Domain** (Optional): Connect your own domain name
5. **Analytics** (Optional): Add Google Analytics to track visitors
6. **E-commerce** (Optional): Integrate Shopify, Gumroad, or Etsy

---

**Built with ❤️ for Teatime Treasures**

*Pause. Reflect. Treasure.*
