<script>
  import { getContext } from "svelte";
  import Icon from "$components/Icon.svelte";
  import Arrow from "$components/ReviewGoal.Wheel.Arrow.svelte";

  import sdgs from "$data/sdgs.csv";
  import move from "$utils/move.js";
  import viewport from "$stores/viewport.js";
  import mq from "$stores/mq";

  export let mobile;

  const { sdgStore, interactions } = getContext("SDG");

  $: sm = $mq.sm;
  $: md = $mq.md;

  $: activeSdg = $sdgStore.activeSdg;
  $: actualIndex = $sdgStore.actualIndex;

  $: nextWheel = $interactions.nextWheel;
  $: previousWheel = $interactions.previousWheel;
  $: coords = $interactions.coords;
  $: zCompute = $interactions.zCompute;
  $: cardRotate = $interactions.cardRotate;
  $: navigateNav = $interactions.navigateNav;
  $: iconSize = mobile ? 40 : sm && md ? 50 : 70;

  $: height = mobile ? 260 : $viewport.height / 2.5;

  function clickCard(sdgNumber) {
    let times = Math.abs(actualIndex + 1 - +sdgNumber);

    for (let i = 0; i < times; i++) {
      if (actualIndex + 1 < +sdgNumber) {
        nextWheel();
      } else {
        previousWheel();
      }
    }
  }
</script>

<div id="arrow-container">
  <div id="previous-button" on:click={previousWheel}><Arrow direction="previous" /></div>
  <div id="next-button" on:click={nextWheel}><Arrow direction="next" /></div>
</div>

<div id="wheel" style=" height: {height}px;">
  <div id="wheel-positioner">
    {#each sdgs as sdg, i}
      <div
        id="sdg{sdg.number}-card"
        on:click={() => clickCard(sdg.number)}
        class="card index-{i} {zCompute(i).show ? 'show' : 'hide'}"
        class:active-card={sdg == activeSdg}
        style="{move(coords(i).x, coords(i).y)}; z-index:{zCompute(i).newPos < 0
          ? actualIndex + i + 1
          : zCompute(i).newPos};"
      >
        <div
          id="card-rotate"
          class:active-card-rotate={sdg == activeSdg}
          style="transform: rotate({cardRotate(i)}deg)"
        >
          <div class="icon-container" style="background-color: var(--sdg{sdg.number}-primary)">
            <Icon number={sdg.number} path={sdg.path} color size="{iconSize}px" />
          </div>

          <div class="label-container">
            <p
              class="paragraph-headline-sm"
              style="color: var(--sdg{sdg.number}-primary)"
              class:active={sdg == activeSdg}
            >
              SDG{sdg.number}
            </p>
            <p class="tertiary-text" class:active={sdg == activeSdg}>
              {sdg.name}
            </p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .card {
    width: 150px;
    height: 190px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    -webkit-transition: transform 0.3s ease-out;
    -moz-transition: transform 0.3s ease-out;
    -o-transition: transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
    cursor: pointer;
  }

  #card-rotate {
    position: relative;
    background-color: var(--white);
    width: 100%;
    height: 100%;
    box-shadow: var(--sdg-card-shadow);
    border-radius: var(--round-sm);
  }

  .active-card-rotate {
    box-shadow: var(--sdg-active-card-shadow) !important;
  }

  .active-card {
    z-index: var(--z-overlay) !important;
    width: 175px;
    height: 215px;
  }

  .active {
    font-size: var(--body-text);
  }

  .hide {
    display: none;
  }

  #wheel {
    padding-top: 3rem;
    z-index: 100;
  }

  #wheel-positioner {
    transform: translate(-50%, 2rem);
  }

  .icon-container,
  .label-container {
    height: 40%;
    border-top-left-radius: var(--round-sm);
    border-top-right-radius: var(--round-sm);
  }

  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .label-container {
    margin-top: 10%;
  }

  #arrow-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
    position: absolute;
    left: 15%;
    z-index: 999;
    margin-top: 2rem;
    /* top: 10%; */
  }

  .paragraph-headline-sm {
    margin-bottom: 0.3rem;
  }

  @media only screen and (max-width: 1000px) {
    .card {
      width: 140px;
      height: 195px;
    }
    .active-card {
      width: 180px;
      height: 220px;
    }
    .active {
      font-size: 0.875rem;
    }
    #arrow-container {
      position: relative;
      top: 2%;
      left: 0;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 640px) {
    #arrow-container {
      position: relative;
      left: 0px;
      top: 90px;
      width: 90%;
      /* width: 80%;
      left: 10%;
      margin-top: -4rem; */
    }

    #wheel {
      overflow: hidden;
      transform: translate(0, -2rem);
      height: 200px;
    }

    #wheel-positioner {
      transform: translate(-50%, -2rem);
    }

    .active-card {
      width: 170px;
      height: 200px;
    }

    .card:not(.active-card) {
      display: none;
    }
  }
</style>
