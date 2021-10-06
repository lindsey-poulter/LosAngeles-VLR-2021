<script>
  import { getContext } from "svelte";
  import SdgChartTitle from "$components/ReviewGoal.SdgChartTitle.svelte";
  import SdgChartSource from "$components/ReviewGoal.SdgChartSource.svelte";
  import data from "$data/charts.csv";
  import Bar from "$components/ReviewGoal.SdgChart.Bar.svelte";
  import Line from "$components/ReviewGoal.SdgChart.Line.svelte";
  import Map from "$components/Map.svelte";
  import Sdg6 from "$components/ReviewGoal.SdgChart.Sdg6.svelte";
  import Sdg5 from "$components/ReviewGoal.SdgChart.Sdg5.svelte";
  import Sdg13 from "$components/ReviewGoal.SdgChart.Sdg13.svelte";
  import Sdg15 from "$components/ReviewGoal.SdgChart.Sdg15.svelte";
  import Sdg16 from "$components/ReviewGoal.SdgChart.Sdg16.svelte";
  import Sdg17 from "$components/ReviewGoal.SdgChart.Sdg17.svelte";
  import Sdg9 from "$components/ReviewGoal.SdgChart.Sdg9.svelte";
  import Pie from "$components/Pie.svelte";

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg;
  $: breakout = $sdgStore.activeSdg.chartBreakout;

  $: filteredData = data.filter(function (d) {
    if (d.SDG == activeSdg.number) {
      return d;
    }
  });
</script>

<SdgChartTitle />

{#if +activeSdg.number == 6}
  <Sdg6 />
{:else if +activeSdg.number == 5}
  <Sdg5 />
{:else if +activeSdg.number == 9}
  <div class="graphic">
    <div class="graphic" style="background-image: url('/assets/images/SDG9visual.png');" />
  </div>
{:else if +activeSdg.number == 11 || +activeSdg.number == 7 || +activeSdg.number == 14 || +activeSdg.number == 3}
  <div class="map">
    <Map place="SDG{activeSdg.number}" />
  </div>
{:else if +activeSdg.number == 12}
  <div class="image-12" style="background-image: url('/assets/images/sdg12visual.png');" />
{:else if +activeSdg.number == 13}
  <Sdg13 />
{:else if +activeSdg.number == 15}
  <Sdg15 />
{:else if +activeSdg.number == 16}
  <Sdg16 />
{:else if +activeSdg.number == 17}
  <div class="map17">
    <Map place="SDG{activeSdg.number}" />
  </div>
  <Sdg17 />
{:else if +activeSdg.number == 10}
  <div class="line">
    <Line dataset={filteredData} />
  </div>
{:else}
  <div class="chart">
    <Bar
      dataset={filteredData}
      metric="Value"
      dimension="Year"
      barPadding=".4"
      isHorizontal="false"
      xAxis="yes"
      chartLabel="yes"
      place="SDG"
      {breakout}
    />
  </div>

  {#if +activeSdg.number == 4}
    <div id="sdg-4">
      <Pie size="80" middle="90%" percent=".90" color="var(--sdg4-primary)" />

      <p class="body-text">
        Over the last three years, close to <strong
          >20,000 students have enrolled in full-time</strong
        > undergraduate studies through LACP, and 90% of these undergraduates are students of color.
      </p>
    </div>
  {/if}
{/if}
<SdgChartSource />

<style>
  .chart {
    max-width: 1300px;
    height: 400px;

    position: relative;
  }

  .graphic {
    height: 360px;
    margin-top: -3rem;
    margin-bottom: -2rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: -10;
    position: relative;
  }

  .line {
    max-width: 1300px;
    height: 400px;

    position: relative;
    margin-bottom: 2rem;
  }

  .map {
    max-width: 1300px;
    height: 450px;

    position: relative;
  }

  .map17 {
    max-width: 1300px;
    height: 450px;

    position: relative;
  }

  .image {
    height: 500px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: -10;
  }

  .image-12 {
    height: 300px;
    margin-bottom: -50px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -10;
  }

  .body-text {
    text-align: left;
    margin: 2rem;
  }
  #sdg-4 {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 0rem;
  }

  @media only screen and (max-width: 640px) {
    .map {
      overflow: hidden;
    }
    .image-12 {
      height: 200px;
      margin-bottom: -75px;
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      z-index: -10;
    }

    .graphic {
      height: 250px;

      margin-bottom: -85px;
    }

    .map17 {
      max-width: 1300px;
      height: 400px;
      margin-top: -100px;

      position: relative;
    }
  }
</style>
