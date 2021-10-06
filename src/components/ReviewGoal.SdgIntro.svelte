<script>
    import { getContext } from "svelte"

    const  {sdgStore}  = getContext("SDG");
    
    $: activeSdg = $sdgStore.activeSdg;

</script>

    <div id='sdg-intro'>
        <p class="body-text">
            {@html activeSdg.intro}
        </p>
    </div>

<style>
    .body-text {
        text-align: left;
    }
      .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0.5rem;
    text-align: left;
  }

</style>

