<script>
  import { getContext } from "svelte";
  import Reveal from "$components/Reveal.svelte";
  import MeetSoraya from "$components/ProjectSpotlights.Popup.People.MeetSoraya.svelte";
  import SorayaJourney from "$components/ProjectSpotlights.Popup.People.SorayaJourney.svelte";
  import Pie from "$components/Pie.svelte";
  const { projectStore } = getContext("projectSpotlights");
  import Nav from "$components/ProjectSpotlights.Popup.Nav.svelte";
  import Info from "$components/Info.svelte";

  $: cardColor = $projectStore.cardSelection.cardColor;
  $: cardInfo = $projectStore.cardSelection.cardInfo;
</script>

<div class="section-content">
  <p class="body-text">
    Housing insecurity is one of the most visible and complex challenges facing Los Angeles today.
    An inadequate supply of affordable housing and shelter leaves many of our most vulnerable
    residents in L.A. without the stability they need to secure steady employment, education,
    healthcare, and childcare. Based on the <a
      href="https://www.lahsa.org/news?article=726-2020-greater-los-angeles-homeless-count-results"
      target="_blank"
      rel="noopener">2020 regional point-in-time count</a
    >, an average of 207 people exit homelessness, and 227 people become homeless every day in L.A.
    County. Centering the lived experiences of those facing challenges like housing insecurity can
    help us better design government services and identify opportunities for intervention.
  </p>
  <p class="body-text">
    Beginning in January 2020, with support from the Conrad N. Hilton Foundation, Mayor&rsquo;s Fund
    for Los Angeles, and in partnership with the Arizona State University Thunderbird School of
    Global Management and the City County of Nairobi, Kenya, Los Angeles launched a
    first-of-its-kind effort to explore how the Fourth Industrial Revolution and emerging technology
    could support innovations in housing. With the onset of the pandemic, the team pivoted to focus
    on the local stressors that contribute to housing insecurity. Through listening sessions with
    residents, local policy makers, and housing services advocates, the project centered the lived
    experience of Angelenos experiencing housing insecurity. Visualizing their journeys helps to
    pinpoint decision points where services or policy interventions may be possible to better
    support our neighbors. This approach is one of the tools the City of L.A. is using to expand and
    improve our social safety net to better meet residents&rsquo; needs. Below is a short summary of
    this project.
  </p>

  <p class="body-text">
    You can see the <a
      href="https://lamayor.org/increasing-housing-stability-renters"
      target="_blank">full resource here</a
    >.
  </p>

  <div class="sub-section">
    <Reveal>
      <h2>Humanizing our Housing Crisis</h2>
    </Reveal>

    <Reveal>
      <p class="body-text" style="margin-bottom: 2rem">
        As SDG 11.1 states, access to stable housing is fundamental to our ability to thrive. Yet,
        hundreds of thousands of Angelenos live without secure housing - struggling to afford their
        home, doubling up, moving frequently, or living in fear of eviction and homelessness.
      </p>
    </Reveal>
    <div class="flex align-center row-kpi">
      <Pie size="100" middle="60%" percent=".60" color="var(--people-primary)" />

      <p class="body-text">
        Roughly <a
          href="https://www.governing.com/archive/city-renter-population-housing-statistics.html"
          target="_blank"
          rel="noopener">60% of City of Los Angeles residents rent their homes</a
        >. About 73% of renters are
        <a href="https://socialinnovation.usc.edu/rent-burden/" target="_blank" rel="noopener"
          >rent-burdened</a
        ><Info text="Spending over 30% of household income on rent and utilities" /> and about 48% of
        renters are
        <a href="https://socialinnovation.usc.edu/rent-burden/" target="_blank" rel="noopener"
          >severely rent-burdened</a
        >
        <Info text="Spending over 50% of household income on rent and utilities" />.
      </p>
    </div>
    <div class="flex align-center row-kpi">
      <Pie size="100" middle="2/3" percent=".667" color="var(--people-primary)" />
      <p class="body-text">
        Nearly 2/3 of rent-burdened households reported <a
          href="https://news.usc.edu/179928/los-angeles-rent-burdened-households-basic-needs-usc-research/"
          target="_blank"
          rel="noopener">prioritizing rent payment over food</a
        > in the last two years.
      </p>
    </div>

    <Reveal>
      <p class="body-text">
        The National Equity Atlas and Right to the City Alliance have <a
          href="https://nationalequityatlas.org/lab/rent-debt"
          target="_blank"
          rel="noopener">published a dashboard tracking the estimated rent debt</a
        > in the U.S. by county.
      </p>

      <p class="body-text" style="margin-top: 1.5rem">
        The <a href="https://lamayor.org/increasing-housing-stability-renters" target="_blank"
          >“Struggling To Stay Housed”</a
        > resource centers the lived experiences of renters in the City of Los Angeles, particularly
        people of color and immigrants, who are trying to stay housed. Their journeys make personal the
        impact of California’s affordable housing crisis and underscore the need for bold, community-centered
        interventions.
      </p>
    </Reveal>

    <Reveal>
      <p class="body-text">
        Over several months, the <a
          href="https://www.lamayor.org/mayors-office-city-homelessness-initiatives"
          target="_blank"
          rel="noopener">Mayor&rsquo;s Office of City Homeless Initiatives</a
        > partnered with community-based organizations to identify Angelenos who were willing to share
        their experiences, focusing on populations that disproportionately experience housing challenges.
        The lived experience experts we engaged were low-income renters of color and immigrants, mostly
        women, with both transitional aged youth (16-25) and seniors represented. When necessary, a case
        manager or translator was present to ensure sensitivity and inclusivity.
      </p>
    </Reveal>
  </div>

  <div class="sub-section">
    <MeetSoraya />
  </div>

  <div class="sub-section">
    <SorayaJourney />
  </div>
</div>

<Nav on:click />

<style>
  .body-text {
    text-align: left;
    width: 100%;
  }

  .row-kpi:first-of-type {
    padding-top: 1rem;
  }

  .row-kpi {
    padding-bottom: 1.5rem;
  }

  .hw-kpi {
    width: 120px;
    text-align: left;
    padding-right: 1rem;
    font-size: 2rem;
    text-align: center;
  }

  .flex {
    justify-content: center;
  }

  .flex .body-text {
    margin-bottom: 0;
    margin-left: 2rem;
  }

  h2 {
    margin: 3rem 0 3rem 0;
  }

  a {
    color: var(--people-primary);
    border-bottom: 1px solid var(--people-primary);
    text-decoration: none;
    font-family: var(--hw);
    font-size: 1.125rem;
  }

  a:hover {
    border-bottom: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  @media only screen and (max-width: 640px) {
    .hw-kpi {
      width: 100px;
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
</style>
