<script>
export let intersecting, num
</script>
<div id="outer" class="default" class:show={intersecting} style="transition-delay: {num*.3}s">
    <div id="inner">

    </div>
</div>

<style>

#outer {
    border: 1px solid var(--black);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--button-shadow);
}    

#inner {
    background-color: var(--secondary-color);
    border-radius: 50%;
    width: 10px;
    height: 10px;
}

.default {
    opacity: 0;
}
.default.show {
  opacity: 1;
  transition: all 2s;
}

</style>