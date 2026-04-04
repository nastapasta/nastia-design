# Project context

Personal website and portfolio of Nastia Tulayeva — product designer with a background in architecture. Built with Eleventy (11ty), deployed from the `main` branch.

## Current work in progress

Redesigning the case studies section in `index.html` to better suit a crossdisciplinary portfolio. This work lives on the `redesign/case-studies` branch.

## Branch workflow

- `main` — stable, deployable. Use for minor fixes, copy changes, style tweaks.
- `redesign/case-studies` — active redesign of the projects section. Do all redesign work here.

**Important:** When switching to a minor/unrelated task, switch to `main` first, make the fix there, then switch back to `redesign/case-studies`. Don't commit minor changes on the redesign branch.

```bash
git checkout main        # for minor fixes
git checkout redesign/case-studies  # back to redesign work
```

## Case grid

The grid (`#projects` in `index.html`) uses two explicit flex columns (`.case-columns` > `.case-col`). The collection is sorted newest-first in `.eleventy.js`. Items are split by index: even-indexed cases go in the left column, odd-indexed in the right — so the visual reading order across both columns is chronological. Each column stacks independently (no shared row heights).

### Card types

Controlled by `size` in each case's front matter:

- **`size: large`** — image on top (4:3), title + excerpt + tag + year below
- **`size: small`** — image on left (1:1, 58% width), title + tag + year on right. Right column small cards get the `label-bottom` class (meta pushed to bottom of text block).

### Hover scrubbing

Small cards can cycle through images as the user moves the cursor left→right. Add `scrub-images` to front matter with a list of image paths. The card image div gets a `data-scrub-images` attribute; a script at the bottom of `index.html` handles the interaction (preloads on mouseenter, swaps src on mousemove, resets on mouseleave).

## Case files

Located in `cases/`. Required front matter fields: `title`, `date`, `tags: case`, `layout: case-layout.html`, `image`, `image-bg`, `type`, `size`.

## Utility CSS classes

- `.masonry-2` — 2-column CSS grid for image galleries inside case bodies (collapses to 1 col on mobile)
- `.figure-half` — constrains a figure to 50% width on desktop, 100% on mobile

## Stack

- Static site generator: Eleventy 3.x
- Templates: Liquid (`.html` files with front matter)
- No build step beyond Eleventy
