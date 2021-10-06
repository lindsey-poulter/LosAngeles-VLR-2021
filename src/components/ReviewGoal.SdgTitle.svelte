<script>
  import { getContext } from "svelte";

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg || 1;
</script>

<div id="sdg-title">
  <p class="paragraph-headline" style="color: var(--sdg{activeSdg.number}-primary)">
    sdg {activeSdg.number}
  </p>
  <h2>{activeSdg.name}</h2>
  <p class="body-text-bold">{activeSdg.description}</p>
</div>

<style>

  .body-text-bold {
    padding-top: 1rem;
    width: 55%;
    margin: 0 auto;
  }
  #sdg-title {
    margin-top: 2rem;

  }
  h2 {
    width: 65%;

  }

  .paragraph-headline {
    font-weight: var(--bold);
    font-size: 1.5rem;
    margin-bottom: 0rem;
  }

  @media only screen and (max-width: 640px) {
    h2 {
      width: 100%;
    }
    .body-text-bold {
      width: 100%;
    }

  }
</style>
