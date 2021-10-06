<script>
  import { getContext } from "svelte";
  import Icon from "$components/Icon.svelte";
  import mq from "$stores/mq";

  $: sm = $mq.sm;
  $: md = $mq.md;
  $: iconSize = mobile ? 40 : sm && md ? 50 : 75;

  const { sdgStore, interactions } = getContext("SDG");

  export let mobile;

  $: nextSdg = $sdgStore.nextSdg;
  $: previousSdg = $sdgStore.previousSdg;
  $: nextWheel = $interactions.nextWheel;
  $: previousWheel = $interactions.previousWheel;
</script>

<div id="bottom-nav" class="flex space-between">

  <div id="previous" class="flex align-center"  on:click={previousWheel}>
    <div
      class="box"
      style="background-color: var(--sdg{previousSdg.number}-primary)"
     
    >
      <Icon number={previousSdg.number} path={previousSdg.path} color size="{iconSize}px" />
    </div>
    <div class="label">
      <p class="paragraph-headline" style="color: var(--sdg{previousSdg.number}-primary)">
        sdg {previousSdg.number}
      </p>
      <p class="paragraph-headline">{mobile ? "previous" : previousSdg.name}</p>
      <p class="tertiary-text" style="color: var(--black); text-align: left;">PREVIOUS</p>
    </div>
  </div>


  <div id="next" class="flex align-center" on:click={nextWheel}>
    <div class="label">
     
      <p class="paragraph-headline" style="color: var(--sdg{nextSdg.number}-primary)">
        sdg {nextSdg.number}
      </p>
      <p class="paragraph-headline">{mobile ? "next" : nextSdg.name}</p>
      <p class="tertiary-text" style="color: var(--black); text-align: right;">NEXT</p>
    </div>
    <div
      class="box"
      style="background-color: var(--sdg{nextSdg.number}-primary)"
      
    >
      <Icon number={nextSdg.number} path={nextSdg.path} color size="{iconSize}px" />
    </div>
  </div>
</div>


<style>
  .box {
    width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100px;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: var(--round-sm);
  }

  #next {
    justify-content: flex-end;
    margin-left: 1rem;
    cursor: pointer;


  }

  #next .paragraph-headline {
    text-align: right;
  }

  #previous {
    justify-content: flex-start;
    margin-right: 1rem;
    cursor: pointer;
  }

  #previous .paragraph-headline {
    text-align: left;
  }

  #previous .box {
    margin-right: 1rem;
  }

  #next .box {
    margin-left: 1rem;
  }

  .paragraph-headline {
    font-size: 1rem;
  }

  .paragraph-headline,
  .paragraph-headline-sm {
    font-weight: var(--bold);
    margin-bottom: 4px;
  }
  @media only screen and (max-width: 640px) {
    .paragraph-headline {
      font-size: 11px;
    }
    .tertiary-text{
      display: none;
    }

    .box{
      width: 60px;
      height: 60px;
      flex-basis: 60px;
    }
  }
</style>
