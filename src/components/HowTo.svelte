<script>

    import { getContext } from "svelte";
    const copy = getContext("copy");

    let y;
  
</script>
  
  <section id="how-to" bind:offsetHeight={y}>
    <span class="hw-section-index" style="color: var(--m-grey)">02</span>
    <div class="section-content">
      <h1> {copy.HowTo_title}</h1>
    </div>
  </section>
  