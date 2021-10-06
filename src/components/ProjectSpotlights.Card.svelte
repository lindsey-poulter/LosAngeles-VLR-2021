<script>
  import Icon from "$components/Icon.svelte";
  import Link from "$components/Link.svelte";

  export let cardLabel,
    cardInfo,
    iconList,
    buttonLabel,
    cardColor,
    cardSelectionIndex = 1,
    cardIndex;
  export let scrollState = "scroll";
  export let showOverlay = false;

  $: stopScroll = (cardIndex) => {
    showOverlay = true;
    scrollState = "no-scroll";
    document.body.classList.add(scrollState);
    showOverlay = true;
    cardSelectionIndex = cardIndex;
  };


</script>

<div class="project-card">
  <h2>{cardLabel}</h2>
  <p class="body-text">{cardInfo}</p>
  <div class="icons-row">
    {#each iconList as icon, i}
      <div class="circle">
        <Icon number={+icon.number} path={icon.path} color="sdg-color" size="35px" />
      </div>
    {/each}
  </div>
  <div class="view-button-container" on:click={stopScroll(cardIndex)}>
    <!-- <p class="hw-nav">{buttonLabel}</p> -->
    <div style="text-align: center">
      <Link url="" text={buttonLabel} color="{cardColor}" />
    </div>
  </div>
</div>

<style>
  .icons-row {
    display: flex;
    margin: 0 1rem 2rem 1rem;
    justify-content: center;
  }

  .icons-row {
    height: 60px;
  }
  .icons-row div {
    flex-basis: 30%;
    /* background-color: var(--l-grey); */
    align-self: center;
  }

  .project-card {
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    height: auto;
    padding: 10%;
  }

  .view-button-container:hover {
    color: var(--primary-color);
    cursor: pointer;
  }

  h2 {
    margin-bottom: 0.5rem;
  }

  .body-text {
    margin: 0 1rem 1.5rem 1rem;
    height: 50px;
  }
</style>
