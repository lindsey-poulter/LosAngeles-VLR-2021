<script>
  import { getContext } from "svelte";

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg;
</script>

<p class="paragraph-headline">
  {activeSdg.chartTitle}
</p>

<p class="tertiary-text">
  {@html activeSdg.chartSubtitle}
</p>

{#if activeSdg.legendColor}
  {#if activeSdg.number == 5}
    <div class="legend">
      <div class="grey" />
      <div class="tertiary-text">City of Los Angeles Average</div>

      <div class="color" style="background-color: var(--sdg{activeSdg.number}-primary);" />
      <div class="tertiary-text">Less than high school</div>

      <div class="color" style="background-color: rgba(239, 64, 43, .5);" />
      <div class="tertiary-text">College degree or higher</div>
    </div>
    <div class="legend5">
      <div class="color" style="background-color: var(--sdg17-primary);" />
      <div class="tertiary-text">Less than $25,000 family of 4 income</div>

      <div class="color" style="background-color: rgba(25, 72, 106, .5);" />
      <div class="tertiary-text">More than $75,000 family of 4 income</div>
    </div>
  {:else}
    <div class="legend">
      <div class="grey" />
      <div class="tertiary-text">City of Los Angeles Average</div>

      <div class="color" style="background-color: var(--sdg{activeSdg.number}-primary);" />
      <div class="tertiary-text">
        {activeSdg.legendColor}
      </div>
    </div>
  {/if}
{/if}

<style>
  .paragraph-headline {
    text-align: left;
    font-weight: var(--bold);
    padding: 0 0rem;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    font-family: var(--hw);
    font-size: 1.1rem;
  }

  .legend {
    margin: 1rem 0 0rem 0;
    height: 27px;
    display: flex;
  }

  .legend5 {
    margin: 0.7rem 0 0rem 0;
    height: 27px;
    display: flex;
  }

  .tertiary-text {
    text-align: left;
    padding: 0 0rem;
    margin-right: 1rem;
  }

  .grey {
    background-color: var(--m-grey);
    width: 5%;
    height: 70%;
    align-self: center;
    margin-right: 3px;
    min-height: 13px;
  }

  .color {
    width: 5%;
    height: 20%;
    align-self: center;
    margin-right: 3px;
    min-height: 13px;
  }

  @media only screen and (max-width: 640px) {
    .legend {
      height: 100%;
    }
    .legend5 {
      height: 100%;
    }
  }
</style>
