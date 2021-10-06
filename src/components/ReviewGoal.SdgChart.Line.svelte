<script>
  import { scaleLinear, scaleBand, max, min, format, scaleTime, extent, line, area, curveLinear } from "d3";
  import { draw } from "svelte/transition";
  import { fade } from "svelte/transition";
  import move from "$utils/move.js";

  import mq from "$stores/mq";
  import IntersectionObserver from "svelte-intersection-observer";
  let element,
    intersecting = false;

  $: sm = $mq.sm;
  $: md = $mq.md;
  $: lg = $mq.lg;
  $: xl = $mq.xl;
  $: mobile = !lg && !md ? true : false;

  const f = format("($,.0f");

  export let dataset;

  let base_width = 1000,
    base_height = 400,
    margin = {
      top: 0,
      right: 20,
      bottom: 100,
      left: 40
    };

  // $: base_height = base_width * bar_height
  $: width = base_width - margin.right - margin.left;
  $: height = base_height - 25;

  const yAccessor = (d) => +d.Label;
  const xAccessor = (d) => +d.Year;

  $: yScale = scaleLinear()
    .domain([0, max(dataset, yAccessor) * 1.2])
    .range([height, 0]);

  $: xScale = scaleTime().domain(extent(dataset, xAccessor)).range([margin.left, width]);

  $: lineGenerator = line()
    .x((d) => xScale(xAccessor(d)))
    .y((d) => yScale(yAccessor(d)));

  $: areaFunction = area()
    .curve(curveLinear)
     .x((d) => xScale(xAccessor(d)))
     .y0(yScale(0))
    .y1((d) => yScale(yAccessor(d)));


  const data = [
    {
      year: 1968,
      info: 1968,
      desc: "In 1968, the Fair Housing Act outlaws historic redlining in the United States, a systematic practice of denying financial services to low-income and nonwhite communities which ultimately enabled racial segregation."
    },
    {
      year: 1990,
      info: 1990,
      desc: "By 1990, median home value has increased threefold from 1960"
    },
    {
      year: 2016,
      info: 2016,
      desc: "In 2016, white households had 90 times the wealth of black and Mexican-origin households"
    }
  ];

  let duration = 2000;

  $: tooltipShow = false;
  $: tooltipText = null;
  $: tooltipX = 0;
</script>


<IntersectionObserver {element} bind:intersecting>
  <div bind:this={element}>
    <figure bind:clientWidth={base_width} bind:clientHeight={base_height}>
      <svg width={"100%"} height={"100%"}>
        {#each dataset as d}
          <text
            x={xScale(d.Year)}
            y="400"
            text-anchor="middle"
            style="font-size:{mobile ? 0.65 : 1}rem;"
          >
            {d.Year}
          </text>
        {/each}

        <rect
          width={base_width}
          height={1}
          x={10}
          y={base_height - 25}
          fill="#8C8C8C"
          style="opacity:1"
        />


<!-- 

      <path
      transition:draw={{ duration: duration, delay: duration }}
      d="M {10} {yScale(652047)} L {10 + base_width} {yScale(652047)}"
      stroke="var(--black)"
      stroke-width="2"
      opacity=".5"
      style="stroke-dasharray:3"
    /> -->


        {#if intersecting}

        <path
        transition:fade={{ duration: duration }}
        d={areaFunction(dataset)}
        fill="var(--l-grey)"
      />
      {#if mobile==false}
          {#each data as d}
            <path
              transition:draw={{ duration: duration, delay: duration }}
              d="M {xScale(d.year)} {base_height - 50} L {xScale(d.year)} 65"
              stroke="var(--sdg10-primary)"
              stroke-width="1"
              opacity=".5"
              style="stroke-dasharray:3"
            />
          {/each}
          {/if}

          <path
            transition:draw={{ duration: duration }}
            d={lineGenerator(dataset)}
            fill="none"
            stroke="var(--primary-color)"
            stroke-width="2"
          />

          {#each dataset as d, i}
            <!-- <circle
              transition:fade={{ delay: (i * duration) / 7 }}
              cx={xScale(d.Year)}
              cy={yScale(d.Label)}
              r="4"
              stroke="var(--d-grey)"
              fill="white"
              stroke-width="2"
            /> -->

            <!-- <rect
              transition:fade={{ delay: (i * duration) / 7 }}
              x={xScale(d.Year) - 35}
              y={yScale(d.Label) - 40}
              width="70"
              height="20"
              fill="white"
              opacity=".6"
            /> -->

            <text
              transition:fade={{ delay: (i * duration) / 7 }}
              x={xScale(d.Year)}
              y={yScale(d.Label) - 25}
              text-anchor="middle"
              class="hw-nav"
              fill="var(--primary-color)"
              style="font-size:{mobile ? 0.65 : 1}rem;"
            >
              {f(d.Label)}
            </text>
          {/each}
        {/if}
      </svg>

      {#if mobile==false}

      {#if intersecting}
      <div id="icon-container" transition:fade={{ delay: duration }}>
        {#each data as d}
          <div
            class="info-button hw-nav default"
            style={move(xScale(d.info) - 13, 0)}
            on:mouseenter={function () {
              tooltipShow = true;
              tooltipText = d.desc;
              tooltipX = xScale(d.year);
            }}
            on:mouseleave={function () {
              tooltipShow = false;
              tooltipText = null;
            }}
          >
            i
          </div>
        {/each}
      </div>
      {/if}

      {#if tooltipShow}
        <div
          class="tooltip"
          style="transform: translate(
        calc(-50% + {tooltipX}px),
        0
        )"
        >
          {tooltipText}
        </div>
      {/if}
      {/if}
    </figure>
  </div>
</IntersectionObserver>

<style>
  figure {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .info-button {
    background-color: var(--l-grey);
    box-shadow: var(--button-shadow);
    border-radius: 50%;
    border: 1px solid var(--sdg10-primary);
    width: 25px;
    height: 25px;
    z-index: 10;
    cursor: pointer;
    color: var(--sdg10-primary);
  }

  #icon-container {
    /* display: flex; */
    position: absolute;
    bottom: 15%;

  }

  #icon-container > div {
    position: absolute;
    left:0;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--m-grey);
    text-align: left;
    transition: all 0.5s ease-out;
    padding: 0.6em 1em;
  }
</style>
