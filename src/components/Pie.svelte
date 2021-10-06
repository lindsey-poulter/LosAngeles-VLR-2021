<script>
  export let middle, size, percent, color;
  import IntersectionObserver from "svelte-intersection-observer";
  let element,
    intersecting = false;

  let offset = 440 - 440 * percent;
</script>

<IntersectionObserver {element} bind:intersecting>
  <div class="pie-container" bind:this={element} style="--offset: {offset}">
    {#if intersecting}
      <div class="item pie">
     
        <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewbox="0 0 160 160">
          <g>
         
            <circle
            r="69.7"
            cy="81"
            cx="81"
            fill="rgba(255,255,255,.9)"
            
            stroke-width="17"
              stroke="var(--l-grey)"
            />
            
            <circle
              id="circle"
              class="circle_animation"
              style="stroke-dasharray: 440;
          stroke-dashoffset: 440;"
              r="69.85699"
              cy="81"
              cx="81"
              fill="none"
              stroke-width="17"
              stroke={color}
            />

       
          </g>
        </svg>
        <p class="hw-nav">{middle}</p>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .item {
    position: relative;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hw-nav {
    text-align: center;
    position: absolute;
    
    width: 100%;
  }

  svg {
    transform: rotate(-90deg);
  }

  .pie .circle_animation {
    -webkit-animation: pie 1s ease-out forwards;
    animation: pie 1s ease-out forwards;
     animation-delay: 1s;
  }

  @-webkit-keyframes pie {
    to {
      stroke-dashoffset: var(--offset);
    }
  }

  @keyframes pie {
    to {
      stroke-dashoffset: var(--offset);
    }
  }
</style>
