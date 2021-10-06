<script>

    import { getContext } from "svelte";
    import { fade, fly } from 'svelte/transition';
    const copy = getContext("copy")

</script>

<section id="leave">
    <span class="hw-section-index" style="color: var(--m-grey)">05</span>
    <div class="section-content">
        <h1>{copy.Leave_title}</h1>  
    </div>    
</section>