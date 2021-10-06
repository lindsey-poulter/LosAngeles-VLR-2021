<script>

    import { getContext } from "svelte";
    import viewport from "$stores/viewport.js";

    $: height = $viewport.height;
    $: introHeight = height * 0.9;

    const copy = getContext("copy")

    let y;


  </script>

  <section id="title" style="height: {introHeight}px" bind:offsetHeight={y}>
    <h1> {copy.title}</h1>
    <h3> {copy.description}</h3>
  </section>
  
  <style>

  </style>
