
<script>
      $: width = 500
    $: height = 250
    import IntersectionObserver from "svelte-intersection-observer";
    let element;
  let intersecting;
</script>

<style>

.default {
    opacity: 0;
}
.default.show {
  opacity: 1;
  transition: all 1.5s;
  transition-delay: 0s;
}
.default.show2 {
  opacity: 1;
  transition: all 1.5s;
  transition-delay: .5s;
}
.default.show3 {
  opacity: 1;
  transition: all 1.5s;
  transition-delay: 1s;
}
.default.show4 {
  opacity: 1;
  transition: all 1.5s;
  transition-delay: 1.5s;
}
.default.show5 {
  opacity: 1;
  transition: all 1.5s;
  transition-delay: 2s;
}
</style>
<IntersectionObserver {element} bind:intersecting>
<figure bind:clientWidth={width} bind:clientHeight={height}  bind:this={element}>


    <svg width="100%" height="100%" viewBox="0 0 1072 634" fill="none" xmlns="http://www.w3.org/2000/svg">

        <g class:show5={intersecting} class="default">
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Lato" font-size="22" letter-spacing="0em"><tspan x="174" y="629.514">2011</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Lato" font-size="22" letter-spacing="0em"><tspan x="510" y="629.514">2015</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Lato" font-size="22" letter-spacing="0em"><tspan x="846" y="629.514">2019</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="81" y="64">53.8%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="410" y="280">31.6%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="463" y="165">44.1%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="513" y="296">30.3%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="561" y="184">41.9%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="610" y="369">22.5%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="749" y="233">36.8%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="799" y="380">21.2%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="847" y="298">29.6%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="896" y="246">35.3%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="947" y="323">27.3%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="128" y="257">33.7%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="177" y="418">16.8%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="226" y="166">43.4%</tspan></text>
        <text fill="black" xml:space="preserve" style="white-space: pre" font-family="Itim" font-size="20" letter-spacing="0em"><tspan x="276" y="467">11.6%</tspan></text>
    </g>
        
        <rect x="81" y="75" width="44" height="512" fill="#e5e5e5" class:show={intersecting} class="default"  />
        <rect x="130" y="266" width="44" height="321" fill="#EF402B" class:show2={intersecting} class="default"  />
        <rect  x="179" y="427" width="44" height="160" fill="#F4C2BC" class:show3={intersecting} class="default"  />
        <rect x="228" y="176" width="44" height="411" fill="#19486A" class:show4={intersecting} class="default" />
        <rect  x="277" y="476" width="44" height="111" fill="#9BADBA" class:show5={intersecting} class="default"/>

        <rect x="416" y="287" width="44" height="300" fill="#e5e5e5" class:show={intersecting} class="default" />
        <rect x="465" y="170" width="44" height="417" fill="#EF402B" class:show2={intersecting} class="default" />
        <rect  x="514" y="302" width="44" height="285" fill="#F4C2BC" class:show3={intersecting} class="default" />
        <rect x="563" y="188" width="44" height="399" fill="#19486A" class:show4={intersecting} class="default" />
        <rect x="612" y="375" width="44" height="212" fill="#9BADBA" class:show5={intersecting} class="default" />

        <rect x="751" y="238" width="44" height="349" fill="#e5e5e5" class:show={intersecting} class="default"/>
        <rect x="800" y="385" width="44" height="202" fill="#EF402B" class:show2={intersecting} class="default"/>
        <rect x="849" y="302" width="44" height="285" fill="#F4C2BC" class:show3={intersecting} class="default"/>
        <rect x="898" y="251" width="44" height="336" fill="#19486A" class:show4={intersecting} class="default"/>
        <rect  x="947" y="330" width="44" height="257" fill="#9BADBA" class:show5={intersecting} class="default"/>
        <line y1="587" x2="1072" y2="587" stroke="black" stroke-width="2"/>
        <rect x="70" width="921" height="34" fill="white"/>
        </svg>
        

</figure></IntersectionObserver>