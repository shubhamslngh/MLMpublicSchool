# 1. Theme Concept

MLM Public School uses a light neumorphism system built around white and soft blue-tinted surfaces, with `#0B2C6F` as the dominant academic color and `#F4B400` reserved for highlights. The overall direction is formal, spacious, and trustworthy.

# 2. Design Rules

- Use raised neumorphic shells for hero cards, academic blocks, gallery previews, and footer panels.
- Use inset neumorphic panels for notices, micro-stats, and supporting information blocks.
- Keep headings, icons, and navigation text in navy for maximum structure and readability.
- Use gold only for CTAs, dividers, badges, icon accents, and active directional cues.
- Maintain rounded `xl` to `2xl` corners with generous internal spacing.
- Keep shadows soft and blue-tinted so the interface feels refined rather than toy-like.
- Alternate white and soft-blue section backgrounds to create rhythm without visual noise.
- Preserve strong contrast for body text and action labels.

# 3. Tokens

## Color Tokens

```js
export const colors = {
  primaryNavy: '#0B2C6F',
  goldAccent: '#F4B400',
  white: '#FFFFFF',
  softBlueTint: '#EAF0FF',
  textDark: '#0F172A',
  mutedText: '#64748B',
  surface: '#F8FAFC',
  border: '#D7E0F0',
};
```

## Neumorphism Shadow System

```js
export const shadows = {
  raised: '-10px -10px 20px rgba(255,255,255,0.98), 14px 14px 28px rgba(166,180,212,0.32)',
  raisedSoft: '-8px -8px 18px rgba(255,255,255,0.88), 10px 10px 22px rgba(166,180,212,0.24)',
  inset: 'inset 5px 5px 12px rgba(184,198,225,0.32), inset -5px -5px 12px rgba(255,255,255,0.92)',
  press: 'inset 4px 4px 10px rgba(166,180,212,0.3), inset -4px -4px 10px rgba(255,255,255,0.9)',
};
```

## Typography Scale

```js
export const typeScale = {
  hero: 'text-4xl md:text-6xl leading-tight font-heading',
  h1: 'text-3xl md:text-5xl leading-tight font-heading',
  h2: 'text-2xl md:text-4xl leading-tight font-heading',
  h3: 'text-2xl font-heading',
  bodyLg: 'text-lg leading-8 font-sans',
  body: 'text-base leading-8 font-sans',
  bodySm: 'text-sm leading-7 font-sans',
  eyebrow: 'text-[11px] uppercase tracking-[0.28em] font-semibold',
};
```

## Spacing and Radius System

```js
export const layout = {
  sectionY: 'py-16 md:py-24',
  containerX: 'container px-4',
  cardPadding: 'p-6 md:p-8',
  cardPaddingLg: 'p-8 md:p-10',
  gap: 'gap-4 md:gap-6',
  radiusLg: 'rounded-xl',
  radiusXl: 'rounded-2xl',
};
```

## Button Variants

```js
export const buttons = {
  primary: 'button-primary bg-brand-navy text-white',
  secondary: 'button-secondary bg-brand-gold text-brand-ink',
  outline: 'button-outline border border-brand-gold/30 bg-white/90 text-brand-navy',
};
```

Interaction:
- Hover: slight lift, stronger raised shadow, subtle color shift.
- Pressed: inset shadow replaces outer shadow.
- CTA emphasis: gold icons or arrows inside navy buttons, not full gold sections.

## Card Variants

```js
export const cards = {
  raised: 'card-premium rounded-[2rem]',
  soft: 'neumo-surface-soft rounded-[2rem]',
  inset: 'card-pressed rounded-[2rem]',
  navyFeature: 'section-navy rounded-[2rem] text-white',
};
```

## Section Background Strategy

```js
export const sections = {
  hero: 'minimal-grid bg-[#f8fbff]',
  base: 'bg-transparent',
  tinted: 'section-tint',
  navy: 'section-navy text-white',
};
```

# 4. Tailwind Theme Setup Guidance

- Keep `brand.navy`, `brand.gold`, `brand.tint`, `brand.ink`, and `brand.muted` in `tailwind.config.js`.
- Add reusable shadows like `shadow-neumo`, `shadow-neumo-soft`, and `shadow-neumo-inset`.
- Use utility classes for repeated surface patterns:
  - `card-premium`
  - `card-pressed`
  - `button-primary`
  - `button-secondary`
  - `button-outline`
  - `section-tint`
  - `section-navy`
- For Next.js App Router, place global tokens in `app/globals.css` and section components under `components/home/*`.

# 5. Section-by-Section Homepage Plan

- Sticky navbar: logo-left, nav pill cluster, admissions CTA, mobile drawer.
- Hero: raised headline panel, image feature card, three support highlights.
- Principal message: leadership statement with a companion design-concept panel.
- About school: mission, trust pillars, campus imagery.
- Academics: three raised cards for learning stages and enrichment.
- Achievements / stats: dark navy contrast band with premium stat blocks.
- Gallery preview: tactile image cards with soft hover zoom.
- Notices / events: inset notice list with a supporting admissions panel.
- Admissions CTA: focused conversion section with two actions and office-hours reassurance.
- Footer: navy institutional footer with links and contact details.

# 6. Component Tree

```txt
src/components/home/Navbar.jsx
src/components/home/Hero.jsx
src/components/home/PrincipalMessage.jsx
src/components/home/AboutSection.jsx
src/components/home/AcademicsSection.jsx
src/components/home/StatsSection.jsx
src/components/home/GallerySection.jsx
src/components/home/EventsSection.jsx
src/components/home/AdmissionsCTA.jsx
src/components/home/Footer.jsx
src/components/home/NeumoCard.jsx
src/pages/HomePage.jsx
```

# 7. Sample JSX Code

## Navbar

```jsx
<header className="sticky top-0 z-50 border-b border-white/60 bg-[#f6f9ff]/85 backdrop-blur-xl">
  <nav className="container px-4 py-4">
    <div className="flex items-center justify-between gap-4">
      <Link to="/" className="group flex items-center gap-4">
        <div className="flex h-10 w-60 items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <img src="/MLMLogoBG.png" alt="MLM Public School full logo" className="h-full w-full object-cover" />
        </div>
      </Link>

      <div className="hidden items-center gap-1 rounded-full border border-white/70 bg-[#f8fbff] p-1.5 shadow-neumo-soft md:flex">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="rounded-full px-4 py-2 text-sm font-semibold text-brand-muted transition-all hover:bg-white hover:text-brand-navy">
            {link.name}
          </Link>
        ))}
      </div>

      <Link to="/admissions" className="button-secondary px-5 py-2.5 text-sm font-bold">
        Apply Now
      </Link>
    </div>
  </nav>
</header>
```

## Hero

```jsx
<section className="minimal-grid overflow-hidden border-b border-white/60">
  <div className="container px-4 py-10 md:py-16">
    <div className="grid gap-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
      <NeumoCard className="relative overflow-hidden px-8 py-10 md:px-12 md:py-14" size="lg">
        <p className="eyebrow mb-5">Premium academic identity</p>
        <div className="school-divider pb-5">
          <h1 className="text-4xl leading-tight text-brand-ink md:text-6xl">
            Modern schooling shaped by discipline, care, and confident academic growth.
          </h1>
        </div>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
          MLM Public School presents a calm, premium homepage language with light neumorphic depth and restrained gold accents.
        </p>
      </NeumoCard>
    </div>
  </div>
</section>
```

## Reusable Neumorphic Card

```jsx
import { cn } from '@/lib/utils';

const variants = {
  raised: 'card-premium',
  soft: 'neumo-surface-soft',
  inset: 'card-pressed',
  navy: 'section-navy text-white border border-white/10',
};

export default function NeumoCard({ as: Comp = 'div', variant = 'raised', className, children, ...props }) {
  return (
    <Comp className={cn('rounded-[2rem] p-6 md:p-8', variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
```
