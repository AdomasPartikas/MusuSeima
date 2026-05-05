Plan: Musu Seima Website V1
Build a React + TypeScript static website hosted on Azure Static Web Apps, optimized for all ages and all devices, with:

A clear primary button to open your public read-only Google Drive archive.
An interactive but accessible memory spotlight.
Multilingual support from the start (Lithuanian first, English included).
Steps
Phase 1: Foundation

Scaffold React + TypeScript with Vite and strict TypeScript settings.

Add baseline styling system (design tokens/CSS variables), semantic layout, and accessibility defaults (visible focus states, reduced motion support, keyboard-first interaction).

Add industry-standard i18n stack (react-i18next + i18next-browser-languagedetector), set Lithuanian as default, and include English as second language.

Centralize environment-driven configuration (site title, Google Drive URL, metadata).

Phase 2: Core UX

Build sections in this order: header, hero with primary Drive CTA, memory spotlight, footer.

Implement memory spotlight as interactive card grid with expandable details (tap/click + keyboard accessible modal/dialog behavior).

Add motion that feels playful but restrained, with reduced-motion fallback.

Ensure mobile-first responsive behavior and touch-friendly targets.

Phase 3: Content Model

Create a memory entry model for 10-20 entries (id, name, year, description, image path, alt text, optional tags).

Store entries in static JSON for simple maintenance and load/render them in the spotlight.

Add a short content guide for future updates (how to add photos, alt text rules, naming, and update flow).

Phase 4: Deployment

Add Azure Static Web Apps GitHub Actions workflow for build/deploy from main branch.

Add static web app configuration for SPA routing fallback, caching rules, and security headers.

Prepare custom domain connection and production checklist.

Phase 5: Verification

Automated checks: lint, typecheck, build.

Accessibility checks: keyboard navigation, contrast, focus visibility, reduced motion.

Responsive checks on mobile, tablet, desktop.

Final launch checks: Drive button works publicly, memory spotlight works without hover, no critical accessibility blockers.

Relevant Files
README.MD: source of requirements and scope baseline.
Planned implementation areas: app shell, localization resources, memory spotlight components, memory data JSON, Azure SWA workflow, static web app configuration.
Verification
Local quality gate: install, lint, typecheck, build.
i18n validation: Lithuanian default and working language switch.
Accessibility audit with Lighthouse and axe.
Responsive QA at small, medium, and large breakpoints.
Azure SWA preview deploy and domain readiness checks.
Decisions Captured
Included in V1: static site, public read-only Drive CTA, interactive spotlight, LT + EN multilingual baseline, Azure SWA with GitHub Actions.
Excluded from V1: backend/API, admin CMS/editor, authentication-heavy features.
Recommended spotlight pattern: interactive card grid with expandable details (more accessible and easier for all ages than carousel-first UX).
Content updates in V1: JSON in repo with developer-assisted updates.