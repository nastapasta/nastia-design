---
title: Spokn AI Success Intelligence
date: 2024-10-01
tags: case
excerpt: Solution for deeper understanding of sales rep's successes and failures, delivered in 5 months and securing 100+ sales agents seats
layout: case-layout.html
image: "/images/case-studies/spokn-ai-si/spokn-ai-si-main-picture.png"
image-bg: "/images/case-studies/spokn-ai-si/spokn-ai-si-main-picture-bg.png"
type: Web Application
size: large
---

<div class="medium-divider"></div>

## About

<p><b>Client:</b> MaxContact, a contact center software company serving businesses with contact center teams. Previous episode: <a href="/cases/spokn-ai-speech-analytics/">On how I stopped worrying and embraced generative AI</a>.</p>

<p>Success Intelligence is a tool to help managers understand how sales reps handle objections and where they need support. I led UX strategy, research synthesis, and design execution, from early concepts to developer handoff, collaborated closely with engineers, analysts, and business stakeholders.</p>

<section class="note-section">
<div class="brief">
<div class="brief-grid">
    <div class="brief-col">
      <h3>Timeline</h3>
      <p>5 months</p>
    </div>
    <div class="brief-col" style="grid-column: span 2">
      <h3>Results:</h3>
      <ul>
        <li>1st iteration finished in 3 months, released in production in 5 months;</li>
        <li>100+ licences signed up.</li>
      </ul>
    </div>
</div>
</section>

<section class="note-section">

## Challenge

<p class="large-p framed"> Sales rep performance is the primary revenue driver for contact center businesses — yet managers had almost no systematic way to understand what was working and what wasn't.</p>

The default workflow: listen to a handful of calls manually, try to spot patterns, and coach based on instinct. With hundreds of interactions happening daily, this meant problems compounded in silence. By the time an issue became visible — a drop in conversion, a rep struggling — it was already late.

Three things were going wrong:

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-problems.png" alt="Three problem cards: no visibility into trends, coaching was guesswork, time went to the wrong place" style="margin-bottom: 1rem; max-width: 800px";"><figcaption>Three core problems driving the design
</figcaption>
</figure>

<!-- - **No visibility into trends.** Managers saw individual calls, not patterns. Objection themes, recurring failure points, and team-wide blind spots were invisible.
- **Coaching was guesswork.** Without data, managers couldn't pinpoint where a rep needed help — or what "good" looked like in practice.
- **Time went to the wrong place.** Hours spent on manual call sampling rarely turned into actionable insight. -->

</section>

<section class="note-section">

## Approach

### Research & framing

Working from prior custdev interviews and client feedback on the first Spokn AI release, two things stood out:

- Objection handling was a known blind spot with no tooling around it.
- Agents were often blamed for systemic issues — pricing, targeting, product-market fit — that were outside their control.

After a design sprint involving the whole team, we were looking for the initial solution ideas.
<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-sprint.png" alt="FigJam board with design sprint activities: HMW notes, voting dots, and sketches across multiple frames"><figcaption>A week-long design sprint — from problem framing to early solution concepts
</figcaption>
</figure>

Research pointed to three core design problems we found ourselves solving:

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-solutions.png" alt="Diagram mapping three user problems to three product solution areas" style="margin-bottom: 1rem; max-width: 600px";><figcaption>From problems to product increments: Objection Mapping, Performance Analytics, AI Insights
</figcaption>
</figure>

### Develop

We broke the product into three increments: *Objection Mapping*, *Performance Analytics*, and *AI Insights* — building from structured data toward deeper intelligence. The key design decision came early: the dashboard.

One early concept visualized agent performance across each objection type as a scatterplot grid — volume of calls vs. conversion rate, per objection. It showed at a glance who was handling "Too Expensive" well and who wasn't.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-scatterplot.png" alt="Scatterplot grid showing agent performance per objection type — volume of calls vs. conversion rate for each objection" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption>Explored concept: each objection as a scatterplot of agent volume vs. conversion rate
</figcaption>
</figure>

The PM flagged it as too complex for the target users, and we moved toward simpler tabular views.

We split the dashboard into two tabs — same underlying data, two lenses. The Objections tab to surface environmental patterns; the Performance tab to zoom in on people. That framing also shaped how managers would actually use it: diagnose the trend first, then find who needs support.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-ai-progress.png" alt="FigJam board showing design iterations and progression toward the final dashboard layout"><figcaption>Design iterations across the three product increments
</figcaption>
</figure>

One constraint that shaped the timeline: legal and privacy requirements meant we couldn’t use off-the-shelf LLMs — we had to train custom models on our own data, which slowed the AI Insights phase considerably.

</section>

<section class="note-section">

## Solution

### Dashboard: objections frequency vs agent performance

The dashboard provides two ways of looking at the data depending on the current focus of the manager.

The Objections tab shows their frequency among the selected conversations. This helps see the signals from the environment.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-dashboard-obj.png" alt="Objections Dashboard with metrics ribbon and tables" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption><em>What’s happening?</em> Objections tab
</figcaption>
</figure>

The Performance tab emphasizes the success rate of the teams, campaigns and separate agents. Thanks to this, the manager can provide training and coaching to the ones who need it the most, and connect the strongest members of the teams with the ones needing support.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-dashboard-perf.png" alt="Performance tab showing success rate metrics for teams, campaigns, and individual agents" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption><em>Who’s responsible?</em> Performance tab
</figcaption>
</figure>

Equal attention to agents, teams, campaigns and objections themselves lead to horizontal information structure with access to details overlay for each entity.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-dashboard-details.png" alt="Dashboard showing detail rows for agents, teams, and campaigns with sortable columns" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption>Horizontal information structure — same layout for agents, teams, and campaigns
</figcaption>
</figure>

### Objections details

Objection details overlay provides a view on its frequency and the efforts in handling them.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-objection.png" alt="Objection details overlay showing frequency trend and handling efforts breakdown" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption>Objection details overlay — frequency over time and how agents are handling it
</figcaption>
</figure>

</section>

<section class="note-section">

### Interaction details

Objections are highlighted in the interaction analysis: the user can jump right to them, find them in the transcript and examine its details.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-objection-player.png" alt="Call player interface with objections marked on the audio timeline and highlighted in the transcript" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption>Objections surfaced in context — jump to the moment in the call, read it in the transcript
</figcaption>
</figure>

</section>

<section class="note-section">

### AI insights — Spokn AI Spotlight

The final, and the most fun part of the service was supposed to be AI insights page based on patterns the model finds in the conversations data.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-ai-current.png" alt="AI Insights page showing auto-generated summaries and pattern cards from conversation data" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption>Spokn AI Spotlight — shipped version: automated insight cards from conversation patterns
</figcaption>
</figure>

This is what we wanted to look like in the end: general insights combined with on-demand analysis of very detailed requests and questions based on analytics of backend data and transcripts content.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-to-be.png" alt="Vision concept for AI Insights with a conversational query interface alongside automated pattern analysis" class="no-bg-image" style="margin-bottom: 1rem;"><figcaption>Target vision: on-demand analysis via natural language, grounded in call data and transcripts
</figcaption>
</figure>

</section>

<section class="note-section">

## Impact

We shipped the pilot version in 3 months and rolled out the full release in 5. Over 100 licenses were signed early on, and the customers reported immediate value from the transcription and summarization features—even before full-scale rollout of the Success Intelligence modules.

<blockquote>As a business, we are very committed to Al and the value it brings. We've found a lot of use in Spokn Al, the speech transcription and summarisation feature has been a massive help.

<em>— Call centre manager of one of the customers</em>
</blockquote>

I handed off production-ready mockups before my engagement ended — our part of the team was let go due to budget cuts. The early impact validated our shift in direction—from raw transcript analytics to targeted sales support.

<blockquote>Nastya's ability to balance creativity with practical constraints, along with her proactive engagement across teams, was instrumental in the project's success. (...) I highly recommend Nastya for any team looking to advance their product offerings. Her expertise, initiative, and collaborative spirit make her an asset in any fast-paced environment.

<em>— Drew Naylor, Product Manager at MaxContact</em>
</blockquote>

</section>
<section class="note-section">

## Reflection

Honestly, this was a tough one. I was the only designer on the project, with no mentor, navigating a strong PM, a tight timeline, and research I hadn't run myself. Not the most comfortable conditions to do your best work.

But it was also the first time a client team gave me this level of trust and ownership — and that meant a lot. Looking back, I can see where my visual design skills have grown since. Still, when the devs mentioned it was one of the nicest UIs they'd worked with, I held onto that.

</section>
