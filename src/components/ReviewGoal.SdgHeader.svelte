<script>
  import { getContext } from "svelte";

  import Icon from "$components/Icon.svelte";
  import SdgImage from "$components/ReviewGoal.SdgImage.svelte";
  import SdgTitle from "$components/ReviewGoal.SdgTitle.svelte";
  import Ribbon from "$components/Ribbon.svelte";

  const { sdgStore } = getContext("SDG");

  $: activeSdg = $sdgStore.activeSdg;
</script>

<div class="section-content">
<div id="sdg-header" class="sub-section">
  <Ribbon color={"var(--sdg" + activeSdg.number + "-primary)"} sdg={activeSdg.path}>
    <Icon number={activeSdg.number} path={activeSdg.path} color size="60px" />
  </Ribbon>
  <SdgImage />
  <SdgTitle />
</div>
</div>

<style>
  #sdg-header {
    position: relative;

  }

  .sub-section {
    margin-bottom: 2rem;
  }

  /* .section-content{
    width: 70%;
  } */
</style>
