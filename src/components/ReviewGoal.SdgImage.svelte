<script>
  import { getContext } from "svelte";
  import viewport from "$stores/viewport.js";
  import { fade, slide, fly } from "svelte/transition";
  $: height = $viewport.height;
  $: width = $viewport.width;

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg || 1;
</script>

{#if activeSdg.number}
  {#key activeSdg.number}
    <div out:fade={{ duration: 10 }} in:fly={{ y: 50, duration: 1000, delay: 150 }}>
      <img
        id="sdg-image"
        style="width:{width}px;"
        src="assets/images/SDG{activeSdg.number}.png"
        alt={activeSdg.alt}
      />
    </div>
  {/key}
{/if}

<div class="tertiary-text">
  {#if activeSdg.number == 2}
    Photo by <a href="https://www.flickr.com/photos/jpellgen/" target="_blank">jpellgen</a>
  {:else if activeSdg.number == 8}
    Photo by <a href="https://www.flickr.com/people/johnjoh/" target="_blank">star5112</a>
  {/if}
</div>

<style>
  .tertiary-text {
    text-align: right;
    color: var(--d-grey);
    padding: 0.3rem 0rem 0rem 0rem;
    font-size: 0.65rem;
  }
  a {
    color: var(--d-grey);
    border-bottom: 1px solid var(--d-grey);
    text-decoration: none;
    font-family: var(--sans);
    font-size: 0.65rem;
  }

  a:hover {
    border-bottom: 3px solid var(--secondary-color);
    color: var(--secondary-color);
  }
  #sdg-image {
    background-color: var(--l-grey);
    background-size: cover;
    border-radius: var(--round-sm);
    z-index: 100;
  }
</style>
