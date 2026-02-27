# Teatime Treasures — Landing Page

A calm, faith-rooted landing page built for GitHub Pages.
Designed to capture email subscribers and direct visitors to the Quiet Time Library.

---

## 📁 File Structure

```
teatime-treasures/
├── index.html       ← Main page
├── styles.css       ← All styles
├── script.js        ← Form handling & scroll animations
├── favicon.ico      ← Add your own icon here
└── README.md        ← This file
```

---

## 🚀 Deploy to GitHub Pages

1. **Create a GitHub repository** — name it `teatime-treasures` (or anything you like).
2. **Upload all files** — drag and drop or use `git push`.
3. **Enable GitHub Pages:**
   - Go to your repository → **Settings** → **Pages**
   - Under *Source*, select `main` branch and `/ (root)` folder
   - Click **Save**
4. **Your live URL** will be: `https://yourusername.github.io/teatime-treasures`

> Allow 1–2 minutes for the page to go live after first deployment.

---

## 📬 Connect Formspree (Email Form)

Formspree lets you receive form submissions without a backend — perfect for GitHub Pages.

### Steps:

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Click **+ New Form** and name it something like `Teatime Quiet Time Signup`.
3. Copy your **Form ID** (looks like `xabc1234`).
4. Open `index.html` and find this line:
   ```html
   <form action="https://formspree.io/f/YOUR_ID"
   ```
5. Replace `YOUR_ID` with your actual Formspree form ID:
   ```html
   <form action="https://formspree.io/f/xabc1234"
   ```
6. Save and redeploy.

> First submission will ask you to verify your email in Formspree.

---

## 🔗 Change the Quiet Time Redirect URL

After form submission, visitors are redirected to your Quiet Time page.

1. Open `script.js`
2. Find this line near the top:
   ```js
   const REDIRECT_URL = 'QUIET_TIME_URL_PLACEHOLDER';
   ```
3. Replace the placeholder with your actual URL:
   ```js
   const REDIRECT_URL = 'https://payhip.com/b/your-quiet-time-page';
   ```
4. Save and redeploy.

---

## 🖼️ Replace the Hero Image

The hero currently uses an Unsplash image hosted remotely. To use your own image:

1. Add your image file to the project root — e.g. `hero.jpg`
2. Open `styles.css` and find:
   ```css
   background-image: url('https://images.unsplash.com/...');
   ```
3. Replace it with:
   ```css
   background-image: url('hero.jpg');
   ```
4. Save and redeploy.

> Recommended: compress your image to under 400KB using [Squoosh](https://squoosh.app) before uploading.

---

## ✏️ Where to Edit Text

All visible text lives in `index.html`. Here is a quick map:

| What to change               | Search for in index.html            |
|------------------------------|-------------------------------------|
| Hero headline                | `A quieter way`                     |
| Hero subtext                 | `faith-rooted space`                |
| Empathy strip lines          | `If your mind feels tired`          |
| Offers bullets               | `Scripture-led encouragement`       |
| Form title                   | `Get the Free Quiet Time Library`   |
| Form dropdown options        | `<option value="Peace">`            |
| STILL Method text            | `STILL™ Method`                     |
| Footer quote                 | `You don't need to change`          |
| Shop / Coffee / Linktree URLs| Look for `payhip.com`, `buymeacoffee`, `linktr.ee` |

---

## 🎨 Customize Colors & Fonts

Open `styles.css` and edit the CSS variables at the top:

```css
:root {
  --cream:       #faf7f2;   /* Page background */
  --sage:        #9aaa8e;   /* Button & accent color */
  --text:        #3a3228;   /* Main body text */
  /* ... */
}
```

Fonts are loaded from Google Fonts:
- **Headings:** Cormorant Garamond (serif)
- **Body:** Jost (sans-serif)

To swap fonts, update the Google Fonts link in `<head>` and the `--font-serif` / `--font-sans` variables.

---

## 🔍 SEO & Social Sharing

Update the following inside `<head>` in `index.html`:

```html
<meta property="og:url" content="https://yourdomain.github.io" />
<meta property="og:image" content="YOUR_SHARE_IMAGE_URL" />
```

Replace with your actual deployed URL and a 1200×630px preview image.

---

## 📋 Checklist Before Going Live

- [ ] Formspree ID replaced in `index.html`
- [ ] Redirect URL set in `script.js`
- [ ] Hero image looks good on mobile
- [ ] All external links tested (Payhip, Buy Me a Coffee, Linktree)
- [ ] OG image URL updated for social sharing
- [ ] Favicon added (`favicon.ico`)
- [ ] Test form submission end-to-end

---

*Built with care for Teatime Treasures. May it bring peace to every visitor.*
