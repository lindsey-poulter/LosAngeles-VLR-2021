<script>
  import { getContext } from "svelte";
  import Graphic from "$components/Intro.SdgLA.Graphic.svelte";
  const copy = getContext("copy");
  import inView from "../actions/inView";
  import Reveal from "$components/Reveal.svelte";
  export let currentView;

  let w;
</script>

<section id="sdg-la" use:inView={{ bottom: 50 }} on:enter={(e) => (currentView = e.target)}>
  <!-- <Reveal>
    <span class="hw-section-index" style="color: var(--m-grey)">05</span>
  </Reveal> -->
  <div class="section-content">
    <Reveal>
      <h1>{copy.SDGLA_title}</h1>
    </Reveal>

    <Reveal>
      <p class="body-text">
        With support from the
        <a href="https://www.hiltonfoundation.org" target="_blank">Conrad N. Hilton Foundation</a>
        and the
        <a href="https://mayorsfundla.org" target="_blank">Mayor’s Fund for Los Angeles</a>, L.A.
        became one of the first cities in the world to take action on the SDGs at the local level in
        2017. We published our first
        <a href="https://sdg.lamayor.org/our-work/voluntary-local-review" target="_blank"
          >Voluntary Local Review</a
        >
        and an open-source
        <a href="https://sdgdata.lamayor.org" target="_blank">SDG Data Reporting Platform</a> in
        2019, and in 2020 launched our
        <a href="https://sdg.lamayor.org/get-involved/sdg-activities-index" target="_blank"
          >SDG Activities Index</a
        >, an online encyclopedia of community-wide SDG projects and initiatives. These efforts are
        rooted in strong multi-stakeholder partnerships, including internal coordination between
        City departments and partnerships with
        <a href="https://sdg.lamayor.org/about/partners" target="_blank"
          >five academic institutions</a
        >, and the more than 160 students who have directly supported this work over the past four
        years.
      </p>
    </Reveal>
  </div>
  <div class="timeline" bind:clientWidth={w}>
    <Graphic width={w} />
  </div>

  <div class="section-content">
    <Reveal>
      <p class="body-text">
        In L.A., we organize our SDG actions in three ways: we <strong>measure</strong> progress
        through data reporting; we <strong>mobilize</strong> new projects and build capacity for the
        Goals; and we <strong>connect</strong> with partners, while centering our commitment to
        <strong>leave no one behind</strong>. The SDGs in Los Angeles provide a framework that City
        departments, community-based organizations, private corporations, philanthropic leaders, and
        academic partners are using to link their work to a broader agenda, measure and report on
        their progress, and connect into an ecosystem of partners citywide.
      </p>
    </Reveal>
  </div>
</section>

<style>
  .body-text {
    text-align: left;
  }

  .timeline {
    width: 100%;
    margin: 4rem auto 4rem auto;
  }
</style>
