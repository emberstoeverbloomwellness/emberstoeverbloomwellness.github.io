# Embers to Everbloom Color Palette Guide

## Theme Concept

The color palette represents a transformative journey from "embers" (warm, fiery energy) to "everbloom" (cool, flourishing growth), perfectly aligning with your wellness and healing practice.

## Primary Colors

### Ember Colors (Transformation & Energy)

- **Deep Ember (#B84C1A)** - Primary brand color
  - Use for: Headers, primary buttons, important CTAs
  - Represents: Core transformation, inner fire, passion for healing
- **Ember Glow (#E07548)** - Active/hover states
  - Use for: Hover effects, active links, secondary emphasis
  - Represents: Warmth, active energy, engagement
- **Ember Light (#F5A78E)** - Soft highlights
  - Use for: Subtle accents, backgrounds, soft emphasis
  - Represents: Gentle warmth, comfort, approachability

### Bloom Colors (Growth & Renewal)

- **Sage Green (#7A9A82)** - Secondary color
  - Use for: Service pricing, secondary buttons, success states
  - Represents: Growth, healing, natural wellness
- **Soft Lavender (#9B89B3)** - Accent color
  - Use for: Special highlights, decorative elements
  - Represents: Spiritual connection, intuition, calm
- **Dusty Rose (#D4A5A5)** - Soft touches
  - Use for: Gentle accents, feminine energy elements
  - Represents: Compassion, nurturing, gentle transformation

### Neutral Foundation

- **Charcoal (#3A3A3A)** - Main text
- **Medium Gray (#6B6B6B)** - Secondary text
- **Light Gray (#E8E8E8)** - Borders and dividers
- **Warm Cream (#FBF8F4)** - Background color

## Usage Guidelines

### Color Combinations

1. **Primary Combination**: Deep Ember + Warm Cream background
2. **Complementary**: Deep Ember + Sage Green
3. **Accent Touches**: Soft Lavender on Warm Cream
4. **Gradient Effect**: Ember Deep → Ember Glow → Sage (for special headers)

### Accessibility

- All text colors meet WCAG AA standards for contrast
- Deep Ember on white: 5.87:1 contrast ratio
- Charcoal on white: 11.2:1 contrast ratio
- Sage Green on white: 3.1:1 contrast ratio (use for larger text only)

### Implementation Tips

1. Use ember colors for action-oriented elements (buttons, links)
2. Use bloom colors for supportive content (pricing, success messages)
3. Maintain warm cream backgrounds for a calming, welcoming feel
4. Apply gradients sparingly for special emphasis

## Background Color Applications

### Page Backgrounds

- **Main Body**: Warm Cream (#FBF8F4) - Creates a soft, welcoming base
- **Hero Section**: White with subtle ember-to-sage gradient overlay
- **Section Light**: Cream with lavender gradient accent

### Component Backgrounds

- **Services Box**: White with ember-to-lavender gradient, ember border
- **Form Containers**: White with sage-to-rose gradient, sage border
- **Resource Cards**: White with lavender-to-sage gradient, lavender border
- **Product Cards**: White base with hover effects

### Special Effects

- **Header**: Semi-transparent white with backdrop blur effect
- **Footer**: Dark gradient (#2A2A2A to #1F1F1F) with ember accent line
- **Main Content**: Subtle radial gradients for depth
- **Mobile Menu**: Frosted glass effect with ember shadow

## CSS Variables Reference

```css
/* Ember Colors */
--ember-deep: #B84C1A;
--ember-glow: #E07548;
--ember-light: #F5A78E;

/* Bloom Colors */
--bloom-sage: #7A9A82;
--bloom-lavender: #9B89B3;
--bloom-rose: #D4A5A5;

/* Neutrals */
--neutral-dark: #3A3A3A;
--neutral-medium: #6B6B6B;
--neutral-light: #E8E8E8;
--neutral-cream: #FBF8F4;
```
