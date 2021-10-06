<script context="module">
  export const prerender = true;
</script>

<script>
  import { setContext } from "svelte";
  import Meta from "$components/Meta.svelte";
  
  import App from "$components/App.svelte";
  import copy from "$data/copy.json";


  setContext("copy", copy);
  
</script>

<Meta />
<App />
