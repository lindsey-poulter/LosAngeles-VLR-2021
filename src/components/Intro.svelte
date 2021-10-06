<script>
  import inView from "../actions/inView";
  import LA from "$components/IntroLA.svelte";
  import CovidCall from "$components/Intro.CovidCall.svelte";
  import Leave from "$components/Intro.Leave.svelte";
  import LookingAhead from "$components/Intro.LookingAhead.svelte";
  import Exec from "$components/Intro.ExecSummary.svelte";
  import Letter from "$components/Letter.svelte";
  import Lazy from "$components/Lazy.svelte";

  export let currentView, mobile;
</script>

<div id="introduction" use:inView={{ bottom: 50 }} on:enter={(e) => (currentView = e.target)}>
  <!-- <Lazy>
    <Exec />
  </Lazy> -->
  <Exec />

  <Letter {mobile} />

  <LA {mobile} />

  <CovidCall />
</div>
