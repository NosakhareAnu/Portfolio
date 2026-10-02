# Portfolio Project Status

Last updated: 2026-10-02  
Repository: `https://github.com/NosakhareAnu/Portfolio.git`  
Branch: `main`

## Current phase

Design refinement pass (2026-10-02). The site was cleaned up for a more professional, minimalist presentation: consistent rounded corners, card and panel treatments, restrained motion, and better navigation UX. The color system and all project and experience facts are unchanged. Location and work-authorization details were added at the user's request.

No new metrics, technologies, research, users, client relationships, deployment claims, or project outcomes were invented.

## Professional positioning

- Name: Nosakhare Festus-Olagbende
- Title: Software Developer & Product Designer
- Hero message: designing thoughtful digital experiences and building the systems behind them, from product flows and interfaces to mobile applications, APIs, and data
- Education: Pan-Atlantic University, B.Sc. Computer Science
- Location: Texas, USA (user-supplied)
- Work authorization: No visa sponsorship required (user-supplied)
- Verified email: `nosakhareda@gmail.com`
- Verified LinkedIn: `https://www.linkedin.com/in/nosakhareanu/`
- Verified GitHub: `https://github.com/NosakhareAnu`

The public site does not contain university-assignment framing, a student identifier, or current-student positioning.

## Homepage

Homepage order:

1. Sticky navbar: NF monogram + `Nosakhare`, with active-section highlighting
2. Hero: title, name, introduction, CTAs, and a profile card (summary, Texas location, no-sponsorship note, LinkedIn and GitHub)
3. Work Experience
4. Capabilities (dark rounded panel)
5. Selected Work (clickable project cards)
6. About, now including a facts list for Location, Work authorization, and Education
7. Contact (rounded panel: location and work authorization, Email me, Copy email, address, LinkedIn, GitHub)
8. Footer

Decision: the standalone Education section held a single row, so it was merged into About as a facts list. The Education nav item was removed, so the nav is now Experience, Capabilities, Work, About, Contact. `#education` still resolves to the facts list for old links.

At desktop widths of `1000px` and above, `Festus-Olagbende` stays on the second line. Below that, the name wraps naturally at the hyphen.

## Work Experience

The homepage now renders a reusable, reverse-chronological experience list from the shared portfolio data:

1. Full-Stack Web Development Intern — OyaSync, Jul 2025 – Dec 2025
2. Product Design Intern — Cyncra Technologies, Jul 2025 – Aug 2025
3. Media & Content Team Lead — School of Science and Technology, Pan-Atlantic University, Mar 2025 – Oct 2025
4. Frontend Web Development Intern — OyaSync, Jul 2024 – Sep 2024

The two OyaSync internships remain distinct. Role, company, and date receive the strongest hierarchy; employment type, duration, and location are secondary. All descriptions use the supplied verified wording.

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

`src/data/portfolio.js` remains the single source of truth for:

- Profile, About, education, location, and work-authorization copy
- `defaultTitle` (shared document title)
- Work-experience entries
- Verified email, LinkedIn, and GitHub links
- Pending résumé and production URL values
- Navigation
- Project metadata and full case-study content
- Capability groups

Components:

- `SectionHeading`: shared kicker, title, and intro block
- `ProjectCard`: homepage project cards; the whole card is clickable through one stretched link
- `ExperienceList`: ordered experience list
- `Contact`: contact panel with clipboard copy and a screen-reader status message
- `Navbar`: scroll-spy active state, scrolled shadow, mobile dropdown that closes on Escape and after navigation
- `ScrollToLocation`: hash scrolling (smooth in-page, instant across pages) plus scroll restoration on back/forward
- `RevealOnScroll`: IntersectionObserver fade-in for `[data-reveal]` elements; content stays visible without JS or with reduced motion
- `ProjectPage`: reusable case-study renderer with a "Next project" card and an "All selected work" link at the end

The legacy Try-On Virtualiser and SchoolMerch pages and images were deleted as dead code. They remain in git history.

## Current routes

- `/`
- `/projects/trackchow`
- `/projects/agrion`
- Not-found route for unmatched URLs

`BrowserRouter` provides browser history. `ScrollToLocation` handles section hashes and route changes. `vercel.json` provides the single-page fallback for direct project URLs on Vercel.

## Visual and responsive behavior

- Palette unchanged: warm off-white (`#f6f6f1`), forest green (`#1d4f43`), near-black ink. Tokens are centralized as CSS variables in `global.css`.
- Typography: Inter (Google Fonts, `display=swap`), with Segoe UI and system fallbacks. No npm dependency added.
- Radii: 10px small, 16px cards, 24px panels (20px on phones), pill buttons and tags.
- Sections alternate off-white and white surfaces. Capabilities and Contact sit in rounded panels inside the container.
- Motion: staggered hero entrance, scroll reveal (opacity and translate), small hover lifts on cards and buttons, arrow nudges, header shadow on scroll, mobile menu fade and scale. Everything is disabled under `prefers-reduced-motion`.
- Case study: sticky section headings on desktop; rounded details, decision, feature, screenshot-slot, and stat cards; implementation note as a tinted callout.
- Breakpoints: `860px` (mobile nav, single-column layouts) and `600px` (full-width buttons, stacked grids, tighter panels).
- Accessibility: skip link, visible focus rings (including the stretched card link), `aria-current` on the active nav item, "(opens in a new tab)" screen-reader hints on external links, labeled menu toggle with `aria-expanded`.

## Technology

- React `^19.2.0`
- React DOM `^19.2.0`
- React Router DOM `^7.18.3`
- Lucide React `^0.562.0`
- Vite `^7.2.4` (Vite 7.3.0 installed during verification)

## Verification (2026-10-02)

- `npm run lint`: passes.
- `npm run build`: passes (about 268 kB JS / 22 kB CSS before gzip).
- An automated Playwright run with real Chrome against the production preview passed 213 of 214 checks. The one "failure" is the browser returning focus to `<body>` after the last link, which is a test artifact.
  - No horizontal overflow and no console errors on `/`, both project routes, and 404s at 1440, 1280, 1024, 768, 390, 360, and 320px widths
  - All reveal content becomes visible; with reduced motion, it is visible immediately
  - Every hash link has a matching ID; nav clicks land sections directly under the header and highlight the active item
  - External links use `target="_blank"` and `rel="noopener noreferrer"`; GitHub returns 200; LinkedIn returns 999 (LinkedIn's bot block, expected); `mailto:` is correct
  - Card click opens the case study at the top; Back restores the previous scroll position; Forward works; Next project cycles TrackChow → Agrion → TrackChow; the back link returns to Selected Work
  - Direct load and refresh of `/projects/agrion`, direct load of `/#contact`, and the 404 page with Return home all work
  - Document titles update per page
  - Copy email writes `nosakhareda@gmail.com` to the clipboard and shows "Copied"
  - Mobile menu opens and closes, closes after navigation and on Escape, and tapping a card opens the case study
  - Keyboard: skip link first, then a logical tab order with visible focus throughout
- Screenshots were reviewed at desktop, tablet, and phone sizes.

## Remaining placeholder text and missing content

The remaining intentional public placeholders are:

- TrackChow: six named screenshot slots awaiting real application captures

The following values are centralized as `null` and are not exposed as fake links:

- Résumé URL/file
- Production portfolio URL

Additional content still needed:

- Résumé/CV
- Final production domain or Vercel URL
- TrackChow screenshots for the six prepared slots
- Any public TrackChow live/source links, if available
- Agrion final design images and any public Figma/prototype link, if available

No placeholders remain for the supplied project narrative, role, technology, functionality, testing, metrics, design rationale, About, or education copy.

## Recommended next phase

VendorTrust and Cretofit (named as priorities in AGENTS.md) still need verified content before they can be added. Add the real TrackChow screenshots and Agrion design screens, then supply the résumé and production URL. After those assets are connected, perform a final visual review of image cropping, mobile flow, keyboard navigation, and social metadata on the deployed site.
