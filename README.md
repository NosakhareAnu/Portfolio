# Nosakhare Festus-Olagbende — Portfolio

Professional portfolio for Nosakhare Festus-Olagbende, a Software Developer & Product Designer focused on user-centered digital products.

## Current foundation

The homepage is organized around:

- Hero and professional positioning
- Selected Work
- Capabilities
- About
- Education
- Contact

TrackChow and Agrion are the current featured projects. TrackChow is identified as a built product, while Agrion is identified as a design exploration. Both stable case-study routes contain the supplied professional copy; TrackChow screenshot slots and external project links remain pending.

## Technology

- React 19
- React Router
- Vite
- CSS
- Lucide React

## Local development

```powershell
npm ci
npm run dev
```

Quality checks:

```powershell
npm run lint
npm run build
```

## Content architecture

Shared profile, project, capability, navigation, and contact information lives in `src/data/portfolio.js`. Reusable layout components consume that data, while React Router provides shareable project URLs.

## Project routes

- `/projects/trackchow`
- `/projects/agrion`

`vercel.json` provides the single-page application fallback needed when a project URL is opened or refreshed directly on Vercel.

## Legacy material

The previous Try-On Virtualiser and SchoolMerch project source and assets remain in the repository for reference, but they are not part of the public route tree or featured homepage.
