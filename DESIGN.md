---
name: Light Game
description: A dark, arcade-tactile Lights Out puzzle
colors:
  signal-yellow: "#f7d51d"
  cathode-blue: "#5ec8f0"
  slate-off: "#3a3f4b"
  near-black: "#1e2128"
  panel-charcoal: "#262a33"
  off-white: "#e8e8e8"
typography:
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
    fontSize: "2em"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
spacing:
  gap: "clamp(4px, 1vmin, 10px)"
  control-padding: "0.5rem 1rem"
  banner-padding: "2rem 3rem"
components:
  cell-off:
    backgroundColor: "{colors.slate-off}"
    rounded: "{rounded.sm}"
  cell-on:
    backgroundColor: "{colors.signal-yellow}"
    rounded: "{rounded.sm}"
  button-primary:
    backgroundColor: "{colors.cathode-blue}"
    textColor: "{colors.near-black}"
    rounded: "{rounded.sm}"
    padding: "{spacing.control-padding}"
    typography: "{typography.label}"
---

# Design System: Light Game

## 1. Overview

**Creative North Star: "The Night Arcade"**

Light Game is a single dark panel lit from within: a grid of tiles that either glow or go dark, no chrome around them beyond what's needed to read the state and take the next action. The system rejects SaaS gradients, glassmorphism, and marketing-page hero copy — this is a pocket arcade cabinet, not a landing page. Every surface stays flat and near-black until a tile lights up; the one saturated color in the system is reserved for that lit state, so it reads instantly against the dark field.

The palette carries almost no color at rest — Slate Off and Near-Black dominate — so Signal Yellow does real work instead of decoration. Cathode Blue is kept strictly to controls (buttons, the size selector, focus rings), never to the puzzle tiles themselves, so a player never confuses "an on light" with "a clickable control."

**Key Characteristics:**
- Dark, low-chroma field at rest; one saturated color (yellow) carries all puzzle-state meaning
- Flat by default; a soft glow marks the lit state, a lifted shadow marks the win overlay only
- No decorative gradients, no glassmorphism, no marketing copy or hero treatment
- Every interactive element gives instant, tactile feedback (color shift + scale) on click

## 2. Colors

The palette is deliberately restrained: two functional accents against a near-monochrome dark neutral scale.

### Primary
- **Signal Yellow** (#f7d51d): the "on" state of a light tile, and nothing else. Also used for the "You win!" headline, tying the win moment back to the puzzle's own light color.

### Secondary
- **Cathode Blue** (#5ec8f0): reserved for controls — the New Game / win-banner buttons, the board-size selector's border, and keyboard focus rings. Never appears on a puzzle tile, so it never competes with Signal Yellow for "this is lit" meaning.

### Neutral
- **Near-Black** (#1e2128): page background.
- **Panel Charcoal** (#262a33): the board's own background and the win-banner card, one step lighter than the page so those surfaces read as raised containers without a shadow doing the work.
- **Slate Off** (#3a3f4b): the "off" state of a light tile.
- **Off-White** (#e8e8e8): all body text.

### Named Rules
**The One Light Rule.** Signal Yellow means exactly one thing: a lit tile (or the win headline echoing it). It is never reused for a button, a border, or a decorative accent — if it starts showing up outside puzzle state, the palette has been violated.

## 3. Typography

**Body Font:** -apple-system / Segoe UI / Roboto system stack (with generic sans-serif fallback)
**Display/Label Font:** same system stack — no separate display face

**Character:** A single, honest system-font stack. Nothing about this game asks for a custom typeface; the grid is the visual centerpiece, and type stays out of the way.

### Hierarchy
- **Headline** (700, 2em, 1.2 line-height): the "Light Game" title only.
- **Body** (400, 1rem, 1.5 line-height): the instructional paragraph under the title.
- **Label** (600, 0.95rem): all button and form-control text (New Game, board-size selector, win-banner button).

### Named Rules
**The No-Display-Font Rule.** Don't introduce a second typeface for "polish." The system stack is the point — it's fast and it's honest about being a small game, not a product with a brand type system.

## 4. Elevation

Flat by default. The board and win-banner read as raised purely through Panel Charcoal sitting one step lighter than the Near-Black page background — no shadow is used for that. Shadow is reserved for two specific, meaningful moments: a tile's own glow when lit, and the win-banner's lift off the page when it appears.

### Shadow Vocabulary
- **Lit-tile glow** (`box-shadow: 0 0 12px 2px color-mix(in srgb, var(--color-on) 60%, transparent)`): marks an "on" tile as active/energized, distinct from a flat color change alone.
- **Win-banner lift** (`box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4)`): the one moment something floats above the page, matching the one moment the game state changes fundamentally (solved).

### Named Rules
**The Two-Shadows Rule.** There are exactly two shadow treatments in this system: the lit-tile glow and the win-banner lift. If a third shadow shows up somewhere else, it's decoration, not signal — remove it.

## 5. Components

### Buttons
- **Shape:** 6px radius (`{rounded.sm}`), consistent across all buttons and tiles.
- **Primary:** Cathode Blue background, Near-Black text, `{spacing.control-padding}` (0.5rem 1rem), Label typography (600 weight).
- **Hover / Focus:** hover brightens via `filter: brightness(1.1)`; focus shows a 2px Cathode Blue outline offset 2px — never relies on color change alone.

### Tiles (Cell)
- **Shape:** 6px radius, no border — the grid gap does the separating.
- **Off state:** Slate Off background.
- **On state:** Signal Yellow background plus the lit-tile glow.
- **Active/press:** scales to 0.94 on `:active` for tactile click feedback.

### Board (Container)
- **Corner Style:** 12px radius (`{rounded.md}`).
- **Background:** Panel Charcoal.
- **Shadow Strategy:** none — see Elevation; it's raised by color contrast, not shadow.
- **Sizing:** responsive via `min(90vmin, 560px)` width and `aspect-ratio: 1/1`, so the same component works from a 3x3 to an 8x8 grid.

### Win Banner (signature component)
A centered modal-like card that fades and scales in (`opacity`/`transform: scale`, 200ms) rather than sliding, matching the calm, non-choreographed motion energy of the rest of the system. Panel Charcoal background, 12px radius, the win-banner-lift shadow, Signal Yellow headline text, one Cathode Blue button.

## 6. Do's and Don'ts

### Do:
- **Do** keep Signal Yellow exclusive to lit-tile state and the win headline (The One Light Rule).
- **Do** use the system font stack everywhere; no custom typefaces.
- **Do** give every interactive element both a color-based and a non-color-based feedback signal (scale, outline) so state isn't conveyed by color alone.
- **Do** keep the board flat, raised only by Panel Charcoal's contrast against Near-Black.

### Don't:
- **Don't** introduce SaaS-style gradients, glassmorphism, or hero/marketing-page treatments — this is a puzzle toy, not a landing page.
- **Don't** add a third shadow treatment beyond the lit-tile glow and the win-banner lift (The Two-Shadows Rule).
- **Don't** reuse Cathode Blue on puzzle tiles, or Signal Yellow on controls — each color has exactly one job.
- **Don't** add dashboard chrome (badges, stat counters, nav bars) around the game — the grid is the whole interface.
