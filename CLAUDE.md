# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment Setup

Node.js must be activated via fnm before running any npm commands:

```bash
export PATH="/home/jdiveley/.local/share/fnm:$PATH" && eval "$(fnm env --shell bash)" && fnm use 22
```

## Commands

```bash
npm run dev        # Dev server (localhost, port 5173)
npm run build      # Production build → dist/
npm run preview    # Serve dist/ locally
```

Dev server is configured to bind to `0.0.0.0` and allow `beyondalphagal.org` and `www.beyondalphagal.org` as hosts (`vite.config.js`).

## PM2 (Production)

```bash
pm2 start ecosystem.config.js   # Start production (vite preview, port 5173)
pm2 start ecosystem.config.cjs  # Start dev server via PM2
pm2 save                        # Persist process list across reboots
```

## Architecture

**Entry:** `src/main.jsx` wraps the app in `BrowserRouter` → `src/App.jsx` defines all routes.

**Layout:** Every page is wrapped by `<Navbar>` + `<main>` + `<Footer>`. Navbar links are defined as a static array in `src/components/Navbar.jsx` — add new routes there when adding pages.

**Pages** (`src/pages/`): Each page is a self-contained component with a co-located CSS Module (e.g. `Recipes.jsx` + `Recipes.module.css`). Most pages use the shared `<PageHero>` component for their top banner.

**Shared components** (`src/components/`): `Navbar`, `Footer`, `PageHero`. `PageHero` accepts `title`, `subtitle`, and `icon` (lucide-react icon component) props.

**Styling:** CSS Modules throughout. Global resets/variables in `src/index.css`. `InfoPage.module.css` is a shared stylesheet used by several content pages (History, Symptoms, Treatments, FoodsToAvoid, SafeFoods).

**Data:** Page content (recipes, stats, timeline entries, etc.) is defined as static arrays/objects directly inside each page component — there is no external data layer or API.

**Icons:** lucide-react only.

## Adding a New Page

1. Create `src/pages/MyPage.jsx` and `src/pages/MyPage.module.css`
2. Add route to `src/App.jsx`
3. Add nav link entry to the `links` array in `src/components/Navbar.jsx`
4. Add card to the `cards` array in `src/pages/Home.jsx` if it should appear on the home grid
