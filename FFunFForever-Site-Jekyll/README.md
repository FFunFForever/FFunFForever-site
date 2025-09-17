# FFunFForever — Jekyll Site

This repo is a **GitHub Pages + Jekyll** version of the FFunFForever site.

## 🚀 Deploy

1. Push to a GitHub repo (e.g. `FFunFForever-Site-Jekyll`).
2. Go to **Settings → Pages → Build and deployment**:
   - Source: **Deploy from branch**
   - Branch: `main` (or `master`), Folder: `/root`
3. Save. GitHub will build the Jekyll site automatically.

Your site URL will look like:
`https://<username>.github.io/FFunFForever-Site-Jekyll/`

## ✍️ Writing posts

- Add Markdown files to `/_posts/` in the format: `YYYY-MM-DD-title.md`
- Include front matter at the top:
  ```yaml
  ---
  layout: post
  title: "My Post Title"
  date: 2025-09-17
  tags: [tag1, tag2]
  ---
  ```

## 🖼 Assets

Replace placeholders under `/assets/` with your final logos and textures.

## 🛠 Custom domain (optional)
Add a `CNAME` file with your domain (`ffunfforever.com` or similar), then point DNS to GitHub Pages.
