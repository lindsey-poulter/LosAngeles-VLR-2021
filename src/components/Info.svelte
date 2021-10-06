<script>
    export let text;
    let tooltip=false;
    let x,y;

    function mouseOver(event) {
        console.log(event);
        tooltip = true
        x = event.layerX - 150;
        

    }
    function mouseLeave(event) {
        tooltip = false

    }
</script>

{#if tooltip}
<div class="tooltip" style=" left: {x}px;">
    {text}
</div>
{/if}

<div class="info-button" 
on:mouseenter={mouseOver}
on:mouseleave={mouseLeave}
>i</div>

<style>

.tooltip{
    position: absolute;
    width: 300px;
    pointer-events: none;
    background-color: rgba(255, 255, 255, 0.96);
    border: 1px solid var(--m-grey);
    text-align: left;
    transition: all 0.2s ease-out;
    padding: 0.6em 1em;
    z-index: 11;
    border-radius: var(--round-sm);

}
.info-button {
    background-color: var(--l-grey);
    display: inline-block;
    text-align: center;
    box-shadow: var(--button-shadow);
    border-radius: 50%;
    border: 1px solid var(--button-border);
    width: 17px;
    height: 17px;
    z-index: 10;
    cursor: pointer;
    margin: 0px 3px 0px 3px;
    font-size: .8rem;
    line-height: 1rem;
    color: var(--primary-color);

  }

  @media only screen and (max-width: 640px) {
    .info-button, .tooltip {
        display: none;
    }
  }

</style>