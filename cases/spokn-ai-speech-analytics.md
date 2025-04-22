---
title: Spokn AI – speech analytics for contact centers
date: 2023-11-30
tags: case
excerpt: On how I stopped worrying and embraced generativeAI
layout: case-layout.html
image: "/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-analytics-main-picture.png"
type: Web Application
---

<div class="framed">
<h2>Project Brief</h2>
<p><b>Client:</b> <a href="https://www.maxcontact.com/">MaxContact</a> is a contact centre software company serving businesses with dozens and hundreds of workers. The company has been ranked one of the <a href="https://www.maxcontact.com/resources/blog-insights/maxcontact-named-as-one-of-the-top-50-companies-at-the-northern-tech-awards-2023/">top 50</a> fastest growing technology companies in the North, consecutively from 2021-2023, and in 2022 received the IT Vendor of the Year Award.</p>
<p><b>My role:</b> Product Designer</p>
<p><b>Team:</b> Product Designer (mysefl), Business Analyst, 5+ developers, 2 QA, PM, Solution Architect. Client’s side: VP of Engineering, Product Owner, CEO.</p>
<p><b>Timeline:</b> 7 months</p>
<p><b>Results</b> – <a href="#solution">Jump to the solution</a> 
<br> 
<ul>
    <li>simplified Quality Assessment manager’s performance
</li>
    <li>MVP of AI-powered solution from scratch in 7 months
</li>
    <li>secured in a new customer with 200+ seats
</li>
    </ul>
</p>
<p>I worked closely with the team to explore needs, define MVP scope, and design a usable system from early concepts to developer handoff.
</p>
</div> 

<section class="note-section">

## The Challenge
Call center managers are usually overwhelmed by the volume of calls they need to review manually. Feedback loops are slow, and coaching agents effectively is difficult without clear conversation insights.

The goal was to create a tool that could help managers:

- Quickly find calls worth reviewing.
- Understand what happened in those calls.
- Give relevant, timely feedback to agents.

First two tasks became the main focus of the solution for the time being. We had to balance AI-powered analysis with clarity and trust, while working within a fast-moving startup environment and many technical constraints.

</section>

<section class="note-section">

## The Approach (Double Diamond, of course)
Let’s pretend that Double Diamond narrative exists in the real world, though in reality I was jumping from part to part, aligning new findings, new constraints, and new requests.

### Discover
To understand the needs of quality managers, I focused on Hanna — our key user persona. With over 10 years in customer service and a QA managerial role, Hanna spends her day reviewing interactions across calls, emails, and chats. She conducts audits, shares feedback, and helps agents grow by pairing those with complementary strengths.

What stood out:
- Managing large volumes of conversations is overwhelming.
- Feedback is often delayed or resisted.
- Tools are fragmented, and tech limitations slow her down.
- She cares deeply about quality, improvement, and team development.

<figure>
<img src="/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-an-persona.png" alt="User persona layout" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Our persona - Hanna
</figcaption>
</figure>

This helped us frame the product around speed, clarity, and trust in feedback.

### Define
Based on the insights from Hanna, we identified the main user problems:
- No way to know which calls to prioritize, except blindly filtering them out.
- Random call selections may not be representative.
- Tendency to focus on successful calls, missing critical issues.
- Struggling to fill out assessment forms while listening.
- Time-consuming review process that takes away from coaching agents.

These challenges guided us in designing a solution that simplifies decision-making, speeds up the review process, and ensures more relevant feedback.

</section>

<section class="note-section">

### Develop
To balance user needs, data, and technical constraints, we needed to:
- Help users quickly find key interactions via the dashboard.
- Show essential call info without opening each call.

Using story maps and prioritization sessions, I sketched early flows to explore how high-level KPIs and detailed visualizations could guide call selection. This led to a lo-fi prototype focused on clarity and scanability.

<figure>
<img src="/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-an-storymap.png" alt="Storymap screenshot" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Story map
</figcaption>
</figure>

<figure>
<img src="/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-an-screenflows.png" alt="UI screens initial sketches" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Screenflow Searches
</figcaption>
</figure>

During development, we faced unavoidable problems:
- A small team with tight deadlines.
- Limited technical flexibility.
- No direct access to end users.

After stakeholder reviews, we made some changes:
- Renamed “Keywords” to “Topics” for clarity of what is happening in the back end.
- Moved interaction lists to the playback page for familiarity.
- Cut coaching and agent profile features from MVP due to time limits.

### Deliver
We tested early versions of the product with QA managers and internal reviewers to see if the tool saved time and supported better decision-making.

We tested:
- Relevance of surfaced calls in the dashboard.
- Usability of the player + transcript combo

We learned:
- Filters made reviews feel more focused
- Transcripts with sentiment highlights reduced listening time
- Managers appreciated having everything in one place

</section>

<section class="note-section">


<h2 id="solution">The Solution</h2>

We focused on the core tasks: finding the right calls and listening efficiently.

### Dashboard: Prioritized Review
The dashboard helps managers start with the most relevant calls — surfaced by AI, filtered by agent, team, length and sentiment. No more random sampling.

<figure>
<img src="/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-an-dashboard.png" alt="UI screens initial sketches" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>Dashboard
</figcaption>
</figure>

### Redesigned playback: See all on one place
Playback is a collection of individual interactions. It inherits the working process in Manager Portal, containing all the calls analysed by Spokn AI.
<figure>
<img src="/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-an-playback.png" alt="Playback page with a table of interaction recordings" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>Screenflow Searches
</figcaption>
</figure>

### Player: Review with Context
We paired transcripts with sentiment markers and playback controls. This allowed managers to scan for moments worth hearing, not listen start to finish.
<figure>
<img src="/images/case-studies/spokn-ai-speech-an/spokn-ai-speech-an-player.png" alt="Player page, showing the recording visualisation and conversation transcript" class="no-bg-image" style="margin-bottom: 1rem;"></img>
<figcaption>Interaction Player
</figcaption>
</figure>

</section>

<section class="note-section">

## The Impact
- The MVP was shipped and used in real QA workflows
- Managers reported faster reviews and clearer feedback
- The team received strong interest from BPOs and customer service leads

### Unexpected Use Cases
While the beta version had limited functionality, some of the users used the transcript feature to gather sets of sample conversations, download the transcript documents and review them with ChatGPT, getting even more actionable insights.


<blockquote>“Spokn's speech transcription and call summary features are helpful, especially for reducing the need for manual sales documentation.”</blockquote>

<blockquote>“These insights would allow us to address issues without extensive manual review, thereby saving time and improving efficiency.”

<em>— Quotes from the pilot launch users.</em>
</blockquote>


The tool laid the foundation for future AI-assisted coaching and continuous QA improvements.

</section>

<section class="note-section">

## Reflection
This project came with all the usual startup messiness — shifting requirements, parallel development, and tight deadlines. I learned to defend the scope while staying adaptable, and to make decisions even when I wasn’t 100% sure. When I needed extra eyes, quick hallway tests and input from the client’s UX lead helped move things forward. 

I also saw how even a simple-looking UI can create complex development challenges — our line chart alone took weeks of testing with huge amounts of data. Years later, I see that the solution could be much better – but it worked great in given circumstances.

The key lessons? Involve devs early and always expect the unexpected. And make friends with the testers.

</section>