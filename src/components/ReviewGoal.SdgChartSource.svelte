<script>
  import { getContext } from "svelte";

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg;
</script>

<p class="tertiary-text">
  {#if activeSdg.source}
    Source:
    {#if activeSdg.sourceLink}
      <a href={activeSdg.sourceLink} target="_blank">
        {activeSdg.source}
      </a>
    {:else}
      {activeSdg.source}
    {/if}
  {/if}
</p>

<style>
  .tertiary-text {
    text-align: left;
    color: var(--d-grey);
    padding: 1rem 0rem 0rem 0rem;
  }
  a {
    color: var(--d-grey);
    border-bottom: 1px solid var(--d-grey);
    text-decoration: none;
    font-family: var(--sans);
    font-size: 0.875rem;
  }

  a:hover {
    border-bottom: 3px solid var(--secondary-color);
    color: var(--secondary-color);
  }
</style>
