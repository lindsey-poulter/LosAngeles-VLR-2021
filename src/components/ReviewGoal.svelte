<script>
  import { setContext } from "svelte";
  import { getContext } from "svelte";
  import { writable } from "svelte/store";
  import inView from "../actions/inView";
  import viewport from "$stores/viewport.js";
  import sdgs from "$data/sdgs.csv";

  import Wheel from "$components/ReviewGoal.Wheel.svelte";
  import SdgHeader from "$components/ReviewGoal.SdgHeader.svelte";
  import SdgIntro from "$components/ReviewGoal.SdgIntro.svelte";
  import SdgChart from "$components/ReviewGoal.SdgChart.svelte";
  import SdgDoing from "$components/ReviewGoal.SdgDoing.svelte";
  import SdgNav from "$components/ReviewGoal.SdgNav.svelte";
  import Reveal from "$components/Reveal.svelte";

  export let currentView, mobile;

  const copy = getContext("copy");
  const sdgsCount = sdgs.length;
  const slice = (2 * Math.PI) / sdgsCount;

  const sdgStore = writable({});
  const interactions = writable({});

  // WHEEL THINGS
  $: height = $viewport.height / 1.7;
  $: width = $viewport.width;
  $: center = width / 2;
  $: radius = width / 4;
  $: actualIndex = "";
  $: currentIndex = 0;
  $: activeSdg = sdgs[currentIndex];
  $: activeSdgIndex = +activeSdg.number;
  $: nextSdgIndex = +activeSdgIndex == 17 ? 1 : activeSdgIndex + 1;
  $: nextSdg = sdgs[nextSdgIndex - 1];
  $: previousSdgIndex = +activeSdgIndex == 1 ? 17 : activeSdgIndex - 1;
  $: previousSdg = sdgs[previousSdgIndex - 1];
  $: pos = 0;
  $: offsetAngle = (pos * Math.PI) / 180;

  // WHEEL FUNCTIONS
  $: coords = (index) => {
    let coords = {};
    const angle = index * slice;
    const x = center + radius * 0.9 * Math.sin(angle + offsetAngle);
    const y = height - radius * Math.cos(angle + offsetAngle);
    coords.x = x;
    coords.y = y / 3.3;
    coords.angle = angle;
    return coords;
  };
  $: zCompute = (i) => {
    let index = i;
    if (currentIndex == index) {
      actualIndex = index;
    }
    let newIndex = currentIndex == index ? 0 : index < currentIndex + 13 ? index - currentIndex : 0;
    let newPos = newIndex > 0 ? sdgsCount - newIndex : newIndex < -10 ? newIndex * -1 : newIndex;
    let show = newPos == 0 || (newPos <= 16 && newPos >= 13) || (newPos >= -4 && newPos <= 0);
    return { newPos, show };
  };
  $: cardRotate = (i) => {
    let distance = i - actualIndex;
    distance >= 10
      ? (distance = i - (17 + actualIndex))
      : distance <= -10
      ? (distance = i + (17 - actualIndex))
      : distance;
    let angle = distance * 9.52;
    return angle;
  };
  $: nextWheel = () => {
    pos -= 360 / sdgsCount;
    currentIndex == sdgsCount - 1 ? (currentIndex = 0) : (currentIndex += 1);

    var element = document.getElementById("wheel");
    element.scrollIntoView({ block: "start" });
  };
  $: previousWheel = () => {
    pos += 360 / sdgsCount;
    currentIndex == 0 ? (currentIndex = sdgsCount - 1) : (currentIndex -= 1);
  };

  // BOTTOM NAV FUNCTION(S)
  $: navigateNav = (index) => {
    activeSdg = sdgs[index - 1];
  };

  // STORES
  $: sdgStore.set({
    activeSdg,
    actualIndex,
    nextSdg,
    previousSdg
  });

  $: interactions.set({
    coords,
    zCompute,
    cardRotate,
    nextWheel,
    previousWheel,
    navigateNav
  });

  $: sdgContext = { sdgStore, interactions };
  $: setContext("SDG", sdgContext);
</script>

<section id="review-goal" use:inView={{ bottom: 50 }} on:enter={(e) => (currentView = e.target)}>
  <!-- <Reveal>
    <span class="hw-section-index" style="color: var(--m-grey)">07</span>
  </Reveal> -->
  <div class="section-content">
    <Reveal>
      <h1>Review by Goal</h1>
    </Reveal>
  </div>

  <div class="section-content">
    <p class="body-text">
      This Voluntary Local Review (VLR) includes a snapshot of each of the 17 Goals that feature
      related City programs, initiatives, indicators, and innovative multi-stakeholder partnerships.
      To view all of L.A.’s data reported by SDG, visit our
      <a href="https://sdgdata.lamayor.org/" target="_blank">OpenSDG Data Reporting Platform</a>. To
      explore other City programs and projects, as well as initiatives led by the private sector and
      community-based organizations not reported here, visit our
      <a href="https://sdg.lamayor.org/get-involved/sdg-activities-index" target="_blank"
        >SDG Activities Index</a
      >.
      <br /><br />
      We welcome suggestions and feedback, which can be sent to
      <a href="mailto:sdg@lacity.org" target="_blank" rel="noopener">sdg@lacity.org</a>.
    </p>
  </div>

  <!-- <Reveal> -->
  <Wheel {mobile} />
  <!-- </Reveal> -->

  <div id="sdg-section">
    <Reveal>
      <SdgHeader />
    </Reveal>

    <div class="section-content">
      <div class="sub-section intro">
        <SdgIntro />
      </div>

      <div class="sub-section chart">
        <SdgChart />
      </div>

      <div class="sub-section">
        <SdgDoing />
      </div>

      <div class="sub-section">
        <SdgNav {mobile} />
      </div>
    </div>
  </div>
</section>

<style>
  #sdg-section,
  .section-content {
    display: flex;
    flex-direction: column;
  }

  .intro {
    margin-bottom: 1rem;
  }

  h2 {
    margin-bottom: 5rem;
  }

  .chart {
    padding: 1rem 0 3rem 0;
  }

  .body-text {
    text-align: left;
    margin: 0 auto;
    width: 75%;
    margin-bottom: 4rem;
  }

  .sub-section {
    margin-bottom: 1rem;
  }
</style>
