<script>
  import { setContext } from "svelte";
  import { getContext } from "svelte";
  import { writable } from "svelte/store";
  import inView from "../actions/inView";
  import sdgs from "$data/sdgs.csv";
  import Card from "$components/ProjectSpotlights.Card.svelte";
  import Popup from "$components/ProjectSpotlights.Popup.svelte";
  import { fade, fly } from "svelte/transition";
  import Reveal from "$components/Reveal.svelte";

  export let currentView;

  let showOverlay,
    scrollState,
    cardSelectionIndex = 1;

  $: cardSelection = cardsList[cardSelectionIndex];

  const projectStore = writable({});

  const copy = getContext("copy");

  const card1 = {
    cardLabel: "People",
    popupLabel: "Humanizing Our Housing Crisis",
    cardInfo: "Humanizing Our Housing Crisis",
    iconList: [sdgs[0], sdgs[9], sdgs[10], sdgs[16]],
    buttonLabel: "View Soraya's story",
    cardColor: "var(--people-primary)",
    sdgs: "1, 10, 11, 17"
  };
  const card2 = {
    cardLabel: "Planet",
    popupLabel: "LA 100",
    cardInfo: "LA 100",
    iconList: [sdgs[6], sdgs[10], sdgs[12]],
    buttonLabel: "View pathways",
    cardColor: "var(--planet-primary)",
    sdgs: "7, 11 & 13"
  };
  const card3 = {
    cardLabel: "Prosperity",
    popupLabel: "Justice Budget",
    cardInfo: "Justice Budget",
    iconList: [sdgs[0], sdgs[7], sdgs[9], sdgs[15]],
    buttonLabel: "View projects",
    cardColor: "var(--prosperity-primary)",
    sdgs: "1, 8, 10 & 16"
  };
  const cardsList = [card1, card2, card3];

  function exitPopup() {
    showOverlay = false;
    scrollState = "scroll";
    document.body.classList.remove("no-scroll");
  }

  $: navigateNav = (val) => {
    var element = document.getElementById("popup-header");
    element.scrollIntoView({ block: "start" });
    cardSelection = cardsList[val];
  };

  // STORES
  $: projectStore.set({
    cardSelection,
    navigateNav
  });

  $: projectContext = { projectStore };
  $: setContext("projectSpotlights", projectContext);

  let inViewVar = false;
</script>

<section
  id="project-spotlights"
  use:inView={{ bottom: 50 }}
  on:enter={(e) => (currentView = e.target)}
>
  <div class="section-content-exc">
    <!-- <Reveal>
      <span class="hw-section-index" style="color: var(--m-grey)">06</span>
    </Reveal> -->

    <Reveal>
      <h1>Project Spotlights</h1>
    </Reveal>

    <div class="section-content">
      <p class="body-text">
        The work of cities and local governments is the action at the heart of sustainable
        development. Through services and programs that directly serve residents, cities can deliver
        progress toward the Global Goals, set norms, share models from which to learn, and scale
        what works. We have chosen three initiatives in Los Angeles to exemplify <span
          class="bold-blue">People</span
        >, <span class="bold-blue">Planet</span>, and <span class="bold-blue">Prosperity</span> in action.
      </p>
    </div>

    <Reveal>
      <div class="flex space-between cards-row">
        {#each cardsList as card, i}
          <div
            class="card-container"
            on:click={function () {
              cardSelectionIndex = i;
              navigateNav(i);
              var element = document.getElementById("popup-header");
              element.scrollIntoView({ block: "start" });
            }}
          >
            <Card
              cardLabel={card["cardLabel"]}
              cardInfo={card["cardInfo"]}
              iconList={card["iconList"]}
              buttonLabel={card["buttonLabel"]}
              cardColor={card["cardColor"]}
              cardIndex={i}
              bind:scrollState
              bind:showOverlay
              bind:cardSelectionIndex
            />
          </div>
        {/each}
      </div>
    </Reveal>
  </div>
  <div id="overlay-container" class={showOverlay ? "show" : "hide"}>
    <Popup card={cardSelectionIndex} on:click={exitPopup} />
  </div>
</section>

<style>
  section {
    position: relative;
    background-color: #2a61bc;
    color: var(--white);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-image: url("/assets/images/spotlight-background.png");
    background-attachment: fixed;
  }

  #overlay-container {
    position: fixed;
    overflow-y: scroll;
    top: 3%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 90%;
    margin: 0 auto;
    z-index: 1000;
    background-color: var(--white);
    box-shadow: var(--card-shadow);
    color: var(--black);
    border-radius: var(--round-sm);
  }

  .show {
    display: block;
  }

  .hide {
    display: none;
  }

  .card-container {
    width: 30%;
  }

  .cards-row {
    padding: 1rem;
    color: var(--black);
  }

  .body-text {
    text-align: left;
    margin: 0 auto;
    width: 80%;
  }

  .section-content {
    margin-bottom: 3rem;
    width: 75%;
  }

  @media only screen and (max-width: 800px) {
    section {
      background-image: none;
    }

    .cards-row {
      display: block;
    }
    .card-container {
      width: 100%;
      padding-bottom: 2.5rem;
    }
  }
</style>
