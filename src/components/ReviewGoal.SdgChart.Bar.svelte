<script>
  import { scaleLinear, scaleBand, max, min, format } from "d3";

  import Circle from "$components/ReviewGoal.SdgChart.Bar.Circle.svelte";
  import move from "$utils/move.js";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import IntersectionObserver from "svelte-intersection-observer";
  let element,
    intersecting = false;

  const f = format("($,.0f");

  import mq from "$stores/mq";

  $: sm = $mq.sm;
  $: md = $mq.md;
  $: lg = $mq.lg;
  $: xl = $mq.xl;
  $: mobile = !lg && !md ? true : false;

  export let dataset,
    metric,
    dimension,
    barPadding,
    isHorizontal = false,
    xAxis,
    chartLabel,
    color = "#ebebeb",
    breakout = "no",
    place;

  let laData,
    laDataS,
    laDataF = [];
  //make this dynamic margin based on horizontal or vertical
  //when you finx ladata thing test and see
  let base_width = 1200,
    base_height = 700,
    margin = {
      top: 0,
      right: 0,
      bottom: 100,
      left: 0
    };

  // $: base_height = base_width * bar_height
  $: width = base_width - margin.right - margin.left;
  $: height = base_height - 25;

  $: dimData = dataset;
  let dimLength = 0;
  $: laData = dataset.filter(function (d) {
    return d["Breakout"] == "Los Angeles County" ? d : null;
  });

  $: laData, (laDataF = []);
  $: laData.forEach(function (d) {
    laDataF.push(+d.Value);
  });
  $: length = laData.length;

  $: laDataS = Array(length).fill(
    max(dataset, function (d) {
      return +d[metric];
    }) * 0
  );

  let barsW = 0.91;
  $: sdg = laData[0] ? laData[0].SDG : 1;
  $: mobile ? (barsW = 0.85) : (barsW = 0.91);

  $: place == "SDG" ? (dimData = laData) : (dimData = dataset);
  $: place == "Prosperity" ? (dimLength = 115) : (dimLength = 0);

  $: metricScale = scaleLinear()
    .domain([
      0,
      max(dataset, function (d) {
        return +d[metric];
      }) * (isHorizontal == "false" ? 1.1 : 1.2)
    ])
    .range(isHorizontal == "true" ? [0, width - dimLength] : [height, 0])
    .clamp(true);

  $: dimensionScale = scaleBand()
    .range(isHorizontal == "true" ? [0, height] : [0, width * barsW])
    .domain(
      dimData.map(function (d) {
        return d[dimension];
      })
    )
    .padding(barPadding);

  $: clicked = intersecting;

  $: progress = tweened(laDataS, {
    duration: 1000,
    delay: 500,
    easing: cubicOut
  });

  $: if (clicked == true) {
    progress.set(laDataF);
  }

  $: if (clicked == false) {
    progress.set(laDataS);
  }

  $: desc = ["empty"];
  function barHov(val) {
    desc = val;
  }
</script>

<IntersectionObserver {element} bind:intersecting>
  <div>
    <figure bind:clientWidth={base_width} bind:clientHeight={base_height} bind:this={element}>
      <svg width={"100%"} height={"100%"}>
        <g style={move(margin.left, margin.top)}>
          {#if isHorizontal == "true"}
            {#each dimData as item, i}
              <rect
                width={metricScale(item[metric])}
                height={dimensionScale.bandwidth()}
                x={dimLength}
                y={dimensionScale(item[dimension])}
                fill={color}
              />

              {#if chartLabel == "yes"}
                <text
                  x={metricScale(item[metric]) + dimLength + 8}
                  y={5 + dimensionScale(item[dimension]) + dimensionScale.bandwidth() / 2}
                  text-anchor="start"
                  style="font-size:{mobile ? 0.65 : 1}rem;"
                  class="hw-nav"
                >
                  {item[metric]}%
                </text>
              {/if}

              {#if xAxis == "yes"}
                <text x={dimLength - 10} y={dimensionScale(item[dimension]) + 18} text-anchor="end">
                  {item[dimension]}
                </text>
              {/if}

              <rect
                on:mouseenter={function () {
                  barHov(item);
                }}
                on:mouseleave={function () {
                  barHov(["empty"]);
                }}
                width={metricScale(item[metric]) + 400}
                height={dimensionScale.bandwidth()}
                x={0}
                y={dimensionScale(item[dimension])}
                fill="orange"
                style="opacity:0;"
                class="barHov"
              />
            {/each}
          {:else}
            {#each dimData as item, i}
              <rect
                width={dimensionScale.bandwidth()}
                height={Math.max(base_height - 25 - metricScale($progress[i]), 0)}
                x={dimensionScale(item[dimension])}
                y={metricScale($progress[i])}
                fill={color}
              />

              {#if chartLabel == "yes"}
                <text
                  x={dimensionScale(item[dimension]) + dimensionScale.bandwidth() / 2}
                  y={metricScale($progress[i]) - 10}
                  text-anchor="middle"
                  class="hw-nav"
                  style="font-size:{mobile ? 0.65 : 1}rem; "
                  text-rendering="geometricPrecision"
                >
                  {item[metric]}%
                </text>
              {/if}

              {#if xAxis == "yes"}
                <text
                  x={dimensionScale(item[dimension]) + dimensionScale.bandwidth() / 2}
                  y={base_height}
                  text-anchor="middle"
                  style="font-size:{mobile ? 0.65 : 1}rem;"
                >
                  {item[dimension]}
                </text>

                <rect
                  width={mobile ? base_width : base_width - 90}
                  height={1}
                  x={10}
                  y={base_height - 25}
                  fill="#8C8C8C"
                  style="opacity:1"
                />
              {/if}
            {/each}

            {#if breakout == "yes"}
              <Circle
                {dataset}
                {clicked}
                {barPadding}
                {base_width}
                {base_height}
                {metricScale}
                {dimensionScale}
                {mobile}
                width={dimensionScale.bandwidth()}
              />
            {/if}
          {/if}
        </g>
      </svg>

      {#if place == "Prosperity" && desc != "empty"}
        <div id="hover">
          <p class="paragraph-headline" style="font-weight:bold; margin-bottom:0rem;">
            {desc["Category"]}
          </p>
          <p class="hw-quote" style="text-align: center;">{f(desc["Amount"])}</p>
          <p class="body-text" style="margin-top: 1rem;">{desc[" Description"]}</p>
        </div>
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

  #hover {
    position: absolute;
    top: 40%;
    right: 0%;
    width: 35%;
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    height: auto;
    padding: 2%;
  }

  .barHov {
    cursor: pointer;
  }
  @media only screen and (max-width: 640px) {
    .hw-quote {
      font-size: 1rem;
    }
  }
</style>
