<script>
  export let color,
    sdg = {};

  import IntersectionObserver from "svelte-intersection-observer";

  let element, intersecting;

  $: sdg, restart();

  function restart() {
    intersecting = false;
    setTimeout(() => {
      intersecting = true;
    }, 100);
  }
</script>

<IntersectionObserver {element} bind:intersecting>
  <div id="container">
    <div id="ribbon" style="background-color: {color}" class="default" class:show={intersecting}>
      <div id="icon-container" class="showicon" class:showOpacity={intersecting}>
        <slot />
      </div>
    </div>
  </div>
  <div bind:this={element} style="position: absolute; height:5px; width: 10px; top: 50%;" />
</IntersectionObserver>

<style>
  #container {
    height: 100%;
  }
  .showicon {
    opacity: 0%;
    transition: all 1s;
    transition-delay: 1s;
  }
  .showOpacity {
    opacity: 100%;
    transition: all 1s;
    transition-delay: 1s;
  }

  #ribbon {
    width: 100px;
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    left: 0px;
    z-index: 10;
    border-radius: var(--round-sm);
  }

  #icon-container {
    margin-bottom: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
  }

  .default {
    height: 0px;
    transition: all 2s;
    transition-delay: 1s;
  }
  .default.show {
    height: 100%;
    transition: all 2s;
    transition-delay: 1s;
  }

  @media only screen and (max-width: 900px) {
    #ribbon {
      display: none;
    }
  }
</style>
