# AGENTS.md

## Purpose
This file defines architecture and editing rules for AI agents working on this repository.
Project: Mūsų Šeima (family memories website).
Primary goals: simple UX for all ages, Lithuanian-first experience, memory archive access, and safe maintainability.

## Tech Stack
- React 19 + TypeScript + Vite
- i18next + react-i18next + language detector
- Static frontend only (no backend)
- Azure Static Web Apps runtime config present in staticwebapp.config.json

## Current Architecture
- App shell: src/App.tsx
- Entry point: src/main.tsx
- Global i18n bootstrap: src/i18n.ts
- Runtime site config: src/config/site.ts
- Data model types: src/types/index.ts
- Memory content source: src/data/memories.json
- UI components:
  - src/components/Header.tsx
  - src/components/Hero.tsx
  - src/components/MemorySpotlight.tsx
  - src/components/MemoryCard.tsx
  - src/components/MemoryDialog.tsx
  - src/components/Footer.tsx
- Design system and all styles: src/index.css
- Fallback card image: public/images/placeholder.svg

## Functional Flow
1. Header renders site name and language toggle.
2. Hero renders:
   - Main title/subtitle
   - External CTA to Google Drive archive
   - Auto-rotating slideshow from memory images (first 5 entries)
3. Spotlight renders memory cards from src/data/memories.json.
4. Selecting a card opens accessible modal dialog with details.
5. Footer renders static translated message.

## Non-Negotiable Rules
- Keep Lithuanian as default fallback language.
- Do not remove Lithuanian diacritics (ą, č, ę, ė, į, š, ų, ū, ž).
- Preserve bilingual locales in both files:
  - src/locales/lt/common.json
  - src/locales/en/common.json
- Do not break the CTA to Google Drive or remove read-only behavior hints.
- Keep memory cards keyboard-accessible (Enter/Space) and dialog Escape-close behavior.
- Keep focus-visible outlines and skip-link behavior for accessibility.

## i18n Rules
- Config location: src/i18n.ts
- Required settings:
  - fallbackLng: 'lt'
  - supportedLngs includes 'lt' and 'en'
  - detection order must prioritize querystring/localStorage (do not force navigator first)
- Any new UI text must be added to both locale JSON files.

## Hero Slideshow Rules
- Logic location: src/components/Hero.tsx
- Source: memory image paths from src/data/memories.json
- Behavior:
  - Auto-rotate every 5 seconds
  - Skip failed images via onError bookkeeping
  - No user controls by design
- Visual legibility must be protected by overlay/panel styles in src/index.css.

## Styling Rules
- Single source of truth: src/index.css
- Tokenized palette in :root must be used (no ad-hoc hardcoded colors unless justified)
- Current concept: blue + green + white + yellow family theme
- Preserve responsive behavior and prefers-reduced-motion handling
- Preserve high-contrast readability in hero over unpredictable photos

## Data Content Rules
- Memory content is edited in src/data/memories.json.
- Each memory entry must match MemoryEntry shape from src/types/index.ts.
- Required fields per memory:
  - id, name, year, description.lt, description.en, imagePath, imageAlt.lt, imageAlt.en
- Keep imagePath values under public/images/memories/ unless intentionally changed.

## Deployment and Runtime Config
- Environment variables (documented in .env.example):
  - VITE_SITE_TITLE
  - VITE_DRIVE_ARCHIVE_URL
- Static Web Apps routing/security config: staticwebapp.config.json
- Note: .github/workflows is currently not present in repository. If CI/CD is reintroduced, keep build + lint checks before deployment.

## Validation Checklist After Changes
Run all:
1. npm run lint
2. npm run build

If changes touch i18n/content/styles, also manually verify:
1. Language defaults to Lithuanian on first visit
2. Language toggle works and persists
3. Hero slideshow rotates without visual flicker
4. Memory card and modal keyboard interaction still works

## Safe Editing Practices For Agents
- Prefer small, targeted edits.
- Do not rename public paths or i18n keys without updating all references.
- Do not remove accessibility attributes (aria, role, focus handling) without replacement.
- Preserve user intent: simple, warm, family-friendly UI.
