<script>
  import { getContext } from "svelte";

  const copy = getContext("copy");

  export let steps, currentView;

  const sections = ["introduction", "sdg-la", "project-spotlights", "review-goal"];
  const sectionsTitle = [
    "Introduction",
    "The SDGs in LA",
    copy.ProjectSpotlights_title,
    copy.ReviewGoal_title
  ];

  $: state = "hide";
  $: navOn = false;
  $: state = navOn ? "show" : "hide";

  $: navHoverOn = (section) => {
    navOn = true;
  };

  $: navHoverOff = () => {
    navOn = false;
  };

  $: clicked = (section) => {
    const clickedIndex = sections.indexOf(section);
    steps.children[clickedIndex].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };
</script>

<nav
  class={state == "show" ? "open" : "close"}
  on:mouseenter={navHoverOn}
  on:mouseleave={navHoverOff}
>
  <div id="nav-items-container">
    {#each sections as section, i}
      <div id="nav-row" on:click={clicked(section)}>
        <div id="nav-circle" on:click={clicked} class:active-cricle={section == currentView.id} />
        <div
          id="nav-label"
          class="{state} paragraph-headline {state}-label"
          class:active-label={section == currentView.id}
        >
          {sectionsTitle[i]}
        </div>
      </div>
    {/each}
  </div>
</nav>

<style>
  nav {
    height: 100vh;
    width: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
  }

  .open {
    width: 300px;
    background-color: var(--m-grey);
    opacity: 90%;
  }

  .show-label {
    display: inline;
  }
  .hide-label {
    display: none;
  }

  .close {
    width: 80px;
  }
  #nav-items-container {
    padding: 30vh 2rem 0 2rem;
    /* padding: 40vh 2rem 0 2rem; */
  }

  #nav-row {
    display: flex;
    flex-flow: row wrap;
    align-items: baseline;
    cursor: pointer;
  }

  .hide {
    opacity: 0;
  }

  .show {
    opacity: 1;
  }

  #nav-circle {
    border-radius: 50%;
    width: 13px;
    height: 13px;
    margin-bottom: 2rem;
    background-color: none;
    border: 1px solid var(--d-grey);
    opacity: 1;
  }

  .active-cricle {
    background-color: var(--primary-color);
    border: 1px solid var(--primary-tertiary-color) !important;
  }

  .active-label {
    font-weight: 700 !important;
  }

  #nav-label {
    margin-left: 1rem;
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
  }

  #nav-label:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
  }
</style>
