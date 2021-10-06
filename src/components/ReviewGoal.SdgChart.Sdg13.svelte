<script>
  import { fade, fly } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  let element,
    intersecting = false;

  const sdg13data = [
    "zero carbon grid",
    "zero carbon transportation",
    "zero carbon buildings",
    "zero waste",
    "zero wasted water"
  ];

</script>

<IntersectionObserver {element} bind:intersecting>

    <div class="main" bind:this={element}>
        {#if intersecting}
      {#each sdg13data as d, i}
        <div
          class="individual"
          transition:fly={{ delay: i * 250, duration: 300, y: 100 }}
        >
          <img src="/assets/images/sdg13_{i + 1}.png" alt={d} style="padding: 1rem" />
          <p class="body-text" style="width: 100%;">{d}</p>
        </div>
      {/each}
      {/if}
    </div>

</IntersectionObserver>

<style>

  .main{
    display: flex; flex-flow: row nowrap;
  }

  .individual {
    display: flex; flex-flow: column wrap; width: 20%;
  }
  
  @media only screen and (max-width: 640px) {
    .main{
    display: flex; flex-flow: row wrap;
    justify-content: space-evenly;
  }

  .individual {
    display: flex; flex-flow: column wrap; width: 33%;
  }


  }
</style>