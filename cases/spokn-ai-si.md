---
title: Navigating sales success with generative&nbsp;AI
date: 2024-10-01
tags: case
excerpt: Spokn AI Success Intelligence service helps call centers improve objection handling
layout: case-layout.html
image: "/images/case-studies/spokn-ai-si/spokn-ai-si-main-picture.png"
image-bg: "/images/case-studies/spokn-ai-si/spokn-ai-si-main-picture-bg.png"
type: Web Application
---

<div class="framed">
<h2>Project Brief</h2>
<p><b>Client:</b> MaxContact, a contact center software company serving businesses with contact center teams. Previous episode: <a href=/cases/spokn-ai-speech-analytics>On how I stopped worrying and emprased generative AI</a>.
</p>
<p><b>My role:</b> Product Designer – I led UX strategy, research synthesis, and design execution, from early concepts to developer handoff. I collaborated closely with engineers, analysts, and business stakeholders, and temporarily performed most of the product manager tasks, being the communicator between all the guys above.
</p>
<p><b>Timeline:</b> 5 months</p>
<p><b>Results</b> – <a href="#solution">Jump to the solution</a> 
<br> 
<ul>
    <li>1st iteration finished in 3 months, released in production in 5 months
</li>
    <li>100+ licences signed up
</li>
</ul>
<p><b>The Reality:</b> The project launched strong and made significant progress—early pilots, usable insights, and a clear vision. But five months in, the client had to reduce costs, and I was part of the team that wrapped up early. Despite that, the product continued development and saw early traction.
</p>
</div> 

<section class="note-section">

## The Challenge and the Pivot
At first, the goal was to build out speech analytics features with *automatic quality scoring* of the calls. We explored call scoring frameworks, researched industry scorecards, and even began early prototyping. But as we moved deeper, the client reassessed the effort-value ratio – and pivoted.

**The new direction?** Focus on Success Intelligence: a tool to help managers understand how sales reps handle objections and where they need support.

The solution addresses the need for advanced tools to:
- Understand customer objections and effective handling strategies, 
- Measure sales agent performance, 
- Improve training, support, and job satisfaction in contact centres.

</section>
<section class="note-section">

## The Approach
The design process was even more chaotic this time, but still - Double Diamond narrative is useful not to lose track of the events and their purpose even when the scope shifts.

After a design sprint involving the whole team, we found the initial solution ideas.
<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-design-sprint.png" alt="FigJam board screenshot" class="post-image"></img>
<figcaption>Our FigJam Design Sprint activities throughout a week
</figcaption>
</figure>


### Discover
In the tight timeline, we used findings from prior custdev interviews and client feedback on the first release of Spokn AI.

What stood out:
- *Outbound sales drive revenue* — making them the key focus in performance optimization.
- *Objection handling is a blind spot* — managers knew it mattered, but lacked tools to track and coach it effectively.
- *Agents often get blamed for low success rates*, without enough context to understand systemic issues like pricing, targeting, or product-market fit.

### Define
Based on the insights, we identified the main user problems:
- It’s hard to locate the most important parts of a call.
- Coaching lacks precision—managers don’t know exactly where reps struggle or succeed
- There’s no overview of objection trends—so training is often reactive, not proactive

As we were developing this iteration in parallel with rolling out <a href="/cases/spokn-ai-speech-analytics.md">Speech&nbsp;Analytics</a>, we had not much opportunity to see how managers' routines shifted, so we had to work with assumptions. Since transcript search wasn’t yet implemented, we imagined how managers might navigate sentiment and conversation flow — without being able to quickly jump to specific content.

</section>
<section class="note-section">

### Develop
To balance usability, data complexity, and tech constraints, we broke the product down into three clear increments:
- *Objection Mapping* – Define and track common objection themes
- *Performance Analytics* – Show how agents handle these objections
- *AI Insights* – Surface patterns and guidance based on deeper transcript analysis
We focused on delivering value fast, testing each increment for clarity and usability with client feedback as we went.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-design-sprint-sketches.png" alt="Data visualization sketches screenshot" class="post-image"></img>
<figcaption>My sketches from our Design Sprint: crazy 8's of objection reasons visualizations
</figcaption>
</figure>

The problems we faced:
- Some “successful” calls didn’t align with the patterns in transcript data—sales charisma is hard to measure
- Legal/privacy constraints meant we had to train our own custom LLMs, slowing things down
- Manual mapping of objections from real transcripts was time-consuming but necessary


### Deliver
We designed a toolset that helps contact center managers understand what’s going wrong, who needs support and why. The solution had four main components: **Dashboard** switching focus from agents to objections, **Interaction** details highlighting the objections there, and **Spokn AI Spotlight** – providing AI insights based on the data.


</section>
<section class="note-section">

<h2 id="solution">The Solution</h2>

### Dashboard: objections frequency vs agent performance
The dashboard provides two ways of looking at the data depending on the current focus of the manager:

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-dashboard-obj.png" alt="Objections Dashboard with metrics ribbon and tables" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption><em>What’s happening?</em> The Objections tab shows their frequency among the selected conversations. This helps see the signals from the environment.
</figcaption>
</figure>


<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-dashboard-perf.png" alt="Objections Dashboard with metrics ribbon and tables" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption><em>Who’s responsible?</em> The Performance tab emphasizes the success rate of the teams, campaigns and separate agents. Thanks to this, the manager can provide training and coaching to the ones who need it the most, and connect the strongest members of the teams with the ones needing support.
</figcaption>
</figure>

Equal attention to agents, teams, campaigns and objections themselves lead to horizontal information structure with access to details overlay for each entity.

<figure>
<img src="/images/case-studies/spokn-ai-si//spokn-ai-si-dashboard-details.png" alt="Objections details table" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>
</figcaption>
</figure>

### Objections details
Objection details overlay provides a view on its frequency and the efforts in handling them.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-objection.png" alt="Objections details table" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>
</figcaption>
</figure>

</section>
<section class="note-section">

### Interaction details
Objections are highlighted in the interaction analysis: the user can jump right to them, find them in the transcript and examine its details.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-objection-player.png" alt="Objections shown on the interaction timeline" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>
</figcaption>
</figure>

</section>
<section class="note-section">

### AI insights — Spokn AI Spotlight

The final, and the most fun part of the service was supposed to be AI insights page based on patterns the model finds in the conversations data.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-ai-current.png" alt="Objections shown on the interaction timeline" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>
</figcaption>
</figure>

This is what we wanted to look like in the end: general insights combined with on-demand analysis of very detailed requests and questions based on analytics of backend data and transcripts content.

<figure>
<img src="/images/case-studies/spokn-ai-si/spokn-ai-si-to-be.png" alt="Objections shown on the interaction timeline" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>
</figcaption>
</figure>

</section>

<section class="note-section">

## The Impact
We shipped the pilot version in 3 months and rolled out the full release in 5. Over 100 licenses were signed early on, and the customers reported immediate value from the transcription and summarization features—even before full-scale rollout of the Success Intelligence modules.


<blockquote>“As a business, we are very committed to Al and the value it brings. We've found a lot of use in Spokn Al, the speech transcription and summarisation feature has been a massive help.”

<em>— Call centre manager of one of the customers</em>
</blockquote>

</section>

<section class="note-section">

While I didn’t stay to see the full evolution of the product, I’m proud of the foundation we built. The early impact validated our shift in direction—from raw transcript analytics to targeted sales support.
When the company had to reduce costs, my role was among those phased out in favor of engineering capacity. It was disappointing, but understandable.

</section>
<section class="note-section">

## Reflection
This project pushed me to adapt quickly, navigate ambiguity, and align technical possibilities with real user needs. One of my biggest challenges was accepting a major pivot—letting go of early work and regrouping around a new direction.

The interesting part was bridging the gap between what was technically possible and what users actually needed. Involving engineers early helped align expectations—but with evolving AI tools, surprises were inevitable.

Though I didn’t see the full rollout due to team cuts, I’m proud of what we built—and grateful for the trust and ownership I was given.

And look, what my product manager said!

<blockquote>“Nastya's ability to balance creativity with practical constraints, along with her proactive engagement across teams, was instrumental in the project's success. (...) I highly recommend Nastya for any team looking to advance their product offerings. Her expertise, initiative, and collaborative spirit make her an asset in any fast-paced environment.”

<em>— Drew Naylor, Product Manager at MaxContact</em>
</blockquote>

</section>

{% include "in-progress.html" %}