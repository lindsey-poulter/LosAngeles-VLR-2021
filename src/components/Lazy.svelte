<script>
  import { onMount } from "svelte";
  export let root = undefined;
  export let isInViewProp = false;
  import { fade, fly } from "svelte/transition";
  let isInView = false;
  let observer;
  let element;
  $: isInView, (isInViewProp = isInView);
  const onChangeVisibility = (e) => {
    isInView = e[0].isIntersecting;
  };
  onMount(() => {
    let options = {
      root: root,
      rootMargin: "0px 0px -100px 0px"
    };

    observer = new IntersectionObserver(onChangeVisibility, options);
    observer.observe(element);
  });


</script>

<div class="c" bind:this={element}>

    {#if isInView}
      <div in:fly={{ y: 50, duration: 2000 }}>
        <slot />
      </div>
    {:else}
      <div style="visibility: hidden">
        <slot />
      </div>
	  {/if}



</div>
