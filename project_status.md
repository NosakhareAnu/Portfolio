# Portfolio Project Status

Last updated: 2026-10-02  
Repository: `https://github.com/NosakhareAnu/Portfolio.git`  
Branch: `main`

## Current phase

Positioning refinement pass (2026-10-02). This was a targeted refinement, not a redesign. The site now presents software development as the primary identity, with full-stack/React/backend work most prominent, AI and machine learning as an honestly framed growing direction, and product design as a secondary, supporting skill. Generic portfolio patterns were removed: section eyebrow labels, 01/02/03 numbering, pill tag clusters, equal-weight capability columns, and vague copy.

The palette, typography, page width, spacing system, buttons, and overall editorial feel are unchanged.

No new metrics, technologies, research, users, client relationships, deployment claims, or project outcomes were invented.

## Professional positioning

Hierarchy (agreed with the user):

1. Primary: Software Developer
2. Strongest areas: full-stack, React/frontend, backend, REST APIs, databases, mobile
3. Growing direction: AI and machine learning (Python, applied projects). Described as "currently developing", never as an AI/ML Engineer role or production ML experience.
4. Secondary: product design, UI/UX, Figma

- Name: Nosakhare Festus-Olagbende
- Title: Software Developer (no longer "Software Developer & Product Designer")
- Hero message: builds full-stack web and mobile applications (React interfaces, backend services, APIs, databases, application logic), is developing deeper AI/ML experience, and uses a product design background to build around real usage
- Education: Pan-Atlantic University, B.Sc. Computer Science
- Location: Texas, USA (user-supplied)
- Work authorization: No visa sponsorship required (user-supplied)
- Verified email: `nosakhareda@gmail.com`
- Verified LinkedIn: `https://www.linkedin.com/in/nosakhareanu/`
- Verified GitHub: `https://github.com/NosakhareAnu`
- Production URL: `https://www.nosakhare.online/` (user-supplied)

The public site does not contain university-assignment framing, a student identifier, current-student positioning, or WhatsApp.

Copy rules in force: no "passionate", "innovative", "seamless", "at the intersection of", "bridging design and engineering", "from product thinking to implementation", or similar stock phrases. Headings are direct (Experience, Technical capabilities, Selected work, About, Contact).

## Homepage

Homepage order:

1. Sticky navbar: text-only `Nosakhare` brand (NF monogram removed), with active-section highlighting
2. Hero: "Software Developer" label, name, introduction, two CTAs (View selected work / Get in touch), and an unboxed left-rule sidebar (short profile, Texas, no sponsorship, LinkedIn, GitHub)
3. Experience
4. Technical capabilities (dark rounded panel, asymmetric hierarchy)
5. Selected work
6. About: three paragraphs plus a facts list (Education, Based in, Work authorization)
7. Contact
8. Footer: name, Email, LinkedIn, GitHub only

Section eyebrow labels above h2s were removed; each section has a single direct h2. Education stays inside About (the `#education` anchor still resolves there). Nav: Experience, Capabilities, Work, About, Contact.

At desktop widths of `1000px` and above, `Festus-Olagbende` stays on the second line. Below that, the name wraps naturally at the hyphen.

## Work Experience

Reverse-chronological list from shared data. Three entries:

1. Full-Stack Web Development Intern, OyaSync, Jul 2025 – Dec 2025 (6 months)
2. Product Design Intern, Cyncra Technologies, Jul 2025 – Sep 2025 (3 months). Dates corrected by the user.
3. Frontend Web Development Intern, OyaSync, Jul 2024 – Sep 2024 (3 months)

The Media & Content Team Lead role (Pan-Atlantic University) was removed at the user's request and appears nowhere on the site.

Hierarchy: role (h3), company (accent), then dates with duration in muted text. Type and location come last and are smallest. Date pills were replaced with plain text. All descriptions use the supplied verified wording.

## Selected Work

### TrackChow

- Classification: `Built Product`
- Position: flagship project
- Subtitle: Food Tracking Designed Around Nigerian Meals
- Disciplines: Full-Stack Development, Mobile Development, Product Design (reordered development-first)
- Card: "Built with" stack line (React Native, Expo, Node.js, Express.js, Supabase, PostgreSQL). Featured card has a white surface, larger title, and stronger padding.
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
- Card: quieter outlined treatment, "Designed in: Figma", and the note "Design only. Not developed or deployed." (`cardNote`), so it never reads as equivalent to a built project

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
- Try-On Virtualiser and SchoolMerch were deleted from the working tree (available in git history).
- Project cards no longer show 01/02 numbers or discipline pills. Future full-stack or AI/ML projects only need a new entry in `projects` with `stackLabel`, `stack`, and optionally `cardNote`.

## Content architecture

`src/data/portfolio.js` remains the single source of truth for:

- Profile, About, education, location, and work-authorization copy
- `defaultTitle` (shared document title)
- Work-experience entries
- Verified email, LinkedIn, and GitHub links
- Résumé (pending) and production URL
- Navigation
- Project metadata (`classification`, `context`, `stackLabel`, `stack`, `cardNote`) and full case-study content
- `capabilities`: an array with a `tier` field (`primary`, `developing`, `supporting`) that controls visual weight. The primary tier has labelled `groups`; the others have flat `items`.

Components:

- `SectionHeading`: direct h2 with an optional intro (no eyebrow kicker)
- `Capabilities`: asymmetric technical-capabilities panel driven by `tier`
- `ProjectCard`: homepage project cards; the whole card is clickable through one stretched link
- `ExperienceList`: ordered experience list
- `Contact`: contact panel with clipboard copy and a screen-reader status message
- `Navbar`: text brand, scroll-spy active state, scrolled shadow, mobile dropdown that closes on Escape and after navigation
- `ScrollToLocation`: hash scrolling (smooth in-page, instant across pages) plus scroll restoration on back/forward
- `RevealOnScroll`: IntersectionObserver fade-in for `[data-reveal]` elements; content stays visible without JS or with reduced motion
- `ProjectPage`: reusable case-study renderer with a "Next project" card and an "All selected work" link at the end (not changed in this pass apart from the discipline order)

## Current routes

- `/`
- `/projects/trackchow`
- `/projects/agrion`
- Not-found route for unmatched URLs

`BrowserRouter` provides browser history. `ScrollToLocation` handles section hashes and route changes. `vercel.json` provides the single-page fallback for direct project URLs on Vercel.

## Visual and responsive behavior

- Palette unchanged: warm off-white (`#f6f6f1`), forest green (`#1d4f43`), near-black ink. Tokens are centralized as CSS variables in `global.css`.
- Typography: Inter (Google Fonts) with system fallbacks. No npm dependency.
- Technical capabilities: on desktop, a dominant left column (Full-stack development, with a labelled spec list for Frontend, Mobile, Backend, Data, and Tools) and a narrower right column separated by a rule (AI & machine learning, marked "Currently developing", two-column text list). Below a full-width rule is a quiet three-column row for product and interface design, with muted, smaller text. No pills, no numbering. The layout stacks to one column at 860px, and the spec labels sit above their values at 600px.
- Hero sidebar returned to an unboxed fine-rule treatment (no card or icons).
- Cards are reserved for projects, the About facts list, and case-study content. Pill tags remain only on case-study discipline lists.
- Motion unchanged: staggered hero entrance, scroll reveal, small hover lifts. All disabled under `prefers-reduced-motion`.
- Breakpoints: `860px` (mobile nav, single-column layouts) and `600px` (full-width buttons, stacked grids, tighter panels).
- Fixed a long-standing CSS bug: `body` was included in `body, button, a { font: inherit }`, which reset the body line-height to `normal`, so unstyled text (project descriptions, profile facts, footer) rendered with cramped leading. Body text now uses the intended 1.6.
- Accessibility: skip link, visible focus rings (including the stretched card link), `aria-current` on the active nav item, "(opens in a new tab)" screen-reader hints on external links, labelled menu toggle with `aria-expanded`.

## Technology

- React `^19.2.0`
- React DOM `^19.2.0`
- React Router DOM `^7.18.3`
- Lucide React `^0.562.0`
- Vite `^7.2.4` (Vite 7.3.0 installed during verification)

## Verification (2026-10-02, positioning pass)

- Baseline screenshots of the local build and https://www.nosakhare.online/ were reviewed at desktop, tablet, and mobile sizes before any edits (the live site matched local).
- `npm run lint`: passes.
- `npm run build`: passes (about 268 kB JS / 22 kB CSS before gzip).
- An automated Playwright run with real Chrome against the production preview passed 232 of 233 checks. The one "failure" is the browser returning focus to `<body>` after the last link, which is a test artifact.
  - No horizontal overflow and no console errors on `/`, both project routes, and 404s at 1440, 1280, 1024, 768, 390, 360, and 320px
  - Media & Content Team Lead absent; exactly three experience entries in the correct order; Cyncra shows Jul 2025 – Sep 2025 · 3 months
  - NF brand mark gone; brand text is exactly "Nosakhare"
  - Hero label is exactly "Software Developer"; "Product Designer" and "Product Engineer" do not appear on the homepage
  - Capabilities render in the order Full-stack → AI & ML → Product & interface design; the full-stack block is measurably wider than the AI block on desktop; no pill tags in the section
  - AI/ML appears with "Currently developing"; no "AI Engineer" or "ML Engineer" wording
  - No 01/02/03 numbering on the homepage; none of the banned stock phrases present
  - Footer shows only name, Email, LinkedIn, GitHub; no WhatsApp anywhere
  - Agrion card shows "Design only. Not developed or deployed."
  - Title, meta description, and absolute `og:image` updated
  - All hash anchors resolve; nav lands each section under the header and highlights it; external links use `noopener noreferrer`; GitHub returns 200; LinkedIn returns 999 (bot block, expected); `mailto:` is correct
  - Card click, back/forward scroll restoration, Next project, direct load and refresh of project URLs, the 404 page, copy-email, the mobile menu, keyboard tab order, and reduced motion all pass
- Final screenshots were reviewed at 1440, 820, and 375px.

## Remaining placeholder text and missing content

The remaining intentional public placeholders are:

- TrackChow: six named screenshot slots awaiting real application captures

The following value is centralized as `null` and is not exposed as a fake link:

- Résumé URL/file

Additional content still needed:

- Résumé/CV
- TrackChow screenshots for the six prepared slots
- Any public TrackChow live/source links, if available
- Agrion final design images and any public Figma/prototype link, if available
- Additional full-stack and AI/ML portfolio projects (the user is preparing these; no placeholders are shown)

No placeholders remain for the supplied project narrative, role, technology, functionality, testing, metrics, design rationale, About, or education copy.

## Recommended next phase

Add the user's upcoming full-stack and AI/ML projects to `projects` (TrackChow should stay first unless a stronger built project replaces it). VendorTrust and Cretofit (named in AGENTS.md) still need verified content. Add the real TrackChow screenshots and Agrion design screens, and supply the résumé. After deploying, check the new share image (`/og.png`) with a social-card debugger.
