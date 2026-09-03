# Portfolio Development Guidelines

## Project Goal

Build a polished professional portfolio for Nosakhare Festus-Olagbende.

The portfolio is intended for active job applications across software development, product design, UX, and related early-career technology roles.

It must look like a professional portfolio, not a university assignment or experimental developer showcase.

## Design Direction

Keep the visual design:

* clean
* modern
* professional
* minimal
* spacious
* highly readable
* responsive
* polished without being flashy

Avoid:

* excessive gradients
* neon developer aesthetics
* animated backgrounds
* 3D graphics
* unnecessary glassmorphism
* excessive technology logos
* gimmicky animations
* overly large text
* excessive rounded cards
* cluttered layouts

Use restrained transitions and hover effects where they improve the experience.

Prioritize typography, spacing, hierarchy, and presentation of work.

## Target Audience

The primary audience is:

* recruiters
* hiring managers
* UX/product teams
* software engineering teams
* early-career technology recruiters

A recruiter should understand who Nosakhare is, what he builds, and what his strongest work is within approximately 20–30 seconds.

## Professional Positioning

Primary positioning:

Software Developer & Product Designer

The site should communicate the ability to take digital products from problem definition and interface thinking through implementation.

Do not position Nosakhare as a current university student.

He is a Computer Science graduate.

Do not display a matriculation/student number anywhere.

## Content Principles

Projects must communicate:

1. the problem
2. the user's role
3. the solution
4. important design or engineering decisions
5. technology used
6. results or evidence when genuinely available

Do not invent metrics, users, technologies, responsibilities, results, employers, or project outcomes.

Do not use exaggerated marketing language.

Prefer concise specific writing over generic claims such as "passionate developer" or "innovative solutions."

## Featured Projects

Prioritize these projects:

1. TrackChow
2. VendorTrust
3. Cretofit

NxG Together may appear as additional work.

Legacy university projects such as Try-On Virtualiser and SchoolMerch should not remain featured unless explicitly requested.

## Architecture

Keep the application lightweight.

The existing React/Vite project may be reused.

Use proper URL routing for project case studies.

Centralize profile, project, skill, and contact information instead of duplicating it across components.

Project case studies should have stable shareable URLs.

The website must work correctly when:

* refreshing a project URL
* using browser back/forward navigation
* opening links directly
* viewing on mobile

## Quality

Before considering work complete:

* run the linter
* run a production build
* fix console errors
* check mobile responsiveness
* check keyboard navigation
* provide accessible labels for controls
* provide useful image alt text
* ensure no horizontal overflow
* ensure external links behave correctly
* remove unused starter files and dead code

## SEO

Add appropriate:

* page title
* meta description
* favicon
* Open Graph metadata
* social sharing metadata

Do not leave Vite default branding.

## Development Behavior

Preserve working functionality unless a redesign intentionally replaces it.

Prefer reusable components over duplicated markup.

Do not add dependencies without a clear reason.

Do not overengineer the application.

When making a large structural change, inspect the existing implementation first.

After meaningful changes, run relevant verification commands.

Keep `project_status.md` updated when major architectural or content decisions change.
