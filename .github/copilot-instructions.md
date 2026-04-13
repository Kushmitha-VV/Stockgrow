# GitHub Copilot Instructions for StockGrow

## Project overview

This is a Next.js 16 application using the App Router and TypeScript. It is a frontend-only project with a landing page and a dashboard experience. The UI uses Tailwind CSS v4, custom shared UI primitives in `components/ui/`, and a component-driven structure under `components/landing/` and `components/dashboard/`.

## Key architecture

- `app/` contains App Router-based routes and layouts.
- `app/layout.tsx` is the root layout for shared HTML/head metadata and global styling.
- `app/(dashboard)/layout.tsx` wraps authenticated/dashboard subroutes with a sidebar layout.
- `components/ui/` holds reusable primitives and design system components.
- `components/landing/` contains landing page sections.
- `components/dashboard/` contains dashboard-specific cards, charts, and navigation.
- `hooks/` and `lib/` contain shared hooks/utilities.

## Package manager and commands

Use `pnpm` for installs and local tasks.

- Install dependencies: `pnpm install`
- Run development server: `pnpm dev`
- Build production app: `pnpm build`
- Start production server: `pnpm start`
- Run linting: `pnpm lint`

## What to focus on

- Keep work within the Next.js App Router conventions.
- Preserve server/client boundaries: components are server by default unless `"use client"` appears.
- Use absolute imports with `@/` as in existing files.
- Match the existing Tailwind utility style and the current UI component API.
- Use the shared `components/ui/` primitives for buttons, cards, forms, overlays, and navigation patterns.
- Keep new UI consistent with the `StockGrow` branding and page hierarchy.

## Helpful context

- Root metadata and font loading live in `app/layout.tsx`.
- The landing page is assembled in `app/page.tsx` from `components/landing/*`.
- Dashboard pages are under `app/(dashboard)/`, with the sidebar layout in `app/(dashboard)/layout.tsx`.
- The project currently does not include an API layer or database logic inside this repository.

## Example prompts

- "Help me add a new testimonials section to the landing page using the existing `components/ui/card` style."
- "Refactor `components/dashboard/sidebar.tsx` to improve mobile menu accessibility and state handling."
- "Create a new dashboard route at `/reports` using the current layout and sidebar navigation."
- "Update the login page to use `react-hook-form` and the shared `components/ui/input` and `components/ui/button` components."

## When not to do this

- Don’t add a separate backend service or database unless the repository already contains server/API code.
- Don’t change `next.config.mjs` to disable App Router or remove existing feature flags without a clear reason.
- Don’t introduce a different styling system; continue using Tailwind CSS and the existing utility-first approach.
