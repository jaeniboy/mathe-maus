# mathe-maus

Simple math game for kids built as a Progressive Web App (PWA).

**Live:** https://jaeniboy.github.io/mathe-maus/

## Tech Stack

- **React** – UI framework
- **Vite** – fast build tool and dev server
- **vite-plugin-pwa** – PWA support (Web App Manifest + Service Worker)
- **GitHub Pages** – static hosting

## Features

- Hello World component as a starting point
- Installable as a PWA on desktop and mobile
- Offline-capable via auto-generated service worker
- Automatic deployment to GitHub Pages on every push to `main`

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173/mathe-maus/ in your browser.

### Build for Production

```bash
npm run build
```

The output is placed in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Hosting on GitHub Pages

### One-time Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to **Settings → Pages**
   - Under *Source*, select **GitHub Actions**

2. **Push to `main`** – the included GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy the app to GitHub Pages.

### How It Works

The workflow (`.github/workflows/deploy.yml`):

1. Runs `npm ci` to install dependencies
2. Runs `npm run build` to produce a production build in `dist/`
3. Uploads the `dist/` folder as a GitHub Pages artifact
4. Deploys the artifact to the `github-pages` environment

The `vite.config.js` sets `base: '/mathe-maus/'` so all asset paths match the GitHub Pages URL (`https://<username>.github.io/mathe-maus/`).

### Installing as a PWA

Once the app is deployed, visit the live URL in Chrome or Edge. A browser prompt will offer to install it to your home screen / desktop. On mobile browsers, use the **Add to Home Screen** option in the share menu.
