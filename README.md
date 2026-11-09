# Independent Studio Portfolio

A responsive static website for an independent film and photography studio.

## Repository structure

```text
repository/
├── README.md
└── docs/
    ├── index.html
    ├── work/index.html
    ├── studio/index.html
    ├── contact/index.html
    └── assets/
        ├── css/styles.css
        ├── js/main.js
        ├── images/
        └── video/
```

## Publish with GitHub Pages

1. Upload this folder's contents to your GitHub repository.
2. Keep `README.md` in the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select your branch (usually `main`) and choose `/docs`.
5. Save and wait for deployment.

The site uses relative paths, so it works on GitHub Pages project URLs as well as custom domains.

## Replace the placeholders

This is a design-ready starter. The artwork and project names are placeholders, not representations of completed client work.

- Add your showreel as `docs/assets/video/showreel.mp4`. Use a compressed H.264 MP4, ideally under 15–20 MB. The homepage poster remains visible if no video is present.
- Replace the SVG artwork in `docs/assets/images/` with your own optimised images, then update the matching image paths in the HTML.
- Replace `STUDIO / 01` with your chosen studio name.
- Replace `hello@yourstudio.com` with your real email.
- Update the project titles, categories and descriptions with your actual work.
- Replace Copenhagen if you want a different base location.

Suggested image widths: 2000 px for the hero poster and 1400–2000 px for project images. Prefer WebP or optimised JPEG over camera originals.

## Design

Independent studio positioning; film and photography together; sport as one category rather than the whole identity. Responsive layout, subtle motion, reduced-motion support, accessible navigation and vanilla JavaScript. No build tools or frameworks required.
