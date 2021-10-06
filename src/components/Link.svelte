<script>
  export let url, text, color;

  let length = text.length * 11;
</script>

<p style="--link-color: {color}">
  <a href={url} target="_blank" class="hw-nav"> {text} ></a>
</p>


<style>

a {
  border-bottom: 1px solid var(--link-color);
    color: var(--link-color);
}

  a:hover {
    border-bottom: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }

</style>
