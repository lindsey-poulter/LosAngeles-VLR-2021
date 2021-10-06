<script>
  import laOutline from "$data/City_Boundary.js";
  import worldOutline from "$data/World.js";
  import * as d3 from "d3";
  import mq from "$stores/mq";
  import data from "$data/maps.csv";
  export let place;
  import { slide, fade } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  import Nav from "$components/Reveal.svelte";
  import Pie from "$components/Pie.svelte";
  import { draw } from "svelte/transition";
  let element,
    intersecting = false;

  $: activeIndex = 1;
  $: activeYear = 2012;
  $: dataset = data.filter(function (d) {
    return d.Place == "SDG7"
      ? d.Place == place && d["Date Created"] <= activeYear
      : d.Place == place;
  });

  const f = d3.format("(,.0f");

  $: sm = $mq.sm;
  $: md = $mq.md;
  $: lg = $mq.lg;
  $: xl = $mq.xl;
  $: mobile = !lg && !md ? true : false;

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
  $: height = base_height - margin.top - margin.bottom;

  $: center =
    place == "SDG14" || place == "SDG17"
      ? mobile
        ? [180, 30]
        : [80, 30]
      : mobile
      ? [-118.08, 33.9861]
      : [-118.217, 33.9861];
  $: scale =
    place == "SDG14" || place == "SDG17" ? (mobile ? width * 0.05 : width * 0.068) : width * 25;

  $: projection = d3.geoMercator().center(center).scale(scale);

  $: map = place == "SDG14" || place == "SDG17" ? worldOutline : laOutline;
  $: strokeW = place == "SDG14" || place == "SDG17" ? 1 : mobile ? 2 : 0;

  $: path = d3.geoPath().projection(projection);

  $: place, (tooltipShow = false);
  $: tooltipShow = false;
  $: tooltipText = null;

  const radiusScale = d3.scaleLinear().domain([0, 50]).range([5, 20]);
  const radiusScale17 = d3.scaleLinear().domain([0, 5]).range([5, 5]);
  const vaxRadiusScale = d3.scaleLinear().domain([0, 430300]).range([4.5, 20]);

  const vaxColor = d3
    .scaleOrdinal()
    .domain(["Fixed", "Satellite", "Mobile"]) //or use map function
    .range(["#306ED5", "#4C9F38", "#DD1367"]);

  let interval = setInterval(() => {
    activeYear = activeYear == 2021 ? 2012 : activeYear + 1;
  }, 1100);

  let timer = true;
</script>

<div>
  {#if place == "SDG7"}
    <div class="slider">
      <p class="paragraph-headline">{activeYear}</p>
      <input
        type="range"
        min="2012"
        max="2021"
        step="1"
        list="ticks"
        bind:value={activeYear}
        on:change={function (e) {
          timer == true ? clearInterval(interval) : null;
          timer = false;
          activeYear = +e.currentTarget.value;
        }}
      />
      <datalist id="ticks">
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
      </datalist>

      <div class="circle-row">
        <div
          id="circle"
          on:click={function () {
            timer == true ? clearInterval(interval) : null;
            activeYear = activeYear == 2012 ? 2021 : activeYear - 1;
            timer = false;
          }}
        >
          &lt;
        </div>
        <div
          id="circle"
          on:click={function () {
            timer == true ? clearInterval(interval) : null;
            activeYear = activeYear == 2021 ? 2012 : activeYear + 1;
            timer = false;
          }}
        >
          &gt;
        </div>
      </div>
    </div>

    <div id="year" class={place}>
      {#key activeYear}
        <p class="hw-kpi">{f(dataset.length)}</p>
      {/key}
      <p class="body-text">total EV charging stations</p>
    </div>
  {:else if place == "SDG3"}
    <div id="year_3">
      <p class="hw-kpi">1,331,504</p>

      <p class="body-text">vaccines administered</p>
    </div>

    <div id="year">
      <div id="mini-kpi">
        <div>
          <p class="hw-nav" transition:slide={{ duration: 800 }}>1,200,794</p>
          <p class="tertiary-text-bold" style="color: var(--primary-color)">at fixed sites</p>
        </div>

        <div>
          <p class="hw-nav" transition:slide={{ duration: 800 }}>123,109</p>
          <p class="tertiary-text-bold" style="color: var(--secondary-color)">at mobile sites</p>
        </div>
        <div>
          <p class="hw-nav" transition:slide={{ duration: 800 }}>7,601</p>
          <p class="tertiary-text-bold" style="color: var(--sdg3-primary)">at satellite sites</p>
        </div>
      </div>
    </div>
  {:else if place == "SDG11"}
    {#key activeIndex}
      <div id="photo-group" in:slide={{ duration: 300, delay: 50 }} out:fade={{ duration: 100 }}>
        <div class="image11">
          <img
            src="/assets/images/{dataset[activeIndex].Image}.jpeg"
            alt={dataset[0]["Connector level (group)"]}
          />
        </div>

        <div>
          <p class="body-text-bold">{dataset[activeIndex]["Name"]}</p>
          <p class="tertiary-text">{dataset[activeIndex]["Connector level (group)"]}</p>
        </div>
      </div>
    {/key}
  {:else if place == "SDG14"}
    <div class="pie">
      <Pie size="80" middle="24%" percent=".24" color="var(--secondary-color)" />
      <p class="tertiary-text pie-text">of the world's annual container port throughput</p>
    </div>

    <img src="/assets/images/cargo.svg" alt="cargo ship" class="ship ship1" />
    <img
      src="/assets/images/cargo.svg"
      alt="cargo ship"
      class="ship"
      style="top: 20%; left: 75%;"
    />
    <img
      src="/assets/images/cargo.svg"
      alt="cargo ship"
      class="ship"
      style="top: 75%; left: 60%;"
    />
  {/if}

  <IntersectionObserver {element} bind:intersecting threshold=".5">
    <div
      id="map-container"
      class={place}
      bind:this={element}
      style="margin-top: {place == 'SDG17' || place == 'SDG14' ? -2 : 0}rem; "
    >
      <svg width="500px" height="450px" preserveAspectRatio="xMinYMin meet" viewBox="129 0 10 450">
        {#each map.features as feature}
          <path
            d={path(feature)}
            fill={place == "SDG14" ? "#e4ede6" : "transparent"}
            stroke="var(--map-grey)"
            stroke-width={strokeW}
          />
        {/each}
        {#if intersecting}
          {#each dataset as point, i}
            {#if place == "SDG17"}
              <line
                x1={projection([point.Longitude, point.Latitude])[0]}
                y1={projection([point.Longitude, point.Latitude])[1]}
                x2={projection([-118.2437, 34.0522])[0]}
                y2={projection([-118.2437, 34.0522])[1]}
                stroke="var(--secondary-color)"
                stroke-width={point.Value}
                opacity={tooltipShow ? (tooltipText.Name == point.Name ? 1 : 0.05) : 0.5}
                transition:draw={{ delay: 700, duration: 2000 }}
              />
            {/if}

            {#if place != "SDG14" && mobile == false}
              <text
                class="tertiary-text-bold"
                transition:fade={{ delay: 1000 + Math.random() * 1000 }}
                fill="var(--primary-color)"
                text-anchor="middle"
                style="pointer-events: none;"
                opacity={tooltipShow ? 0.1 : 1}
                x={projection([point.Longitude, point.Latitude])[0] + +point.Left}
                y={projection([point.Longitude, point.Latitude])[1] + +point.Top}
              >
                {point.ShortName}
              </text>
            {/if}

            <circle
              class="mapCircle"
              transition:fade={{ delay: place == "SDG17" ? 0 : Math.random() * 1000 }}
              cx={projection([point.Longitude, point.Latitude])[0]}
              cy={projection([point.Longitude, point.Latitude])[1]}
              r={place == "SDG17"
                ? radiusScale17(point.Value)
                : place == "SDG7"
                ? 3
                : place == "SDG14"
                ? radiusScale(point.Value)
                : place == "SDG3"
                ? vaxRadiusScale(point.Value)
                : 10}
              fill={place == "SDG11" && dataset[activeIndex]["Name"] == point.Name
                ? "var(--secondary-color)"
                : tooltipShow
                ? tooltipText.Name == point.Name
                  ? place == "SDG3"
                    ? "var(--black)"
                    : "var(--secondary-color)"
                  : place == "SDG3"
                  ? vaxColor(point["Connector level (group)"])
                  : "var(--primary-color)"
                : place == "SDG3"
                ? vaxColor(point["Connector level (group)"])
                : "var(--primary-color)"}
              opacity={tooltipShow
                ? tooltipText.Name == point.Name
                  ? 1
                  : place == "SDG11"
                  ? 0.4
                  : place == "SDG7"
                  ? 0.9
                  : 0.1
                : 0.9}
              stroke="white"
              on:mouseenter={function () {
                tooltipShow = true;
                tooltipText = point;
                activeIndex = i;
              }}
              on:mouseleave={function () {
                tooltipShow = place == "SDG11" ? true : false;
                tooltipText = place == "SDG11" ? tooltipText : null;
              }}
            />

            {#if place == "SDG11" && dataset[activeIndex]["Name"] == point.Name}
              {#if mobile == false}
                <rect
                  x={projection([point.Longitude, point.Latitude])[0]}
                  y={projection([point.Longitude, point.Latitude])[1]}
                  width="360"
                  height="2"
                  fill="var(--secondary-color)"
                  stroke="none"
                />
              {:else}
                <rect
                  x={projection([point.Longitude, point.Latitude])[0]}
                  y={projection([point.Longitude, point.Latitude])[1]}
                  width="2"
                  height="100"
                  fill="var(--secondary-color)"
                  stroke="none"
                />
              {/if}
            {/if}
          {/each}
        {/if}
      </svg>

      {#if tooltipShow && place != "SDG11"}
        <div
          class="tooltip"
          style="transform: translate(
        calc(-25% + {projection([tooltipText.Longitude, tooltipText.Latitude])[0]}px),
        calc(20% + {projection([tooltipText.Longitude, tooltipText.Latitude])[1]}px)
        )"
        >
          {#if place == "SDG7"}
            <p class="tertiary-text-bold">{tooltipText.Name}</p>

            <p class="tertiary-text">installed in {tooltipText["Date Created"]}</p>
          {:else if place == "SDG14"}
            <p class="tertiary-text"><b>{tooltipText.Name}</b></p>

            <br />
            <p class="hw-nav">{tooltipText.Value}</p>
            <p class="tertiary-text">TEU (millions)</p>
          {:else if place == "SDG17"}
            <p class="body-text"><b>{tooltipText.Name}</b></p>

            <p class="tertiary-text">
              {@html tooltipText["Connector level (group)"].replaceAll(",", "<br>")}
            </p>
          {:else if place == "SDG3"}
            <p class="tertiary-text"><b>{tooltipText.Name}</b></p>
            <p
              class="tertiary-text"
              style="color: {vaxColor(tooltipText['Connector level (group)'])}"
            >
              {tooltipText["Connector level (group)"]} Site
            </p>
            <br />
            <p class="hw-nav">{f(tooltipText.Value)}</p>
            <p class="tertiary-text">vaccinations administered</p>
          {/if}
        </div>
      {/if}
    </div>
  </IntersectionObserver>
</div>

<style>
  @keyframes cruise {
    0% {
      transform: translate(0px, 0);
    }
    100% {
      transform: translate(15px, 0);
    }
  }

  .ship1 {
    top: 61%;
    left: 23%;
  }

  .pie {
    position: absolute;
    left: 0;
    top: 40%;
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    text-align: left;
  }

  .pie-text {
    margin-top: 1rem;
  }
  .tooltip {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 300px;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid var(--m-grey);
    text-align: left;
    transition: all 0.2s ease-out;
    padding: 0.6em 1em;
    z-index: 11;
    border-radius: var(--round-sm);
  }

  #map-container.SDG7,
  #map-container.SDG3 {
    position: relative;
    background-image: url("/assets/images/LAmap3.png");
    /* background-position: 47.8% 11.5px; */
    background-position: center;
    background-repeat: no-repeat;
    background-size: 500px 450px;
  }

  #map-container.SDG11 {
    position: relative;
    background-image: url("/assets/images/LAmap3.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 500px 450px;
    margin-left: -40%;
  }

  #map-container.SDG17 {
    margin-top: 2rem;
  }

  .slider {
    position: absolute;
    top: 35%;
    left: 5%;
    z-index: 10;
  }

  .ship {
    width: 35px;
    position: absolute;
    animation-name: cruise;
    animation-duration: 3s;
    animation-timing-function: ease-out;
    animation-delay: 0;
    animation-direction: alternate;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }
  .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0rem;
  }

  #year {
    position: absolute;
    top: 30%;
    right: 0%;
    width: 20%;
    z-index: 10;
  }

  #year_3 {
    position: absolute;
    top: 30%;
    left: 0%;
    width: 250px;
    z-index: 10;
  }

  .hw-kpi {
    font-size: 2rem;
  }

  #mini-kpi {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    height: 200px;
    margin-top: -30%;
  }

  #circle {
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: var(--card-shadow);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--primary-color);
    border: 1px solid var(--button-border);
  }

  .circle-row {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
  }

  .mapCircle {
    cursor: pointer;
  }

  #photo-group {
    width: 45%;
    text-align: left;
    position: absolute;
    top: 30px;
    right: 0%;
    z-index: 12;
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    padding: 3%;
  }

  .image11 {
    margin: 0 auto 1rem auto;
    max-width: 200px;
  }

  @media only screen and (max-width: 640px) {
    .pie {
      position: absolute;
      left: 0;
      top: 10px;

      display: flex;
      flex-flow: row nowrap;
      width: 100%;
      text-align: left;
    }

    .pie-text {
      margin-left: 1rem;
    }

    .ship1 {
      top: 61%;
      left: 5%;
    }

    #map-container.SDG3,
    #map-container.SDG7,
    #map-container.SDG11 {
      margin: 0 auto;
      background-image: none;
      left: -10%;
      width: 100%;
      overflow: hidden;
    }

    #map-container.SDG14 {
      height: 100px;
    }

    #year {
      top: 95%;
      width: 100%;
      margin-bottom: 2rem;
      position: absolute;
    }

    #year.SDG7 {
      position: absolute;
      top: auto;
      bottom: 0%;
      right: 0%;
      left: auto;
      width: 20%;
      z-index: 10;
    }

    #year_3 {
      left: auto;
      right: 0%;
      top: 0%;
      width: 30%;
      word-break: keep-all;
    }

    .hw-kpi {
      font-size: 1.25rem;
    }

    #mini-kpi {
      flex-flow: row nowrap;
      margin-top: 0px;
      bottom: 0;
      top: auto;
      position: absolute;
      width: 100%;
      height: 25px;
    }

    .slider {
      position: absolute;
      top: 67%;
      left: 0%;
      z-index: 10;
    }

    #photo-group {
      width: 100%;
      text-align: left;
      position: absolute;
      top: auto;
      bottom: 0px;
      right: 0%;
      z-index: 12;
      background-color: var(--white);
      border-radius: var(--round-sm);
      box-shadow: var(--card-shadow);
      padding: 3%;
      opacity: 0.8;
    }

    .image11 {
      display: none;
    }
  }
</style>
