<script>
  import { getContext } from "svelte";
  const { projectStore } = getContext("projectSpotlights");
  import Reveal from "$components/Reveal.svelte";

  $: cardColor = $projectStore.cardSelection.cardColor;

  const timeline = [
    "Soraya has a good rhythm with her six kids in school. Her job is stable and she has money to pay rent each month.",
    "Unexpectedly, Soraya’s job of 13 years moves her to part-time. She falls behind on rent for the first time in five years of living in her home and receives an eviction notice from her landlord.",
    "Soraya scrambles to find resources. After a lengthy process in housing court, she is left with legal debt and rent to pay back. Soraya is searching for a new affordable home, but to no avail.",
    "Exasperated, she decides to move with her six children into her cousin’s place. Her cousin has two kids of her own and her husband passed away, so Soraya can help pay rent. <div class=timeline-quote>&quot;I was short on cash, I didn't really know where to find different apartments. And the landlady was like, &lsquo;You have to leave, you have to leave.&rsquo; I didn't know where to go.&quot;</div>",
    "The COVID-19 pandemic hits and now eight children are in one small apartment trying to do distance learning. Soraya’s oldest son, who is usually well-behaved, starts picking fights with the other kids.",
    "Then, Soraya’s cousin is laid off and they are now facing another eviction scenario with an aggressive landlord.",
    "Soraya’s story is unresolved. Her cousin’s eviction case is paused due to COVID-19.",
    "Recently, Soraya got connected to a case worker at one of the City’s FamilySource Centers, New Economics for Women.",
    "She is looking for her own apartment with their help, but it’s difficult to find an affordable option that will accommodate her whole family. <div class=timeline-quote>&quot;&lsquo;Big enough&rsquo;, and &lsquo;I can afford&rsquo; won't go in the same sentence.&quot;</div>",
    "The good news is that she feels &quot;100% supported&quot; by her case worker. She just wishes she knew about them earlier. She is hoping to go back to full time work soon to have more money for rent."
  ];
</script>

<Reveal>
  <div id="journey-icon" class="popup-icon" />
</Reveal>

<Reveal>
  <p class="hw-sub-section-headline">Soraya's journey</p>
</Reveal>

<div id="timeline">
  {#each timeline as story, i}
    <Reveal>
      <div class="flex {(i + 1) % 2 == 0 ? 'container-left' : 'container-right'}">
        <p class="hw-story-index" style="color:{cardColor};">{i < 9 ? 0 : ""}{i + 1}</p>
        <p class="body-text">{@html story}</p>
      </div>
    </Reveal>
  {/each}
</div>

<Reveal>
  <p class="body-text">
    By sharing stories like Soraya’s, this resource aims to spark dialogue and action among policy
    makers and service providers about how to improve the way Angelenos facing housing insecurity
    are supported.
  </p>
</Reveal>

<Reveal>
  <p class="hw-nav">Can you imagine if Soraya…</p>
</Reveal>

<ul>
  <Reveal>
    <li>received temporary financial assistance when her job hours were reduced?</li>
  </Reveal>

  <Reveal>
    <li>
      connected with free legal services and case management when she first received an eviction
      notice?
    </li>
  </Reveal>

  <Reveal>
    <li>
      had access to free mental health support for herself and her children to help navigate their
      housing challenges?
    </li>
  </Reveal>
</ul>

<Reveal>
  <p class="body-text" style="margin-top: 2rem">
    <a href="https://lamayor.org/increasing-housing-stability-renters" target="_blank"
      >Read the full resource</a
    > to learn about opportunities to better serve Angelenos like Soraya.
  </p>
  <p class="body-text">
    The Mayor’s Office will continue to engage partners and the public in a conversation about
    housing insecurity, and will update this resource to incorporate feedback.
  </p>
</Reveal>

<style>
  .container-left .hw-story-index {
    margin-left: 1rem;
  }
  .container-right .hw-story-index {
    margin-right: 1rem;
  }
  .hw-quote {
    padding: 4rem 0;
  }

  .hw-sub-section-headline {
    margin-bottom: 2rem;
  }

  ul,
  .hw-nav,
  .body-text {
    text-align: left;
  }

  .hw-nav {
    padding: 2rem 0;
  }

  a {
    color: var(--people-primary);
  }

  li {
    margin-left: 2rem;
    margin-bottom: 0.5rem;
  }

  /* li::before {
    content: "•";
    color: var(--people-primary); 
    display: inline-block;
    width: 1em;
    margin-left: 1em;
    margin-bottom: 0.5rem;
  } */

  .popup-icon {
    background-image: url("/assets/images/PEOPLE_path.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(107, 113, 191, 0.45);
  }

  a {
    color: var(--people-primary);
    border-bottom: 1px solid var(--people-primary);
    text-decoration: none;
    font-family: var(--hw);
    font-size: 1.125rem;
  }

  a:hover {
    border-bottom: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  #journey-icon {
    background-image: "";
    margin-bottom: 2rem;
  }

  #timeline {
    position: relative;
    padding: 0rem 0;
    margin-bottom: 4rem;
  }

  #timeline::after {
    content: "";
    position: absolute;
    width: 2px;
    background: var(--m-grey);
    top: 7px;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    z-index: -1;
  }

  .container-left,
  .container-right {
    padding: 0rem 1.5rem 0rem 1.5rem;
    position: relative;
    background: inherit;
    width: 50%;
  }

  .container-left::after,
  .container-right::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: calc(0% + 7px);
    right: -8px;
    background: var(--people-primary);
    border-radius: 50%;
    z-index: 1;
  }

  .container-right::after {
    left: -8px;
  }

  li {
    font-size: 1rem;
  }

  .container-left {
    left: 0;
    flex-direction: row-reverse;
  }

  .container-left .body-text,
  .container-left {
    text-align: right;
  }

  .container-right {
    left: 50%;
    text-align: left;
  }
  @media only screen and (max-width: 640px) {
    .container-right,
    .container-left {
      display: block;
    }

    .hw-story-index {
      margin-bottom: 0.5rem;
    }

    .hw-sub-section-headline {
      font-size: 2rem;
    }

    .popup-icon {
      width: 130px;
      height: 130px;
    }

    .sub-section {
      margin-bottom: 0rem;
      padding-bottom: 0rem;
    }
    .hw-quote {
      font-size: 1.125rem;
    }

    .container-left .hw-story-index {
      margin-left: 0rem;
    }
    .container-right .hw-story-index {
      margin-right: 0rem;
    }

    #timeline .body-text {
      font-size: 0.875rem;
    }
  }
</style>
