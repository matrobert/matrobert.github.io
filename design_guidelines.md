# Design Guidelines: Academic Portfolio Website

## Design Approach: Minimal Academic Elegance

**Philosophy:** This portfolio follows a content-first, academically-focused design approach inspired by professional researcher portfolios at institutions like MIT, Stanford, and Oxford. The design prioritizes clarity, readability, and intellectual sophistication over visual flair.

**Key Principles:**
- Information hierarchy that guides readers from introduction → research → writing
- Generous whitespace for breathing room and focus
- Professional typography that enhances readability
- Subtle sophistication without distraction

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- Background: 0 0% 100% (pure white)
- Surface: 0 0% 98% (subtle off-white for cards)
- Text Primary: 0 0% 13% (near black for body text)
- Text Secondary: 0 0% 40% (medium gray for meta info)
- Accent: 221 83% 53% (refined blue for links and CTAs)
- Border: 0 0% 90% (subtle dividers)

**Dark Mode:**
- Background: 0 0% 7% (deep charcoal)
- Surface: 0 0% 11% (slightly elevated panels)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 65% (muted gray)
- Accent: 217 91% 60% (lighter blue for contrast)
- Border: 0 0% 20% (subtle dividers)

### B. Typography

**Font Stack:**
- Headings: 'Inter' or 'IBM Plex Sans' - clean, modern sans-serif
- Body: 'Inter' or 'Source Sans Pro' - excellent readability
- Academic Context (Publications): 'Georgia' or 'Merriweather' - serif for credibility

**Scale:**
- Hero Heading: text-5xl md:text-6xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Subsection: text-xl md:text-2xl font-medium
- Body: text-base md:text-lg leading-relaxed
- Publication Titles: text-lg font-medium
- Meta Info: text-sm text-secondary

### C. Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 md:p-8
- Section spacing: py-16 md:py-24
- Card gaps: gap-8 md:gap-12
- Generous margins for readability

**Container Strategy:**
- Max-width: max-w-4xl (focused reading width for academic content)
- Publications section: max-w-5xl (slightly wider for metadata)
- Full sections: w-full with centered max-w containers

---

## Page Structure & Sections

### 1. Hero Section (Above Fold)
**Layout:** Clean, centered introduction with professional headshot
- Circular or rounded-square profile image (w-32 md:w-40)
- Name as primary heading
- Current position/affiliation subtitle
- Brief 2-3 sentence bio highlighting research focus
- Research interests as pills/tags
- Primary CTA: "View Publications" + "Download CV" buttons
**Height:** Natural content height (not forced viewport)

### 2. About Section
- Expanded biography (2-3 paragraphs)
- Research interests and methodologies
- Academic background highlights
- Contact email and social links (Google Scholar, LinkedIn, Twitter/X)

### 3. Publications Section (Google Scholar Integration)
**Display Strategy:**
- Chronological list with year groupings
- Each publication card includes:
  - Paper title (linked, prominent)
  - Authors list (bold your name)
  - Venue/Journal with year
  - Citation count badge
  - Links: PDF, DOI, Google Scholar, BibTeX
- Filter options: By year, by type (Journal/Conference/Preprint)
- Search functionality for large publication lists

**Card Design:**
- Clean white/dark cards with subtle borders
- Hover state: subtle shadow elevation
- Consistent padding (p-6)
- Icon indicators for paper type

### 4. Writing Section (Substack Showcase)
**Layout:** Featured articles grid (2-column on desktop, 1 on mobile)
- Article preview cards with:
  - Title (text-xl font-semibold)
  - Publication date and read time
  - Excerpt (2-3 sentences)
  - "Read on Substack" CTA link
- Link to full Substack at section end

### 5. CV Download Section
- Prominent download card with:
  - Document preview icon
  - "Curriculum Vitae" heading
  - Last updated date
  - File size indicator
  - Primary download button
  - Alternative: "View Online" option

### 6. Footer
- Copyright and last updated
- Quick navigation links
- Professional social links
- Contact email

---

## Component Library

### Cards
- Publications: Bordered cards with hover elevation
- Writing previews: Minimal cards with bottom border
- CV download: Highlighted card with accent border

### Buttons
- Primary: Solid accent color, rounded-md
- Secondary: Outline with accent border
- Text links: Underline on hover, accent color

### Navigation
- Sticky top navigation on scroll
- Logo/Name on left, menu items on right
- Mobile: Hamburger menu with slide-out
- Dark mode toggle in header

---

## Images

**Profile Photo:**
- Location: Hero section, centered above name
- Style: High-quality professional headshot, circular or rounded-lg
- Size: 160px × 160px (desktop), 128px × 128px (mobile)
- Treatment: Subtle shadow, bordered

**Optional Research Visuals:**
- Small thumbnail images for key publications (if available)
- Placed to the left of publication title on desktop
- Size: 80px × 80px, rounded corners

**No large hero background image** - keep focus on content and professionalism

---

## Accessibility & Polish

- WCAG AA contrast ratios throughout
- Focus states on all interactive elements
- Smooth transitions (transition-colors duration-200)
- Responsive typography scale
- Skip-to-content link for keyboard navigation
- Semantic HTML structure for screen readers

**Animation Philosophy:** Minimal and purposeful
- Smooth page transitions
- Subtle hover elevations on cards
- Fade-in on scroll for sections (very subtle)
- No distracting motion