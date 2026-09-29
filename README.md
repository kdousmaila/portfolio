# Maila Kdous — Portfolio (React)

A React + Vite version of the portfolio, split into components so it's easy to edit.

## Getting started

You need [Node.js](https://nodejs.org) (18+) installed.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build a production version (a `dist/` folder you can deploy anywhere, e.g. Vercel/Netlify):

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  data.js                 → all text content (roles, education, experience, skills)
  App.jsx                 → assembles every section
  App.css                 → all styles
  assets/                 → photo, CV, Planora video, project screenshots
  components/
    Header.jsx             → nav bar, scroll-spy, mobile menu
    Hero.jsx                → typing effect + "currently working with" tags
    About.jsx               → rotating gold ring photo + stats
    Education.jsx
    Experience.jsx
    Skills.jsx               → auto-scrolling Stack & Tools carousel
    Projects.jsx             → project cards, auto-cycling galleries, lightbox
    Contact.jsx              → contact form
    Footer.jsx
    Reveal.jsx               → scroll reveal-on-view wrapper
    Counter.jsx              → animated number counters
    BackgroundIcons.jsx      → faint decorative tech icons
    Preloader.jsx            → loading screen on first paint
```

## Editing content

Most text (education, experience, skills, hero tags) lives in `src/data.js` —
edit that file first for content changes.

Project cards, contact info and images are directly inside their component files
in `src/components/`.

## Deploying

This is a static site after `npm run build` (output in `dist/`). You can drag-and-drop
the `dist/` folder onto [Vercel](https://vercel.com) or [Netlify](https://netlify.com),
or run `npx vercel` / `npx netlify deploy` from this folder.
