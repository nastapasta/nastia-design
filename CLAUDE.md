# Project context

Personal website and portfolio of Nastia Tulayeva — product designer with a background in architecture. Built with Eleventy (11ty), deployed from the `main` branch.

## Current work in progress

Redesigning the case studies section (`div.case-grid-horizontal#projects` in `index.html`) to better suit a crossdisciplinary portfolio. This work lives on the `redesign/case-studies` branch.

## Branch workflow

- `main` — stable, deployable. Use for minor fixes, copy changes, style tweaks.
- `redesign/case-studies` — active redesign of the projects section. Do all redesign work here.

**Important:** When switching to a minor/unrelated task, switch to `main` first, make the fix there, then switch back to `redesign/case-studies`. Don't commit minor changes on the redesign branch.

```bash
git checkout main        # for minor fixes
git checkout redesign/case-studies  # back to redesign work
```

## Stack

- Static site generator: Eleventy 3.x
- Templates: Nunjucks / Liquid (`.html` files with front matter)
- No build step beyond Eleventy
