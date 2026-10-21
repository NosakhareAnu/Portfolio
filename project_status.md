# Portfolio Project Status

Last updated: 2026-10-21
Repository: `https://github.com/NosakhareAnu/Portfolio.git`

## Current phase

Editorial UI/UX redesign implemented locally. Not deployed. This replaces the October 2 visual and positioning notes; older decisions remain in git history.

## Audit and direction

Inspected all application source, configuration, README, guidelines, previous status, and the asset inventory before editing. The live portfolio at `https://www.nosakhare.online/` and Sarah Li's work page at `https://www.sarahli.ca/work/` were inspected in the browser, including Sarah Li's project selector.

Strengths of the existing site: clear copy, shared content, React Router case studies, a restrained palette, and functional contact/navigation controls. Weaknesses: long introductory copy, work far down the page, projects without visual presentation, repetitive containers, and little differentiation between page sections.

Chosen direction: editorial minimalism with the name as the main typographic gesture, work presented immediately after the introduction, asymmetric project compositions, a chronological experience rail, readable capability specifications, and a forest-green contact close. The reference informed the attention given to each project, without borrowing its layout, pixel typography, butterfly, music, or interaction system.

Design tokens:

- Warm page: `#f6f6f1`
- Light surface: `#fdfdf9`
- Ink: `#202923`
- Forest accent: `#1d4f43`
- Sage surface: `#e8ede3`
- Body: Instrument Sans, variable 400–700
- Display: Newsreader, variable 400–500, optical size fixed at 48 to reduce file size
- Layout: 1184px maximum content width; asymmetric desktop columns, distinct tablet layouts, and single-column mobile showcases
- Motion: one brief hero entrance and action feedback; no scroll reveals or hidden content; reduced-motion CSS and hash-scroll handling retained

The plan was checked against the brief: no generic card grid, oversized promotional slogan, fake screenshot, gradient, decorative numbering, animated background, or technology-logo wall. The warm neutral palette is retained because the user explicitly requested continuity.

## Content decisions

The current user-provided guidelines explicitly specify **Software Developer & Product Designer**, so that is now the title, while the copy and capability hierarchy keep development prominent. The introduction was shortened using existing facts. The About narrative, remaining internship dates and responsibilities, education, Texas location, work authorization, and contact details are preserved. On October 21, the user corrected both OyaSync experience locations to Houston, Texas, requested no remote/on-site designation, and removed the Cyncra experience entry.

- Email: `nosakhareda@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/nosakhareanu/`
- GitHub: `https://github.com/NosakhareAnu`
- Education: B.Sc. Computer Science, Pan-Atlantic University
- OyaSync: Full-Stack Web Development Intern, Jul–Dec 2025; Frontend Web Development Intern, Jul–Sep 2024. Both show Houston, Texas, with no remote/on-site designation.

AI and machine learning remain explicitly **Currently developing**. On October 21, the user requested React Native be removed from current capabilities because they no longer know it, and confirmed Docker and Python as skills to include. The Mobile/React Native capability row and the corresponding About reference were removed; Python is listed under Backend and Docker under Tools. TrackChow's historical implementation stack is preserved.

### Projects

TrackChow remains the flagship built product. Its existing role, stack, narrative, testing details, and supplied results (16-second average logging time, 4.5/5 feedback, eight usability participants) are preserved.

Agrion remains a self-directed design exploration, with explicit notices that it was not developed, deployed, commissioned, or tested with real users.

VendorTrust and Cretofit are named in the general guidelines but still lack verified content in the repository. They were not invented or substituted for the two detailed existing projects. Legacy university work remains excluded.

No application screenshots or design screens existed in the repository. `ProjectVisual` renders clearly captioned **Project diagram** figures from documented flows. TrackChow shows the food/serving/diary flow; Agrion shows a schematic of core navigation. Neither depicts a real application screen or fabricated data.

The six pending screenshot-slot names remain in the data for future content work. Empty screenshot boxes are no longer rendered publicly. Real captures are still needed.

## Implementation

Homepage order: introduction → selected work → experience → technical capabilities → about → contact. Navigation follows this order. The repeated name/email/social-link footer was removed at the user's request; the contact section is now the homepage's closing section. Its unused component and styles were deleted.

- Shared content remains in `src/data/portfolio.js`, including diagram content and case-study contents links.
- `ProjectVisual` is reused by the homepage and case studies.
- Project showcases expose role and stack before opening the case study.
- Each case study has a contents navigation, restrained two-column reading layout, and working next-project/back links.
- Experience dates form a chronological rail that adapts to mobile without hiding descriptions.
- Capabilities separate established development work, learning, and supporting design practice.
- Contact has a direct email link, copy confirmation with a live status region, and verified social links.
- Mobile menu closes on navigation and Escape; Escape restores button focus, and focus leaving the header closes it.
- Hash links focus their destination; route changes focus main content without changing the initial keyboard tab order.
- Scroll listeners and restoration run before paint; browser scroll anchoring is disabled so it cannot compete with route restoration. Back/Forward restores the position after browser focus has scrolled the project link into view.
- Removed the unused scroll-reveal component and its markers/CSS.
- Added a forest-green custom arrow cursor with a soft sage glow, subtle hover emphasis, and click feedback at the user's request. The arrow tip tracks the actual pointer position. It ignores pointer events, restores the native cursor for editable controls and keyboard navigation, and stays disabled for touch/coarse pointers and forced colors. Reduced-motion preferences disable its size transitions.
- Fonts are locally served WOFF2 files, about 88.5 kB combined, preloaded with `font-display: swap`; OFL licenses are retained.
- Existing favicon retained. New 1200×630 social card matches the typography and palette; editable source is `public/og.svg`.
- `PageMetadata` updates route titles, descriptions, canonical URLs, Open Graph, Twitter, and 404 robots metadata. Like the existing SPA, static social crawlers receive the common metadata in `index.html`; route-specific crawlable HTML would require a separate prerendering change.

No npm dependencies added. No changes to secrets, deployment configuration, backend functionality, or remote services.

The official Anthropic frontend-design skill was reviewed, then installed with Codex's skill-installer helper into `.agents/skills/frontend-design/`, with its license. It can be discovered on subsequent turns.

## Verification

- `npm run lint`: passed.
- `npm run build`: passed. Production JS approximately 269.6 kB / 86.1 kB gzip; CSS approximately 26.3 kB / 6.0 kB gzip.
- Production preview inspected at `http://127.0.0.1:4173/`.
- Browser matrix: homepage, both case studies, and 404 at 1440, 1280, 1024, 820, 768, 600, 390, 360, and 320px: 36 combinations passed overflow, heading, external-link attributes, control-label, and fragment-target checks.
- Console warnings/errors on production preview: none observed.
- Desktop and mobile visual review covered hero, selected work, timeline, capabilities, about/contact, and case studies. Desktop case-study diagram composition and small-screen diagram type were refined after review.
- Fixed a 320px overflow caused by the old body minimum width and desktop scrollbar width.
- Keyboard checks: visible skip link, skip target, menu open/close, Escape focus restoration, and hash destination focus.
- Checked copy-email confirmation/live status, direct case-study loading and refreshing, case-study contents links, next-project navigation, and browser back/forward.
- Reduced-motion handling reviewed in CSS and scrolling code; OS motion preference was not changed for testing.
- Primary text/background contrast pairs checked: 5.11:1 (muted body), 5.86:1 (TrackChow diagram), 4.62:1 (Agrion diagram), 6.62:1 (contact copy), and 5.53:1 (capabilities copy).
- No separate type-check/test scripts are configured. No measured Core Web Vitals claims are made.

## Review before deployment

Review the new visual direction and the combined professional title specified by the current guidelines. Supply real TrackChow screenshots, Agrion design images, a résumé, and public source/demo/prototype links when available. No placeholder links are shown. VendorTrust and Cretofit need verified narratives before inclusion.

Deployment remains a separate user decision. The existing Vercel route fallback was left unchanged.
