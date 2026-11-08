# Film & photography portfolio

Portfolio for Daneholm Production, showcasing projects and work, available packages and services with a bit about who I am and why I could be a right fit for your upcoming video needs.

## Included

- `index.html` — landing page
- `projects.html` — project archive with category filters
- `about.html` — biography and working approach
- `contact.html` — email and social links
- `assets/css/styles.css` — responsive visual system
- `assets/js/main.js` — mobile navigation, current year and project filters
- `assets/images/` — add your own image files here

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
