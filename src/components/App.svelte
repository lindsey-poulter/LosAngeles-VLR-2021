<script>
  import Title from "$components/Title.svelte";
  import Nav from "$components/Nav.svelte";
  import Letter from "$components/Letter.svelte";
  import HowTo from "$components/HowTo.svelte";
  import Intro from "$components/Intro.svelte";
  import ProjectSpotlights from "$components/ProjectSpotlights.svelte";
  import ReviewGoal from "$components/ReviewGoal.svelte";
  import Footer from "$components/Footer.svelte";
  import Lazy from "$components/Lazy.svelte";
  import SdgLA from "$components/Intro.SdgLA.svelte";
  import Exec from "$components/Intro.ExecSummary.svelte";
  import mq from "$stores/mq";

  $: sm = $mq.sm;
  $: md = $mq.md;
  $: lg = $mq.lg;
  $: xl = $mq.xl;
  $: mobile = !lg && !md ? true : false;

  let viewWidth;
  $: steps = "";
  $: currentView = "";
</script>

<svelte:window bind:innerWidth={viewWidth} />

<div id="app">
  {#if !mobile}
    <Nav {steps} {currentView} {mobile} />
  {/if}

  <div bind:this={steps}>
    <Intro bind:currentView {mobile} />

    <SdgLA bind:currentView />

    <ProjectSpotlights bind:currentView {mobile} />

    <ReviewGoal bind:currentView {mobile} />

    <Footer />
  </div>
</div>

<style>
  #app {
    position: relative;
  }
</style>
