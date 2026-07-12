# 🎓 AI Prompts Library

**Purpose**: Reusable prompts to jump-start work sessions with any AI  
**Updated**: January 24, 2025  
**Version**: 1.0

---

## 📌 How to Use This Library

Before each session with ANY AI, copy the relevant prompt and provide it along with the context documents:

1. Read `docs/AI/Context.md` (project overview)
2. Read `docs/AI/AI-Handover-vX.X.md` (latest session)
3. Read relevant prompt below
4. Give to AI

This ensures continuity and consistent quality regardless of which AI you use.

---

## 🎨 UI/Frontend Prompts

### PROMPT 1: Create New Component
**When**: Building a new UI component  
**Use Case**: Forms, modals, cards, etc.

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Design System: docs/UI-UX/Design-System.md (READ THIS FIRST)
- Project Setup: docs/AI/Context.md
- Coding Standards: docs/AI/AI-Rules.md
- Completed Work: docs/AI/Step-Tracker.md

TASK: Create [COMPONENT NAME]

REQUIREMENTS:
1. Semantic HTML5 structure (use <header>, <button>, <form>, etc.)
2. No inline styles - use CSS classes only
3. ARIA labels for accessibility
4. Mobile-first responsive design
5. Follow BEM class naming (component__element--modifier)
6. Include data attributes for JavaScript hooks
7. Match Design System colors, typography, spacing

DELIVERABLE:
- HTML file at [PATH]
- [X] lines of code
- Ready for CSS styling

STANDARDS:
- Reference Design System for colors (#0078D4 primary, etc.)
- Use spacing multiples of 8px (sm:8, md:16, lg:24)
- Font sizes from Design System
- Mobile breakpoint: 320px
- Desktop breakpoint: 1024px

OUTPUT FORMAT:
I will create a complete, production-ready [COMPONENT] file with:
- Semantic structure
- Accessibility-first approach
- Ready for styling/scripting
- All requirements met
```

### PROMPT 2: Create CSS for Component
**When**: Styling a newly created HTML component  
**Use Case**: Making it look professional

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Design System: docs/UI-UX/Design-System.md (colors, spacing, typography)
- HTML Component: [PATH] (structure already created)
- Coding Standards: docs/AI/AI-Rules.md
- Reference: existing CSS in prototype/css/style.css

TASK: Create comprehensive CSS styling for [COMPONENT]

REQUIREMENTS:
1. Mobile-first responsive design (start with 320px)
2. Use CSS variables for all colors (see Design System)
3. Fluent UI design pattern (clean, modern, professional)
4. Support dark theme with @media (prefers-color-scheme: dark)
5. Include hover, active, focus, disabled states
6. Smooth transitions (200ms standard)
7. Accessible focus states (2px outline)
8. Reduced motion support for accessibility

DESIGN SPECIFICATIONS:
- Primary Color: #0078D4
- Text Color: #323130
- Background: #FFFFFF
- Border Color: #E1DFDD
- Dark Background: #1F1F1F
- Spacing Base: 8px

BREAKPOINTS:
- Mobile: 320px - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px+

DELIVERABLE:
- CSS at [PATH]
- [X] lines of production-quality CSS
- All states covered (hover, active, focus, disabled)
- Dark theme implemented
- Responsive at all breakpoints
- Ready for testing in browser

OUTPUT FORMAT:
I will create complete CSS that:
- Makes component look professional (like Azure Portal)
- Is fully responsive
- Supports theming
- Is accessible
- Ready for browser testing
```

### PROMPT 3: Create JavaScript for Component
**When**: Adding interactivity to HTML/CSS  
**Use Case**: Toggles, dropdowns, forms, etc.

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- HTML Structure: [PATH]
- CSS Styling: [PATH]
- Coding Standards: docs/AI/AI-Rules.md
- Reference: prototype/js/app.js

TASK: Create JavaScript interactivity for [COMPONENT]

REQUIREMENTS:
1. Vanilla JavaScript only (NO jQuery, NO frameworks)
2. ES6+ syntax (arrow functions, const/let, etc.)
3. Use event delegation for performance
4. Use data attributes for element selection
5. No global variables (encapsulate in functions)
6. Progressive enhancement (works without JS too)
7. Include error handling and validation
8. No console errors

FUNCTIONALITY:
- [List specific behaviors needed]
- [User interactions]
- [State management if needed]

DELIVERABLE:
- JavaScript at [PATH]
- [X] lines of production-ready code
- All interactions working smoothly
- No dependencies
- Ready for testing

OUTPUT FORMAT:
I will create JavaScript that:
- Handles all specified interactions
- Uses vanilla JS only
- Is performant and clean
- Includes proper error handling
- Ready to test in browser
```

### PROMPT 4: Make Component Responsive
**When**: Testing shows mobile/tablet issues  
**Use Case**: Fixing responsive design problems

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Component: [PATH to HTML/CSS]
- Design System: docs/UI-UX/Design-System.md
- Breakpoints: Mobile 320px, Tablet 640px, Desktop 1024px

TASK: Ensure [COMPONENT] is fully responsive

CURRENT ISSUES:
- [List what's broken on mobile/tablet]

REQUIREMENTS:
1. Mobile-first approach
2. Looks good at 320px (smallest mobile)
3. Looks good at 640px (tablet)
4. Looks good at 1024px+ (desktop)
5. Touch-friendly (44px min tap targets)
6. No horizontal scrolling on mobile
7. Text readable at all sizes
8. Images/icons scale properly

DELIVERABLE:
- Updated CSS in [PATH]
- All breakpoints working
- No layout issues
- Tested visually at all sizes

OUTPUT FORMAT:
I will update CSS to:
- Fix mobile issues
- Make responsive cleanly
- Maintain design consistency
- Pass all breakpoint tests
```

---

## 📱 Layout & Navigation Prompts

### PROMPT 5: Update Sidebar Navigation
**When**: Adding new nav items or sections  
**Use Case**: Extending navigation

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Current Sidebar: prototype/html/index.html (lines XXX-XXX)
- Design System: docs/UI-UX/Design-System.md
- Coding Standards: docs/AI/AI-Rules.md

TASK: Update sidebar navigation

CHANGES:
- [Add/modify/remove nav items]
- [Update sections]

REQUIREMENTS:
1. Maintain existing structure and styling
2. Use semantic HTML (<nav>, <ul>, <li>, <a>)
3. Include icons with Font Awesome
4. Support active state highlighting
5. Include badges for counts if needed
6. Accessible keyboard navigation
7. Mobile-friendly (collapsible if needed)

DELIVERABLE:
- Updated HTML in prototype/html/index.html
- Updated CSS (if styling changes needed)
- All standards followed

OUTPUT FORMAT:
I will update the sidebar to:
- Include all requested nav items
- Maintain design consistency
- Keep accessibility features
- Work on all screen sizes
```

---

## 📊 Dashboard & Data Prompts

### PROMPT 6: Create New Dashboard Card/Widget
**When**: Adding statistics, data display, etc.  
**Use Case**: Metrics, charts, lists

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Dashboard: prototype/html/index.html
- Design System: docs/UI-UX/Design-System.md
- Example Cards: Lines XXX-XXX in HTML

TASK: Create [WIDGET TYPE] widget/card

SPECIFICATIONS:
- Title: [Widget Title]
- Content: [What data shows]
- Layout: [Grid/List/Chart]
- Interactive: [Yes/No] - If yes, describe interactions
- Mobile friendly: [Yes/No]

REQUIREMENTS:
1. Semantic HTML5 structure
2. Follows Design System card standards
3. Mobile-responsive
4. Accessible (ARIA labels, etc.)
5. Professional appearance
6. Ready for data binding (later backend integration)

DELIVERABLE:
- HTML for [WIDGET] in prototype/html/index.html
- CSS in prototype/css/style.css
- [X] lines total
- Ready for backend connection

OUTPUT FORMAT:
I will create a production-ready widget that:
- Displays [content type] professionally
- Is responsive at all breakpoints
- Is accessible
- Matches Fluent UI design
```

---

## 🔐 Authentication & Forms Prompts

### PROMPT 7: Create Form Component
**When**: Building forms (login, search, filters, etc.)  
**Use Case**: User input collection

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Design System: docs/UI-UX/Design-System.md
- Coding Standards: docs/AI/AI-Rules.md
- Example Form: prototype/html/index.html (login form)

TASK: Create [FORM NAME] form

FORM FIELDS:
- [Field 1]: [type] (required/optional)
- [Field 2]: [type] (required/optional)
- [etc.]

REQUIREMENTS:
1. Semantic HTML5 (<form>, <label>, <input>, etc.)
2. Labels associated with inputs (for attribute)
3. Validation messages (error, success, info)
4. Accessibility-first (keyboard navigation, ARIA)
5. Mobile-friendly (large touch targets 44px+)
6. Clear visual hierarchy
7. Submit button prominent

DELIVERABLE:
- HTML form at [PATH]
- CSS for styling at [PATH]
- [X] lines of code
- Ready for JavaScript validation

OUTPUT FORMAT:
I will create a professional form with:
- All required fields
- Clear labels
- Input validation hooks
- Accessible design
- Responsive layout
```

---

## 🎯 Refactoring & Updates Prompts

### PROMPT 8: Refactor Existing Component
**When**: Code needs cleanup, updating, optimization  
**Use Case**: Technical debt, improvements

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- File to Update: [PATH]
- Reason for Update: [What needs changing]
- Coding Standards: docs/AI/AI-Rules.md

TASK: Refactor [COMPONENT]

CURRENT ISSUES:
- [Issue 1]
- [Issue 2]
- [Issue 3]

GOALS:
1. [Goal 1]
2. [Goal 2]
3. Maintain all existing functionality

CONSTRAINTS:
- Don't break existing features
- Keep user experience identical
- Follow all coding standards
- Maintain performance

DELIVERABLE:
- Updated file at [PATH]
- [X] lines of improved code
- All standards followed
- All tests passing

OUTPUT FORMAT:
I will refactor the code to:
- Fix identified issues
- Improve readability
- Optimize performance
- Follow standards
- Maintain functionality
```

---

## 📚 Documentation Prompts

### PROMPT 9: Create Documentation for Feature
**When**: Need to document a completed feature  
**Use Case**: PRD, SRS, API docs, etc.

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Feature: [Feature Name]
- Implementation: [Where it's implemented]
- Scope: [What it includes]
- Project Vision: docs/AI/AI-Handover-vX.X.md

TASK: Create documentation for [FEATURE]

DOCUMENT TYPE: [PRD / SRS / API / Architecture / UserGuide]

REQUIRED SECTIONS:
1. [Section 1]
2. [Section 2]
3. [etc.]

REQUIREMENTS:
1. Clear, professional tone
2. Structured with headings and tables
3. Include examples where relevant
4. Technical but understandable
5. References to Design System where applicable

DELIVERABLE:
- Documentation file at docs/[PATH]/[FILENAME].md
- [X] lines of documentation
- Table of contents included
- Examples included
- Ready for user/developer reference

OUTPUT FORMAT:
I will create comprehensive documentation that:
- Explains [feature] clearly
- Includes technical details
- Provides examples
- Is easy to reference
- Follows project style
```

---

## 🐛 Bug Fix Prompts

### PROMPT 10: Fix Visual/Layout Bug
**When**: Something doesn't look right  
**Use Case**: Design issues, broken layouts

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- Component: [PATH]
- Design System: docs/UI-UX/Design-System.md
- Coding Standards: docs/AI/AI-Rules.md

TASK: Fix [BUG DESCRIPTION]

ISSUE:
- Symptom: [What's wrong visually]
- Location: [Where in app]
- Device/Browser: [Where bug appears]
- Screenshot/Description: [Details]

EXPECTED:
- [What should happen]

ACTUAL:
- [What's happening instead]

ROOT CAUSE (if known):
- [What's causing it]

DELIVERABLE:
- Fixed file(s)
- [X] lines of corrected code
- Bug no longer visible
- No new issues introduced

OUTPUT FORMAT:
I will fix the bug by:
- Identifying root cause
- Applying minimal fix
- Testing solution
- Verifying no regressions
```

---

## 🚀 Session Startup Prompts

### PROMPT 11: Resume Development Session
**When**: Picking up work after a break  
**Use Case**: Daily standup or next day continuation

```
You are continuing development of the SharePoint Management Platform.

REQUIRED CONTEXT (provided separately):
- docs/AI/Context.md (project overview)
- docs/AI/AI-Handover-vX.X.md (last session)
- docs/AI/Step-Tracker.md (what's done/pending)
- docs/AI/AI-Rules.md (coding standards)
- docs/UI-UX/Design-System.md (visual standards)

TASK: Resume development

CURRENT STATUS:
- Last completed: [From Step-Tracker.md]
- Next task: [Step X]
- Blockers: [Any known issues]

TODAY'S GOALS:
1. [Goal 1]
2. [Goal 2]
3. [Goal 3]

SESSION DELIVERABLES:
- [Deliverable 1]
- [Deliverable 2]
- [etc.]

REQUIREMENTS:
- Follow all standards in AI-Rules.md
- Reference Design System for all visual work
- Update Step-Tracker.md when tasks complete
- Document any decisions made
- Commit to git with proper messages

OUTPUT FORMAT:
I will:
1. Review all context documents
2. Understand current status
3. Complete requested deliverables
4. Follow all standards
5. Update documentation
6. Commit to git
```

---

## 🔄 Multi-AI Coordination Prompt

### PROMPT 12: Handoff to Different AI
**When**: Switching from one AI to another  
**Use Case**: Using Claude after Copilot, etc.

```
You are taking over development of the SharePoint Management Platform.

This project was started with a different AI. Below are the context documents that will help you understand everything:

REQUIRED READING (in order):
1. docs/AI/Context.md - 5 min read
2. docs/AI/AI-Handover-v1.0.md - 10 min read
3. docs/UI-UX/Design-System.md - Reference as needed
4. docs/AI/AI-Rules.md - Your coding standards
5. docs/AI/Step-Tracker.md - See what's done/pending

CRITICAL DECISIONS (LOCKED - DO NOT CHANGE):
- Layered architecture (Presentation → Business → Service → API → SharePoint)
- Fluent UI design system
- Mobile-first responsive approach
- Zero hardcoded customer data
- Multi-tenant architecture
- Daily 2-hour sprint workflow

YOUR NEXT TASK:
[Specific task for this AI]

REQUIREMENTS:
- Read all documents above
- Follow all standards in AI-Rules.md
- Reference Design System for visual work
- Maintain project consistency
- Update documentation before committing

DO NOT:
- Change approved architecture
- Ignore Design System
- Create non-responsive designs
- Add external dependencies
- Skip documentation

DELIVERABLE:
- [What you need to complete]
- Follow all standards
- Update Step-Tracker.md
- Commit with clear message

Let me know when you've read all context documents and you're ready to proceed.
```

---

## 📝 Custom Prompt Template

Use this template for situations not covered above:

```
You are continuing development of the SharePoint Management Platform.

CONTEXT:
- docs/AI/Context.md (project overview)
- docs/AI/AI-Handover-vX.X.md (last session)
- docs/UI-UX/Design-System.md (visual standards)
- docs/AI/AI-Rules.md (coding standards)

TASK: [Clear task description]

BACKGROUND:
- [Why this task is needed]
- [What it relates to]

SPECIFICATIONS:
- [Technical requirements]
- [Design requirements]
- [Functional requirements]

DELIVERABLE:
- [File(s) to create/update]
- [Expected size/complexity]
- [Success criteria]

REQUIREMENTS:
- Follow AI-Rules.md standards
- Reference Design System
- Mobile-first responsive
- Accessibility (WCAG 2.1 AA)
- No external dependencies
- Production-ready code

OUTPUT FORMAT:
I will create/update [item] to:
- Meet all requirements
- Follow all standards
- Be production-ready
- Be well-documented
```

---

## 🎯 Quick Reference Summary

| Task | Use Prompt |
|------|-----------|
| Build new UI component | PROMPT 1 |
| Style component | PROMPT 2 |
| Add interactivity | PROMPT 3 |
| Fix responsive issues | PROMPT 4 |
| Update navigation | PROMPT 5 |
| Create dashboard widget | PROMPT 6 |
| Build form | PROMPT 7 |
| Refactor code | PROMPT 8 |
| Write documentation | PROMPT 9 |
| Fix visual bug | PROMPT 10 |
| Resume session | PROMPT 11 |
| Handoff to new AI | PROMPT 12 |
| Something else | Custom Template |

---

## 📞 How to Use in Practice

**Example**: You want to create a new form for user management

1. Open this file
2. Find "PROMPT 7: Create Form Component"
3. Copy the entire prompt
4. Replace [FORM NAME] with "User Management"
5. Fill in specific fields needed
6. Give to AI with context documents
7. AI creates the form
8. You review and approve
9. Update Step-Tracker.md
10. Commit to git

---

**Last Updated**: January 24, 2025  
**Maintained By**: SharePoint Management Platform Team  
**Version**: 1.0
