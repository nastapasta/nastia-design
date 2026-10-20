# Project context

Personal website and portfolio of Nastia Tulayeva — product designer with a background in architecture. Built with Eleventy (11ty), deployed from the `main` branch.

## Branch workflow

- `main` — stable, deployable. All work goes here now that the case studies redesign is merged.

## Case grid

The grid (`#projects` in `index.html`) uses two explicit flex columns (`.case-columns` > `.case-col`). The collection is sorted newest-first in `.eleventy.js`. Items are split by index: even-indexed cases go in the left column, odd-indexed in the right — so the visual reading order across both columns is chronological. Each column stacks independently (no shared row heights).

### Card types

Controlled by `size` in each case's front matter:

- **`size: large`** — image on top (4:3), title + excerpt + tag + year below
- **`size: small`** — image on left (1:1, 58% width), title + tag + year on right (meta always directly below title).

### Hover scrubbing

Small cards can cycle through images as the user moves the cursor left→right. Add `scrub-images` to front matter with a list of image paths. The card image div gets a `data-scrub-images` attribute; a script at the bottom of `index.html` handles the interaction (preloads on mouseenter, swaps src on mousemove, resets on mouseleave).

### In-progress cards

Add `status: in-progress` to a case's front matter to render it as a non-interactive tile — no link, no hover, no image zoom. Uses a `<div class="case-card-static">` wrapper instead of `<a>`.

## Layout

- Content max-width: `1280px` (`.content-wrapper`, `.nav-container`)
- Home intro hgroup (`.home-intro`) is a subgrid of the 12-column `.grid-12`: photo in column 2, h1 and subheader in columns 3–10 — scoped only to `index.html`, does not affect case or note headers
- Hgroup classes: `.case-header` (case layout), `.note-header` (note layout), `.home-intro` (index only)

## Cases are currently hidden

The case pages are not built: `cases/cases.json` has `"permalink": false`, and the projects grid in `index.html` is wrapped in `{% comment %}…{% endcomment %}`. The case files and images are still in the repo.

To restore: remove the `"permalink": false` line from `cases/cases.json`, and delete the `{% comment %}` / `{% endcomment %}` tags around the `<section>` containing `#projects` in `index.html`. Re-add the "Projects" nav link in the home intro if wanted. Note that `images/` is passthrough-copied, so case images remain reachable by direct URL while hidden.

## Case files

Located in `cases/`. Required front matter fields: `title`, `date`, `tags: case`, `layout: case-layout.html`, `image`, `image-bg`, `type`, `size`.

Optional fields: `status: in-progress`, `scrub-images` (list of image paths).

## Garden / Notes grid

`garden.html` lists notes in a 3-column CSS columns layout (2 on tablet, 1 on mobile). Items flow top-to-bottom within each column, left column first — newest note at top-left. Each `.note-card` wrapper uses `break-inside: avoid` and `margin-bottom: 1.5rem`. Note: the `<h3>` inside each card also carries the `note-card` class (legacy), so use `.notes-grid > .note-card` (direct child selector) when adding column-level styles to avoid accidentally targeting the h3.

## Utility CSS classes

- `.masonry-2` — 2-column CSS grid for image galleries inside case bodies (collapses to 1 col on mobile)
- `.figure-half` — constrains a figure to 50% width on desktop, 100% on mobile

## Stack

- Static site generator: Eleventy 3.x
- Templates: Liquid (`.html` files with front matter)
- No build step beyond Eleventy
