# kenhuang.dev

Personal portfolio and blog of **Ken Huang** — Product Designer, Frontend Developer & Amateur Indie Dev based in Taipei, Taiwan.

15+ years of experience building products across APAC.

Live site: [kenhuang.dev](https://kenhuang.dev)

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) with Turbopack |
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) + JavaScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [SASS](https://sass-lang.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Content | [MDX](https://mdxjs.com/) via `next-mdx-remote` + `gray-matter` |
| Icons | [Lucide React](https://lucide.dev/) |
| UI Primitives | [Radix UI](https://www.radix-ui.com/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## Getting Started

Install dependencies:

```bash
yarn install
```

Start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start development server (Turbopack) |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |
| `yarn lint:fix` | Run ESLint with auto-fix |
| `yarn typecheck` | Run TypeScript type check |

---

## Project Structure

```
├── components/          # Reusable UI components
│   ├── SiteHeader.tsx   # Site navigation header
│   ├── SiteFooter.tsx   # Site footer
│   ├── SiteLayout.tsx   # Page layout wrapper
│   ├── ArticleLayout.jsx# Blog article layout
│   ├── MegaMan.jsx      # Mega Man character animation
│   └── ...
├── constants/           # Site-wide constants (meta, config, theme)
├── content/
│   └── articles/        # Blog articles in MDX format
├── contexts/            # React context providers
├── data/                # Static data (articles, portfolio)
├── lib/
│   └── mdx.js           # MDX parsing utilities
├── pages/               # Next.js pages (file-based routing)
│   ├── index.jsx        # Homepage
│   ├── about.jsx        # About page
│   ├── contact.jsx      # Contact page
│   ├── mentorship.jsx   # Mentorship page
│   ├── articles/        # Blog (index + dynamic [slug])
│   └── portfolio/       # Portfolio case studies
├── public/              # Static assets (images, fonts)
├── styles/              # Global styles
└── utils/               # Utility functions
```

---

## Content

### Articles

Blog articles are written in MDX and stored in `content/articles/`. Each file uses frontmatter for metadata:

```mdx
---
title: "Article Title"
date: "2026-01-01"
category: "travel"
description: "Short description"
---

Article content here...
```

### Portfolio

Portfolio case studies are defined in `data/portfolio.js` and rendered as individual pages under `pages/portfolio/`.

---

## License

© Ken Huang. All rights reserved.
