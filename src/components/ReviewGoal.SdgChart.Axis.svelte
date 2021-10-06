<script>
  export let scale,
    height = 100,
    yPos = 100,
    marginX = 0,
    marginY = 100,
    axisType,
    y_tick_values = [];

  let g, transform;

  $: {
    let axisGenerator;
    selectAll(g).remove();
    if (axisType == "bottom") {
      axisGenerator = axisBottom(scale).tickSize(0);
      transform = `translate(${marginX}, ${height - marginY})`;
    } else if (axisType == "left") {
      axisGenerator = axisLeft(scale).tickValues(y_tick_values).tickSize(0);
      transform = `translate(${marginX}, ${marginY} )`;
    } else if (axisType == "grid-line") {
      axisGenerator = axisBottom(scale).ticks(0).tickSize(0);
      transform = `translate(${marginX}, ${yPos + marginY})`;
    }

    select(g).call(axisGenerator);
  }
</script>

<g
  class={axisType == "left" ? "y-axis" : axisType == "bottom" ? "x-axis" : "grid-line"}
  bind:this={g}
  {transform}
/>

<style>
  .x-axis,
  .y-axis {
    color: var(--divider-color);
    text-anchor: start;
    font-size: 11px;
    font-family: lato, sans-serif;
  }

  .grid-line {
    stroke-dasharray: 3 1;
    color: var(--divider-color);
  }
</style>
