# Ledger Studio prototype

Open prototype.html. The published app and standards database are separate from this design preview.

## Direction

An editorial accounting workspace with warm ivory surfaces, forest green, restrained terracotta accents, serif headings and functional sans-serif text. All four views share typography, colour, interaction and spacing tokens in assets/prototype.css.

The overview uses existing catalogue records for upcoming dates, status counts and recent changes. Chart bars show counts, not financial amounts or entity-specific obligations. Selecting a year reveals the exact matching records.

Saved standards and reviewed marks are stored in this browser under ledger-personal-review. A completed list is a personal reading milestone, not a compliance judgement. There are no streaks or invented progress.

## Interaction

- Overview, Library, Dates and Compare navigate between functional views.
- Search and framework/status/topic filters use the existing application logic.
- Open a standard to save it, read the original summary or visit its official source.
- Mark saved standards reviewed, undo review marks or remove them.
- Review progress updates from user actions and survives reload when storage is available.
- Escape closes details; Tab stays in the modal; / opens library search.
- Chart year buttons reveal the matching standards with exact effective wording.

## Design references

- https://www.awwwards.com/sites/wickret
- https://cuberto.com/projects/wickret/
- https://developer.apple.com/design/human-interface-guidelines/materials
- https://developer.apple.com/design/human-interface-guidelines/tab-bars
- https://developer.apple.com/videos/play/wwdc2025/219/

Apple guidance is adapted for the web, not implemented as a native Apple material. Glass is restricted to floating mobile navigation. Each destination has a text label and icon. The bar respects safe-area insets and reserves content space. Opaque materials remain underneath financial/reference content.

The mobile bar uses a high-opacity surface for readable contrast, restrained backdrop blur, and opaque fallbacks for reduced transparency, increased contrast or unsupported blur. Reduced-motion preferences disable transitions and entrance animations. Effects avoid continuous animation and external animation libraries.

## Validation limits

JavaScript syntax and catalogue-derived counts can be checked locally. Browser visual and interaction verification is pending: the browser tool rejected file URL access under its security policy. No native Liquid Glass fidelity or full accessibility conformance is claimed.
