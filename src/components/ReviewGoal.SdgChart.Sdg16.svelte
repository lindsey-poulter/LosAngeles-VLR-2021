<script>
  import { fade } from "svelte/transition";
  $: active = null;
</script>

<div class="icon-row">
  <div class="sdg16" class:extend1={active == 1} on:click={() => (active == 1 ? (active = null) : (active = 1))}>
    <div class="info-button hw-nav" >
      i
    </div>

    <div class="image" style="background-image: url('/assets/images/sdg16a.svg');" />
    <div class="tertiary-text-bold">Therapeutic Transportation Pilot</div>

    {#if active == 1}
      <p class="tertiary-text" in:fade={{ duration: 600 }}>
        A new model for unarmed crisis response that will dispatch mental health workers to
        nonviolent situations.
      </p>
    {/if}
  </div>

  <div class="sdg16" class:extend2={active == 2} on:click={() => (active == 2 ? (active = null) : (active = 2))}>
    <div class="info-button hw-nav" >
      i
    </div>
    <div class="image" style="background-image: url('assets/images/sdg16b.svg');" />
    <div class="tertiary-text-bold">Crisis & Incident Response through Community Led Engagement (CIRCLE)</div>
    {#if active == 2}
      <p class="tertiary-text" in:fade={{ duration: 600 }}>
        CIRCLE teams are equipped with clinicians and workers that will respond 24 hours daily to
        intervene in homelessness or mental health crises. Pilot areas include Venice and Hollywood.
      </p>
    {/if}
  </div>

  <div class="sdg16" class:extend3={active == 3} on:click={() => (active == 3 ? (active = null) : (active = 3))}>
    <div class="info-button hw-nav" >
        i </div>
    <div class="image" style="background-image: url('assets/images/sdg16c.svg');" />
    <div class="tertiary-text-bold">Alternative Dispatch for Suicide Prevention</div>
    {#if active == 3}
    <p class="tertiary-text" in:fade={{ duration: 600 }}>
        The Alternative Dispatch for Suicide Prevention Pilot in partnership with the Los Angeles County Department of Mental Health and Didi Hirsch Mental Health Services launched in February 2021. Services are currently limited, only available for 8 hours daily. The newly signed Justice Budget will allow 24/7 operations.
    </p>
  {/if}
  </div>
</div>


<style>
  .tertiary-text {
    padding-top: 1rem;
    text-align: left;
  }

  .icon-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: top;
  }

  .sdg16 {
    flex-basis: 33%;
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    padding: 2%;
    height: 220px;
    margin: 2%;
    cursor: pointer;

  }

  .extend1 {
    height: 100%;
  }

  .extend2 {
    height: 100%;
  }

  .extend3 {
    height: 100%;
  }
  .sdg16 > .image {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 1rem 0;
    height: 70px;
  }

  .info-button {
    background-color: var(--l-grey);
    margin: 0 auto;

    box-shadow: var(--button-shadow);
    border-radius: 50%;
    border: 1px solid var(--primary-color);
    width: 25px;
    height: 25px;
    z-index: 10;
    cursor: pointer;
    color: var(--primary-color);
  }

  .tertiary-text-bold{
    color: var(--sdg16-primary)
  }


  @media only screen and (max-width: 640px) {
    .icon-row{
      flex-flow: column nowrap;
    }
  }
</style>
