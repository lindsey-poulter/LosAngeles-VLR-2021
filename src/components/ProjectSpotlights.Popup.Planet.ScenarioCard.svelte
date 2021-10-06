<script>
  import { fade } from "svelte/transition";
  export let cardLabel, cardInfo, iconList, cardColor, scenario, view, data;

  let co2 = data.co2,
    reduction = data.reduction,
    cost = data.cost,
    clouds = data.clouds,
    dollars = data.dollars;

  $: background = view == "all" ? cardColor : "hsla(0,0%,0%, 0%)";
</script>

<div class="project-card">
  <div class="project-card-header">
    <div class="ribbon-{view}" style="background-color:{background};">
      {#if view == "all"}
        <div id="icon-container" style="width:30px" out:fade>
          <img src={iconList} alt={cardLabel} />
        </div>
      {/if}
    </div>

    {#if view == "all"}
      <div class="card-title" out:fade>
        <p class="hw-nav">Scenario {scenario}</p>
        <h3>{cardLabel}</h3>
      </div>
    {/if}
  </div>

  {#if view == "all"}
    <div class="project-card-text" out:fade={{ duration: 300 }}>
      <p class="tertiary-text">{@html cardInfo}</p>
    </div>
  {/if}

  {#if view == "ribbon"}
    <div in:fade={{ duration: 1000, delay: 2000 }}>
      <div class="funnel-section-first">
        <p class="hw-nav">0{scenario}</p>
        {cardLabel}
      </div>

      <div class="funnel-section">
        <p class="hw-nav">{co2}</p>
        MMT C02e

        <div class="icons">
          {#each { length: clouds } as _, i}
            <div>
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 17.1179C0 16.3048 0 15.5324 0 14.7193C0.730903 12.7271 
    1.94908 11.1009 3.5733 9.75927C4.30421 9.14943 4.83208 8.41763 5.23814 
    7.56386C6.33449 5.20583 8.28357 4.10813 10.8823 4.27075C11.7351 4.35206 12.4254 4.27075 
    12.9532 3.45764C15.0241 0.367808 17.9883 -0.485961 21.521 0.245841C25.0131 1.0183 26.881 
    3.33567 27.6525 6.62878C27.9367 7.84845 28.5052 8.58025 29.6016 9.14943C32.6064 10.8163 33.6622 13.7029 
    32.7282 17.1586C31.8755 20.2891 29.6422 21.9966 26.2313 21.9966C20.0186 21.9966 13.806 21.956 7.59327 
    21.9966C3.93876 22.0779 1.25878 20.6956 0 17.1179Z"
                  fill={cardColor}
                />
              </svg>
            </div>
          {/each}
        </div>
      </div>

      <div class="funnel-section">
        <div
          class="pie"
          style="background-image: url('/assets/images/pie{scenario}.svg');  
      "
        >
          <p class="hw-nav">{reduction}%</p>
          <p>Emissions</p>
          <p>Reduction</p>
        </div>
      </div>

      <div class="funnel-section">
        <p class="hw-nav">${cost}</p>
        Billion

        <div class="icons">
          {#each { length: dollars } as _, i}
            <div>
              <svg
                width="38.6"
                height="25.4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 53.17 33.14"
              >
                <path
                  fill={cardColor}
                  d="M31.59,28.26l7-2.16V18.2l-7,2.16ZM15.7,25.15h-.38a5.1,5.1,0,0,1-2.94-1l-11.13-8-.54.17a1,1,0,0,0-.46.3,1,1,0,0,0-.23.49,1,1,0,0,0,.05.56,1,1,0,0,0,.36.44L2,19.26l11.58,8.31a3,3,0,0,0,2.66.43l13.34-4.12V21L16.8,25A7,7,0,0,1,15.7,25.15Zm0,5h-.39a5.52,5.52,0,0,1-.71,0h-.12a5.63,5.63,0,0,1-.59-.14,4.83,4.83,0,0,1-1.51-.74l-11.13-8-.54.17a1,1,0,0,0-.46.3,1,1,0,0,0-.23.49,1,1,0,0,0,.05.56,1,1,0,0,0,.36.44l13.16,9.39a3,3,0,0,0,2.66.43l13.34-4.12V26L16.8,30A5.14,5.14,0,0,1,15.7,30.15Zm35.81-18h.08l.88-.28a1,1,0,0,0,.45-.3.94.94,0,0,0,.24-.49,1.07,1.07,0,0,0-.06-.56,1,1,0,0,0-.35-.44L39.59.57A3.06,3.06,0,0,0,37.82,0a2.91,2.91,0,0,0-.89.14L24,4.14,26,5.6l9.6-3a1.13,1.13,0,0,1,.45,0,1.09,1.09,0,0,1,.43.18,2.87,2.87,0,0,0,1.26.52,2.89,2.89,0,0,0,1.37-.09,1.13,1.13,0,0,1,.45,0,1.09,1.09,0,0,1,.43.18l6.65,4.8a1,1,0,0,1,.35.44,1.07,1.07,0,0,1,.06.56.94.94,0,0,1-.24.5,1,1,0,0,1-.46.3,1,1,0,0,1,.35.44,1.07,1.07,0,0,1,.06.56,1,1,0,0,1-.23.5,1.15,1.15,0,0,1-.46.3l-8.14,2.52,2,1.46,3.52-1.14ZM52.75,15l-1.16-.85L47,15.57l-.9.28-1,.32L42.59,17l-.76.24-1.24.37v2.9L51.45,17.1l1-.3a1,1,0,0,0,.45-.3.94.94,0,0,0,.24-.49,1,1,0,0,0-.06-.55A1,1,0,0,0,52.75,15Zm0,5-1.16-.85-11,3.39v2.9l11.87-3.68a1,1,0,0,0,.46-.3,1,1,0,0,0,.24-.49,1,1,0,0,0-.07-.54A1,1,0,0,0,52.75,20ZM37.64,16.4h0l-2.4-1.73h0L21.67,4.86h0L14.84,7h0l2.31,1.67,0,0,10,7.19,0,0,3.63,2.62ZM.43,13.11,2,14.26l11.58,8.31a3,3,0,0,0,2.66.43l12.22-3.78-2-1.46-8.95,2.81a1.23,1.23,0,0,1-.47,0,1.05,1.05,0,0,1-.42-.18A2.95,2.95,0,0,0,14,20a1.19,1.19,0,0,1-.46,0,1.05,1.05,0,0,1-.42-.18L6.47,15a1,1,0,0,1-.36-.44A1,1,0,0,1,6.06,14a1,1,0,0,1,.23-.5,1,1,0,0,1,.47-.3,1,1,0,0,1-.36-.44,1,1,0,0,1-.05-.56,1,1,0,0,1,.23-.5,1,1,0,0,1,.46-.3l7.44-2.31-2-1.45L.72,11.34a1,1,0,0,0-.47.3,1,1,0,0,0-.23.49,1,1,0,0,0,.06.55A1,1,0,0,0,.43,13.11Zm8.16,1,5.33,3.85a4.71,4.71,0,0,1,1-.1,5,5,0,0,1,2.5.67l7-2.17-7.86-5.68L8.8,13a2.26,2.26,0,0,1,0,.52A2.21,2.21,0,0,1,8.59,14.06Zm25.3-2.84L36,12.73l8.46-2.63a2.26,2.26,0,0,1,0-.52,2.21,2.21,0,0,1,.15-.5L39.25,5.23a5,5,0,0,1-3.46-.57L28.09,7l4,2.92.17.12Z"
                  transform="translate(0)"
                /></svg
              >
            </div>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>

<style>

  .project-card {
    background-color: var(--white);
    border-radius: var(--round-sm);
    height: 100%;
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    padding: 0% 10% 10% 10%;
    margin: 1rem;
  }

  .project-card-header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 2rem;
    position: relative;
  }

  .ribbon-all {
    height: 100px;
    width: 30px;
    display: flex;
    align-items: flex-end;
    border-radius: var(--round-sm);
    padding-bottom:5px;
  }

  .ribbon-ribbon {
    height: 700px;
    width: 130%;
    display: flex;
    align-items: flex-end;
    transition: height 1000ms ease-in-out, width 1000ms ease-in-out, background-color 1000ms linear;
    transition-delay: 1000ms, 0ms, 2000ms;
    position: absolute;
    z-index: 1;
    border-radius: var(--round-sm);
  }

  .card-title {
    flex-basis: 80%;
    padding-top: 1rem;
  }

  .icons {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .funnel-section {
    height: 190px;
  }

  .funnel-section-first {
    height: 100px;
  }

  .pie {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 130px;
    display: flex;
    align-content: center;

    flex-flow: row wrap;
  }

  .pie * {
    flex-basis: 100%;
    align-self: center;
  }

  .project-card-text .body-text,
  .tertiary-text {
    text-align: left;
  }
</style>
