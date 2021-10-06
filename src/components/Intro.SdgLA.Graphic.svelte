<script>
  import IntersectionObserver from "svelte-intersection-observer";
  export let width;
  import Dot from "$components/Dot.svelte";
  let element;
  let intersecting;
</script>

<IntersectionObserver {element} bind:intersecting>
  <div bind:this={element}>
    <div id="top-row">
      <div class="default" class:show={intersecting} style="transition-delay: {2 * 0.3}s">
        <p class="body-text title tertiary-text">
          Mayor Eric Garcetti announces that Los Angeles will adopt and implement the 17 Sustainable
          Development Goals
        </p>
        <p class="body-text year hw-nav">2017</p>
      </div>

      <div class="default" class:show={intersecting} style="transition-delay: {4 * 0.3}s">
        <p class="body-text title tertiary-text">
          L.A. publishes its first Voluntary Local Review, and simultaneously launches its OpenSDG
          data reporting platform
        </p>
        <p class="body-text year hw-nav">2019</p>
      </div>

      <div class="default" class:show={intersecting} style="transition-delay: {6 * 0.3}s">
        <p class="body-text title tertiary-text">
          L.A. publishes its second Voluntary Local Review, and hosts seven student task forces, for
          a total of 25 over four years
        </p>
        <p class="body-text year hw-nav">2021</p>
      </div>
    </div>

    <div id="timeline">
      <Dot {intersecting} num="1" />
      <Dot {intersecting} num="2" />
      <Dot {intersecting} num="3" />
      <Dot {intersecting} num="4" />
      <Dot {intersecting} num="5" />
      <Dot {intersecting} num="6" />
      <Dot {intersecting} num="7" />
      <div id="hash">///</div>
      <div id="line" />
    </div>

    <div id="bottom-row">
      <div class="default" class:show={intersecting} style="transition-delay: {1 * 0.3}s">
        <p class="body-text year hw-nav">2015</p>
        <p class="body-text title tertiary-text">
          The 193 member states of the United Nations unanimously adopt the 2030 Agenda for
          Sustainable Development
        </p>
      </div>

      <div class="default" class:show={intersecting} style="transition-delay: {3 * 0.3}s">
        <p class="body-text year hw-nav">2018</p>
        <p class="body-text title tertiary-text">
          18 students from four universities comprise the first SDG summer cohort, and work to
          localize the SDG targets for L.A.
        </p>
      </div>

      <div class="default" class:show={intersecting} style="transition-delay: {5 * 0.3}s">
        <p class="body-text year hw-nav">2020</p>
        <p class="body-text title tertiary-text">
          54 students from five universities comprise the second SDG summer cohort, and L.A.
          launches its open SDG Activities Index
        </p>
      </div>

      <div class="default" class:show={intersecting} style="transition-delay: {7 * 0.3}s">
        <p class="body-text year hw-nav">2030</p>
        <p class="body-text title tertiary-text">Target date to achieve the SDGs</p>
      </div>
    </div>
  </div>
</IntersectionObserver>

<style>
  .default {
    opacity: 0;
  }
  .default.show {
    opacity: 1;
    transition: all 2s;
  }

  #top-row {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 80%;
    margin: 0 auto;
  }

  #top-row > div {
    flex-basis: 20%;
  }

  #bottom-row {
    display: flex;
    justify-content: space-between;
    width: 89%;
    margin: 0 auto;
  }

  #bottom-row > div {
    flex-basis: 20%;
  }

  #timeline {
    display: flex;
    justify-content: space-between;
    padding: 1rem 8.5%;
    width: 90%;
    margin: 0 auto;
    position: relative;
  }

  .body-text {
    margin-bottom: 0px;
  }
  #line {
    height: 1px;
    width: 80%;
    background-color: var(--d-grey);
    position: absolute;
    top: 50%;
    z-index: -1;
  }
  #hash {
    position: absolute;
    right: 15.8%;
    color: var(--d-grey);
    background-color: var(--white);
  }

  .year {
    color: var(--secondary-color);
  }
</style>
