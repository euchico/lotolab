---
name: LotoLab
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#40493d'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#707a6c'
  outline-variant: '#bfcaba'
  surface-tint: '#1b6d24'
  primary: '#0d631b'
  on-primary: '#ffffff'
  primary-container: '#2e7d32'
  on-primary-container: '#cbffc2'
  inverse-primary: '#88d982'
  secondary: '#4c616c'
  on-secondary: '#ffffff'
  secondary-container: '#cfe6f2'
  on-secondary-container: '#526772'
  tertiary: '#005a8c'
  on-tertiary: '#ffffff'
  tertiary-container: '#0073b2'
  on-tertiary-container: '#e9f2ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a3f69c'
  primary-fixed-dim: '#88d982'
  on-primary-fixed: '#002204'
  on-primary-fixed-variant: '#005312'
  secondary-fixed: '#cfe6f2'
  secondary-fixed-dim: '#b4cad6'
  on-secondary-fixed: '#071e27'
  on-secondary-fixed-variant: '#354a53'
  tertiary-fixed: '#cee5ff'
  tertiary-fixed-dim: '#96ccff'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#004a75'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-num:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 24px
  gutter: 16px
  margin-sm: 16px
  margin-md: 32px
  margin-lg: 48px
---

## Brand & Style
The design system is engineered for **LotoLab**, a sophisticated analytics platform that treats lottery data with the same rigor as financial market intelligence. The brand personality is professional, detached, and data-driven, eschewing the impulsive aesthetics of gambling in favor of a clinical, research-oriented environment.

The visual style is **Modern Corporate Minimalism**. It prioritizes high-density information display through significant whitespace, a disciplined color application, and a rigorous typographic hierarchy. The goal is to instill trust and provide clarity, ensuring that the user feels like a researcher rather than a gambler.

## Colors
The palette is rooted in functional neutrality to ensure data visualizations remain the focal point.

- **Primary:** A deep, professional Forest Green used sparingly for primary actions, focus states, and branding accents. It provides a subtle nod to the lottery sector while maintaining a financial-grade tone.
- **Backgrounds:** A strict hierarchy of whites and grays. Use `#FFFFFF` for the main content area, `#FAFAFA` for page backgrounds, and `#F5F5F5` for sidebar and navigation elements.
- **Typography:** Deep Charcoal (`#212121`) for headings and Slate Gray (`#424242`) for body text to ensure maximum legibility and reduced eye strain during long analytical sessions.
- **Semantic:** Standard utility colors for status indicators: Success (`#388E3C`), Warning (`#FFA000`), Error (`#D32F2F`), and Info (`#1976D2`).

## Typography
This design system utilizes **Inter** for all UI and editorial content due to its exceptional legibility in dashboard environments. To emphasize the technical nature of the platform, **JetBrains Mono** is used for small labels, metadata, and technical readouts (e.g., timestamps or raw frequency counts).

Maintain a tight vertical rhythm. Large headlines should use tighter letter-spacing to feel more "constructed." Data points and numbers within lottery balls should use the `data-num` style to ensure they remain centered and prominent within their circular containers.

## Layout & Spacing
The layout follows a **Fluid Grid** model with fixed maximum widths for content readability.

- **Desktop:** 12-column grid, 24px gutters, 48px side margins.
- **Tablet:** 8-column grid, 16px gutters, 24px side margins.
- **Mobile:** 4-column grid, 16px gutters, 16px side margins.

The spacing rhythm is strictly based on an 8px increment system. Use 24px padding for `MatCard` containers to provide breathing room for complex data tables and charts. Dashboard widgets should use a consistent 16px gap.

## Elevation & Depth
To maintain a clean, "scientific" appearance, depth is conveyed through **low-contrast outlines** and **tonal layers** rather than heavy shadows.

- **Surface 0 (Background):** `#FAFAFA`
- **Surface 1 (Cards/Tables):** `#FFFFFF` with a 1px border of `#E0E0E0`.
- **Raised State:** Use an extremely soft, diffused shadow (`0 4px 12px rgba(0,0,0,0.05)`) only for floating elements like menus or active selection cards.
- **Z-Axis Hierarchy:** The `MatSidenav` and `MatToolbar` sit on the lowest elevation tier to feel integrated into the application frame.

## Shapes
The design system employs a **Soft** shape language to balance the clinical feel with modern approachability.

- **Standard Elements:** 4px (0.25rem) radius for buttons, input fields, and small UI components.
- **Containers:** 8px (0.5rem) radius for `MatCard` and dialogs.
- **Lottery Numbers:** These are the only strictly circular elements (50% radius/pill) to distinguish them as primary data objects.

## Components
Components are based on **Angular Material** patterns, customized for high-density analytics.

- **MatButton:** Use `mat-flat-button` for primary actions to avoid unnecessary shadow depth. The primary green should be the default background.
- **MatTable:** Remove outer borders; use horizontal dividers only (`1px solid #EEEEEE`). Header cells should use the `label-md` typographic style in uppercase.
- **MatCard:** Use a simple 1px border (`#E0E0E0`) instead of the default shadow to keep the dashboard flat and professional.
- **Lottery Indicators:** Create a custom component for lottery balls—perfect circles with a white background and a 1px `primary` or `neutral` border, containing `data-num` centered text.
- **MatInput:** Use the "outline" appearance with a 4px corner radius. Focus states should use a 2px `primary_color` border.
- **Data Visualizations:** Use a palette of Secondary, Tertiary, and Semantic colors for charts. Avoid using the primary green for non-critical data to prevent "visual noise."