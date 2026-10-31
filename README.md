# Abdul Rauf Kaka — Portfolio

Personal portfolio built with React (Vite), Tailwind CSS v4, GSAP, Lenis and React Router.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── App.jsx                 # Layout + routes
├── main.jsx                # Entry point (BrowserRouter)
├── index.css               # Tailwind theme, fonts, global styles
├── data/portfolio.js       # ALL content: bio, stack, projects, links
├── hooks/useSmoothScroll.js
├── components/
│   ├── layout/             # Navbar, Footer, Preloader, ParticleBackground, ScrollProgress, StickyEmail
│   └── ui/                 # Button, SectionTitle, ProjectThumbnail
├── sections/               # Hero, AboutMe, Skills, Projects
└── pages/                  # Home, ProjectDetails, NotFound
```

## Editing content

Everything shown on the site lives in `src/data/portfolio.js`:

- `SOCIAL_LINKS` – add your GitHub / LinkedIn URLs.
- `PROJECTS` – add `liveUrl` / `sourceUrl` to show buttons on the project page, and an
  `image` (e.g. `/projects/satintel.png` placed in `public/projects/`) to replace the generated cover.

## Deployment

Because the site uses client-side routing, configure your host to serve `index.html` for
all routes (Vercel and Netlify do this with a rewrite rule).
