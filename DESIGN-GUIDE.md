# 🎨 Teatime Treasures - Design System Guide

Complete design specifications for maintaining visual consistency across the Teatime Treasures website.

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Layout & Spacing](#layout--spacing)
5. [Components](#components)
6. [Animation & Motion](#animation--motion)
7. [Responsive Design](#responsive-design)
8. [Accessibility Guidelines](#accessibility-guidelines)

---

## 🎯 Design Philosophy

### Core Principles

**1. Warmth & Comfort**
- The design evokes the feeling of a cozy afternoon tea time
- Warm earth tones and soft textures create an inviting atmosphere
- Every element should feel handcrafted and intentional

**2. Minimalist Elegance**
- Generous whitespace allows content to breathe
- Clean lines and simple shapes avoid visual clutter
- Each element serves a clear purpose

**3. Emotional Connection**
- Typography and copy speak directly to the heart
- Product cards emphasize benefits over features
- Call-to-actions are encouraging, not pushy

**4. Craft & Quality**
- Details matter: subtle shadows, refined hover states
- Serif fonts signal timelessness and care
- Nothing feels "mass-produced" or generic

---

## 🎨 Color System

### Primary Palette

**Primary Brown - `#8B6F47`**
- **Usage**: Main brand color, primary buttons, headings, navigation
- **Psychology**: Trust, reliability, earthiness, natural
- **Accessibility**: Passes WCAG AA on white backgrounds (4.6:1 ratio)

**Primary Light - `#A68A64`**
- **Usage**: Hover states, lighter accents
- **Pair with**: White, cream backgrounds

**Primary Dark - `#6B5437`**
- **Usage**: Dark mode accents, button hover states
- **Pair with**: Light backgrounds for high contrast

### Accent Palette

**Accent Tan - `#D4A574`**
- **Usage**: Secondary elements, decorative borders, highlights
- **Psychology**: Warmth, comfort, approachability
- **Accessibility**: Use on dark backgrounds only (not sufficient contrast on white)

**Accent Light - `#E8D5C4`**
- **Usage**: Background tints, subtle highlights, product badges
- **Perfect for**: Creating depth without harshness

**Accent Dark - `#B8915F`**
- **Usage**: Links, interactive elements, emphasized text
- **Pair with**: White, cream backgrounds

### Background Palette

**Main - `#FFFBF7`** (Warm Off-White)
- **Usage**: Primary page background
- **Why**: Softer than pure white, reduces eye strain, feels warm

**Secondary - `#F9F6F2`** (Light Cream)
- **Usage**: Alternating sections, cards, modals
- **Creates**: Subtle depth and visual hierarchy

**Tertiary - `#F5F1ED`** (Soft Beige)
- **Usage**: Nested elements, inactive states, subtle borders
- **Creates**: Layered depth in complex layouts

### Text Palette

**Primary - `#2C2416`** (Deep Brown-Black)
- **Usage**: Main body text, headings, navigation
- **Contrast Ratio**: 15.5:1 on white (WCAG AAA)
- **Why**: Easier on eyes than pure black, maintains brand warmth

**Secondary - `#5A4A3A`** (Medium Brown)
- **Usage**: Supporting text, descriptions, labels
- **Contrast Ratio**: 8.5:1 on white (WCAG AAA)
- **When to use**: Less critical information, captions

**Light - `#7A6A5A`** (Light Brown-Gray)
- **Usage**: Placeholders, disabled states, subtle labels
- **Contrast Ratio**: 5.2:1 on white (WCAG AA)
- **When to use**: Metadata, timestamps, helper text

### Semantic Colors

**Success - Primary (`#8B6F47`)**
- Form submission confirmation
- Positive feedback messages

**Error - `#C44536`** (Warm Red)
- Form validation errors
- Warning messages
- Use sparingly to maintain brand warmth

### Using Colors Effectively

**Do:**
✅ Use primary brown for most interactive elements
✅ Use warm backgrounds to create depth
✅ Test contrast ratios for all text
✅ Use accent colors sparingly for emphasis

**Don't:**
❌ Mix cool grays with warm palette
❌ Use accent tan for text on white (insufficient contrast)
❌ Add colors outside the defined palette
❌ Use pure black or pure white (breaks warmth)

---

## ✍️ Typography

### Font Families

**Display Font: Cormorant Garamond**
- **Type**: Serif, elegant, classical
- **Weights**: 300 (Light), 400 (Regular), 600 (Semibold)
- **Usage**: 
  - Hero headlines
  - Section titles
  - Logo
  - Pull quotes
- **Character**: Refined, literary, timeless
- **Web-safe fallback**: `Georgia, serif`

**Body Font: Lora**
- **Type**: Serif, readable, literary
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold)
- **Usage**:
  - Body text
  - Descriptions
  - UI elements
  - Form inputs
- **Character**: Warm, approachable, professional
- **Web-safe fallback**: `Georgia, serif`

### Type Scale

**Hero Title**
```css
font-family: Cormorant Garamond;
font-size: clamp(3rem, 8vw, 6rem);  /* 48px - 96px */
font-weight: 300;
line-height: 1.1;
letter-spacing: 0.01em;
```

**Section Title**
```css
font-family: Cormorant Garamond;
font-size: clamp(2rem, 4vw, 3rem);  /* 32px - 48px */
font-weight: 400;
line-height: 1.2;
letter-spacing: 0.02em;
```

**Product Title / H3**
```css
font-family: Cormorant Garamond;
font-size: 1.4rem;  /* 22.4px */
font-weight: 600;
line-height: 1.3;
```

**Body Text / Paragraph**
```css
font-family: Lora;
font-size: 1rem;  /* 16px */
font-weight: 400;
line-height: 1.7;
letter-spacing: 0.01em;
```

**Small Text / Captions**
```css
font-family: Lora;
font-size: 0.9rem;  /* 14.4px */
font-weight: 400;
line-height: 1.5;
color: var(--color-text-light);
```

### Typography Best Practices

**Hierarchy:**
1. Use size, weight, and color to establish clear hierarchy
2. Maximum 3 heading levels on any page
3. Maintain consistent spacing between elements

**Readability:**
- Line length: 50-75 characters (optimal: 66)
- Line height: 1.5-1.7 for body text
- Paragraph spacing: 1em minimum
- Never use all-caps for more than 4 words

**Accessibility:**
- Minimum font size: 14px (0.875rem)
- All text meets WCAG AA contrast requirements
- Allow user font-size scaling up to 200%

---

## 📐 Layout & Spacing

### Container Widths

**Main Content Container**
```css
max-width: 1200px;
margin: 0 auto;
padding: 0 var(--space-md);  /* 24px horizontal padding */
```

**Narrow Content (About text, forms)**
```css
max-width: 800px;
margin: 0 auto;
```

**Wide Content (Product grids)**
```css
max-width: 1400px;
margin: 0 auto;
```

### Spacing Scale

Teatime Treasures uses a consistent spacing system based on multiples of 8px:

```css
--space-xs: 0.5rem;   /* 8px  - Tight spacing, icon gaps */
--space-sm: 1rem;     /* 16px - Default gaps, small padding */
--space-md: 1.5rem;   /* 24px - Medium padding, content gaps */
--space-lg: 2.5rem;   /* 40px - Large padding, section spacing */
--space-xl: 4rem;     /* 64px - Extra large spacing */
--space-xxl: 6rem;    /* 96px - Section padding (desktop) */
```

### Spacing Usage Guide

**Micro Spacing (8px)**
- Icon to text gaps
- Button icon spacing
- Form element inner spacing

**Small Spacing (16px)**
- Between related elements
- Card internal padding (mobile)
- List item gaps

**Medium Spacing (24px)**
- Between unrelated elements
- Container horizontal padding
- Card internal padding (desktop)

**Large Spacing (40px)**
- Between component groups
- Column gaps in grids
- Form field spacing

**XL Spacing (64px)**
- Between major sections (mobile)
- Large component separation

**XXL Spacing (96px)**
- Section padding (desktop)
- Major visual breaks

### Grid System

**Product Cards Grid**
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: var(--space-lg);  /* 40px */
```

**Two-Column Layout (About, Contact)**
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: var(--space-xl);  /* 64px */

@media (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: var(--space-lg);
}
```

**Footer Links**
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: var(--space-lg);
```

### Responsive Behavior

**Mobile First Approach:**
- Base styles for mobile (320px+)
- Add complexity as screen size increases
- Simplify layouts on small screens

**Breakpoint Strategy:**
```css
/* Base: Mobile styles */

@media (min-width: 768px) {
  /* Tablet: Add columns, increase spacing */
}

@media (min-width: 1024px) {
  /* Desktop: Maximum complexity */
}
```

---

## 🧩 Components

### Navigation Bar

**Structure:**
- Fixed position at top
- Transparent background with backdrop blur
- Smooth scroll to sections
- Mobile hamburger menu

**Styling:**
```css
Background: rgba(255, 251, 247, 0.95) + backdrop-filter: blur(10px)
Height: ~70px
Shadow: Subtle, increases on scroll
```

**Behavior:**
- Active link highlighting based on scroll position
- Smooth collapse/expand on mobile
- Hover underline animation on desktop

### Buttons

**Primary Button**
```css
Background: var(--color-primary)
Color: white
Padding: 0.875rem 2rem
Border-radius: 8px
Hover: Lift up 2px, increase shadow
```

**Secondary Button**
```css
Background: transparent
Border: 2px solid var(--color-primary)
Color: var(--color-primary)
Hover: Fill with primary color, text turns white
```

**States:**
- Default: Solid color / outlined
- Hover: Transform, shadow increase
- Active: Slight scale down (0.98)
- Disabled: 50% opacity, no pointer events

### Product Cards

**Structure:**
```
┌─────────────────┐
│  Product Image  │
│   (1:1 ratio)   │
├─────────────────┤
│  Product Title  │
│  Description    │
│  Link →         │
└─────────────────┘
```

**Styling:**
- White background
- Rounded corners (16px)
- Box shadow (subtle)
- Hover: Lift 8px, increase shadow

**Badges:**
- Position: Top-right corner
- Padding: 0.4rem 0.8rem
- Border-radius: 20px
- Font-size: 0.75rem, uppercase

### Forms

**Input Fields:**
```css
Border: 2px solid var(--color-border)
Padding: 0.875rem 1rem
Border-radius: 8px
Font: Lora, 1rem

Focus State:
  Border: var(--color-accent)
  Background: white
  Outline: none
```

**Labels:**
- Font-weight: 600
- Margin-bottom: 0.5rem
- Color: Primary text

**Error States:**
- Border: Red
- Helper text: Red, 0.85rem
- Icon: ⚠️ inline

### Social Icons

**Styling:**
```css
Size: 44x44px (touch-friendly)
Background: Light tertiary
Border-radius: 50%
Color: Primary

Hover:
  Background: Primary
  Color: White
  Transform: translateY(-3px)
  Shadow: Medium
```

---

## ⚡ Animation & Motion

### Animation Principles

**Purpose-Driven:**
- Every animation has a reason
- Enhance usability, not distract
- Confirm actions, guide attention

**Timing:**
- Fast: 0.2s - 0.3s (micro-interactions)
- Medium: 0.3s - 0.5s (standard transitions)
- Slow: 0.5s - 0.8s (page load animations)

**Easing:**
```css
--transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animation Inventory

**Hero Title Cascade**
```css
Animation: Slide up + fade in
Duration: 0.8s
Stagger: 0.2s per line
Easing: ease-out
```

**Scroll Indicator Bounce**
```css
Animation: Vertical bounce
Duration: 2s
Repeat: Infinite
Easing: ease-in-out
```

**Product Card Hover**
```css
Transform: translateY(-8px)
Duration: 0.5s
Easing: cubic-bezier(0.4, 0, 0.2, 1)
Shadow: Increase
```

**Button Ripple Effect**
```css
Trigger: Click/tap
Effect: Expanding circle from center
Duration: 0.6s
Opacity: Fade out
```

**Scroll Animations**
```css
Elements: Product cards, value items
Trigger: IntersectionObserver at 10% visibility
Effect: Fade up (opacity 0→1, translateY 30px→0)
Duration: 0.8s
```

### Motion Accessibility

**Respect User Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📱 Responsive Design

### Mobile (320px - 767px)

**Changes:**
- Single column layouts
- Hamburger menu
- Larger touch targets (44x44px minimum)
- Increased font sizes for readability
- Reduced spacing (space-xl instead of xxl)
- Stack form inputs vertically

**Example:**
```css
.hero-title {
  font-size: 3rem;  /* 48px on mobile */
}

.product-grid {
  grid-template-columns: 1fr;
}
```

### Tablet (768px - 1023px)

**Changes:**
- 2-column layouts where appropriate
- Horizontal navigation
- Moderate spacing
- Side-by-side content in About/Contact

**Example:**
```css
.about-grid {
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}
```

### Desktop (1024px+)

**Changes:**
- Full multi-column layouts
- Maximum spacing
- Hover effects enabled
- Parallax effects
- Larger typography

**Example:**
```css
.hero-title {
  font-size: 6rem;  /* 96px on desktop */
}

section {
  padding: 6rem 0;  /* Full vertical spacing */
}
```

### Touch vs. Hover

**Mobile/Touch Devices:**
- No hover states (use :active instead)
- Larger tap targets
- Simplified interactions
- No tooltips (can't hover to reveal)

**Desktop/Mouse Devices:**
- Rich hover states
- Cursor changes
- Tooltips on :hover
- Subtle animations on mouse movement

---

## ♿ Accessibility Guidelines

### Color Contrast

**WCAG AA Requirements:**
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

**Our Ratios:**
- Primary on white: 4.6:1 ✅
- Primary dark on white: 6.8:1 ✅
- Text primary on white: 15.5:1 ✅

### Keyboard Navigation

**All interactive elements must be:**
- Keyboard focusable
- Visibly focused (outline/ring)
- Logically ordered (tab order)
- Activatable via Enter/Space

**Focus Indicators:**
```css
:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Screen Readers

**Best Practices:**
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- Provide alt text for all images
- Use ARIA labels where semantic HTML isn't sufficient
- Ensure forms have associated labels
- Skip links to main content

**Example:**
```html
<button aria-label="Toggle mobile menu">☰</button>
<img src="..." alt="Handmade tea cup with floral pattern">
```

### Touch Targets

**Minimum Sizes:**
- 44x44px for all interactive elements
- 8px spacing between touch targets
- Larger targets preferred (48x48px)

### Content Accessibility

**Structure:**
- Only one `<h1>` per page
- Logical heading hierarchy (don't skip levels)
- Descriptive link text (avoid "click here")
- Break up long content with headings

**Forms:**
- Associate labels with inputs
- Provide clear error messages
- Indicate required fields
- Show validation feedback inline

---

## 📊 Component Measurements

### Navigation Bar
- Height: 70px
- Logo size: 1.5rem + icon
- Link spacing: 40px gap
- Mobile breakpoint: 768px

### Hero Section
- Min height: 100vh
- Title: 48px (mobile) - 96px (desktop)
- Subtitle: 18px (mobile) - 22px (desktop)
- Button gap: 24px

### Product Cards
- Min width: 280px
- Max width: 1fr (equal columns)
- Image ratio: 1:1 (square)
- Border radius: 16px
- Padding: 24px
- Shadow: 0 2px 8px rgba(139, 111, 71, 0.1)

### Newsletter Card
- Padding: 64px (desktop), 40px (mobile)
- Max width: 600px
- Border radius: 20px
- Input height: 52px

### Footer
- Padding: 64px 0 32px
- Column gap: 40px
- Mobile: Stack vertically

---

## ✅ Design Checklist

Use this when adding new content or components:

**Colors:**
- [ ] Uses only colors from defined palette
- [ ] Text meets WCAG AA contrast (4.5:1)
- [ ] Color is not the only indicator (icons, text, etc.)

**Typography:**
- [ ] Font sizes from type scale
- [ ] Line height appropriate for font size
- [ ] Hierarchy clear with size/weight/color

**Spacing:**
- [ ] Uses spacing variables (--space-*)
- [ ] Consistent throughout section
- [ ] Adequate breathing room

**Responsive:**
- [ ] Tested on mobile (375px)
- [ ] Tested on tablet (768px)
- [ ] Tested on desktop (1440px)
- [ ] Touch targets 44x44px minimum

**Accessibility:**
- [ ] Keyboard navigable
- [ ] Focus indicators visible
- [ ] Alt text on images
- [ ] Semantic HTML
- [ ] Labels on form inputs

**Performance:**
- [ ] Images optimized (<200KB)
- [ ] No layout shift on load
- [ ] Animations respect prefers-reduced-motion

---

**Design System v1.0 - February 2026**
*For Teatime Treasures*
