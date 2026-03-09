# KAG Church Site

A React + Vite website for Kenya Assemblies of God (KAG) church content, including:
- Homepage with ministry highlights and service times
- About, Contact, Ministers, and Gallery pages
- Embedded YouTube sermon/gallery videos via modal player
- Responsive layout with animated section reveal effects

## Tech Stack

- React 19
- React Router 7
- Vite 8
- ESLint 9 (flat config)

## Routes

- `/` - Home
- `/about-us` - About
- `/contact-us` - Contact
- `/ministers` - Ministers
- `/gallery` - Gallery
- Redirects
- `/about` -> `/about-us`
- `/contact` -> `/contact-us`
- `/pastor` -> `/ministers`

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- npm

### Install and Run

```bash
npm install
npm run dev
```

Default local URL: `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build production assets to `dist/`
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```text
src/
  components/
  pages/
  App.jsx
  App.css
  index.css
  main.jsx
public/
  walkdown.mp4
Images/
  KAG-LOGO.webp
  logo.png
```

## Content Editing Guide

- Home page content (services, ministries, sermon cards): `src/pages/HomePage.jsx`
- About page text and values: `src/pages/AboutPage.jsx`
- Contact details and form layout: `src/pages/ContactPage.jsx`
- Ministers and milestones data: `src/pages/PastorPage.jsx`
- Gallery video list: `src/pages/GalleryPage.jsx`

## Media Notes

- Hero video sources are defined in `src/components/HeroSection.jsx`.
- The app currently includes `public/walkdown.mp4`.
- If you want a custom primary hero video, add `public/church-hero.mp4`.

## Build for Production

```bash
npm run build
npm run preview
```
