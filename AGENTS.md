# AGENTS.md — Project Knowledge & Agent Operating Guide

> **Project Name:** Md. Redwan - Software Engineer & Full-Stack Developer Portfolio  
> **Repository Root:** `e:/md-redwan-portfolio`  
> **Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React  
> **Last Updated:** October 2026

---

## 1. Project Overview & Architecture

This repository is a production-grade personal portfolio website for **Md. Redwan**, a Full-Stack Software Developer based in Dhaka, Bangladesh (B.Sc. in Computer Science and Engineering from Daffodil International University).

The site is designed with an editorial, high-craft aesthetic featuring:
- Paper/ink and deep night palette with custom typography (`Montserrat` and handwriting cursive `Mrs Saint Delafield`).
- Micro-interactions, scroll-triggered reveals, and accessible reduced-motion support.
- Deep architectural system diagrams for engineering case studies.
- Centralized data architecture decoupling data from UI components.

---

## 2. Directory & File Structure

```text
e:/md-redwan-portfolio/
├── index.html                  # HTML entry point, root div, Google Font fallback & script link
├── package.json                # Project dependencies and npm scripts
├── postcss.config.js           # PostCSS config (Tailwind + Autoprefixer)
├── tailwind.config.js          # Custom colors (paper, ink, night, accent), fonts, shadows, transitions
├── tsconfig.json               # TypeScript configuration (ES2020, Bundler mode, strict)
├── tsconfig.node.json          # Node TypeScript config for Vite
├── vite.config.ts              # Vite React configuration
├── .eslintrc.cjs               # ESLint configuration with react-hooks and typescript-eslint
├── .gitignore                  # Git ignore rules
├── README.md                   # Initial project template README
├── AGENTS.md                   # This file (Agent context & project tracking)
└── src/
    ├── App.tsx                 # Root application component rendering Home
    ├── index.tsx               # React DOM 18 client root mount
    ├── index.css               # Global CSS, Google Font imports, Tailwind directives, utility classes
    ├── package.json            # [Note] Legacy export artifact from design tool
    ├── components/             # Reusable UI & section components
    │   ├── Achievements.tsx    # Problem solving stats (300+ problems) & course awards
    │   ├── ActionLink.tsx      # Multi-variant CTA button/link with dynamic arrows & download support
    │   ├── BackToTop.tsx       # Floating scroll-to-top button (triggers >640px scroll)
    │   ├── Capabilities.tsx    # Shipped capability breakdown (REST APIs, RBAC, PWA, etc.)
    │   ├── CaseStudies.tsx     # Case studies section (splits featured vs secondary projects)
    │   ├── CaseStudy.tsx       # Individual case study card (meta, overview, architecture, stack)
    │   ├── Contact.tsx         # Night-themed contact banner, email link, copy button, resume CTA
    │   ├── CopyEmailButton.tsx # One-click clipboard copy button with feedback animation
    │   ├── Education.tsx       # Institution card, degree, CGPA (3.85/4.00), coursework tags
    │   ├── Expertise.tsx       # Night-themed technical skill matrix (Frontend, Backend, Database, Tools)
    │   ├── Focus.tsx           # 3 core focus areas (Full-Stack, Backend & Data, Production)
    │   ├── Footer.tsx          # Copyright, location, and signature
    │   ├── GithubMark.tsx      # SVG GitHub logo
    │   ├── Hero.tsx            # Hero greeting, masked text, orbit visual, badge, CTAs
    │   ├── MaskedText.tsx      # Staggered word reveal animation with Framer Motion
    │   ├── Nav.tsx             # Floating pill navbar, signature, links, mobile drawer
    │   ├── NavMoreMenu.tsx     # Desktop dropdown menu for secondary navigation items
    │   ├── navIcons.ts         # Icon lookup table for navbar items
    │   ├── PortraitOrbit.tsx   # Simulated orbital satellite animation around portrait canvas
    │   ├── ProjectLinks.tsx    # Links list (Live, GitHub, Video) with 'soon' fallback states
    │   ├── ProjectVisual.tsx   # Interactive architectural diagram renderer (Client/API/Data layers)
    │   ├── Reveal.tsx          # Wrapper for scroll-triggered viewport animations
    │   ├── RichText.tsx        # Parser for **bold emphasis** text within copy
    │   ├── RotatingBadge.tsx   # Circular animated rotating text badge
    │   ├── SectionHeader.tsx   # Reusable section title & description with light/dark support
    │   ├── Signature.tsx       # Animated cursive handwriting signature logo
    │   ├── SocialButtons.tsx   # GitHub, LinkedIn, and Email icon button cluster
    │   └── TechIcon.tsx        # Subtle monochrome technology vector icons for skill matrix
    ├── data/
    │   ├── portfolio.ts        # Primary data store: profile, copy, capabilities, projects, skills
    │   └── projects.ts         # Currently empty file (reserved for modularizing projects)
    ├── hooks/
    │   └── useActiveSection.ts # IntersectionObserver hook tracking the active scroll section for nav
    ├── types/
    │   └── portfolio.ts        # TypeScript models: Project, NavItem, Capability, Diagram, etc.
    └── utils/
        └── motion.ts           # Framer motion easing constants (EASE_OUT, DURATION, VIEWPORT)
```

---

## 3. Technology Stack & Key Dependencies

| Category | Technology / Package | Details |
| :--- | :--- | :--- |
| **Framework** | React 18 (`18.3.1`) | Functional components, Hooks |
| **Language** | TypeScript (`5.5.4`) | Strict typing, ES2020 target |
| **Build Tool** | Vite (`5.2.0`) | Lightning-fast HMR and bundling |
| **Styling** | Tailwind CSS (`3.4.17`) | Custom design tokens, PostCSS, Autoprefixer |
| **Animations** | `framer-motion` (`11.5.4`) | Layout transitions, staggered masks, whileInView |
| **Icons** | `lucide-react` (`0.522.0`) | Clean modern SVG icons |
| **Typography** | Google Fonts | `Montserrat` (300..700), `Mrs Saint Delafield` (cursive) |

---

## 4. Design System & Theme Tokens

Defined in [tailwind.config.js](file:///e:/md-redwan-portfolio/tailwind.config.js) and [src/index.css](file:///e:/md-redwan-portfolio/src/index.css):

### Colors
- **Paper (`#f9f9f8`):** Main light canvas background.
- **Ink (`#1b2340`):** Primary text and deep navy contrast.
- **Muted (`#5d6579`):** Secondary body text.
- **Subtle (`#8a91a3`):** Dividers, meta icons, and hints.
- **Line (`#e4e6ec`):** Borders and separation lines.
- **Mist (`#f3f4f7`) / Bone (`#eef0f5`):** Subtle card fills and chip backgrounds.
- **Accent (`#0e6b4f`) / Accent Light (`#6cc7a1`):** Deep emerald primary accent and vibrant mint highlight.
- **Night (`#121729`) / Night Line (`#262d45`) / Night Muted (`#a3aabd`):** Dark inverted cards (Expertise & Contact sections).

### Typography
- **Sans & Mono:** `Montserrat`, `ui-sans-serif`, `system-ui`, `sans-serif`
- **Signature:** `"Mrs Saint Delafield"`, `cursive`

### Shadows & Textures
- Shadows: `shadow-soft`, `shadow-soft-lg`, `shadow-panel`, `shadow-panel-hover`
- CSS textures: `.grid-texture` (subtle grid on dark cards), `.dot-texture` (diagram canvas)

---

## 5. Data Architecture & Types

All content is managed through [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts) using types defined in [src/types/portfolio.ts](file:///e:/md-redwan-portfolio/src/types/portfolio.ts):

- **`profile`**: Personal info (name, role, title, location, email, GitHub, LinkedIn, resume link, portrait URL).
- **`heroCopy`**: Hero greeting, intro with `**bold**` markup, and stats summary.
- **`navItems`**: Navigation links with `id`, `label`, and `primary` (shown in top bar vs 'More' dropdown).
- **`focusAreas`**: Top three technical disciplines.
- **`capabilities`**: Quantified engineering wins paired with project sources.
- **`projects`**: Project case studies:
  - `featured`: CampusCart (`campuscart`), Admission Test System (`admission-system`).
  - `secondary`: ZapShift (`zapshift`), Building Management System (`building-management`).
  - Each contains: `diagram` (layers with `nodes` and ownership: `'built'` | `'assisted'` | `'integrated'`), `flow`, `implemented` bullets, `stack` tags, and `links`.
- **`expertise`**: Categorized technical skills (Frontend, Backend, Database, Tools & Services).
- **`problemSolving`**: Competitive programming metrics (300+ problems on Codeforces & LeetCode).
- **`achievements`**: Awards and certifications.
- **`education`**: DIU degree info, CGPA 3.85 / 4.00, relevant coursework list.

---

## 6. Common Development Commands

Run from project root (`e:\md-redwan-portfolio`):

```bash
# Start local Vite development server
npm run dev

# Run TypeScript build with Vite
npm run build

# Preview production build locally
npm run preview

# Run ESLint validation
npm run lint
```

---

## 7. Current Project Status & Known Items to Address

1. **`src/data/projects.ts`**:
   - Currently an empty 0-byte file.
   - Recommended next step: Either extract project definitions from `src/data/portfolio.ts` into `src/data/projects.ts` for modularity, or re-export from it.
2. **Project Links**:
   - In `src/data/portfolio.ts`, projects currently have `links: []`.
   - Populating actual repository URLs or live deployments will automatically activate the interactive "Live Demo" and "GitHub" buttons in [ProjectLinks.tsx](file:///e:/md-redwan-portfolio/src/components/ProjectLinks.tsx).
3. **Resume Link**:
   - `profile.resume` is connected to `/projects/Resume/Md_Redwan_Resume (2).pdf` (and `/projects/Resume/Md_Redwan_Resume.pdf`). Configured with explicit `download="Md_Redwan_Resume.pdf"` on both Hero (`ActionLink`) and Contact CTA buttons to trigger instant direct downloads on click.
4. **Redundant Artifact**:
   - `src/package.json` exists as an leftover export file from Magic Patterns and is not used by Vite/Node.
5. **Assets & Hero Formation**:
   - Portrait image is served from `/public/hero-portrait.png` using the original `PortraitOrbit` canvas and ambient shadow.
   - The circular rotating badge has been removed as requested.
   - Hero copy beside the portrait is updated in `src/data/portfolio.ts` with the requested text while preserving the original design system, typography, divider line, and layout structure.
6. **Project UI Gallery & Image Slider (CampusCart Refinement)**:
   - Built [src/components/ProjectGallery.tsx](file:///e:/md-redwan-portfolio/src/components/ProjectGallery.tsx) with edge-to-edge layout, responsive aspect ratio (`16:10` on mobile, `2.1:1` on desktop), subtle circular left/right buttons, integrated bottom toolbar with slide counter (`1 / 4`), descriptive caption, and small clickable pagination dots with active emerald accent (`#0e6b4f`).
   - Saved 4 CampusCart screenshots to `public/projects/campuscart/` (`campuscart-1.png` through `campuscart-4.png`).
   - Saved official CampusCart logo to `public/projects/campuscart/logo.png`, rendered inside [CaseStudy.tsx](file:///e:/md-redwan-portfolio/src/components/CaseStudy.tsx) meta tile.
   - Updated CampusCart year to `2026` in [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts).
   - Integrated into [src/components/ProjectVisual.tsx](file:///e:/md-redwan-portfolio/src/components/ProjectVisual.tsx) with a tab switcher between live App Screenshots and System Architecture; removed external figcaption text and unnecessary padding gaps.
   - Provided active links for Live Demo (`https://campuscartdiu.com`) and GitHub (`https://github.com/Re1354`).
   - Calibrated typography: Set `SectionHeader` ("Engineering Capabilities", "Engineering Case Studies", etc.) to `font-semibold` (600) with `tracking-[-0.015em]` and deep navy ink (`#1b2340`) at a natural, balanced scale (`text-[1.85rem] sm:text-[2.25rem] md:text-[2.65rem]`), eliminating heavy/chunky bolding to match reference design.
   - Restored original Project card serial in [CaseStudy.tsx](file:///e:/md-redwan-portfolio/src/components/CaseStudy.tsx): Tile -> Title (`font-bold`, `text-[1.4rem] sm:text-[1.6rem]`) -> Role -> Divider -> Year / Role / Tagline, removing duplicate top tags.
7. **Admission Test Management System Updates**:
   - Saved DIU crest logo to `public/projects/admission-system/logo.png`, rendered inside [CaseStudy.tsx](file:///e:/md-redwan-portfolio/src/components/CaseStudy.tsx) meta tile.
   - Updated year to `2025 – Present (In Use)` in [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts).
   - Saved project poster to `public/projects/admission-system/poster.jpg`, integrated into `images` array with click-to-zoom Lightbox modal and smooth tab switcher.
   - Removed "soon" badge from inactive link buttons across [ProjectLinks.tsx](file:///e:/md-redwan-portfolio/src/components/ProjectLinks.tsx).
   - Cleared architecture diagram data and set the `Architecture` button in [ProjectVisual.tsx](file:///e:/md-redwan-portfolio/src/components/ProjectVisual.tsx) to a visible, non-functional disabled state (`disabled`, `cursor-not-allowed`).
8. **ZapShift Logistics Platform Updates**:
   - Extracted and saved the official lime-green hexagonal arrow logo to `public/projects/ZapShift/logo.png` rendered in the project meta tile.
   - Added active Live Demo link (`https://zapshift-client.vercel.app/`) and YouTube Video Demo link (`https://youtu.be/ub8DYkf8gBY?si=Io4s1iyKjIvyOFOF`).
   - Integrated full 11-slide screenshot gallery with interactive slider in [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts), strictly ordering `image3before3.png` after `image2.png` and before `image3.png`.
   - **Dual GitHub Repository Dropdown**: Supported multiple GitHub repos via optional `label` and `description` in [src/types/portfolio.ts](file:///e:/md-redwan-portfolio/src/types/portfolio.ts). Added animated dropdown menu in [src/components/ProjectLinks.tsx](file:///e:/md-redwan-portfolio/src/components/ProjectLinks.tsx) for projects with multiple repositories (Client Repo & Server Repo), with outside click and Escape key handling. Active links set for ZapShift Client (`https://github.com/Re1354/zapshift-client`) and Server (`https://github.com/Re1354/zapshift-server`).
   - Updated year to `2026` and role to `Full-Stack Developer`.
9. **Project Ordering & Building Management System Updates**:
   - Reordered project serials in [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts):
     - #1: **Admission Test Management System** (`index: '01'`)
     - #2: **CampusCart** (`index: '02'`)
     - #3: **ZapShift** (`index: '03'`)
     - #4: **Building Management System** (`index: '04'`)
   - Updated Building Management System year to `2025` and role to `Full-Stack Developer`.
   - Designed and integrated architectural black building icon in `public/projects/building-management/logo.svg`.
10. **Education Section Refinements**:
   - Integrated DIU crest logo (`/projects/admission-system/logo.png`) into [src/components/Education.tsx](file:///e:/md-redwan-portfolio/src/components/Education.tsx) tile.
   - Expanded relevant coursework list in [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts) with `Machine Learning`, `Computer Vision`, and `Engineering Economics`.
11. **Instant Contact & Messaging Enhancements**:
   - Added direct click-to-chat WhatsApp link (`https://wa.me/8801778106042`) and Telegram link (`https://t.me/+8801778106042`) to `profile`.
   - Updated [src/components/SocialButtons.tsx](file:///e:/md-redwan-portfolio/src/components/SocialButtons.tsx) to render WhatsApp and Telegram SVG buttons in both Hero and Contact sections.
   - Designed refined, understated WhatsApp and Telegram contact buttons in [src/components/Contact.tsx](file:///e:/md-redwan-portfolio/src/components/Contact.tsx) matching the dark theme (`border-night-line`, `bg-white/[0.03]`, brand color icons, phone number, and micro-hover transitions), complementing the primary email CTA with clean visual hierarchy.
12. **Technical Skills Rename & Engineering Focus Mobile Fix**:
   - Renamed "Technical Expertise" section title to "Technical Skills" in [src/components/Expertise.tsx](file:///e:/md-redwan-portfolio/src/components/Expertise.tsx).
   - Renamed navbar item from "Expertise" to "Skills" (`id: 'skills'`) in [src/data/portfolio.ts](file:///e:/md-redwan-portfolio/src/data/portfolio.ts) and added `skills: CpuIcon` to [src/components/navIcons.ts](file:///e:/md-redwan-portfolio/src/components/navIcons.ts).
   - Fixed mobile layout issue in [src/components/Focus.tsx](file:///e:/md-redwan-portfolio/src/components/Focus.tsx) where card text overflowed/went out on small screens: removed restrictive `whitespace-nowrap`, improved punctuation wrap break points, added `break-words`, and calibrated mobile card padding (`p-5 sm:p-7`) without modifying any other aspects of the section.

---

## 8. Agent Working Guidelines & Conventions

When modifying or expanding this codebase in future sessions, agents must adhere to the following rules:

1. **Maintain Type Safety**: Always update [src/types/portfolio.ts](file:///e:/md-redwan-portfolio/src/types/portfolio.ts) when adding fields or modifying data structures.
2. **Preserve Design Language**:
   - Stick to the configured palette (`paper`, `ink`, `accent`, `night`, `bone`, `mist`).
   - Use `Montserrat` for body/headings and `"Mrs Saint Delafield"` strictly for signature elements.
   - Use `<Reveal>` and `framer-motion` for new sections to keep transition styles uniform.
   - Always respect reduced motion settings via `useReducedMotion()`.
3. **Keep Copy Data-Driven**: Avoid hardcoding text directly into components; add content to `src/data/portfolio.ts` (or modular data files) and reference it.
4. **Verify Build Health**: Always run `npm run build` after making modifications to ensure strict TypeScript checks and bundler requirements are satisfied.
