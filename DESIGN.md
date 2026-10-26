---
name: WCH Solutions
description: A phased Sarawak AI data centre, presented as the project's own rating plate.
colors:
  sheet: "#f4f5f2"
  alu: "#dfe2dc"
  alu-2: "#cfd3cc"
  ink: "#0b1f33"
  ink-soft: "#44525f"
  signal: "#f2b705"
  signal-hi: "#ffc81f"
  on-ink: "#f4f5f2"
  on-ink-soft: "#b8c3cd"
  ink-plate: "#13293f"
  ink-rule: "#2a3d50"
  field-white: "#ffffff"
  error: "#b3261e"
typography:
  display:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(44px, 6.4vw, 104px)"
    fontWeight: 760
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 92"
  headline:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 50px)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 96"
  title:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.6vw, 23px)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  figure:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(52px, 5vw, 84px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 72"
    fontFeature: "'tnum'"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    fontVariation: "'wdth' 100"
    fontFeature: "'tnum'"
  small:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 620
    lineHeight: 1.3
    letterSpacing: "0.09em"
    fontVariation: "'wdth' 125"
rounded:
  none: "0px"
spacing:
  rule: "2px"
  margin-mobile: "16px"
  margin-desktop: "32px"
  cell: "18px 20px"
  plate: "30px"
  section-mobile: "88px"
  section-desktop: "136px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.signal}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
    height: "56px"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  plate-cell:
    backgroundColor: "{colors.alu}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.cell}"
  plate-cell-hot:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
  card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "28px 26px 32px"
  card-hover:
    backgroundColor: "{colors.field-white}"
  input:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "0 14px"
    height: "72px"
  nav-link-current:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  nav-cta:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    padding: "0 22px"
---

# Design System: WCH Solutions

## Overview

**Creative North Star: "The Rating Plate"**

Every page reads like the equipment plate riveted to a transformer: a cool white sheet, brushed-aluminium fields, navy ink stamped into ruled cells, and one turbine-yellow field marking the thing that matters (Phase 1, the primary action). Claims are fields with a label and a value, never adjectives floating on a dark gradient. The system refuses the data-centre category default of dark navy pages with glowing server imagery.

Density is engineered rather than airy: content sits in ruled grids whose 2px navy gutters are the borders. Type is one variable family, Archivo, stretched across its width axis: expanded caps stamp the labels, normal width carries reading text, condensed heavy weights set the figures. Corners are square everywhere. Photography is documentary, framed in ruled boxes, and portraits sit greyscale until hovered.

**Key Characteristics:**
- Ruled cells: grids use a navy background and a 2px gap so the gutters become rules.
- One signal yellow, applied as whole fields, never as small accents.
- One family, three widths: expanded labels, normal text, condensed figures.
- Square corners, 2px structural rules, 1px inner rules.
- Flat surfaces; depth comes from tone (sheet / aluminium / ink), not shadow.

## Colors

A cool industrial neutral set with navy ink and a single high-visibility yellow.

### Primary
- **Turbine Yellow** (signal): whole-field fills only: the Phase 1 cell, the primary button, the header CTA, the closing mail band, the result row on the status slip, and text selection. Signal Hi is reserved for a brighter variant and is currently unused in shipped surfaces.

### Neutral
- **Plate Navy Ink** (ink): brand ink (a PRODUCT.md commitment). All type, every rule, the dark footer, the current nav item, filled status marks, step numerals.
- **Weathered Ink** (ink-soft): secondary text, labels, captions, card body copy.
- **Cool Sheet** (sheet): page ground and default cell fill; also the text colour on ink (on-ink).
- **Brushed Aluminium** (alu): plate fields, `.tone` section bands, cell fills inside plates, photo placeholders.
- **Aluminium Shadow** (alu-2): fastener rims and the mobile nav dividers.
- **Pale Steel** (on-ink-soft): secondary text on ink.
- **Deep Plate** (ink-plate) and **Ink Rule** (ink-rule): the dark variant of plate cells and their gutters (dark load meter, footer wordmark and legal rule).
- **Field White** (field-white): form-field fill and the card hover lift on the sheet ground.
- **Error Red** (error): invalid-field border only.

### Named Rules
**The Whole-Field Rule.** Signal yellow fills an entire cell, button, band, or row. It is never a thin border, an icon tint, or a scattered highlight. Focus halos and link-hover underlines are the only small-scale uses, and they are state feedback, not decoration.

**The Ink-Only Text Rule.** Text is ink or ink-soft on light grounds, on-ink or on-ink-soft on ink. Text on yellow is always ink.

## Typography

**Display Font:** Archivo Variable (with Archivo, system-ui)
**Body Font:** Archivo Variable
**Label Font:** Archivo Variable at width 118 to 125, uppercase

**Character:** One grotesque pulled across its width axis so a single family reads as stamped label, plain prose, and heavy gauge figure. Tabular numerals are on by default site-wide.

### Hierarchy
- **Display** (760, clamp 44 to 104px, 0.95, width 92): page h1. Subpage heroes cap it at clamp(40px, 5vw, 80px); the closing CTA band uses it for its h2.
- **Headline** (720, clamp 30 to 50px, 1.02, width 96): section h2.
- **Title** (650, clamp 20 to 23px, 1.2): h3, card titles, the lead paragraph size (lead at 1.45 line-height, 44ch max).
- **Figure** (800, width 72, 0.9 line-height): plate values. Size scales per context, from 44px stats up to 96px in the fact plate; the unit sits in a `small` at 0.42em, weight 650, normal width.
- **Body** (400, 18px, 1.55): reading text, 66ch max.
- **Small** (15px): source notes, bios, card lists.
- **Label** (620, 13px, 0.09em, width 125, uppercase): field labels, nav, button text (at 15px, width 118), form labels, slip headers. On screens under 520px it tightens to 12px, 0.05em, width 106.

### Named Rules
**The Three Widths Rule.** Labels are expanded, prose is normal, figures are condensed. A label is never condensed and a figure is never expanded.

**The Label-Is-a-Field Rule.** Uppercase expanded labels name a value directly beside or below them. They never float above a heading as decoration.

## Layout

Content sits in a 1440px max container with a 16px side margin, widening to 32px at 760px. Section rhythm is half of `--gap-sec` top and bottom (88px base, 136px from 760px). Grids step at 760px (2/3/4 columns, 24px gap, then 32px), 900px (split layouts at 5fr/7fr with sticky left headings and a 72px gap), and 1100px (four-up feature rows, five-up team, desktop nav). Below 1100px the nav collapses into a yellow menu button that opens a full-width ruled drawer.

The home opens with a fastened plate holding the h1, actions, and a six-cell fact grid, sized to fit the first viewport, then a full-width 21:9 photo (4:3 on mobile). Subpage heroes are a ruled title block: a 7fr text cell and a 5fr photo cell divided by a 2px rule.

Sections alternate between the sheet ground, aluminium `.tone` bands with 2px top and bottom rules, the ink `.dark` ground, and the yellow closing band.

## Elevation & Depth

Flat. No shadows at rest or on hover. Depth comes from tonal layering: sheet ground, aluminium plate, ink panel, and the 2px navy rules separating them. Hover states change fill (sheet to white, aluminium to sheet, yellow to ink) rather than lifting.

### Named Rules
**The Stamped-Not-Floating Rule.** Surfaces are pressed into the sheet. Use a fill change or a rule to separate, never a drop shadow. The only shadows are the focus halo (3px ink outline plus a 6px yellow ring) and a transient shadow in the home fact grid's one-time stamp entrance.

## Shapes

Square everywhere (0 radius), including inputs. Structural borders are 2px ink; inner row dividers are 1px ink. Plates carry four corner fasteners: a navy dot with an aluminium rim, inset 10px. Arrows on buttons are a clip-path chevron in currentColor, not a glyph. Status marks are filled or empty 22px squares; list bullets are 8x2px ink dashes.

## Components

### Buttons
Stamped and square, the arrow slides on hover.
- **Shape:** square, 2px ink border, 56px min height, 14px by 22px padding.
- **Primary:** yellow fill, ink label text, a clip-path arrow pushed to the right edge.
- **Hover / Focus:** fill inverts to ink with yellow text; the arrow moves 4px right; pressing nudges it 1px down. Focus uses the global ink outline and yellow halo.
- **Ghost:** transparent with ink text, hover fills ink with sheet text. On ink and inside heroes the border follows currentColor.
- **On yellow bands:** the primary inverts (ink fill, yellow text) and hovers to sheet.

### Plate and Cells (signature)
- **Plate:** aluminium field, 2px ink border, four corner fasteners, 30px padding.
- **Cells:** a grid on an ink background with a 2px gap; each cell is aluminium with 18px by 20px padding (14px under 520px), holding a label above a condensed figure. The single `hot` cell fills yellow.

### Cards / Containers
- **Corner Style:** square.
- **Background:** sheet (aluminium inside `.tone`, ink inside `.dark`).
- **Shadow Strategy:** none; see Elevation.
- **Border:** a card row is always a ruled table. The grid gets an ink background, a 2px gap, and a 2px border.
- **Internal Padding:** 28px 26px 32px. Hover moves to white (sheet inside `.tone`).

### Inputs / Fields
- **Style:** white fill, 2px ink border, square, 14px by 16px padding, inheriting body type; labels in the label style above.
- **Focus:** the global ink outline plus yellow halo.
- **Error:** border turns error red on `:user-invalid`.

### Navigation
A 72px sheet header with a 2px bottom rule. The wordmark is 28px weight 850 at width 125, followed by an expanded caps sub-label behind a 2px rule. Nav links are label-style, full height; hover fills aluminium, the current page fills ink. The contact CTA is a full-height yellow cell with a left rule that inverts to ink on hover. Below 1100px a 56px yellow menu button opens a stacked drawer at body size.

### Status Slip
A ruled ledger: an aluminium header row, then rows of item, note, and a 22px square mark (filled ink when done), finished by a yellow result row.

### Load Meter
An interactive gauge: ten ruled cells for 10 MW, the first two in yellow for Phase 1, with an ink fill bar at 46% of the cell height tracking the entered load. A condensed number input and a three-cell output plate sit with it, the Phase 1 share in the hot cell. It has a dark variant using deep plate and ink-rule tones.

### Team Card
A 4:5 greyscale portrait (contrast 1.08) that turns to colour and scales to 1.03 on hover, over a sheet caption with the name at body size 700 and the role in caps. Cards sit in a ruled grid going 2, then 3, then 5 columns.

### Footer
The maker's plate: an ink ground, three link columns with on-ink-soft labels, a giant expanded WCH wordmark in ink-rule, and legal and photo credits behind a 1px ink-rule line.

## Do's and Don'ts

### Do:
- **Do** build every multi-item row as a ruled grid: ink background, 2px gap, 2px border, cells filled sheet or aluminium.
- **Do** pair every figure with a label naming it; set figures condensed (width 72, weight 800) and units at 0.42em.
- **Do** give yellow to one field per group: the Phase 1 cell, the primary action, the result row.
- **Do** keep corners square and borders at 2px (structure) or 1px (inner rows).
- **Do** frame photography in a 2px ruled box on an aluminium placeholder, with a credit tab in the bottom-left corner for representative images.
- **Do** use the single easing curve, cubic-bezier(0.16, 1, 0.3, 1), and keep content visible when scripts are off.

### Don't:
- **Don't** add border-radius, drop shadows, or gradients to surfaces.
- **Don't** use yellow as a thin border, icon tint, text colour on light grounds, or scattered highlight.
- **Don't** introduce a second typeface or a system display face; widths of Archivo do the hierarchy.
- **Don't** set small uppercase labels above headings as eyebrows; labels name values.
- **Don't** default to a dark navy page with glowing server imagery; ink is reserved for the footer, dark bands, and state fills.
- **Don't** use glyph or emoji icons; marks are CSS shapes (squares, dashes, clip-path arrows).
