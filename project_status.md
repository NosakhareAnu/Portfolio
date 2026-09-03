# Portfolio Project Status

Last updated: 2026-09-03  
Repository: `https://github.com/NosakhareAnu/Portfolio.git`  
Branch: `main`

## Current phase

The professional portfolio foundation and approved visual system remain in place. This content pass replaces the active project placeholders with the supplied final professional copy for TrackChow and Agrion.

No new metrics, technologies, research, users, client relationships, deployment claims, or project outcomes were invented.

## Professional positioning

- Name: Nosakhare Festus-Olagbende
- Title: Software Developer & Product Designer
- Hero message: designing thoughtful digital experiences and building the systems behind them, from product flows and interfaces to mobile applications, APIs, and data
- Education: Pan-Atlantic University, B.Sc. Computer Science
- Contact architecture: email, LinkedIn, and GitHub

The public site does not contain university-assignment framing, a student identifier, or current-student positioning.

## Homepage

The existing structure and design remain unchanged:

1. Sticky navbar
2. Hero
3. Selected Work
4. Capabilities
5. About
6. Education
7. Contact
8. Footer

The hero now uses the supplied supporting copy. The Selected Work cards now contain final subtitles and descriptions rather than generic case-study placeholders.

## Selected Work

### TrackChow

- Classification: `Built Product`
- Position: flagship project
- Subtitle: Food Tracking Designed Around Nigerian Meals
- Disciplines: Product Design, Mobile Development, Full-Stack Development
- Route: `/projects/trackchow`
- Card copy: explains practical nutrition logging for Nigerian users through familiar foods, serving units, faster entry, and clear nutrition feedback

The case study now contains:

- Overview and project context
- Role: Product Designer & Full-Stack Developer
- Core technologies: React Native, Expo, Node.js, Express.js, Supabase, PostgreSQL, and Figma
- Problem framing around Nigerian foods and familiar serving measurements
- Product and interaction responsibilities
- Four product/UX decisions
- Seven key product capabilities
- Concise implementation and offline-sync explanation
- Six clearly named screenshot slots
- Functional, API, calculation, offline-sync, and usability testing summary
- Only the three supplied outcome metrics: 16-second average logging time, 4.5/5 average feedback, and eight usability participants
- Reflection on the relationship between product design and engineering

The AI-assisted missing-food fallback is described as one supporting capability and is not positioned as the product's primary identity.

### Agrion

- Classification: `Design Exploration`
- Context: self-directed product design exploration
- Subtitle: Facility Management Dashboard
- Disciplines: Product Design, UI/UX Design, Dashboard Design, and Figma
- Route: `/projects/agrion`
- Card copy: explains the dashboard's focus on properties, bookings, earnings, notifications, and operational information

The case study now contains:

- Overview and explicit design-exploration context
- Role: Product Designer
- Tool: Figma
- Design challenge around information density and scanning
- Navigation and information-architecture rationale
- Four interface decisions
- Descriptions of five key screens
- Restrained visual-direction rationale
- Reflection on hierarchy, status, navigation, and repeated patterns

Agrion explicitly states that it was not developed, deployed, commissioned by a client, or tested with real users. No implementation language is used for the project.

### Inactive and legacy projects

- VendorTrust and Cretofit remain outside the active Selected Work data.
- No third placeholder card is shown.
- The data model supports additional projects without route or component changes.
- Try-On Virtualiser and SchoolMerch source/assets remain retained for reference and are not part of the public route tree.

## Content architecture

`src/data/portfolio.js` remains the source of truth for:

- Profile, About, and education copy
- Contact links and pending link state
- Pending résumé and production URL values
- Navigation
- Homepage project metadata
- Project classification and disciplines
- Project introductions and metadata
- Case-study paragraphs, decisions, features, lists, statistics, and screenshot-slot labels
- Capability groups

`ProjectCard` renders the homepage summaries. `ProjectPage` uses one reusable case-study renderer for both projects, supporting prose, responsibilities, structured decision/feature cards, statistics, and screenshot slots.

## Current routes

- `/`
- `/projects/trackchow`
- `/projects/agrion`
- Not-found route for unmatched URLs

`BrowserRouter` provides browser history. `ScrollToLocation` handles section hashes and route changes. `vercel.json` provides the single-page fallback for direct project URLs on Vercel.

## Visual and responsive behavior

- The approved warm off-white, forest-green, and near-black system is unchanged.
- Existing typography, spacing, section order, project-row treatment, and interaction patterns are preserved.
- TrackChow retains the accent border and stronger flagship hierarchy.
- `Built Product` and `Design Exploration` remain subtle text-and-border labels within one Selected Work list.
- New case-study content uses the same two-column editorial layout and fine-rule treatment.
- Decision, feature, responsibility, statistic, and screenshot grids collapse to one column at narrow widths.
- Screenshot slots use restrained dashed frames and do not contain fabricated images.
- `minmax(0, 1fr)`, wrapping discipline lists, and mobile grid overrides reduce horizontal-overflow risk.
- Existing skip-link, focus, navigation-label, hidden-menu tab-order, and reduced-motion behavior remain intact.

## Technology

- React `^19.2.0`
- React DOM `^19.2.0`
- React Router DOM `^7.18.3`
- Lucide React `^0.562.0`
- Vite `^7.2.4` (Vite 7.3.0 installed during verification)

## Verification

- `npm run lint` passes with no reported errors.
- `npm run build` passes with Vite 7.3.0.
- Production output is approximately 259 kB JavaScript and 14 kB CSS before gzip.
- Direct requests to `/`, `/projects/trackchow`, and `/projects/agrion` return HTTP 200 from the development server.
- The development server reported no compilation errors during route verification.

## Remaining placeholder text and missing content

The remaining intentional public placeholders are:

- LinkedIn: `URL pending`
- GitHub: `URL pending`
- TrackChow: six named screenshot slots awaiting real application captures

The following values are centralized as `null` and are not exposed as fake links:

- Résumé URL/file
- Production portfolio URL

Additional content still needed:

- LinkedIn URL
- GitHub URL
- Résumé/CV
- Final production domain or Vercel URL
- TrackChow screenshots for the six prepared slots
- Any public TrackChow live/source links, if available
- Agrion final design images and any public Figma/prototype link, if available

No placeholders remain for the supplied project narrative, role, technology, functionality, testing, metrics, design rationale, About, or education copy.

## Recommended next phase

Add the real TrackChow screenshots and Agrion design screens, then supply the professional profile links and production URL. After those assets are connected, perform a final visual review of image cropping, mobile flow, keyboard navigation, and social metadata on the deployed site.
