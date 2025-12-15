# Blog-LOL Project Rules

## Project Overview

- **Project Name**: blog-lol
- **Description**: Personal blog built with modern web stack
- **Owner**: micael17

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Astro 5.x |
| **UI Library** | React 19 |
| **Styling** | Tailwind CSS 4 |
| **Language** | TypeScript (strict) |
| **Runtime** | Bun (NOT Node.js) |
| **Deployment** | Cloudflare Pages |

## Repository & Deployment

- **GitHub**: https://github.com/micael17/blog-lol.git
- **Production URL**: https://blog-lol.pages.dev
- **Local Path**: /Users/jihongkim/Documents/workspace/blog-lol

## Cloudflare Pages Settings

```yaml
Build command: bun run build
Build output directory: dist
```

## Development Commands

```bash
# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
blog-lol/
├── src/
│   ├── components/    # Astro & React components
│   ├── content/       # Blog posts (MDX/Markdown)
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   └── styles/        # Global CSS (Tailwind)
├── public/            # Static assets
├── astro.config.mjs   # Astro configuration
└── package.json
```

## Coding Guidelines

### AI Development Preferences
- User prefers AI-assisted development
- Use React + Tailwind for best AI code generation quality
- Keep components simple and well-typed

### Style Conventions
- Use Tailwind CSS utility classes
- React components for interactive parts only (Astro Islands)
- TypeScript strict mode enabled

### Package Manager
- **Always use `bun`** instead of `npm`, `yarn`, or `pnpm`
- Install: `bun install` or `bun add <package>`
- Run scripts: `bun run <script>`

## Content

- Blog posts go in `src/content/blog/`
- Use MDX format for posts with React components
- Use Markdown for simple posts

## Notes

- Cloudflare Pages UI updated in 2025: Pages option is hidden under Workers & Pages
- Domain format: `*.pages.dev` (not `*.workers.dev`)
