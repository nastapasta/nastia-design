---
title: Zettel, AI-powered fast note-taking
year: 2023
tags: case
excerpt: Little LLM helper to systematise your messy sporadic notes. 🏆 Winner of Innovation Sandbox 2023 
layout: case-layout.html
image: "/images/case-studies/zettel/zettel-main-picture.png"
type: Mobile Application
---

<div class="disclaimer">
    <small>Disclaimer:</small>
    <h2>It was long ago, and I was wrong</h2> 
    <p>This concept explores the idea of outsourcing the “connecting the dots” to the machine. While I believe that piles of notes <em>can</em> be sorted and cleaned up, I also believe apophenia — that rare spark of unexpected meaning — is something we should reserve for ourselves.</p>
</div>

<div class="framed">
<h2>Project Brief</h2>
<p>Zettel is a note-taking app that helps people connect their thoughts using natural language processing. Designed for knowledge lovers, thinkers, and researchers, it encourages flow without forcing structure upfront.</p>
<p>This was a personal solo project from 0→1: research, UX, UI, illustration, pitching — all done by me.</p>
</div> 

<div class="large-divider"></div>

## The Problem
### Our attention spans are shrinking, but information keeps growing.
Gloria Mark, a professor of information science at the University of California, Irvine, and the author of <a href="https://www.goodreads.com/book/show/60795084-attention-span">"Attention Span"</a>, began researching how people use computers in 2004. Back then, the average duration individuals spent focused on a single screen was 2.5 minutes. 

“I was astounded. That was so much worse than I’d thought it would be.” By 2012, Mark and her colleagues found the average time on a single task was 75 seconds. Now it’s down to about 47.

Although the time we spend focusing on something is decreasing, the amount of knowledge we have to process is not. Many of us have ways of collecting our notes and thoughts: from sticky notes and saved messages in the chat with oneself, to Zettelkastens, to Tiago Forte’s PARA method, to Roam research graphs. 

<figure>
<img src="/images/case-studies/zettel/all-tools.png" alt="Books, notebooks, files and computers flying in the air" style="margin-bottom: 1rem;"></img>
<figcaption>Sometimes it feels like this.
</figcaption>
</figure>

But most note-taking tools focus on capturing — not connecting — ideas. Even power users find themselves manually copying and pasting their notes into external systems, hoping to make sense of it all later.

<div class="framed italic">
<p class="big centered">“But what if I can’t predict the structure of my notes from scratch?”
</p>
</div> 

<div class="large-divider"></div>

## Research

To understand how people manage their sporadic notes, I conducted a survey and five semi-structured interviews with deep readers, researchers, and note hoarders.

During the interviews, *three main user types* emerged in my sight:

<div class=three-grid>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-user-curious.png">
        <h4>The Curious</h4>
        <p>Has a reading addiction.<br>Wants to formulate an opinion. <br>Answers the questions.<br>Has no specific goal</p>
    </div>
    <div>
    <img class=small-grid-image src="/images/case-studies/zettel/grid-user-write.png">
        <h4>The Writer</h4>
        <p>Prone to ADHD.<br>Uses a lot of sources simultaneously.<br>Creative, not always systematic</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-user-researcher.png">
        <h4>The Researcher</h4>
        <p>Thorough.<br>Requires a solid system of sources.<br>Operates hundreds of files: books, pictures, links, maps.</p>
    </div>
</div>

What they all shared:
- A desire to make connections.
- Difficulty remembering where they read or heard something.
- A patchwork of tools, rituals, and frustration.

<div class="framed italic">
<p class="big centered">“I sit down every other Saturday to paste all my notes into my kumu graph. It’s calming… but overwhelming.”
</p>
<p>– One of the interview participants</p>
</div> 

<div class="large-divider"></div>

## Defining the Needs

From the interviews, four core problem areas stood out:

<div class=two-grid>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-recalling.png">
        <h4>Issues with recalling</h4>
        <p>“Where did I read that again?”</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-connectivity.png">
        <h4>Disconnected thoughts</h4>
        <p>“How does this tie into what I wrote last week?”</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-planning.png">
        <h4>Planning struggles</h4>
        <p> “What should I read or revisit next? How will I find this reference?”</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-structure.png">
        <h4>Fear of a clean slate</h4>
        <p>“Do I need to figure out my whole system before I even start?”</p>
    </div>
</div>


How might we…
- Suggest connections across scattered thoughts?
- Make structuring optional and gentle?
- Let users capture quickly, connect gradually?

<div class="large-divider"></div>

### Zettel introduces a more intuitive, assisted way of connecting thoughts:

<div class=two-grid>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-recalling-help.png">
        <h4>Assisted structuring</h4>
        <p>Automated tagging and structuring suggestions.</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-connectivity-help.png">
        <h4>Assisted linking</h4>
        <p>Create linked records right away.</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-planning-help.png">
        <h4>Fast referencing</h4>
        <p>“How can this idea be connected to all the others?”</p>
    </div>
    <div>
        <img class=small-grid-image src="/images/case-studies/zettel/grid-structure-help.png">
        <h4>Easy input</h4>
        <p>Initially 'flat' structure. No need to bother where to create a new file.</p>
    </div>
</div>

<div class="large-divider"></div>

## Design Process
As a sole member of the team, I had to use my subtle abilities to create a prototype. I had no technical ability, only Figma. Fortunately, design thinking is not something I had to be taught of.

I'll omit the prototypes on purpose: we all have seen thousands of notes, storymaps, sketches, and wireframes.

<!-- Story Mapping led to designing main user flow and features.

<figure>
<img src="/images/case-studies/zettel/story-map.png" alt="Story map screenshot" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Story map
</figcaption>
</figure>

ILo-fi Sketches helped to visualise flow and screen types

<figure>
<img src="/images/case-studies/zettel/sketches.png" alt="User flow sketches in the notebook" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>User flow sketches
</figcaption>
</figure> -->

Piles of sketches and wireframes slowly turned into prototypes:

<figure>
<img src="/images/case-studies/zettel/prototype.png" alt="Prototype screenshot with screens and arrow connections between them" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Prototype screenshot for the first presentation</figcaption>
</figure>

<div class="large-divider"></div>

## The Solution
I focused on mobile-first interactions, imagining real-life use: walking, listening to a podcast, or quickly capturing a thought in a café. So, the journey resulted in a Figma prototype of a solution as simple as your "Saved messages" inbox in messenger, with some twists.

<!-- GIFs with UI -->
<div class="medium-divider"></div>
<div>
    <div class=case-ui-video-frame>
        <div class="case-ui-video-box">
            <img class="case-ui-video" src="/images/case-studies/zettel/onboarding.gif">
        </div>
        <div class="case-ui-copy">
            <small>Onboarding flow</small>
            <h3>Onboarding flow: from downloading app to opening your canvas</h3>
        </div>
    </div>
    <div class=case-ui-video-frame>
            <div class="case-ui-video-box">
            <img class="case-ui-video" src="/images/case-studies/zettel/first-record.gif">
        </div>
        <div class="case-ui-copy">
            <small>Creating a first record</small>
            <h3>Chat-like UI helps to focus only on the message at the current moment. Add AI-suggested tags right away.</h3>
        </div>
    </div>
    <div class=case-ui-video-frame>
        <div class="case-ui-video-box">
            <img class="case-ui-video" src="/images/case-studies/zettel/nested-records.gif">
        </div>
        <div class="case-ui-copy">
            <small>Creating new records</small>
            <h3>Create nested records. Continue adding your thoughts with analysis of existing context.</h3>
        </div>
    </div>
    <div class=case-ui-video-frame>
            <div class="case-ui-video-box">
            <img class="case-ui-video" src="/images/case-studies/zettel/ai-suggestions.gif">
        </div>
        <div class="case-ui-copy">
            <small>AI suggestions</small>
            <h3>Semantic connection suggestions over time. The system goes through your records and offers the connections that might be not so obvious but insightful.</h3>
        </div>
    </div>
    <div class=case-ui-video-frame>
        <div class="case-ui-video-box">
            <img class="case-ui-video" src="/images/case-studies/zettel/switching-views.gif">
        </div>
        <div class="case-ui-copy">
            <small>Switching the views</small>
            <h3>View the notes in different ways, including the graph view, where you can see connections between the records.</h3>
        </div>
    </div>
</div>

<div class="large-divider"></div>

## Outcome
Time to pitch! The finale of the sandbox was the public presentation and pitching, demonstrating the whole work: target auditory research, market research, business model (all of them I omitted in this publication) and a prototype.

The project won 1st Prize in Coherent Solutions Innovation Sandbox (Autumn 2023)

<figure>
<img src="/images/case-studies/zettel/presentation.png" alt="Screenshot of the presentation recording" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Screenshot from the presentation
</figcaption>
</figure>

<img src="/images/case-studies/zettel/presentation-slides.png" alt="Several slides from the pitch deck" style="margin-bottom: 1rem; width: 100%"></img>

<div class="framed italic">
<p class="big centered">“I wish I had this during my PhD.”
</p>
<p>– Max Sandu, Head of Jury”
</div> 


<div class="large-divider"></div>

## Reflection

### What I learned:
- Software is secondary (although the medium is always the message). What matters is learning to actually think (surprise!).
- Community matters. I didn’t fully believe in the idea until I saw others resonate with it.
- It’s not just a product. It’s a question about how we relate to knowledge, memory, and attention.

### What's next
I’m continuing to explore how people manage personal knowledge — either by developing this idea further or studying it from a more anthropological perspective.
If this resonates with you or you want to collaborate — drop me a message. I'd love to chat.