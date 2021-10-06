<script>
  import sdgs from "$data/sdgs.csv";

  export let number = 1,
    color,
    size,
    path;


  let selectedColor;


	let selected = sdgs.filter((d) => {
   return d.number == number;
  })[0];

 
  $: number,
    (selected = sdgs.filter((d) => {
      return d.number == number;
    })[0]);
  // $: path = (selected.path);
//selected.number


  $: color == "sdg-color"
    ? (selectedColor = "var(--sdg" + selected.number + "-primary)")
    : (selectedColor = "var(--white)");

  number == 1 ? (size = String(+size.split("px", 1) * 1.2) + "px") : null;

  
</script>

<div style="width: {size}; height: {size}; margin: 0 auto;">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon"
    id="sdg-icon-{number}"
    style="width: {size}; height: {size}; fill: {selectedColor};"
    viewBox="0 0 {+selected.x} {selected.y}"
    preserveAspectRatio="xMidYMid meet"
  >
    <path d={path} />
  </svg>

</div>
