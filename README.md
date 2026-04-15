# Portfolio — Data Scientist

A clean, modern data science portfolio built with plain HTML/CSS/JS.
No build tools, no frameworks — just files. Deploy anywhere.

---

## File Structure

```
portfolio/
├── index.html      ← Main portfolio page
├── article.html    ← Article reader (used for all articles)
├── articles.js     ← ⭐ YOUR ARTICLES LIVE HERE
└── README.md
```

---

## Deploying to GitHub Pages

1. **Create a new repository** on GitHub (e.g., `yourusername.github.io`)

2. **Upload all files** — drag and drop the files into the repo, or:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io
   cp -r portfolio/* yourusername.github.io/
   cd yourusername.github.io
   git add .
   git commit -m "Initial portfolio"
   git push
   ```

3. **Enable GitHub Pages**:
   - Go to your repo → Settings → Pages
   - Source: "Deploy from a branch" → Branch: `main` → folder: `/ (root)`
   - Click Save

4. **Your site is live** at `https://yourusername.github.io` (takes ~1 minute)

---

## Customising the Portfolio

### Personal info
Search for `✏️ CUSTOMIZE` comments in `index.html` — they mark every place
that needs your personal details (name, bio, stats, projects, contact info).

### Adding a new article

Open `articles.js` and add a new object to the **top** of the `ARTICLES` array:

```javascript
{
  slug: "my-new-article",        // URL slug, no spaces
  title: "My Article Title",
  date: "2025-03-20",            // YYYY-MM-DD
  category: "Machine Learning",  // See categories in articles.js header
  tags: ["python", "sklearn"],
  readTime: "6 min",
  summary: "One-line preview shown on the listing page.",
  content: `
    <p>Your article body in HTML.</p>
    <h2>Section heading</h2>
    <p>More content...</p>
    <pre><code>your_code()</code></pre>
  `
},
```

That's it — save the file and push to GitHub. The article appears automatically.

### Updating an existing article
Find the object in `ARTICLES` array by its `slug`, edit any field, save and push.

### Removing an article
Delete the corresponding object from the `ARTICLES` array.

---

## Contact form

The contact form uses [Formspree](https://formspree.io) (free tier available):

1. Sign up at formspree.io
2. Create a new form → copy your form ID
3. In `index.html`, replace `YOUR_FORM_ID` in the form's `action` attribute:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## Replacing the placeholder photo

In `index.html`, find the About section and replace:
```html
<div class="photo-placeholder">...</div>
```
with:
```html
<img src="photo.jpg" alt="Your Name" style="width:100%;height:100%;object-fit:cover">
```

Then add your photo file to the repo.

---

## Custom domain

In your GitHub Pages settings, add a custom domain (e.g., `yourname.dev`).
Then add a `CNAME` file to the repo containing just your domain:
```
yourname.dev
```
