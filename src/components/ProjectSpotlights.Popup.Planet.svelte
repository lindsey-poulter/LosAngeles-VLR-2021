<script>
  import { getContext } from "svelte";
  import Card from "$components/ProjectSpotlights.Popup.Planet.ScenarioCard.svelte";
  import { flip } from "svelte/animate";
  import Pie from "$components/Pie.svelte";
  import Reveal from "$components/Reveal.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import Nav from "$components/ProjectSpotlights.Popup.Nav.svelte";
  import Info from "$components/Info.svelte";

  let element, intersecting;

  const { projectStore } = getContext("projectSpotlights");

  $: cardColor = $projectStore.cardSelection.cardColor;
  $: cardInfo = $projectStore.cardSelection.cardInfo;

  const scenario1 = {
    cardLabel: "SB100",
    cardInfo:
      "The SB100 scenario complies with existing <a href=https://www.energy.ca.gov/sb100 target=&quot;_blank&quot; class=link-small>California law set by Senate Bill 100</a>. Targets are based on retail sales as opposed to total generation. This is the only scenario to allow the use of renewable electricity credits. Together these aspects of the scenario allow for approximately 10-15% of generation to be derived from fossil fuels.",
    iconList: "assets/images/SB100.png",
    cardColor: "var(--planet-sb100)",
    co2: "568",
    reduction: "54",
    cost: "57",
    clouds: 7,
    dollars: 1
  };

  const scenario2 = {
    cardLabel: "Early & No Biofuels",
    cardInfo:
      "The Early & No Biofuels scenario meets the 100% clean energy goal in 2035 (10 years earlier than the other scenarios), prohibits biofuels in all years, and assumes higher levels of customer rooftop solar adoption.",

    iconList: "assets/images/Early.png",

    cardColor: "var(--planet-early)",
    co2: "509",
    reduction: "61",
    cost: "87",
    clouds: 1,
    dollars: 7
  };

  const scenario3 = {
    cardLabel: "Transmission Focus",
    cardInfo:
      "The Transmission Focus scenario achieves the 100% target by 2045, assumes lower barriers to building new transmission and upgrading existing ones, and eliminates the use of nuclear energy generation by 2045. This scenario also assumes the construction of a transmission backbone into the L.A. basin.",

    iconList: "assets/images/Transmission.png",

    cardColor: "var(--planet-transmission)",
    co2: "537",
    reduction: "59",
    cost: "67",
    clouds: 4,
    dollars: 3
  };

  const scenario4 = {
    cardLabel: "Limited New Transmission",
    cardInfo:
      "The Limited New Transmission scenario prohibits building new transmission lines that are not already planned. This scenario reaches its target in 2045 and eliminates nuclear generation by that year. This scenario also assumes higher levels of customer rooftop solar adoption.",

    iconList: "assets/images/Limited.png",

    cardColor: "var(--planet-limited)",
    co2: "539",
    reduction: "59",
    cost: "62",
    clouds: 4,
    dollars: 2
  };

  const scenarioList = [scenario1, scenario2, scenario3, scenario4];

  const tooltips = [
    "Cumulative (2020-2045), life cycle greenhouse gas emissions in million metric tons (MMT) carbon dioxide equivalent (CO2e).",
    "The total annual emissions in 2045 from all three sectors.",
    "The cost of this scenario for developing and operating a reliable power system through 2045, specific to changes evaluated in the study."
  ];

  $: tooltipShow = false;
  $: tooltipText = null;
  $: translateY = 0;

  $: view = "all";

  let time = 0;

  let unravelScenario = () => {
    view == "all" ? (view = "ribbon") : (view = "all");
  };
</script>

<div class="section-content">
  <div class="flex align-center row-kpi">
    <Pie size="70" middle="25%" percent=".25" color="var(--planet-primary)" />

    <p class="body-text" style="padding-bottom: 0rem; margin-left: 1rem;">
      Worldwide, the burning of coal, natural gas, and oil for electricity and heat accounts for
      <a href="https://www.epa.gov/ghgemissions/global-greenhouse-gas-emissions-data" target="blank"
        >approximately 25%</a
      >, the largest source, of greenhouse gas emissions.
    </p>
  </div>

  <div class="flex align-center row-kpi">
    <Pie size="70" middle="34%" percent=".34" color="var(--planet-primary)" />

    <p class="body-text" style="padding-bottom: 0rem; margin-left: 1rem;">
      In Los Angeles, the power sector accounts for 34% of the City’s overall emissions.
    </p>
  </div>

  <p class="body-text" style="margin-bottom:1rem;">
    Transitioning to higher amounts of renewable energy sources in the power system is an important
    part of addressing climate change. Established more than 100 years ago, the
    <a href="https://www.ladwp.com/ladwp/faces/ladwp" target="_blank"
      >Los Angeles Department of Water and Power</a
    >
    (LADWP) is the nation’s largest municipal water and power utility and currently delivers reliable
    and safe water and electricity to more than 4 million L.A. residents, translating to 1.5 million
    customers. About 34% of LADWP’s current power supply comes from renewable sources, including biomass
    & waste, geothermal, eligible hydroelectric, solar, and wind. To combat climate change while capturing
    health and economic benefits, the City has set ambitious goals to transform its electricity supply,
    aiming for a 100% renewable energy power system by 2035<Info
      text="L.A.'s Green New Deal published in 2019 had set an original target of 100% renewable energy by 2045. Following the LA100 study, Mayor Garcetti announced the City’s commitment to achieve that target by 2035, ten years ahead of schedule."
    />, along with a push to electrify the buildings and transportation sectors.
  </p>
</div>

<div class="section-content">
  <div class="green-new-deal">
    <Reveal>
      <p class="paragraph-headline" style="font-weight:bold; text-align:left;">
        L.A.’s Green New Deal
      </p>
    </Reveal>

    <Reveal>
      <p class="body-text">
        L.A.’s Green New Deal (GND) is an expanded vision of the City’s original 2015 Sustainable
        City pLAn. The GND sets ambitious targets for Los Angeles across energy, water, buildings,
        housing and development, mobility and transportation, air quality, waste, food systems,
        urban resilience, environmental justice, green jobs, and more. The LA100 study helps L.A.
        achieve our goal to achieve 100% renewable energy by 2035.
        <br /><br />
        Learn more about
        <a href="https://plan.lamayor.org/" target="_blank">L.A.’s Green New Deal here ></a>
      </p>
    </Reveal>
  </div>
</div>

<div class="section-content">
  <div class="sub-section">
    <Reveal>
      <h2>Pathways to 100% Renewable Energy</h2>
    </Reveal>

    <Reveal>
      <p class="body-text">
        Los Angeles City Council passed a series of motions in 2016 and 2017 directing LADWP to
        determine the technical feasibility and investment pathways for a 100% renewable energy
        portfolio. LADWP partnered with the U.S. Department of Energy&rsquo;s <a
          href="https://www.nrel.gov"
          target="_blank"
          rel="noopener">National Renewable Energy Laboratory (NREL)</a
        >
        on the
        <a href="https://maps.nrel.gov/la100" target="_blank" rel="noopener"
          >Los Angeles 100% Renewable Energy Study (LA100)</a
        >, a first-of-its-kind, objective, highly detailed, rigorous, and science-based study to
        analyze potential pathways our community can take to achieve a 100% clean energy future.
      </p>
    </Reveal>

    <Reveal>
      <p class="body-text">
        Four LA100 scenarios were evaluated using three different projections of customer
        electricity demand. The illustration below shows the four potential pathways using just the
        moderate projection of electricity demand. Each scenario explores one possible pathway
        toward a clean energy future. All scenarios have the same end goal—100% renewable energy —
        but how the goal is achieved (and what qualifies as a renewable or clean technology) varies
        across the scenarios.
      </p>
    </Reveal>
  </div>
</div>

<div class="section-content-cards">
  {#if view == "ribbon"}
    <div class="back hw-nav" on:click={unravelScenario}><a href="">&lt; Back</a></div>

    <div class="info-buttons">
      {#each tooltips as tooltip, i}
        <div
          class="info-button hw-nav"
          on:mouseenter={function (event) {
            tooltipShow = true;
            tooltipText = tooltip;
            translateY = (i + 1) * 180;
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

    {#if tooltipShow}
      <div
        class="tooltip"
        style="top:{translateY}px; left: 30px; position: absolute; width: 300px; "
      >
        {tooltipText}
      </div>
    {/if}
  {/if}
  {#if view == "all"}
    <div class="view-more hw-nav" on:click={unravelScenario}>Explore the Pathways</div>
  {/if}
  <div class="scenario-cards-{view}">
    {#each scenarioList as card, i}
      <div class="single-card">
        <Card
          cardLabel={card["cardLabel"]}
          cardInfo={card["cardInfo"]}
          iconList={card["iconList"]}
          cardColor={card["cardColor"]}
          scenario={i + 1}
          {view}
          data={card}
        />
      </div>
    {/each}
  </div>

  <IntersectionObserver {element} bind:intersecting>
    <div bind:this={element} />
  </IntersectionObserver>

  {#if view == "ribbon"}
    <div class="funnel-container">
      <div class="funnel-label hw-story-index">
        All paths lead to 100% renewable energy in Los Angeles by 2045
      </div>
      <div class="funnel-wind" />

      <svg
        width="100%"
        height="100%"
        viewBox="0 0 890 398"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          class="funnel"
          d="M0 0C52.3333 56.5 167.3 215.2 208.5 398H428H462H681.5C722.7 215.2 837.667 56.5 890 0H462H428H0Z"
          fill="white"
        />
      </svg>
    </div>
  {/if}
</div>
<div class="section-content body-text">
  Based on the <a
    href="https://maps.nrel.gov/la100/key-findings/topics/high-level-findings#la-can-get-started-now-no-regrets-options"
    target="_blank"
    rel="noopener">findings of the LA100 Study</a
  >,
  <a
    href="https://www.ladwp.com/ladwp/faces/ladwp/aboutus/a-power/a-p-cleanenergyfuture/a-p-renewableenergystudy?_adf.ctrl-state=z5dx5x9pd_4&amp;_afrLoop=177859219121490"
    target="_blank"
    rel="noopener">LADWP has started several projects and research</a
  >
  for implementation including:

  <ul>
    <li>Increasing renewable energy generation in and out of California</li>
    <li>
      Increasing access to <a
        href="https://business.lacity.org/incentive/city-los-angeles-feed-tariff-program"
        target="_blank">commercial feed-in-tariff</a
      >
      <Info
        text="Through the Feed-in Tariff Program, the LADWP may purchase energy generated from an individual's or business' renewable energy generating systems to help the Department reach its renewable energy goals."
      />, rooftop rental, and shared solar projects
    </li>
    <li>
      Increasing energy storage capacity starting with long duration storage in salt caverns at the <a
        href="https://www.ipautah.com"
        target="_blank">Intermountain Power Plant</a
      >
    </li>
    <li>Upgrading local and regional transmission lines</li>
  </ul>
  Following the LA100 study, LADWP will launch a comprehensive, community-driven effort to achieve a
  just and equitable 100% carbon-free future for all communities in Los Angeles. NREL will lead a new
  phase of the study,
  <a
    href="https://www.nrel.gov/news/program/2021/nrel-follows-up-groundbreaking-la100-study-with-new-equity-strategies-initiative.html"
    target="_blank"
    rel="noopener"
  >
    LA100 Equity Strategies</a
  >, in collaboration with the
  <a href="https://innovation.luskin.ucla.edu/" target="_blank"
    >Luskin Center for Innovation at UCLA</a
  > to bring together environmental justice communities and other key stakeholders to identify energy-just
  outcomes, particularly for underserved communities.
</div>

<Nav on:click />

<style>
  .tertiary-text {
    color: var(--d-grey);
  }
  .tooltip {
    padding: 0.5rem;
    background-color: var(--l-grey);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    border: 1px solid var(--m-grey);
    height: auto;
  }
  .info-button {
    background-color: var(--l-grey);
    box-shadow: var(--button-shadow);
    border-radius: 50%;
    border: 1px solid var(--button-border);
    color: var(--primary-color);
    width: 25px;
    height: 25px;
    z-index: 10;
    cursor: pointer;
  }

  .info-button:hover {
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  .info-buttons {
    position: absolute;
    left: -20px;
    top: 180px;
    display: flex;
    flex-flow: column wrap;
    height: 400px;
    justify-content: space-between;
  }

  .funnel-label {
    position: absolute;
    width: 50%;
    top: 20%;
  }

  .funnel-wind {
    background: url("/assets/images/wind.png");
    position: absolute;
    bottom: 0;
    height: 50%;
    width: 50%;
    background-size: cover;
  }

  .view-more {
    background-color: var(--white);
    box-shadow: var(--button-shadow);
    border-radius: 50%;
    border: 1px solid var(--black);
    width: 125px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 40%;
    left: 43%;
    cursor: pointer;
    z-index: 5;
  }

  .green-new-deal {
    background-color: var(--l-grey);
    padding: 5% 5% 0% 5%;
    margin-top: -2rem;
    border-radius: var(--round-sm);

    background-color: var(--planet-primary);
    color: var(--white);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-image: url("/assets/images/gnd-background.png");
  }

  .green-new-deal a {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }

  .back {
    text-align: left;
    margin-left: 2rem;
    cursor: pointer;
  }
  .view-more:hover {
    color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
  }
  a {
    color: var(--planet-primary);
    border-bottom: 1px solid var(--planet-primary);
  }

  a:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
  }

  .section-content {
    margin-top: 3rem;
  }

  ul {
    margin-top: 1rem;
  }

  li {
    margin-left: 2rem;
    margin-bottom: 1rem;
    text-align: left;
  }
  .funnel {
    filter: drop-shadow(0px 7px 10px rgba(48, 110, 213, 0.1));
  }

  .funnel-container {
    margin: -20px auto 0 auto;
    display: flex;
    justify-content: center;
    padding: 0 1rem 0 1rem;
    position: relative;
  }
  .body-text {
    text-align: left;
    padding-bottom: 2rem;
  }

  .row-kpi:first-of-type {
    padding-top: 1rem;
  }

  .row-kpi {
    padding-bottom: 1.5rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  .sub-section {
    padding: 2rem 0 0 0;
    margin-bottom: 0;
  }

  .section-content-cards {
    width: 80%;
    margin: auto;
    position: relative;
  }

  .scenario-cards-all {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .scenario-cards-all > div {
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    flex-direction: column;
  }

  .scenario-cards-ribbon {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .scenario-cards-ribbon > div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-basis: 25%;
    transition: flex-basis 1000ms linear;
  }
  @media only screen and (max-width: 1000px) {
    .scenario-cards-all {
      display: block;
    }

    .view-more {
      text-align: center;
      font-size: 1rem;
      width: 100px;
      height: 100px;
      position: relative;
      margin: 0 auto;
      left: 0;
    }

    .scenario-cards-ribbon > div {
      flex-basis: 50%;
    }

    .section-content-cards {
      width: 95%;
    }

    .info-buttons {
      position: absolute;
      left: 0px;
      top: 180px;
      display: flex;
      flex-flow: column wrap;
      height: 400px;
      justify-content: space-between;
    }

    .hw-story-index {
      font-size: 1rem;
    }
  }
</style>
