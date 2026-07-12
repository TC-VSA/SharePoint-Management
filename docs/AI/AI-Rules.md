# 📜 AI Rules & Development Standards

**Project**: SharePoint Management Platform  
**Version**: 1.0  
**Effective Date**: January 24, 2025  
**Purpose**: Standardize development across all AI sessions

---

## 🎯 Core Principles (NON-NEGOTIABLE)

1. **Enterprise Quality First** - Think like Microsoft 365, not like a hobby project
2. **Documentation Before Code** - Write docs, get approval, then code
3. **Design System is Law** - All visual decisions follow `docs/UI-UX/Design-System.md`
4. **Mobile-First Always** - Start with 320px, scale up to desktop
5. **Accessibility is Mandatory** - WCAG 2.1 AA minimum, always
6. **Semantic HTML** - Use `<button>`, `<nav>`, `<main>`, not `<div>` for these
7. **Pure CSS** - No frameworks, custom control required
8. **No Vendor Lock-in** - Code must be portable, transferable

---

## 🏗️ Architecture Rules (LOCKED)

### Layered Architecture (DO NOT CHANGE)
```
Presentation Layer      ← HTML/CSS/JavaScript UI
Business Logic Layer    ← Validation, rules, workflows
Service Layer          ← Operations, utilities
API Connector          ← Microsoft Graph abstraction
Microsoft SharePoint   ← Cloud source of truth
```

### Design Pattern: Fluent UI (DO NOT CHANGE)
- Colors: Follow `docs/UI-UX/Design-System.md` exactly
- Typography: System fonts, defined sizes in Design System
- Spacing: Always multiples of 8px (xs:4, sm:8, md:16, lg:24, xl:32)
- Components: Button, Card, Modal, Navigation must look like Azure Portal

### Multi-Tenant Support (CRITICAL)
- Zero hardcoded customer data
- Every organization isolated
- Configuration-driven (no code changes for new orgs)
- Each org has own: auth, sites, reports, settings

---

## 📝 HTML Standards

### ✅ DO
```html
<!-- Semantic elements -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<article>...</article>
<section>...</section>
<aside>...</aside>
<footer>...</footer>

<!-- ARIA for accessibility -->
<button aria-label="Close sidebar">
  <i class="fas fa-times"></i>
</button>

<!-- Proper form structure -->
<form>
  <label for="email">Email</label>
  <input id="email" type="email" required>
</form>

<!-- Data attributes for JS hooks -->
<div data-component="sidebar" data-state="collapsed">

<!-- Class names (BEM-like) -->
<div class="card card-primary"></div>
<div class="navbar navbar-light"></div>
```

### ❌ DON'T
```html
<!-- Non-semantic divs for structure -->
<div class="header">...</div>  <!-- Use <header> -->
<div class="nav">...</div>      <!-- Use <nav> -->

<!-- Inline styles -->
<div style="color: red; font-size: 16px;">

<!-- Missing labels -->
<input type="email">  <!-- No <label> -->

<!-- No aria labels on icon buttons -->
<button>
  <i class="fas fa-times"></i>
</button>

<!-- Inconsistent class naming -->
<div class="sidebar_nav"></div>    <!-- Not kebab-case -->
<div class="sidebarNav"></div>     <!-- Not camelCase -->
<div class="sidebar-navigation"></div>  <!-- Inconsistent -->
```

### Class Naming Convention (BEM-like)
```
.component-name
.component-name__element
.component-name--modifier

Examples:
.sidebar
.sidebar__header
.sidebar__nav-item
.sidebar__nav-item--active

.card
.card__header
.card__body
.card__footer
.card--primary
.card--secondary
```

---

## 🎨 CSS Standards

### ✅ DO
```css
/* Use CSS variables for theming */
:root {
  --color-primary: #0078D4;
  --color-success: #107C10;
  --bg-primary: #FFFFFF;
  --text-primary: #323130;
  --spacing-md: 16px;
}

/* Mobile-first responsive */
.card {
  padding: var(--spacing-md);
  font-size: 14px;
}

@media (min-width: 1024px) {
  .card {
	padding: calc(var(--spacing-md) * 1.5);
  }
}

/* Semantic color usage */
.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

.btn-success {
  background-color: var(--color-success);
}

/* Use Flexbox/Grid */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Proper specificity */
.card__header {
  font-size: 18px;
}

/* Focus states for accessibility */
.btn:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  :root {
	--bg-primary: #1F1F1F;
	--text-primary: #FFFFFF;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  * {
	animation: none !important;
	transition: none !important;
  }
}
```

### ❌ DON'T
```css
/* Hardcoded colors (no variables) */
.btn-primary {
  background-color: #0078D4;
}

/* Desktop-first approach */
.card {
  padding: 24px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .card {
	padding: 8px;
  }
}

/* Deep nesting/specificity wars */
nav > ul > li > a:hover:active::after {
  color: red;
}

/* Inline styles in CSS-in-JS */
const style = "color: red; font-size: 16px;";

/* Vendor prefixes (autoprefixer should handle) */
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;

/* Magic numbers (no explanation) */
.sidebar {
  width: 237px;  /* ❌ Why 237? */
}

/* No focus states */
.btn:active {
  background-color: darker;
}
/* Missing :focus */
```

### CSS File Organization
```css
/* 1. CSS Variables & Root */
:root { ... }

/* 2. Base Styles */
html, body { ... }
* { box-sizing: border-box; }

/* 3. Layout Components */
.navbar { ... }
.sidebar { ... }

/* 4. Login Screen */
.login-overlay { ... }

/* 5. Navigation */
.nav-item { ... }

/* 6. Dashboard Components */
.card { ... }
.stat-card { ... }

/* 7. Forms */
.form-input { ... }

/* 8. Buttons */
.btn { ... }

/* 9. Responsive Breakpoints */
@media (max-width: 768px) { ... }

/* 10. Dark Theme */
@media (prefers-color-scheme: dark) { ... }

/* 11. Accessibility */
@media (prefers-reduced-motion: reduce) { ... }
```

---

## ⚡ JavaScript Standards

### ✅ DO
```javascript
// Use ES6+ syntax
const button = document.querySelector('[data-component="button"]');
const handleClick = (event) => {
  console.log('Clicked:', event.target);
};

// Event delegation
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-action="close"]')) {
	handleClose();
  }
});

// Progressive enhancement
const toggleTheme = () => {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark-theme');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

// Semantic variable names
const sidebarIsOpen = true;
const userEmail = 'user@company.com';
const handleSidebarToggle = () => { ... };

// No global variables
(function() {
  const privateState = {};
  window.MyApp = { ... };
})();

// Explicit error handling
try {
  const data = JSON.parse(response);
  return data;
} catch (error) {
  console.error('Failed to parse:', error);
  return null;
}
```

### ❌ DON'T
```javascript
// jQuery or heavy libraries
$('#sidebar').toggle();
$.ajax({ ... });

// Global variables
window.sidebarOpen = true;
window.userEmail = 'user@company.com';

// Unclear variable names
const x = true;
const fn = () => { ... };
const doIt = () => { ... };

// No error handling
const data = JSON.parse(response);  // What if parse fails?

// Inline event handlers in HTML
<button onclick="myFunc()">  <!-- ❌ -->

// Manual DOM manipulation without checks
const element = document.querySelector('.something');
element.innerHTML = userInput;  // ❌ XSS vulnerability

// Magic numbers
setTimeout(() => { ... }, 3000);  // Why 3000ms?

// Imperative when declarative is clearer
for (let i = 0; i < items.length; i++) {
  if (items[i].active) {
	// process
  }
}
// Better: items.filter(item => item.active).forEach(item => ...)
```

### File Organization
```javascript
// app.js structure

// 1. Utility functions
const getPreferredTheme = () => { ... }
const setTheme = (theme) => { ... }

// 2. Component initialization
const initSidebar = () => { ... }
const initThemeToggle = () => { ... }

// 3. Event handlers
const handleSidebarToggle = () => { ... }
const handleThemeToggle = () => { ... }

// 4. Setup/initialization
document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initThemeToggle();
  initNavigation();
});
```

---

## 📋 Documentation Standards

### Every File Should Have
```markdown
# [File Title]

**Purpose**: What this file does  
**Version**: 1.0  
**Last Updated**: Date  

## [Main Section]

[Content]

---

**Last Updated**: Date  
**Next Review**: Date/milestone
```

### Before Any Code Change
1. Document WHAT is changing
2. Document WHY it's changing
3. Document HOW to test it
4. Get approval
5. THEN code it

### Git Commit Messages
```
Format: [TYPE]: [SCOPE] - [DESCRIPTION]

Types: feat, fix, docs, style, refactor, test, chore
Scope: Dashboard, SideNav, Forms, etc.

Examples:
feat: Dashboard - Add statistic cards with trend indicators
fix: Navigation - Resolve sidebar toggle on mobile
docs: Design System - Add accessibility guidelines
chore: Setup - Add .gitignore

DO NOT:
❌ "Update" ❌ "Fix stuff" ❌ "Changes" ❌ "WIP"
```

---

## 🔍 Code Review Checklist

Before committing, verify:

### HTML
- [ ] Semantic elements used
- [ ] ARIA labels on buttons/icons
- [ ] Form labels associated with inputs
- [ ] No inline styles
- [ ] Class naming consistent (kebab-case)
- [ ] Proper file structure/hierarchy

### CSS
- [ ] Uses CSS variables
- [ ] Mobile-first responsive
- [ ] No hardcoded colors
- [ ] Focus states included
- [ ] Organized sections with comments
- [ ] Dark theme considered
- [ ] Reduced motion support

### JavaScript
- [ ] ES6+ syntax
- [ ] No global variables
- [ ] Event delegation used
- [ ] Error handling included
- [ ] Semantic naming
- [ ] No dependencies (vanilla JS)
- [ ] Progressive enhancement

### Documentation
- [ ] File headers included
- [ ] Complex logic commented
- [ ] Purpose stated
- [ ] Version tracked
- [ ] Last updated date present

---

## 🚀 Production Checklist

Before marking feature "DONE":

- [ ] Code follows all standards above
- [ ] Tested on mobile (320px)
- [ ] Tested on tablet (640px)
- [ ] Tested on desktop (1024px)
- [ ] Tested on Chrome, Edge, Safari
- [ ] Accessibility verified (keyboard nav, screen readers)
- [ ] Dark theme works
- [ ] No console errors
- [ ] Performance acceptable
- [ ] Documentation updated
- [ ] Git committed with good message
- [ ] User can understand and use without help

---

## ⚠️ Common Mistakes to AVOID

| Mistake | Why Bad | How to Fix |
|---------|---------|-----------|
| Using `<div>` for `<button>` | Accessibility, keyboard nav broken | Use semantic `<button>` |
| Hardcoded colors in CSS | Can't support dark mode/theming | Use CSS variables |
| Desktop-first responsive | Mobile users suffer | Start with mobile styles |
| No focus states | Keyboard users can't navigate | Add `:focus` styles |
| jQuery dependency | Bloats app, overkill for DOM | Use vanilla JavaScript |
| Inline styles | CSS specificity wars, maintenance hell | Use CSS classes |
| Magic numbers | Code is unmaintainable | Use constants, variables |
| No error handling | Crashes silently | Add try/catch, validation |
| Global variables | Creates bugs, conflicts | Use modules, local scope |
| Commit messages like "fixes" | History is useless | Be specific: "fix: sidebar toggle on mobile" |

---

## 🎓 Reference Links

- **Design System**: `docs/UI-UX/Design-System.md` ← READ THIS FIRST
- **Step Tracker**: `docs/AI/Step-Tracker.md` ← See what's done/pending
- **Context**: `docs/AI/Context.md` ← Project overview
- **AI Handover**: `docs/AI/AI-Handover-v0.1.md` ← Session decisions

---

## 📞 Questions?

When in doubt:
1. Check `docs/UI-UX/Design-System.md` (visual standards)
2. Check `docs/AI/Step-Tracker.md` (what's been done)
3. Check `docs/AI/AI-Rules.md` (this file - coding standards)
4. Reference existing code in `prototype/` folder

---

**Effective From**: January 24, 2025  
**Updated By**: SharePoint Management Platform Team  
**Next Review**: When new technology introduced
