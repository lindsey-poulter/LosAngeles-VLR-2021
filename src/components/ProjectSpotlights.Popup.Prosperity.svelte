<script>
  import { getContext } from "svelte";
  import Bar from "$components/ReviewGoal.SdgChart.Bar.svelte";
  import data from "$data/big-leap-data.csv";
  import Nav from "$components/ProjectSpotlights.Popup.Nav.svelte";
  import Scale from "$components/ProjectSpotlights.Popup.Prosperity.Scale.svelte";
  import Reveal from "$components/Reveal.svelte";
  import { fade, slide, fly } from "svelte/transition";
  import Info from "$components/Info.svelte";

  const { projectStore } = getContext("projectSpotlights");

  $: cardColor = $projectStore.cardSelection.cardColor;
  $: cardInfo = $projectStore.cardSelection.cardInfo;

  $: mapNum = 1;
</script>

<div class="section-content">
  <p class="body-text" style="margin-bottom: 1rem;">
    L.A.&rsquo;s $1.1 trillion regional economy rivals most countries, and our entrepreneurial
    environment fosters innovation across rapidly growing sectors like advanced manufacturing,
    transportation, and green technology. This economic strength has manifested increases in both
    low-wage and high-wage jobs, but a <a
      href="https://dornsife.usc.edu/assets/sites/242/docs/EquityProfile_LA_Region_2017_Summary_Final.pdf"
      target="_blank"
      rel="noopener">decrease in middle-wage employment</a
    >. Economic inequality and poverty persist in L.A. and throughout the U.S., and we must ensure
    all Angelenos can access our regional economic strength to build wealth and financial security.
  </p>

  <div id="intro-metrics">
    <div class="tertiary-text">
      <img
        src="/assets/images/prosperity_intro1.svg"
        alt="Illustration where 12 in 100 people are colored orange"
      />

      If the state of California were a nation, it would have the fifth largest economy in the
      world, and yet,
      <a href="https://www.census.gov/quickfacts/CA" target="_blank" rel="noopener"
        >12% of the population</a
      > lives below the federal poverty level
    </div>

    <div class="tertiary-text">
      <img
        src="/assets/images/prosperity_intro2.svg"
        alt="Illustration where 2 in 10 people are colored orange"
      />
      In the City of Los Angeles, poverty affects almost two out of every 10 residents, most of them
      people of color
    </div>

    <div class="tertiary-text">
      <img
        src="/assets/images/prosperity_intro3.svg"
        alt="Illustration where 1 in 3 people are colored orange"
      />
      <a
        href="https://www.unitedwaysca.org/images/RealCostMeasure2021/The-Real-Cost-Measure-in-California-2021-Executive-Summary.pdf"
        target="_blank"
        rel="noopener"
        >1/3 of working adults
      </a>in Los Angeles aren&rsquo;t able to support their families with full-time work alone
    </div>
  </div>

  <Reveal>
    <p class="hw-story-index" style="text-align: center; margin: .5rem 0 2.5rem 0;">
      But what does this mean?
    </p>
  </Reveal>

  <div id="intro-metrics">
    <div class="tertiary-text">
      In 2020, the <span class="orange-text">federal poverty level</span><Info
        text="The federal poverty level is a simplification of the poverty thresholds updated each year by the Census Bureau based on family size and composition. The thresholds do not vary geographically but are updated for inflation."
      /> for a household of 4 was $26,200 regardless of location...
    </div>

    <div class="tertiary-text">
      ... But poverty is a compound reality with various root causes, not just a threshold
      statistic...
    </div>

    <div class="tertiary-text">
      And the <a href="https://livingwage.mit.edu/counties/06037" target="_blank" rel="noopener"
        >cost of living in Los Angeles</a
      > is higher than most of the rest of the United States
    </div>
  </div>

  <Reveal>
    <Scale />
  </Reveal>

  <Reveal>
    <p class="body-text" style="margin-bottom: 3rem; margin-top: 3rem;">
      Poverty is not just tied to income, but to various compounding factors including health and
      education. The City of Los Angeles does not oversee public health, social services, or public
      schools, which are under the jurisdiction of the County of Los Angeles and L.A. Unified School
      District, respectively. As a result, L.A. City&rsquo;s budget is comparatively smaller than
      cities like New York ($98.7 billion), which does provide for public health and education. In
      June 2021, <a
        href="https://www.lamayor.org/mayor-garcetti-signs-2021-2022-budget"
        target="_blank"
        rel="noopener">Mayor Garcetti signed an $11.2 billion budget</a
      >
      for the 2021-2022 Fiscal Year (FY). This plan dedicates nearly $1 billion to confronting the homelessness
      crisis, invests $300 million into racial and economic justice programs across the City, and commits
      critical resources to help Angelenos recover from COVID-19. Over the last five years, L.A. was
      the biggest city in America to adopt a
      <a
        href="https://www.lamayor.org/statement-mayor-garcetti-minimum-wage-increase#:~:text=July%201%20marks%20the%20first,%2415%20an%20hour%20minimum%20wage."
        target="_blank"
        rel="noopener">$15 minimum wage</a
      >, launched the
      <a href="http://lacollegepromise.org" target="_blank" rel="noopener"
        >L.A. College Promise program</a
      >, established the City&rsquo;s first
      <a
        href="https://www.lamayor.org/mayor-garcetti-announces-6-million-state-grant-support-city-reentry-programs"
        target="_blank"
        rel="noopener">Office of Reentry</a
      >
      to support formerly incarcerated individuals, and raised tens of millions of dollars to support
      the
      <a href="https://mayorsfundla.org/program/angeleno-card/" target="_blank" rel="noopener"
        >Angeleno Card</a
      >. The City's FY21-22 Budget is a <strong>Justice Budget</strong> as it funds new, bold steps toward
      a more just and equitable future that are needed now more than ever.
    </p>
  </Reveal>

  <div class="sub-section">
    <Reveal>
      <div class="logo-container">
        <div class="big-leap-logo" />
      </div>
    </Reveal>

    <Reveal>
      <p class="paragraph-headline">Basic Income Guaranteed: L.A. Economic Assistance Pilot</p>
    </Reveal>

    <Reveal>
      <p class="body-text">
        In April 2020, Mayor Garcetti and the Mayor&rsquo;s Fund for Los Angeles launched a direct
        financial assistance program to serve residents hardest-hit by the pandemic&rsquo;s economic
        impacts. The <a
          href="https://mayorsfundla.org/program/angeleno-card/"
          target="_blank"
          rel="noopener">Angeleno Card</a
        > initiative distributed over $36 million between April 2020 and July 2020. Through anonymized
        data, we have seen that over 40% (almost $14 million) of these funds were spent on food.
      </p>
    </Reveal>

    <Reveal>
      <p class="hw-nav" style="text-align: left;">
        Of the $36M distributed and spent through the Angeleno Card, three-quarters went to food and
        essential items like clothing, utilities, and transportation.
      </p>

      <p class="tertiary-text" style="text-align: left;">
        Click on each category to see what kinds of purchases are included.
      </p>
    </Reveal>

    <Reveal>
      <div class="bar" style="width: 100%; height: 400px; margin-bottom: 1rem; margin-top: 1rem">
        <div class="chart">
          <Bar
            dataset={data}
            metric="Percent"
            dimension="Category"
            barPadding=".4"
            isHorizontal="true"
            xAxis="yes"
            chartLabel="yes"
            place="Prosperity"
            color="var(--prosperity-primary)"
          />
        </div>
      </div>
      <p class="tertiary-text" style="margin-bottom: 2rem; color:var(--d-grey); text-align: left;">
        Source: anonymized spending categories and data provided by the Mayor’s Fund for Los
        Angeles.
      </p>
    </Reveal>

    <Reveal>
      <p class="body-text">
        Following the initial release and success of the Angeleno Card and a smaller pilot project
        in Council District 9, the 2021 <strong>Justice Budget</strong> will fund the
        <strong>largest guaranteed income pilot in a U.S. city to date</strong>, with a total budget
        of $38.25 million. Through this pilot, approximately 3,000 households will receive monthly,
        obligation-free disbursements of $1,000 for one year through the
        <a
          href="https://www.lamayor.org/mayor-eric-garcetti-announces-launch-angeleno-connect"
          target="_blank">Angeleno Connect</a
        >
        account. Mayor Garcetti has joined with 57 other cities as part of the
        <a href="https://www.mayorsforagi.org/" target="_blank" rel="noopener"
          >Mayor&rsquo;s for Guaranteed Income</a
        > network to share their cities&rsquo; experiences and advocate for a national guaranteed income.
      </p>
    </Reveal>
  </div>

  <div class="sub-section">
    <Reveal>
      <div class="logo-container">
        <div class="clean-la-logo" />
      </div>
    </Reveal>

    <Reveal>
      <div class="flex-container flex space-between" style="padding-bottom: 0rem;">
        <div class="people-pic" />
        <div class="people-pic-text">
          <p class="body-text">
            Clean L.A. Jobs is a pilot program that employs underserved Angelenos facing barriers to
            employment to clean and beautify our communities. In addition to paid on-the-job
            training and full-time employment, participants will receive access to specialized
            training and educational services to prepare candidates for long-term careers with the
            City.
          </p>
        </div>
      </div>
    </Reveal>
  </div>

  <div class="sub-section">
    <Reveal>
      <div class="logo-container">
        <div class="repair-logo" />
      </div>
    </Reveal>

    <Reveal>
      <p class="body-text">
        The movement for racial justice that we saw on the streets of L.A. in Summer 2020 challenged
        the City to take bold steps to acknowledge and confront inequality and injustice with new
        programs funded through the 2021-22 Budget. See a full list of projects proposed in the <strong
          >Justice Budget</strong
        >
        <a
          href="https://www.lamayor.org/mayor-garcetti-proposes-2021-2022-city-budget-most-progressive-spending-plan-las-history"
          target="_blank"
          rel="noopener">here</a
        >
        and learn more about how L.A. is reimagining public safety in
        <span style="color: var(--sdg16-primary)"><b>SDG 16</b></span>.
      </p>
    </Reveal>

    <Reveal>
      <div class="mapdesc">
        <div class="map1desc">
          <p class="paragraph-headline">PEACE AND HEALING CENTERS</p>
          <p class="body-text">
            Peace and Healing Centers will bring together trusted and equipped community-based
            organizations, faith-based organizations, social workers, mental health professionals
            and community leaders to provide safe spaces where youth and adults can engage in
            healing-centered programming around racial justice and reconciliation around the effects
            of institutional racism.
          </p>
        </div>
        <div class="map2desc">
          <p class="paragraph-headline">Participatory budgeting</p>
          <p class="body-text">
            The budget allocates $10M in one-time funding to launch the City’s first participatory
            budgeting pilot, designed to empower a select number of communities with the decision
            making power to allocate funding to programmatic projects led by community-based
            organizations. Communities will be selected based on various equity and health metrics
            so as to ensure funds reach communities most in need.
          </p>
        </div>
      </div>
    </Reveal>

    <Reveal>
      <div class="map">
        <div class="map3desc">
          <div class="map4desc">
            <p class="hw-nav">Compounding Inequalities</p>
            <p class="body-text" style=" text-align: left; margin-bottom:1rem;">
              The nine tentative participatory budgeting communities score low in many health and
              socioeconomic outcome metrics.
            </p>
            <p class="body-text" style="text-align: left;">
              Click through to see how the nine communities (outlined in black) score in education
              attainment (red) and poverty rates (blue).
            </p>
          </div>
          {#key mapNum}
            <div class="map-container" in:fly={{ y: 10, duration: 400, delay: 15 }}>
              <div class="map-img">
                <img src="/assets/images/prosperity_map{mapNum}.png" alt="" />
              </div>

              <div class="map-legend">
                <div class="circle-row">
                  <div
                    id="circle"
                    on:click={function () {
                      mapNum = mapNum == 1 ? 3 : mapNum - 1;
                    }}
                  >
                    &lt;
                  </div>
                  <div
                    id="circle"
                    on:click={function () {
                      mapNum = mapNum == 3 ? 1 : mapNum + 1;
                    }}
                  >
                    &gt;
                  </div>
                </div>

                <div class="map-legend-img" style="left:{mapNum == 3 ? -5 : 0}%;">
                  <img src="/assets/images/prosperity_map{mapNum}_legend.svg" width="90%" alt="" />
                </div>
              </div>
            </div>
          {/key}
        </div>

        <p class="tertiary-text" style="text-align: left; font-size: .75rem; color: var(--d-grey);">
          Source: <a
            href="https://oehha.ca.gov/calenviroscreen/maps-data"
            target="_blank"
            style="font-size: .95rem; color: var(--d-grey); border-bottom: 1px solid var(--d-grey)"
            >CalEnviroScreen 3.0</a
          >
        </p>
      </div>
    </Reveal>
  </div>
</div>

<Nav on:click />

<style>
  .paragraph-headline {
    font-weight: bold;
    text-align: left;
  }
  .orange-text {
    color: var(--prosperity-primary);
    font-family: var(--hw);
    font-size: 1.125rem;
  }
  strong {
    color: var(--prosperity-primary);
    font-family: var(--hw);
    font-size: 1.125rem;
  }
  a {
    color: var(--prosperity-primary);
    border-bottom: 1px solid var(--prosperity-primary);
  }
  a:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
  }
  #intro-metrics {
    display: flex;
  }
  .mapdesc {
    display: flex;
    flex-flow: row nowrap;
  }

  .map1desc {
    flex-basis: 40%;
    margin-right: 1rem;
  }

  .map2desc {
    flex-basis: 50%;
    margin-left: 1rem;
  }

  .map3desc {
    display: flex;
    flex-flow: row nowrap;
    margin-top: 2rem;
  }

  .map4desc {
    flex-basis: 30%;
    margin-right: 1rem;
    position: relative;
  }

  .map-container {
    flex-basis: 70%;
    position: relative;
    margin-bottom: 3rem;
  }
  #intro-metrics > div {
    flex-basis: 33%;
    text-align: left;
    padding: 2rem;
    overflow: visible;
  }

  #intro-metrics img {
    width: 100%;
    margin-bottom: 1rem;
  }
  .sub-section {
    margin: 0rem 0;
    padding: 1rem 0;
  }

  .logo-container {
    padding-bottom: 2rem;
  }

  .hw-quote {
    padding-bottom: 3rem;
    width: 60%;
    margin: 0 auto;
  }

  .chart {
    max-width: 1300px;
    height: 100%;
    margin-top: 1.5rem;
    position: relative;
  }
  .body-text,
  .hw-nav {
    text-align: left;
  }

  .hw-nav {
    margin: 1rem 0;
  }

  .body-text {
    padding-bottom: 1rem;
  }

  .hw-quote {
    text-align: center;
  }

  .big-leap-logo,
  .clean-la-logo,
  .repair-logo {
    margin: 0 auto;
    max-width: 500px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .people-pic {
    margin: 0 auto;
    max-width: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: var(--round-sm);
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
    border: 1px solid var(--button-border);
    color: var(--primary-color);
  }

  .circle-row {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    width: 25%;
    left: -3%;
    position: absolute;
    bottom: 0%;
  }

  .big-leap-logo {
    background-image: url("/assets/images/big-leap.png");
  }

  .clean-la-logo {
    background-image: url("/assets/images/clean-la.png");
  }

  .people-pic {
    background-image: url("/assets/images/clean-la-people.png");
    height: 215px;
    margin-bottom: 0rem;
  }

  .people-pic-text {
    margin-left: 2rem;
    margin-bottom: 0rem;
  }
  .repair-pic-text {
    margin-right: 2rem;
  }

  .repair-logo {
    background-image: url("/assets/images/repair.png");
  }

  .flex div {
    flex: 1;
  }

  .unknown {
    background-color: var(--l-grey);
    width: 100%;
    height: 300px;
  }

  .map-img {
    height: 450px;
    width: 300px;
    margin-left: 25%;
  }

  .map-legend-img {
    position: absolute;
    bottom: 10%;
  }

  @media only screen and (max-width: 640px) {
    .hw-quote {
      width: 90%;
    }

    .flex-container {
      display: block;
    }

    .chart {
      /* height: 500px; */
    }

    .mapdesc {
      display: flex;
      flex-flow: row wrap;
    }

    .map1desc {
      flex-basis: 100%;
      margin-right: 0rem;
    }

    .map2desc {
      flex-basis: 100%;
      margin-left: 0rem;
    }

    .map3desc {
      display: flex;
      flex-flow: row wrap;
      margin-top: 0rem;
      margin-bottom: 2rem;
    }

    .map4desc {
      flex-basis: 100%;
      margin-right: 0rem;
      position: relative;
    }

    .map-container {
      flex-basis: 100%;
      position: relative;
      margin: 0 auto;
    }

    .map-img {
      width: 100%;
      margin: 0 auto;
      height: 80%;
      margin-left: 0%;
    }

    .map-img img {
      margin-left: 0%;
    }

    .map-legend {
      position: relative;
    }

    .circle-row {
      position: relative;
      margin-bottom: 1rem;
    }

    .map-legend-img {
      position: relative;
      bottom: 0;
      left: 0;
      width: 50%;
    }

    .map-container {
      flex-basis: 100%;
      position: relative;
      margin: 0 auto;
    }

    .people-pic {
      height: 230px;
    }

    .people-pic-text {
      margin-left: 0;
      margin-top: 1rem;
    }
    .repair-pic-text {
      margin-right: 0;
    }

    #intro-metrics {
      display: flex;
      flex-flow: row wrap;
    }

    #intro-metrics > div {
      flex-basis: 100%;
      text-align: left;
      padding: 1rem 4rem;
      overflow: visible;
    }

    #intro-metrics > div > img {
      width: 80%;
    }

    .intro-metrics > {
      padding: 1rem;
    }
  }
</style>
