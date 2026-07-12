# SharePoint Management Platform - Design System v1.0

## Design Philosophy

Our design system is built on **Microsoft's Fluent Design Language** combined with enterprise best practices found in Azure Portal, Microsoft 365, and Windows 11. We prioritize clarity, efficiency, and accessibility.

### Core Principles
- **Clarity**: Information hierarchy is intuitive
- **Efficiency**: Users accomplish tasks with minimal clicks
- **Accessibility**: WCAG 2.1 AA compliant
- **Consistency**: Unified visual language across all screens
- **Performance**: Responsive, fast, lightweight

---

## Color Palette

### Primary Colors
| Name | Value | Usage |
|------|-------|-------|
| **Fluent Blue** | `#0078D4` | Primary actions, focus states, links |
| **Fluent Dark Blue** | `#005A9E` | Hover states, active navigation |
| **Success Green** | `#107C10` | Success messages, positive indicators |
| **Warning Orange** | `#FFB900` | Warnings, alerts requiring attention |
| **Error Red** | `#D13438` | Errors, critical alerts |
| **Neutral 1** | `#FFFFFF` | Background, surfaces |
| **Neutral 2** | `#F3F2F1` | Secondary background, hover states |
| **Neutral 3** | `#E1DFDD` | Borders, dividers |
| **Neutral 4** | `#C8C6C4` | Disabled elements |
| **Neutral 5** | `#605E5C` | Secondary text |
| **Neutral 6** | `#323130` | Primary text |

### Dark Theme Colors
| Name | Value | Usage |
|------|-------|-------|
| **Dark Background** | `#1F1F1F` | Main background |
| **Dark Surface** | `#2D2D30` | Card backgrounds |
| **Dark Text** | `#FFFFFF` | Primary text |
| **Dark Secondary** | `#A19F9D` | Secondary text |

---

## Typography

### Font Family
- **Primary Font**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif`
- **Fallback**: System fonts for optimal performance

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| **H1 (Page Title)** | 32px | 600 | 1.2 | -0.02em |
| **H2 (Section Title)** | 24px | 600 | 1.25 | -0.01em |
| **H3 (Card Title)** | 18px | 600 | 1.33 | 0 |
| **H4 (Subsection)** | 16px | 600 | 1.4 | 0 |
| **Body Large** | 16px | 400 | 1.5 | 0 |
| **Body Regular** | 14px | 400 | 1.43 | 0.01em |
| **Body Small** | 12px | 400 | 1.33 | 0.01em |
| **Caption** | 11px | 400 | 1.27 | 0.02em |

---

## Spacing System

We use an 8px base unit for consistent spacing.

| Scale | Pixels | Usage |
|-------|--------|-------|
| **xs** | 4px | Compact spacing between inline elements |
| **sm** | 8px | Standard padding, small gaps |
| **md** | 16px | Card padding, medium gaps |
| **lg** | 24px | Section spacing, container padding |
| **xl** | 32px | Large section gaps |
| **2xl** | 48px | Major layout sections |

---

## Component Guidelines

### Buttons

#### Button Types
- **Primary Button**: `bg-color: #0078D4`, `color: white`, used for main actions
- **Secondary Button**: `bg-color: transparent`, `border: 1px solid #0078D4`, `color: #0078D4`
- **Tertiary Button**: `bg-color: transparent`, `color: #0078D4`, no border, used for links
- **Destructive Button**: `bg-color: #D13438`, `color: white`, used for delete/destructive actions

#### States
- **Normal**: Base styling
- **Hover**: 10% opacity overlay or shade variation
- **Active/Pressed**: Darker shade, inset effect
- **Disabled**: `opacity: 0.5`, `cursor: not-allowed`
- **Focus**: Outlined with 2px blue border

#### Sizing
- **Small**: 24px height, 12px horizontal padding
- **Medium**: 32px height, 16px horizontal padding (default)
- **Large**: 40px height, 24px horizontal padding

---

### Cards

**Structure**: 
- **Border Radius**: 4px
- **Background**: White (light) / #2D2D30 (dark)
- **Shadow**: `0 1px 2px rgba(0, 0, 0, 0.05)`
- **Hover Shadow**: `0 4px 8px rgba(0, 0, 0, 0.1)`
- **Padding**: 16px (md spacing)
- **Border**: 1px solid #E1DFDD

**Interaction**:
- Smooth shadow transition on hover (200ms)
- Cursor pointer for interactive cards
- Optional hover elevation effect

---

### Forms

**Input Fields**:
- **Height**: 32px
- **Border**: 1px solid #E1DFDD
- **Border Radius**: 4px
- **Padding**: 8px 12px
- **Font Size**: 14px
- **Focus State**: Blue border (#0078D4), shadow: `0 0 0 3px rgba(0, 120, 212, 0.1)`

**Labels**:
- **Font Weight**: 600
- **Font Size**: 14px
- **Margin Bottom**: 8px
- **Color**: #323130

**Validation**:
- **Error**: Red border (#D13438), error message in red below input
- **Success**: Green indicator, optional checkmark icon

---

### Navigation

#### Top Navigation Bar
- **Height**: 48px
- **Background**: White
- **Border Bottom**: 1px solid #E1DFDD
- **Padding**: 0 24px
- **Z-index**: 100

#### Sidebar Navigation
- **Width**: 250px (desktop), collapsible on mobile
- **Background**: White
- **Border Right**: 1px solid #E1DFDD
- **Item Height**: 40px
- **Hover Background**: #F3F2F1
- **Active Item**: Blue left border (4px), blue text

#### Active State
- **Indicator**: 4px left blue border
- **Text Color**: #0078D4
- **Background**: #F3F2F1

---

### Modals & Overlays

**Modal Dialog**:
- **Background**: White (light) / #2D2D30 (dark)
- **Border Radius**: 8px
- **Shadow**: `0 8px 24px rgba(0, 0, 0, 0.15)`
- **Max Width**: 600px
- **Header Padding**: 24px
- **Body Padding**: 24px
- **Footer Padding**: 16px

**Overlay**:
- **Background**: `rgba(0, 0, 0, 0.4)`
- **Backdrop Filter**: `blur(2px)` (optional)

---

### Icons

**Icon System**: Font Awesome 6 (or similar)
- **Sizes**: 16px, 20px, 24px, 32px
- **Colors**: Inherit from text color by default
- **Alignment**: Vertically centered with text (baseline: middle)

---

## Animations & Transitions

### Duration Standards
- **Quick interactions**: 150ms (button hover, toggles)
- **Navigation**: 200ms (slide, fade)
- **Modal**: 250ms (fade in/out)
- **Complex**: 300-400ms (transitions with multiple properties)

### Easing Functions
- **Standard**: `ease-in-out`
- **Entrance**: `cubic-bezier(0.08, 0.72, 0.27, 1)`
- **Exit**: `cubic-bezier(0.47, 0, 0.745, 0.715)`

### Common Animations
- **Fade**: Opacity transition
- **Slide**: Transform translate
- **Hover Lift**: Transform translateY(-2px) + shadow increase
- **Pulse**: Subtle scale animation for notifications

---

## Responsive Breakpoints

| Name | Width | Usage |
|------|-------|-------|
| **Mobile** | 320px - 639px | Phones |
| **Tablet** | 640px - 1023px | iPads, small tablets |
| **Desktop** | 1024px+ | Large screens |
| **Wide** | 1440px+ | Ultra-wide monitors |

### Layout Adjustments
- **Mobile**: Single column, full width, touch-friendly (44px min tap targets)
- **Tablet**: 2 columns, sidebar collapses
- **Desktop**: Full layout with sidebar, multi-column cards
- **Wide**: Optimize for wider content areas, larger text

---

## Accessibility (a11y)

### Color Contrast
- **Normal Text**: 4.5:1 contrast ratio (WCAG AA)
- **Large Text**: 3:1 contrast ratio (WCAG AA)
- **UI Components**: 3:1 contrast ratio

### Keyboard Navigation
- All interactive elements focusable with Tab key
- Focus indicator visible (2px outline)
- Skip links for navigation

### Screen Readers
- Semantic HTML5 (`<button>`, `<nav>`, `<main>`, etc.)
- ARIA labels for icon-only buttons
- Form labels associated with inputs
- Alt text for all meaningful images

### Motion
- Respect `prefers-reduced-motion` CSS media query
- Disable animations for users preferring reduced motion

---

## Component Library Status

### V1 (Current) - Dashboard & Core
- ✅ Button (Primary, Secondary, Tertiary, Destructive)
- ✅ Card
- ✅ Input Field
- ✅ Navigation (Top Bar, Sidebar)
- ✅ Modal/Dialog
- ✅ Badge/Chip
- ✅ Statistic Cards
- ✅ Activity Timeline
- ✅ Quick Action Menu

### V2 (Planned)
- Table/Data Grid
- Dropdown/Select
- Tabs
- Toast Notifications
- Breadcrumbs
- Pagination
- Chart Components

### V3 (Future)
- Advanced Data Grid
- Calendar
- Date Picker
- File Upload
- Rich Text Editor

---

## Code Standards

### CSS
- Use CSS Grid and Flexbox for layouts
- Mobile-first responsive design
- CSS Variables for theming
- No CSS frameworks (pure CSS)

### JavaScript
- Vanilla JavaScript (ES6+)
- Progressive enhancement
- Event delegation for performance
- No jQuery dependency

### HTML
- Semantic HTML5
- Accessibility-first markup
- Minimal inline styles
- Data attributes for JavaScript hooks

---

## Theme Implementation

### Light Theme (Default)
```css
:root {
  --color-primary: #0078D4;
  --color-primary-dark: #005A9E;
  --color-success: #107C10;
  --color-warning: #FFB900;
  --color-error: #D13438;
  --bg-primary: #FFFFFF;
  --bg-secondary: #F3F2F1;
  --text-primary: #323130;
  --text-secondary: #605E5C;
  --border-color: #E1DFDD;
}
```

### Dark Theme
```css
@media (prefers-color-scheme: dark) {
  :root {
	--color-primary: #4DB8FF;
	--color-primary-dark: #80D4FF;
	--color-success: #6CB61D;
	--bg-primary: #1F1F1F;
	--bg-secondary: #2D2D30;
	--text-primary: #FFFFFF;
	--text-secondary: #A19F9D;
	--border-color: #3E3E42;
  }
}
```

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-01-24 | Initial release - Dashboard V1 components |

---

**Last Updated**: January 24, 2025  
**Maintained By**: SharePoint Management Platform Team
