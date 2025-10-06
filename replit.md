# Academic Landing Page

## Overview
A simple, clean landing page for an academic professional featuring:
- Publications (linking to Google Scholar)
- Writing (linking to Substack - coming soon)
- CV Download

## Recent Changes
- Simplified from a complex multi-section website to a minimal landing page with three main cards
- Removed complex navigation, about section, and individual component sections
- Implemented clean card-based design with hover effects
- Added dark/light theme toggle

## Project Architecture
- **Frontend**: React + TypeScript with Vite
- **Backend**: Express.js (minimal, mainly for serving)
- **Styling**: Tailwind CSS with custom theme variables
- **Components**: Shadcn UI components (Card, Button, Avatar, Badge)
- **Theme**: Context-based theme provider with localStorage persistence

## Key Files
- `client/src/pages/Home.tsx` - Main landing page
- `client/src/hooks/use-theme.tsx` - Theme management hook
- `client/src/App.tsx` - App wrapper with providers
- `client/src/index.css` - Theme variables and custom styles

## User Preferences
- Keep the design simple and minimal
- Focus on three main sections: Publications, Writing, CV
- Use placeholder text for "coming soon" features
