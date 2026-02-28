# Five Star Line Striping - Website

## Overview
A marketing website for Five Star Line Striping, a parking lot line striping company based in Utah.

## Tech Stack
- **Frontend**: React 19, Tailwind CSS v4, Wouter routing, TanStack React Query
- **Backend**: Express 5, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **UI**: shadcn/ui components (heavily customized)

## Architecture
- `client/` - Frontend React app
  - `src/pages/home.tsx` - Main landing page
  - `src/components/quote-form.tsx` - Quote request form with validation
  - `src/components/ui/` - shadcn/ui components (custom painted-edge button style)
  - `src/index.css` - Design system (dark theme, safety yellow primary, asphalt texture)
- `server/` - Express backend
  - `routes.ts` - API routes (`POST /api/quote-requests`)
  - `storage.ts` - Database storage interface using Drizzle
  - `db.ts` - Database connection
- `shared/schema.ts` - Drizzle schema (quoteRequests table)

## Design System
- **Theme**: Dark asphalt + safety yellow (industrial/rugged feel)
- **Fonts**: Outfit (display), Inter (body)
- **Custom CSS**: painted-edge buttons, horizontal dashed line dividers, asphalt texture background
- **Logo**: Yellow star (`attached_assets/StarYellow_1772248806006.png`)

## Contact Info
- **Company**: Five Star Line Striping
- **Phone**: 801-885-8316
- **Email**: fivestarlinestripingutah@gmail.com

## Database Tables
- `quote_requests`: id, name, email, phone, service, message, created_at
