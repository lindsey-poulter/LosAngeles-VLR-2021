<script>
  import { scaleLinear, scaleBand, max } from "d3";
  import { tweened } from "svelte/motion";
  import { cubicOut} from "svelte/easing";
  import { getContext } from "svelte";
  const { sdgStore } = getContext("SDG");
  $: activeSdg = $sdgStore.activeSdg;



  export let dataset, clicked, width, metricScale, dimensionScale, base_width, base_height, mobile;



  let tweenPointsStart = [];
  let tweenPointsEnd = [];
  let total, lastYear;
  let breakouts = [];
  let yOffset = [];
  let breakoutVal = [];

  let createData = () => {
    tweenPointsStart = [];
   tweenPointsEnd = [];
 total=null,
 lastYear=null,
  breakouts = [];
  yOffset = [];
  breakoutVal = [];

    total = +dataset
      .filter(function (d) {
        return d.Breakout == "Los Angeles County" ? d : null;
      })
      .slice(-1)[0].Value;
    lastYear = dataset.slice(-1)[0].Year;

    dataset.forEach(function (d) {
      d.Year == lastYear
        ? tweenPointsStart.push({ x: +dimensionScale(d.Year), y: metricScale(+total) })
        : null;
      d.Year == lastYear
        ? tweenPointsEnd.push({ x: +dimensionScale(d.Year), y: metricScale(+d.Value) })
        : null;
      d.Year == lastYear ? breakouts.push(d.Breakout) : null;
      d.Year == lastYear ? yOffset.push(+d.yCorrection) : null;
      d.Year == lastYear ? breakoutVal.push(+d.Value) : null;
    });
  };
  createData();

  $: activeSdg || dataset || base_width || base_height, createData();

  $: progress = tweened(tweenPointsStart, {
    duration:800,
    delay: 1300
  
  });

  $: timeout = false


  $: if (clicked == true) {
    progress.set(tweenPointsEnd);
    
    setTimeout(function(){
      timeout=true
  }, 1000)

  }

  $: if (clicked == false) {
    progress.set(tweenPointsStart);
    timeout=false
  }

  $: tooltip = false;


</script>

{#each $progress as { x, y }, i}
  {#if clicked == true && breakouts[i] != "Los Angeles County" && timeout}
    <rect
      x={x - 5}
      {y}
      width={width + 10}
      height="3px"
      fill="var(--sdg{activeSdg.number}-primary)"
    />

    <text
      x={x + width + 8}
      y={y + 5 + +yOffset[i]}
      text-anchor="start"
      class="tertiary-text-bold hover"
      text-rendering="geometricPrecision"
    >
      {breakouts[i]}
    </text>

    {#if mobile==false}
    <text
      x={activeSdg.number == "5" ? x + width + 210 : x + width + 55}
      y={y + 5 + +yOffset[i]}
      text-anchor="start"
      class="hw-nav default"
      style="font-size:.875rem;"
      class:show={tooltip}
      text-rendering="geometricPrecision"
    >
      {breakoutVal[i]}%
    </text>
    {/if}
  {/if}
{/each}

<rect
  x={$progress[0].x - 10}
  y={0}
  width={width + 220}
  height={base_height - 25}
  fill="red"
  class="hover"
  style="opacity:0;"
  on:mouseenter={() => (tooltip = true)}
  on:mouseleave={() => (tooltip = false)}
/>

<style>
  .hover {
    cursor: pointer;
  }

  .default {
    opacity: 0;
    transform: translate(0px, 5px);
  }
  .default.show {
    transform: translate(0px, 0px);
    opacity: 1;
    transition: all 1s;
    transition-delay: 0s;
  }
</style>
