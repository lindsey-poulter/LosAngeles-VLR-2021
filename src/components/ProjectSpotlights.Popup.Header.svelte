<script>
  import Ribbon from "$components/Ribbon.svelte";
  import Icon from "$components/Icon.svelte";
  import { getContext } from "svelte";

  const { projectStore } = getContext("projectSpotlights");

  $: cardInfo = $projectStore.cardSelection.cardInfo;
  $: cardLabel = $projectStore.cardSelection.cardLabel;
  $: popupLabel = $projectStore.cardSelection.popupLabel;
  $: iconList = $projectStore.cardSelection.iconList;
  $: cardColor = $projectStore.cardSelection.cardColor;
  $: sdgs = $projectStore.cardSelection.sdgs;
</script>

<div id="popup-header" class="section-content">
  <Ribbon color={cardColor}>
    <img src="assets/images/popup-{cardLabel}.png" alt="icon" style="width: 55px;" />
  </Ribbon>
  <div class="popup-header-label-container">
    <div id="circle" on:click>
      <p>X</p>
    </div>

    <h2 style="color: {cardColor};">{cardLabel}</h2>
    <h1>{popupLabel}</h1>
    <p class="icon-row">
      {#each iconList as icon, i}
        <Icon number={+icon.number} path={icon.path} color="sdg-color" size="40px" />
      {/each}
    </p>
  </div>
</div>

<style>
  .icon-row {
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
  }

  .hw-story-index {
    text-align: center;
  }
  #popup-header {
    position: relative;
  }

  h1 {
    width: 70%;
    margin: auto;
    padding-bottom: calc(var(--section-title-below) / 2.5);
  }

  .section-content {
    width: 60%;
    margin-bottom: 3rem;
  }

  .popup-header-label-container {
    padding-top: 7rem;
  }

  #circle {
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: var(--card-shadow);
    border: 1px solid var(--button-border);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    right: 8%;
    z-index: 20;
    color: var(--primary-color);
  }

  @media only screen and (max-width: 640px) {
    h1 {
      width: 90%;
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }

    #circle {
      width: 40px;
      height: 40px;

      position: fixed;
      top: 5%;
    }
    .icon-row {
      width: 100%;
    }
  }
</style>
