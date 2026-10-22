# MyBlog

A simple one page blog website made with plain **HTML, CSS and JavaScript**.
No frameworks and no build tools, just open `index.html` in your browser.

## Features

- One page site with Home, About, Gallery and Contact sections
- Responsive design that works on phones, tablets and computers
- Mobile menu button for small screens
- Blog post cards generated from a JavaScript array
- Gallery with category filter (All, Nature, City, People)
- Lightbox to open a picture bigger
- Contact form with simple JavaScript validation
- Smooth scrolling and active link highlight
- Dark mode / light mode button
- Back to top button
- All images are local SVG files, so the site works offline

## Project structure

```
blog/
├── index.html      # the whole page (all sections)
├── css/
│   └── style.css   # all the styling
├── js/
│   └── main.js     # menu, posts, gallery, form, theme
└── assets/         # SVG pictures used on the site
```

## How to run it

Double click `index.html`, or use a small local server:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.


