# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a property booking platform built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. The project is currently in its initial setup phase with the default Next.js template structure.

## Development Commands

- `npm run dev` - Start the development server at http://localhost:3000
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint on the codebase

## Tech Stack

- **Framework**: Next.js 16.0.3 with App Router
- **React**: Version 19.2.0
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (via next/font)

## Project Structure

```
app/
├── layout.tsx       # Root layout with fonts and metadata
├── page.tsx         # Home page
├── globals.css      # Global styles with Tailwind directives
└── favicon.ico      # App icon

public/              # Static assets
```

## Architecture Notes

### Next.js App Router

This project uses the modern App Router (not Pages Router). All routes are defined in the `app/` directory using the file-system based routing.

### TypeScript Configuration

- Path alias `@/*` maps to the root directory for cleaner imports
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler

### Styling

- Tailwind CSS v4 with the new PostCSS plugin (`@tailwindcss/postcss`)
- Dark mode support built into the starter template
- Geist font family loaded and optimized via `next/font`

## ESLint Configuration

Uses Next.js recommended ESLint configs:

- `eslint-config-next/core-web-vitals`
- `eslint-config-next/typescript`

Ignores: `.next/`, `out/`, `build/`, `next-env.d.ts`

## Development Notes

### When Adding New Features

- Use TypeScript for all new files (`.ts` or `.tsx`)
- Follow the App Router conventions (Server Components by default)
- Use the `@/*` path alias for imports from the project root
- Maintain dark mode support when adding new UI components

### Image Optimization

Use Next.js `<Image>` component from `next/image` for optimized image loading.

### Font Usage

Fonts are pre-configured via CSS variables:

- `--font-geist-sans` - Main sans-serif font
- `--font-geist-mono` - Monospace font

### Code Quality & Best Practices

Write clean and modular code following Next.js 16 best practices:

- **Component Reusability**: Create components that can be reused across the application. Extract common UI patterns into separate components.
- **Maintainability**: Keep components focused on a single responsibility. Break down complex components into smaller, manageable pieces.
- **Server Components by Default**: Leverage React Server Components for better performance. Only use Client Components (`'use client'`) when necessary (interactivity, browser APIs, hooks).
- **Data Fetching**: Use async/await in Server Components for data fetching. Utilize Next.js caching strategies appropriately.
- **File Organization**: Group related components together. Consider creating feature-based directories when the app grows.
- **Type Safety**: Define proper TypeScript interfaces and types for props, API responses, and data structures.
- **Error Handling**: Implement proper error boundaries and loading states using `error.tsx` and `loading.tsx` files.
- **Performance**: Use Next.js `<Image>` for images, implement proper code splitting, and lazy load components when appropriate.

# Important Rules!

- Always use shadcn components over custom components
- Never create the components yourself, always install them using the install command:
  Example: pnpm dlx shadcn@latest add button
- Always use the standard tailwind and shadcn colors. Never use inline custom colors.
