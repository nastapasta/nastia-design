---
title: 🌿 On creating this site
tags: note
date: 2025-04-11
excerpt: Freezing in mid-April in Belgrade — unthinkable for spring in the Balkans — bored in a forced, temporary <em>dolce far niente</em>, I built this site in about a week. There's a long backstory, of course.
layout: note-layout.html
---

In a search through my Obsidian vault, I counted 33 mentions of “portfolio” in two years. Every designer must have a portfolio. Every designer says “Yeah, I must finally get back to this issue”, and even if it gets done, no designer is ultimately happy with the result.

### All designers need this. – First tries.
The task of putting together a portfolio has been following with me for almost a decade. At first architectural (architectural portfolios are a separate and very complex issue, I won't dive into it). After moving to UX — product design portfolio. Like for anyone else, it was very difficult to even put together a PDF of my work, let alone describe the cases themselves (if we manage to do this and don't quit, it's a leap beyond the edge of possibility). Why must there be a portfolio? Well, it just must be.

There are many tools on the internet for creating and hosting design portfolios, from dedicated sites to very non-trivial “quick-and-dirty” methods:
- Simple PDF file. Old but gold.
- <a href="https://behance.com">Behance</a>. Old but gold too. Easy to build long case studies by simply uploading long case-study PNGs exported from Figma. Really crowded place.
- <a href="https://dribbble.com">Dribbble</a>. Primarily considered a portal to show off nice UI, now moving toward a designer marketplace with full-fledged portfolios.
- A Figma prototype. Good MVP option to show your Figma prototyping skills.
- No-code or low-code builders: <a href="https://framer.com">Framer</a>, <a href="https://tilda.cc">Tilda</a>, <a href="https://readymag.com">Readymag</a>, <a href="https://webflow.com">Webflow</a>, <a href="https://wix.com">Wix</a>, <a href="https://squarespace.com">Squarespace</a>.
- Solutions solely for UX-ers: <a href="https://uxfol.io/">UXFolio</a>.
- Notion. Quite popular among the Russian-speaking part of the product design milieu. Makes it very easy to build a literal web page, but provides almost no styling opportunities.
- A Miro board. An unobvious but interesting way to demonstrate your work in a non-linear way, putting it into a narrative you can structure as you wish. Example – <a href="https://miro.com/app/board/uXjVOyHTPXk=/?share_link_id=950155547238">Rita Dunaeva's portfolio</a>.
- A Telegram channel (weird flex but okay).
- A custom personal site. Needs some tech knowledge and literaly becomes your pet project.

Each option has its own loyal users, pros and cons – and it's definitely not a full list.

I made several attempts to build it in Readymag some years ago. Here is one of them:

<figure>
<img src="/images/notes/readymag-recording.gif" alt="Short website guide animation" class="post-image" style="margin-bottom: 1rem;"></img>
<figcaption>Let's call it Iteration 1.
</figcaption>
</figure>

Then I gave a couple of tries to a Figma prototype. Such solutions looked too static and boring, and were quickly abandoned. At work, I was just UX-ing, without lifting my nose from Figma, and I had neither time nor imagination for hands-on development.

<figure>
<img src="/images/notes/figma-prototype.png" alt="Figma mockups of main page and CV"></img>
<figcaption>CV page
</figcaption>
</figure>

### Women in Tech. – Framer portfolio.

In 2024, I passed a competition and got into the Women in Tech program as a mentee, and my main request to my mentor was <em>"Please help me finally build the portfolio so I don't have to think about it anymore"</em>. We spent two months on it. This is the plan we followed – and I often use in mentoring – which someone can fing helpful:
- I defined my goal and target audience. Everything like in product design.
- I looked at references, analysed their information architecture and user flows.
(Everything a young designer sees in search of references and examples is perfectly shown on <a href="https://honest-ux-design-portfolio.webflow.io/">this site</a> - thank you, beautiful person.)
- Assembled the first concept with the structure of the homepage and case study.
- Made a mood board. Even made a collage.
- Then I sat down to write case studies. For me, describing or documenting the work done is one of the most important and difficult tasks. The problem is that UX-ers are prone to like reading, but hiring managers have no spare time for that. So you need to make the structure of the case study clear and predictable – and make sure there isn't twice as much text as there are pictures. This time, i barely managed to do it.
- Nevertheless, I opened Framer and, iteration by iteration, correcting the layout, I put together a pretty okayish website:

<figure>
<img src="/images/notes/framer-hero.png" alt="Hero section of main page of my Framer website"></img>
<figcaption>Main page</figcaption>
</figure>

<figure>
<img src="/images/notes/framer-footer.png" alt="Bottom part of main page of my Framer website"></img>
<figcaption>Bottom of the main page
</figcaption>
</figure>

<figure>
<img src="/images/notes/framer-case.png" alt="Case study my Framer website"></img>
<figcaption>Case study
</figcaption>
</figure>

Looking back, there were issues: unclear gray tone, naïve illustration (actually, this site's logo and favicon are from here – this is my cat's face), jumpy layout, verbose stories with too much copy.

### Digital gardens. – Hardcore layout. – Here we are.

Eventually I understood that * just * a portfolio is not interesting. When a friend sent me a link to <a href="https://maggieappleton.com/ai-dark-forest/">Maggie Appleton's essay The Dark Forest and Generative AI</a> a few years ago, I was impressed that one can have not just a portfolio, but an entire website dedicated to the self: a system of self-publishing, created for those who are actually interested in what you do. And one can also add some projects there, along with other things like notes, essays, experiments, pictures, etc. I'm subscribed to a few such digital gardens and enjoy peeking at who's doing what.

In the spring of 2025, many changes happened — first of all, a wedding and a move. When you find yourself in a new country, in an empty apartment and with two suitcases of stuff, a lot of mental resources (those not spent on adapting to new bureucracy) are released.

I bought Eugene Arutyunov's course <a href="https://intuition.team/how-to-design-with-code">How to design with code</a>, repeated the basics of HTML and CSS and started learning new things. In the middle of the course, I had already deployed an online business card:

<figure>
<img src="/images/notes/vercel-first-deployment.png" alt="Website containing olain text layout"></img>
<figcaption>Text website
</figcaption>
</figure>

After that, nothing could stop me, I made a fork and started a new branch using Eleventy. After a few days and a few gray hairs, I got the site you are reading now – or rather, <a href="https://github.com/nastapasta/nastia-design">its first version</a>.

I've coded this site by myself, using plain HTML and CSS with help of tutorials and ChatGPT to hunt the layout bugs. Code is stored in a public GitHub repository. Deployment is handled by Vercel. I'm using a simple open-source static site generator, Eleventy. For typography, I use Instrument Sans and Source Serif 4 (serifs are better for readability, they say), both available on Google Fonts. 

The site is still a work in progress: 
- Case studies are unfinished — they require their own, special layout;
- Actually, I have to rewrite them;
- Non-product-design work needed;
- Color system and dark theme;
- RSS feed;
- Library page;
- Backlinks;
- Buy a domain name.

And more and more things to do. But I hope this will be my cozy piece of internet for a long while.

{% include "in-progress.html" %}
