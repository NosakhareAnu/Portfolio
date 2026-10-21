# Nosakhare Festus-Olagbende — Portfolio

A professional portfolio for a Software Developer & Product Designer based in Texas. Built with React 19, React Router, Vite, plain CSS, and Lucide icons.

## Develop and verify

```powershell
npm ci
npm run dev
npm run lint
npm run build
npm run preview
```

The repository has no separate type-check or automated test script. Browser verification covers routes, mobile layouts, keyboard navigation, contact controls, and browser history.

## Design

The October 2026 redesign keeps the warm off-white and forest-green identity, with self-hosted Newsreader display type and Instrument Sans body type. Selected work follows the introduction, followed by Experience, Capabilities, About, and Contact. Motion is limited to an entrance and interaction feedback; reduced motion is supported.

Project visuals are original, labelled explanatory diagrams based on documented functionality. They are not application screenshots. Real TrackChow captures and Agrion design images are still needed.

## Content and components

`src/data/portfolio.js` is the source of truth for profile, experience, capabilities, contact links, project narratives, diagram content, and case-study contents links.

- `ProjectVisual` renders the project diagrams on the homepage and case studies.
- `ProjectCard` presents the problem, role, stack, and case-study link.
- `PageMetadata` updates page titles, descriptions, canonical URLs, and sharing metadata on navigation.
- `ScrollToLocation` handles hashes, route focus, and browser history scroll restoration.

Public routes remain `/`, `/projects/trackchow`, and `/projects/agrion`, with a not-found page. Existing Vercel SPA fallback configuration is preserved. Route metadata updates in the browser; static sharing crawlers receive the common metadata in `index.html`.

Fonts and their OFL licenses are in `public/fonts/`. The social card is `public/og.png`, with editable vector source in `public/og.svg`. The existing favicon is retained.

## Design skill

The requested official Anthropic frontend-design skill was reviewed and installed project-locally in `.agents/skills/frontend-design/`, including its license. No runtime or npm dependencies were added. The skill is discoverable on subsequent turns.

See `project_status.md` for decisions, verification, and remaining content needs. No deployment is performed by the development workflow.
