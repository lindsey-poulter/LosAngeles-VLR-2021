<script>
  import { getContext } from "svelte";
  import Link from "$components/Link.svelte";

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg || 1;

  const doingCount = [1, 2, 3, 4];
</script>

<div class="flex flex-wrap">
  {#each doingCount as index, i}
    {#if activeSdg["doing" + index + "Title"]}
      <div class="doing-container">
        <p class="paragraph-headline">{activeSdg["doing" + index + "Title"]}</p>
        <p class="body-text">{@html activeSdg["doing" + index + "Content"]}</p>
        {#if activeSdg["doing" + index + "Url"]}
          <p class="links">
            <Link
              url={activeSdg["doing" + index + "Url"]}
              text="Learn More"
              color={"var(--sdg" + activeSdg["number"] + "-primary"}
            />
          </p>
        {/if}
      </div>
    {/if}
  {/each}
</div>

<style>
  .doing-container {
    flex: 1 1 40%;
    margin: 0 4rem 2rem 0;
  }

  .body-text,
  .paragraph-headline,
  .links {
    text-align: left;
  }
  .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0.5rem;
  }

  .body-text{
    margin-bottom:0rem;
  }
  @media only screen and (max-width: 640px) {
    .doing-container {
      margin: 0 0 2rem 0;
      flex: 1 1 100%;
    }
  }
</style>
