<script>
  import { getContext } from "svelte";
  import mq from "$stores/mq";
  const { projectStore } = getContext("projectSpotlights");
  $: current = $projectStore.cardSelection.cardLabel;
  $:navigateNav = $projectStore.navigateNav;

  $: sm = $mq.sm;
  $: md = $mq.md;
  $: iconSize = mobile ? 40 : sm && md ? 50 : 45;



  export let mobile;


$: next = current == "People" ? "Planet" : current == "Planet" ? "Prosperity" : "People"
$: previous = current == "People" ? "Prosperity" : current == "Planet" ? "People" : "Planet"
$: nextNum = current == "People" ? 1 : current == "Planet" ? 2 : 0
$: previousNum = current == "People" ? 2 : current == "Planet" ? 0 : 1


</script>

<div id="bottom-nav" class="flex space-between section-content" >

  <div id="previous" class="flex align-center"  on:click={function(){navigateNav(previousNum)}}>
    <div
      class="box"
      style="background-color: var(--{previous.toLowerCase()}-primary)"
  
    >
    <img src="assets/images/popup-{previous}.png" alt="icon" style="width: {iconSize}px;">
    </div>
    <div class="label">
      <p class="tertiary-text" style="text-align: left; color: var(--{previous.toLowerCase()}-primary)">PREVIOUS</p>
      <p class="paragraph-headline" style="color: var(--{previous.toLowerCase()}-primary)">
        {previous}
      </p>
  
    </div>
  </div>

  <div id="home" on:click >
    <svg
      height="35px"
      width="35px"
      xmlns:svg="http://www.w3.org/2000/svg"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
    >
      <g transform="translate(0,-952.36218)">
        <path
          style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;"
          d="m 49.96875,959.01857 a 3.0003,3.0003 0 0 0 -2.09375,0.875 l -36.75,36.74997 a 3.0052038,3.0052038 0 1 0 4.25,4.24996 L 50,966.26857 84.625,1000.8935 a 3.0052038,3.0052038 0 1 0 4.25,-4.24996 l -8.9375,-8.9375 a 3.0003,3.0003 0 0 0 0,-0.375 l 0,-15.0312 a 3.0003,3.0003 0 0 0 -3.0625,-3.03127 3.0003,3.0003 0 0 0 -2.9375,3.03127 l 0,9.4062 -21.8125,-21.81247 a 3.0003,3.0003 0 0 0 -2.15625,-0.875 z M 17.5,1006.6123 a 3.0003,3.0003 0 0 0 -2.96875,3.0312 l 0,23.0625 0,10 a 3.0003,3.0003 0 0 0 3,3 l 10,0 44.90625,0 10,0 a 3.0003,3.0003 0 0 0 3,-3 l 0,-33.0625 a 3.0003,3.0003 0 1 0 -6,0 l 0,30.0625 -7,0 -44.90625,0 -7,0 0,-7 0,-23.0625 A 3.0003,3.0003 0 0 0 17.5,1006.6123 z"
          fill-opacity="1"
          fill-rule="nonzero"
          stroke="none"
          marker="none"
          visibility="visible"
          display="inline"
          overflow="visible"
        /></g
      ></svg
    >
    <p class="tertiary-text" >HOME</p>
  </div>

  <div id="next" class="flex align-center" on:click={function(){navigateNav(nextNum)}} >
    <div class="label">
      <p class="tertiary-text" style="text-align: right; color: var(--{next.toLowerCase()}-primary)">NEXT</p>
      <p class="paragraph-headline" style="color: var(--{next.toLowerCase()}-primary)">
       {next}
      </p>
    </div>
    <div
      class="box"
      style="background-color: var(--{next.toLowerCase()}-primary)"
    >
    <img src="assets/images/popup-{next}.png" alt="icon" style="width: {iconSize}px;">
    </div>

</div>



  </div>

<style>

  .section-content {
    margin: 3rem auto 3rem auto;
  }
  .box {
    width: 100px;
    height: 100px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 100px;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: var(--round-sm);
  }

  #home {
    cursor: pointer;
    fill: var(--primary-color);
    color: var(--primary-color);
  }

  #next {
    justify-content: flex-end;
    margin-left: 1rem;


  }

  #next .paragraph-headline {
    text-align: right;
  }

  #previous {
    justify-content: flex-start;
    margin-right: 1rem;
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

    .box {
    width: 70px;
    height: 70px;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 70px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  #home{
    display:none;
  }
  
  }
</style>
