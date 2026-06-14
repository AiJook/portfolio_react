---
name: Lumina Engineering
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#191b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2ec'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e1e2ec'
  inverse-on-surface: '#2e3038'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#10131a'
  on-background: '#e1e2ec'
  surface-variant: '#32353c'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is engineered to project a "Technical Premium" aesthetic, blending the precision of high-end developer tools with the editorial elegance of modern design platforms. It targets a sophisticated audience of hiring managers and tech collaborators who value clarity, performance, and attention to detail.

The visual narrative is a fusion of **Minimalism** and **Glassmorphism**. It utilizes a deep, monochromatic foundation punctuated by high-energy accents. Key characteristics include:
- **Atmospheric Depth:** Layering through transparency and backdrop blurs to create a sense of three-dimensional space.
- **Precision Engineering:** Subtle borders and strict grid alignment that mimic professional IDEs.
- **Dynamic Interaction:** Soft transitions and high-fidelity hover states that provide immediate tactile feedback.

## Colors

The palette is optimized for a deep-space dark mode experience. The primary background provides a high-contrast base for the vibrant blue-to-indigo accents. 

- **Primary & Secondary:** Used for high-priority actions, active states, and focus indicators.
- **Accent (Cyan):** Reserved for technical highlights, success states, or code-specific metadata.
- **Surface Hierarchy:** The surface color (#1E293B) is used for cards and elevated containers to differentiate them from the deep background.
- **Gradients:** Use linear gradients from Primary to Secondary at 45-degree angles for high-impact headers or call-to-action buttons.

## Typography

This design system utilizes Geist for its technical, mono-inspired terminals and clean sans-serif readability. 

- **Display Text:** Large headings should use tight letter spacing and a bold weight to command attention.
- **Body Copy:** Maintains a generous line height for maximum legibility against dark backgrounds.
- **Labels:** Used for badges, tags, and small metadata. These should often be paired with the Muted Text color or the Accent color for categorization.

## Layout & Spacing

The layout follows a **Fixed Grid** model for desktop and a fluid, single-column model for mobile.

- **Desktop:** 12-column grid with a maximum width of 1200px. Sections are separated by `xl` spacing to create an editorial, airy feel.
- **Tablet:** 8-column grid with `md` margins.
- **Mobile:** 4-column grid with `sm` margins.
- **Rhythm:** All spacing is based on a 4px or 8px scale to ensure mathematical harmony across all components.

## Elevation & Depth

Hierarchy is established through "Glassmorphism" and subtle tonal layering rather than heavy shadows.

- **Level 0 (Background):** Base #0F172A.
- **Level 1 (Cards):** Surface #1E293B with a 1px border of #F8FAFC at 10% opacity.
- **Level 2 (Navigation):** Backdrop-blur (12px) with a semi-transparent surface (#1E293B at 70% opacity).
- **Shadows:** Use a single, very soft ambient shadow for floating elements: `0 20px 40px rgba(0, 0, 0, 0.4)`. 
- **Inner Glow:** Elements like buttons or active cards should have a subtle top-down inner highlight to simulate a physical edge.

## Shapes

The design system uses a progressive roundedness scale to feel modern and friendly yet structured.

- **Standard Elements:** Buttons and small inputs use `rounded-lg` (1rem).
- **Large Elements:** Project cards and main containers use `rounded-xl` (1.5rem) or `2xl` (2rem) to create a soft, premium container feel.
- **Interactive States:** Hovering over a card should trigger a slight scale increase (1.02x) paired with a border-color shift to the Primary Blue.

## Components

### Buttons
- **Primary:** Gradient background (Primary to Secondary), white text, no border.
- **Ghost:** Transparent background, 1px border (#F8FAFC at 20%), Primary color text on hover.

### Project Cards
- **Construction:** Surface background, `rounded-xl` corners, 1px subtle border.
- **Interaction:** On hover, the border brightens to #3B82F6 and a subtle glow appears behind the card. Use a masked image at the top with a soft fade into the surface color.

### Badges / Chips
- **Style:** Small, `rounded-full` (pill), low-opacity background of the Accent color (e.g., Cyan at 10%) with solid color text. Use for tech stack tags (e.g., "React", "TypeScript").

### Input Fields
- **Style:** Background same as Surface, `rounded-lg`, subtle 1px border. Focus state triggers a 2px Primary Blue border and a soft outer glow.

### Sticky Navigation
- **Style:** Centered floating pill or full-width top bar with `backdrop-filter: blur(12px)`. Use a 1px bottom border at low opacity for definition.

### Decorative Elements
- **Glows:** Large, low-opacity radial gradients (Primary/Secondary) placed behind key sections to create an "aura" effect, keeping the background from feeling flat.