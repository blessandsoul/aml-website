---
name: copy-design
description: Copy a page/component design from AML Design Mockups (pixel-perfect) into AML Website, with server gap analysis and improvement recommendations
argument-hint: "<page-folder-name e.g. main-page, mobile_b2b_2, ironclad_logistics>"
---

The user wants to copy a design from AML Design Mockups into AML Website. The target is: $ARGUMENTS

## Source Design Locations

### Mobile Designs
- **Design directory**: `C:/Users/seed/Desktop/stitch_landing_page_symmetrical_layout_option_1`
- **Design format**: Static HTML files (`code.html` in each page folder)
- **Available pages**: Each subfolder contains a `code.html` with the full page design

### Desktop Designs
- **Design directory**: `C:/Users/seed/Desktop/desktp`
- **Design format**: Static HTML files (`code.html` in each page folder)
- **IMPORTANT**: Desktop designs use a DIFFERENT color palette (teal/Material Design). **IGNORE desktop design colors entirely** — always use our project's own color palette (navy/orange) from `default.css`. Only copy layout, structure, spacing, and typography from desktop designs.

## Target Project

- **Project name**: AML Website
- **Codebase**: `c:/Users/seed/Documents/GitHub/aml-website`
- **Client source**: `c:/Users/seed/Documents/GitHub/aml-website/client/src/`
- **Running at**: `http://localhost:3000`

## Design Context

- **Language**: Georgian (ქართული) — all UI text is in Georgian
- **Fonts**: Noto Sans Georgian + Inter (primary), Material Symbols Outlined (icons)
- **Design system**: Deep Navy (#002366) primary, Orange (#FF6B00) accent, sharp corners (0px border-radius), bold/industrial aesthetic

## Responsive Strategy

Mobile and desktop designs are **fundamentally different layouts** — not just wider spacing. They use separate component trees with CSS-based visibility.

### Breakpoint
- **Mobile**: < 1024px (`lg:` breakpoint)
- **Desktop**: >= 1024px

### Pattern: CSS-based visibility with separate component trees

```tsx
// page.tsx
export default function HomePage() {
  return (
    <>
      <div className="lg:hidden">
        <MobileHome />
      </div>
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </>
  );
}
```

### Rules
1. **NEVER use JS-based viewport detection** (`isMobile` hooks, `window.innerWidth`) for layout switching — causes hydration mismatch and layout flash.
2. **Use `lg:hidden` / `hidden lg:block`** for mobile/desktop visibility. The breakpoint is `lg:` (1024px).
3. **Shared between both**: i18n translations, types, services, hooks, MaterialIcon component, theme colors/fonts.
4. **Separated**: Page shells (`MobileHome` / `DesktopHome`), navigation (`Header` + `BottomNav` for mobile, `DesktopNav` for desktop), layout-specific section components.
5. **Desktop sections** go in `features/<domain>/components/desktop/` subfolder to keep them organized.
6. **When copying desktop**: ignore source colors completely — map layout/structure/spacing to our existing semantic tokens (`bg-primary`, `text-accent`, etc.).

## Workflow — Follow These Steps IN ORDER. Do NOT skip any step.

### STEP 1: Identify the Target

Parse `$ARGUMENTS` to determine which page folder the user wants copied.

- Map the argument to a subfolder in `C:/Users/seed/Desktop/stitch_landing_page_symmetrical_layout_option_1/`
- Read the `code.html` file in that folder
- If the argument is ambiguous or the folder doesn't exist, ask the user to clarify BEFORE proceeding

### STEP 2: Deep-Read the Source HTML

Read the full `code.html` file for the target page. Since these are static HTML mockups (not a component-based app), analyze:

1. **HTML structure** — every section, its purpose, and nesting
2. **Tailwind classes** — all styling decisions (colors, spacing, typography, layout)
3. **Tailwind config** — custom colors, fonts, and border-radius overrides in the `<script>` tag
4. **Icons** — Material Symbols Outlined icon names used
5. **Images** — external image URLs and their `data-alt` descriptions (these are placeholders — we'll need local assets or proper image handling)
6. **Interactive elements** — buttons, links, navigation, hover/active states
7. **Georgian text** — preserve ALL Georgian text exactly as-is
8. **Layout patterns** — grid systems, flexbox usage, fixed/sticky positioning

**YOU MUST read every detail of the HTML. Do NOT guess or assume what a section looks like.**

### STEP 3: Visual Verification with Playwright

After reading the HTML, use Playwright MCP to visually inspect the design:

1. Navigate to `file:///C:/Users/seed/Desktop/stitch_landing_page_symmetrical_layout_option_1/<folder>/code.html`
2. Take a **full-page screenshot** at mobile viewport (375px width, 812px height)
3. Note every visual detail: spacing, colors, fonts, shadows, borders, layout behavior
4. If the page has interactive elements, interact with them and screenshot each state
5. Scroll through the entire page to capture all sections

**This visual reference is your ground truth. The implementation must match these screenshots pixel-for-pixel.**

### STEP 4: Present Analysis (MANDATORY — STOP HERE AND WAIT)

Before writing ANY code, present the user with:

#### A. Design-to-Theme Mapping

Map the source design's colors/tokens to our project's semantic theme tokens (`default.css`). Show which theme tokens need adjustment to match the design.

```
## Design-to-Theme Mapping

| Design Token | Source Value | Our Theme Token | Current Value | Action |
|--------------|-------------|-----------------|---------------|--------|
| primary | #002366 | --primary | [current] | UPDATE / OK |
| accent | #FF6B00 | --accent | [current] | UPDATE / OK |
| ... | ... | ... | ... | ... |
```

#### B. Font & Icon Requirements

List fonts and icon libraries the design uses and how to set them up in our project:
- Font changes needed in `layout.tsx` and font preset files
- Icon library setup (Material Symbols, Lucide replacements, etc.)

#### C. Server-Side Requirements

List every API endpoint, data model, and server feature that the page would need for real functionality. For each one, state whether AML Website's server already has it or not.

```
## Server Gap Analysis

| Requirement | Description | AML Website Status | Action Needed |
|-------------|-------------|-------------------|---------------|
| ... | ... | EXISTS / MISSING / PARTIAL | ... |
```

Tell the user: **"These server-side features are needed for this page to be fully functional. Should I proceed with the frontend only (with placeholder/mock data), or do you want to set up the server side first? Give me instructions."**

#### D. Improvement Recommendations (Non-Visual Only)

Since AML Website uses create-tigra architecture with cleaner patterns, suggest improvements in these areas ONLY (NEVER suggest visual/design changes):

- **Code architecture**: Better component splitting, cleaner separation of concerns
- **Type safety**: Stronger types, better Zod schemas
- **Performance**: React Query, lazy loading, code splitting
- **Accessibility**: Missing aria labels, keyboard nav, focus management, touch targets
- **Mobile-first**: Mobile-first Tailwind patterns
- **Security**: Input sanitization, XSS prevention

```
## Recommended Improvements (Non-Visual)

1. **[Category]**: [What the HTML mockup does] -> [What we'll do better and why]
2. ...
```

**IMPORTANT: The visual design, layout, colors, spacing, typography, animations — ALL visual aspects stay 100% identical. These recommendations are code-quality and architecture improvements ONLY.**

### STEP 5: WAIT FOR USER CONFIRMATION

**DO NOT PROCEED PAST THIS POINT UNTIL THE USER EXPLICITLY TELLS YOU TO PROCEED.**

The user may:
- Tell you to proceed as-is
- Ask you to handle server-side work first
- Ask you to adjust theme colors first
- Give additional instructions
- Ask questions

Wait for their green light.

### STEP 6: Implement the Design (Pixel-Perfect)

Once the user says to proceed:

1. **Create all necessary files** following the project structure rules (see `01-project-structure.md`):
   - Page files in `src/app/`
   - Feature components in `src/features/<domain>/components/`
   - Hooks in `src/features/<domain>/hooks/`
   - Types in `src/features/<domain>/types/`

   **REUSABLE COMPONENTS — CRITICAL RULE:**
   Before implementing any UI element, check if it appears on multiple pages across the design mockups (e.g., header, bottom navigation bar, sidebars, page shells). If it does:
   - **Extract it as a shared component** in `src/components/layout/` (for layout elements like Header, BottomNav, Sidebar) or `src/components/common/` (for reusable UI patterns)
   - **Use it via the route group layout** (`layout.tsx`) so every page in that group gets it automatically — never duplicate the same header/nav/footer inline on each page
   - **Check if the component already exists** from a previous copy-design run. If it does, reuse it. Do NOT create a second version.
   - If an element appears on only ONE page, keep it local to that page's feature folder. Only promote to shared when reuse is confirmed.

2. **Pixel-perfect visual match** — copy the EXACT Tailwind classes from the source HTML:
   - **Copy classes verbatim**: If source says `px-3 py-1`, write `px-3 py-1`. Do NOT add `min-h-11`, extra padding, or any sizing the source doesn't have.
   - **Never "improve" spacing**: Do not round `gap-4` to `gap-5`, or `text-[10px]` to `text-xs`. Copy exact values including arbitrary ones like `text-[10px]`, `h-[397px]`.
   - **Color mapping only**: Replace source color classes (e.g., `bg-[#002366]`) with our semantic tokens (`bg-primary`). Do NOT change spacing, sizing, or layout classes.
   - Same typography (sizes, weights, line heights) — exact classes from source
   - Same shadows, borders, border-radius — exact classes from source
   - Same hover/active/focus states — exact classes from source
   - Same animations and transitions — exact classes from source
   - Same mobile layout (this is mobile-only for now)
   - Same empty states, loading states, error states
   - **Do NOT add accessibility sizing** (`min-h-11`, `min-w-11`, `p-2.5`) unless the source has it. If touch targets need improvement, discuss with user first — never silently inflate elements.

3. **Apply the approved improvements** from Step 4 (code architecture, types, patterns — NOT visual changes)

4. **Follow ALL project rules**:
   - Mobile-first Tailwind (base = mobile, `md:` / `lg:` for desktop)
   - Server Components by default, `'use client'` only when needed
   - Semantic color tokens (never hardcoded colors)
   - `cn()` for conditional classes
   - Import order per rules
   - Max 250 lines per component
   - Proper TypeScript strict mode

5. **Handle design-specific patterns**:
   - **Georgian text**: Keep all Georgian text exactly as in the source HTML
   - **Material Symbols**: Map to Lucide React icons where possible, or set up Material Symbols if needed
   - **Sharp corners**: The design uses 0px border-radius everywhere — respect this
   - **Images**: Use Next.js `<Image>` with placeholder handling for external URLs
   - **Fixed elements**: Header and bottom nav are fixed — ensure proper z-indexing and safe areas

6. **Use Playwright to verify** — After implementation, navigate to `http://localhost:3000` and compare against the source screenshots. Fix any discrepancies.

### STEP 7: Final Verification & Report

1. Use Playwright to take final screenshots of the implementation at mobile (375px)
2. Compare side-by-side with source screenshots — flag any differences
3. Fix any visual discrepancies before reporting
4. Provide a completion report per `completion-reports.md`

## Critical Rules

- **NEVER change the visual design.** Not even "slightly better" or "more modern." Pixel-perfect means pixel-perfect.
- **ALWAYS read the source HTML first.** Never implement from memory or assumption.
- **ALWAYS visually verify with Playwright.** Screenshots are the ground truth.
- **ALWAYS present the analysis and wait.** Never skip the analysis step.
- **ALWAYS follow the project's architecture rules.** The code is better, the visuals are identical.
- **If something is unclear, ASK.** Don't guess. One question now saves 10 correction rounds later.
- **Copy ALL states**: loading, empty, error, hover, active, disabled. Not just the happy path.
- **Copy ALL interactive behavior**: animations, transitions, scroll behavior.
- **MOBILE ONLY**: We are building mobile design only. Do not add desktop breakpoints unless explicitly asked.

## Known Failure Patterns — READ BEFORE EVERY IMPLEMENTATION

These are real mistakes that have happened. You MUST guard against them:

### 1. "It looks fine in Playwright" — No it doesn't. Verify properly.
Playwright's default viewport is 800px. **Before claiming anything looks correct:**
- Resize Playwright to 375x812 for mobile verification
- If Playwright resize fails, at minimum ASK YOURSELF: "Would this element look correct at exactly 375px width?"

### 2. Trusting `twMerge` to resolve class conflicts
`tailwind-merge` frequently fails to resolve conflicts between a component's base classes and overrides passed via `className`, especially with responsive prefixes. **When overriding base component styles:**
- Read the component's source code to see what classes it already applies
- If there's a conflict, use `style={{ }}` prop for the override — it's guaranteed to win
- Never assume a Tailwind class override will "just work" through `cn()`/`twMerge`

### 3. Not looking at your own screenshots critically
When you take a screenshot, actually LOOK at it. Ask:
- Does the layout match the source HTML?
- Is content cut off at any edge?
- Is spacing correct on all sides?
- Are colors matching?
- Is the bottom nav properly fixed?
- Is the header properly fixed?
Do NOT move on to the completion report if ANY of these are wrong.

### 4. Fixing symptoms instead of root causes
When something doesn't look right, don't add padding/margin hacks. Find WHY the layout is wrong and fix the actual cause.

### 5. Ignoring the sharp-corner design system
The source design uses 0px border-radius EVERYWHERE. Do not add rounded corners from shadcn defaults or habit. Respect the design's industrial aesthetic.

### 6. Adding accessibility/UX sizing that breaks the visual design
**THIS IS THE #1 MOST COMMON MISTAKE.** You add `min-h-11`, `min-w-11`, `p-2.5`, `p-3` or other "touch target" sizing to elements for accessibility — but the source HTML doesn't have them. This makes buttons taller, wider, and adds padding that doesn't exist in the design.

**THE RULE: Copy the EXACT Tailwind classes from the source HTML. Do not add, remove, or modify any spacing/sizing classes.**

Before writing any element, do this:
1. Find the element in the source HTML
2. Copy its EXACT classes for: padding (`p-*`, `px-*`, `py-*`), margin (`m-*`), height (`h-*`), width (`w-*`), min/max sizing (`min-h-*`, `min-w-*`, `max-h-*`, `max-w-*`), gap (`gap-*`)
3. Do NOT add `min-h-11`, `min-w-11`, or any touch target sizing unless the source has it
4. Do NOT add extra padding "for tap area" — the design is the design
5. If you want to improve touch targets, use invisible hit area expansion (`after:` pseudo-element or negative margins on a wrapper) that doesn't affect visual layout — but ONLY if specifically approved

**If the source says `px-3 py-1`, you write `px-3 py-1`. Not `px-3 py-1 min-h-11`. Not `px-4 py-2`. EXACTLY what the source says.**

### 7. "Improving" spacing or sizing values
Never round up padding, gap, or font sizes to "cleaner" values. If the source uses `gap-4`, don't write `gap-5`. If it uses `text-[10px]`, don't write `text-xs`. Copy the exact values, including arbitrary values like `text-[10px]` or `h-[397px]`.
