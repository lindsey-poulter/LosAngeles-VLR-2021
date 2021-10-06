<script>
  import { draw, fade } from "svelte/transition";
  import Pie from "$components/Pie.svelte";
  import move from "$utils/move.js";
  import Info from "$components/Info.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  let element,
    intersecting = false;
</script>

<IntersectionObserver {element} bind:intersecting>
  <div bind:this={element}>
    <div class="image" style="background-image: url('/assets/images/sdg6visual.png');">
      <div class="pie" id="california">
        <Pie size="80" middle="50%" percent=".5" color="#fd9d25" />
        <p class="tertiary-text">California Aqueduct
          <Info text="The California Aqueduct is 444 miles long and runs parallel to the I-5 highway. The aqueduct's water comes from the Sacramento-San Joaquin Delta." />
        </p>
      </div>

      <div class="pie" style="top: 10%; left: 49%;">
        <Pie size="80" middle="27%" percent=".27" color="#230fab" />
        <p class="tertiary-text">Los Angeles Aqueduct  
          <Info text="The Los Angeles Aqueduct is sourced by water from the Owens Valley, located east of the Sierra Nevada." />
        </p>
      </div>

      <div class="pie" style="bottom: -3%; left: 74%;">
        <Pie size="80" middle="9%" percent=".09" color="#de0255" />
        <p class="tertiary-text">Colorado River Aqueduct
          <Info text="The Colorado River Aqueduct is a 242 mile-long aqueduct that can transport up to 1 billion gallons of water each day from the Colorado River to Southern California." />
       
        </p>
      </div>

      <div class="pie" style="bottom: -20%; left: 40%;">
        <Pie size="80" middle="2%" percent=".02" color="var(--black)" />
        <p class="tertiary-text">Recycled Water
          <Info text="LASAN is the City's premier producer of recycled water and has a goal to achieve 100% water recycling at the City’s four water reclamation plants by 2035. " />
        </p>
      </div>

      <div class="pie" id="local">
        <Pie size="80" middle="12%" percent=".12" color="var(--black)" />
        <p class="tertiary-text">Local Groundwater
          <Info text="L.A. has access to five local groundwater basins: San Fernando, Sylmar, Eagle Rock, Central, and West Coast. The City is on track to reach its goal of capturing 150,000 acre ft/yr (AFY) of stormwater by 2035." />
        </p>
      </div>
    </div>
  </div>
</IntersectionObserver>

<style>
  .image {
    height: 400px;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    margin-bottom: 80px;
    position: relative;
    max-width: 700px;
  }

  .pie {
    display: flex;
    flex-flow: column wrap;
    width: 80px;
    position: absolute;
  }

  #california {
    top: 37%; left: 15%;

    }

    #local {
     bottom: -10%; left: 27%;
    }

  @media only screen and (max-width: 640px) {
  
    #california {
      top: 37%; left: 0%;

    }

    #local {
     bottom: -10%; left: 10%;
    }
  }

</style>
