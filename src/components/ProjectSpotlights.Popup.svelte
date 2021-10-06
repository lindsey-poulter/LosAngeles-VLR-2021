<script>

import { getContext } from "svelte";
  import { writable } from "svelte/store";
  import Icon from "$components/Icon.svelte";
  import mq from "$stores/mq";
  const { projectStore } = getContext("projectSpotlights");

  $: current = $projectStore.cardSelection.cardLabel;

    import People from "$components/ProjectSpotlights.Popup.People.svelte"
    import Planet from "$components/ProjectSpotlights.Popup.Planet.svelte"
    import Prosperity from "$components/ProjectSpotlights.Popup.Prosperity.svelte"
    import Header from "$components/ProjectSpotlights.Popup.Header.svelte"

    export let card;

</script>
  
    <Header on:click/>

    {#if current == "People"}
    <People on:click /> 
    {:else if current == "Planet"}
    <Planet on:click/>
    {:else if current == "Prosperity"}
    <Prosperity on:click />
    {/if}

