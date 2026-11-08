# Film & photography portfolio

A small static portfolio starter for GitHub Pages. No build step, framework or package manager required.

## Included

- `index.html` — landing page
- `projects.html` — project archive with category filters
- `about.html` — biography and working approach
- `contact.html` — email and social links
- `assets/css/styles.css` — responsive visual system
- `assets/js/main.js` — mobile navigation, current year and project filters
- `assets/images/` — add your own image files here

## Before publishing

1. Replace `Your Name`, `YN`, the Copenhagen/location text, sample project names and descriptions.
2. Replace `hello@example.com` and the social profile URLs in `contact.html`.
3. Add your own images using the exact filenames referenced by the HTML:
   - `assets/images/hero.jpg`
   - `assets/images/about.jpg`
   - `assets/images/projects/project-01.jpg` through `project-04.jpg`
4. Update page titles and meta descriptions for your name and work.
5. Test every page and link on desktop and mobile.

The supplied image paths are intentional placeholders. Until you add images, those areas will appear empty/broken.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `portfolio`.
2. Upload the contents of this folder to the repository root (so `index.html` is at the root).
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the Pages URL to appear. A custom domain can be added in the same Pages settings.

If you use a repository named `yourname.github.io`, the site can be served from the root account URL. For a normal repository, the URL includes the repository name.

## Folder structure

```text
portfolio/
├── index.html
├── projects.html
├── about.html
├── contact.html
├── README.md
├── .nojekyll
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── images/
        ├── hero.jpg
        ├── about.jpg
        └── projects/
            ├── project-01.jpg
            ├── project-02.jpg
            ├── project-03.jpg
            └── project-04.jpg
```

## Image and performance notes

- Export photographs as WebP or AVIF where practical. Keep a JPEG fallback if you need maximum compatibility or want the simplest workflow.
- Resize images to their actual display needs. A 2500–3500px long edge is usually ample for a large hero; project thumbnails often need much less.
- Compress before committing. Aim for roughly 150–400 KB for typical portfolio images, and keep unusually large hero images under control.
- For video, use a poster image and embed a Vimeo/YouTube player or a compressed, short MP4 only when it adds value. Avoid autoplaying large background videos on mobile.
- Add `loading="lazy"` to below-the-fold images. Keep `fetchpriority="high"` on the main hero image only.
- Use descriptive filenames and useful `alt` text. If an image is purely decorative, use `alt=""`.
- Keep the site lightweight: no framework is necessary for four static pages. The small JS file is only for optional interactions.
- Consider a custom domain, favicon, Open Graph image and a privacy-friendly analytics option if you need visitor stats.

## Design notes

The visual direction is cinematic and editorial: charcoal backgrounds, soft ivory type, a restrained warm accent, large image-led compositions, asymmetrical project layouts and a mix of sans-serif and serif typography. Motion is limited to quiet entrance transitions and image hover details, with reduced-motion preferences respected. Change the CSS variables at the top of `styles.css` to adjust the palette and spacing. The Google Fonts are optional; system fallbacks are included.
