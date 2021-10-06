<script>
  import { getContext } from "svelte";
  import { slide, fade } from "svelte/transition";
  const copy = getContext("copy");
  import move from "$utils/move.js";
  import Reveal from "$components/Reveal.svelte";
  import IntersectionObserver from "svelte-intersection-observer";

  let element, intersecting;

  let data = [
    {
      title: "Testing and Vaccines",
      text: "Led by the Los Angeles Fire Department, the City worked with <a href=https://www.coreresponse.org/get-involved target=&quot;_blank&quot; rel=&quot;noopene&quot;>CORE</a> to set up one of the first and largest COVID-19 testing programs in the world. This infrastructure was able to quickly pivot to provide both testing and vaccinations by the end of 2020. As of July 2021, <a href=https://coronavirus.lacity.org/data target=&quot;_blank&quot; rel=&quot;noopener&quot;>more than 4.4 million tests and 1.3 million vaccinations</a> have been administered at City-run sites, of <a href=http://publichealth.lacounty.gov/media/coronavirus/vaccine/vaccine-dashboard.htm target=&quot;_blank&quot; rel=&quot;noopener&quot;>more than 11.15 million doses</a> administered across L.A. County. In order to deliver the vaccine directly to the hardest-hit communities, the City launched the <a href=https://www.lamayor.org/mayor-garcetti-announces-100000-doses-administered-city-mobile-clinics target=&quot;_blank&quot; rel=&quot;noopener&quot;>Mobile Outreach for Vaccine Equity (MOVE) program</a> and has deployed close to 500 mobile units throughout L.A. neighborhoods, providing more than 123,000 doses to Angelenos, with over 90% given to people of color."
    },
    {
      title: "Safety Net",
      text: "Our COVID-19 response has been focused on protecting lives and the livelihoods of Angelenos facing the pandemic’s economic impact. In March 2020, the <a href=https://mayorsfundla.org target=&quot;_blank&quot;>Mayor’s Fund for Los Angeles</a> (MFLA) launched its <a href=https://mayorsfundla.org/covid19-response/ target=&quot;_blank&quot;>Emergency COVID-19 Crisis Fund</a> to support critical efforts in partnership with the City. This Fund has enabled MFLA to directly respond to unmet needs as a result of the pandemic, including childcare for low-wage hospital workers, critical protective equipment for frontline responders, meals for homebound seniors, doubling the capacity of the region’s support system for survivors of domestic violence, and direct financial assistance through the Angeleno Card, Grocery Initiative for Vital Emergency Needs (GIVEN), and Secure Emergency Relief for Vulnerable Employees (SERVE)."
    },
    {
      title: "Contactless Government",
      text: "In August 2020, Mayor Garcetti signed <a href=https://www.lamayor.org/sites/g/files/wph1781/files/page/file/ED%2029%20Updated.pdf target=&quot;_blank&quot; rel=&quot;noopener&quot;>Executive Directive (ED) 29</a>, &ldquo;<em>Contactless and People-Centered City Initiative.</em>&rdquo; This ED has guided the City to facilitate digital interactions with Angelenos during and after the pandemic. City departments have answered the call and reimagined how to reach residents and deliver City services in a safe, remote manner. This includes transitioning in-person public meetings to virtual settings, creating safe, secure e-pay portals, and adopting online appointment systems rather than requiring in-person visits."
    }
  ];

  $: show = "";

  let wheelData = [
    {
      title: "Secure Emergency Relief for Vulnerable Employees (SERVE)",
      id: 0,
      text: "Direct financial assistance for food service workers",
      m1: "10,000",
      m1text: "Angelenos served",
      m2: "$8,000,000",
      m2text: "distributed",
      link: "https://mayorsfundla.org/program/serve-secure-emergency-relief-for-vulnerable-employees-for-food-service-workers/"
    },
    {
      title: "Grocery Initiative for Vital Emergency Needs (GIVEN)",
      id: 1,
      text: "Direct financial assistance for low-income families for grocery items",
      link: "https://www.lamayor.org/mayor-garcetti-announces-given-initiative-help-10000-vulnerable-households-get-food-other-needs"
    },
    {
      title: "Angeleno Connectivity Trust (ACT)",
      id: 2,
      text: "Free internet service for students",
      link: "https://mayorsfundla.org/program/angeleno-connectivity-trust/"
    },
    {
      title: "Mobile Outreach for Vaccine Equity (MOVE)",
      id: 3,
      text: "Accessible and equitable vaccination",
      link: "https://mayorsfundla.org/program/move-mobile-outreach-for-vaccine-equity-program/"
    },
    {
      title: "Protective Gear & Healthcare Supplies (PPE)",
      id: 4,
      text: "Masks and health supplies for vulnerable communities",
      link: "https://mayorsfundla.org/covid19/"
    },
    {
      title: "Small Business Support",
      id: 5,
      text: "Emergency assistance to small businesses in hardest-hit industries and communities",
      link: "https://mayorsfundla.org/program/economic-development-for-covid-relief/"
    },
    {
      title: "Delivered Senior Meals",
      id: 6,
      text: "Home-delivered meals to seniors isolated by the pandemic",
      link: "https://aging.lacity.org/seniormeals"
    },
    {
      title: "Emergency Childcare",
      id: 7,
      text: "Child care vouchers for frontline hospital workers",
      link: "https://www.lamayor.org/mayor-garcetti-launches-child-care-program-essential-hospital-employees"
    },
    {
      title: "Project Safe Haven",
      id: 8,
      text: "Shelter, food and services for domestic violence survivors",
      link: "https://coronavirus.lacity.org/DVResources"
    },
    {
      title: "Angeleno Card",
      id: 9,
      text: "Direct financial assistance",
      link: "https://mayorsfundla.org/program/angeleno-card/"
    }
  ];

  $: linkCoords = (radius, index) => {
    let coords = {};
    const angle = ((2 * Math.PI) / 10) * (index + 0.5) - Math.PI / 2;
    const x = (radius / 2) * Math.cos(angle);
    const y = (radius / 2) * Math.sin(angle);
    coords.x = x;
    coords.y = y;
    coords.angle = angle;
    return coords;
  };

  $: w = 500;

  $: activePiece = "home";
</script>

<section id="covid-call">
  <!-- <Reveal>
    <span class="hw-section-index" style="color: var(--m-grey)">04</span>
  </Reveal> -->
  <div class="section-content">
    <Reveal>
      <h1>COVID Call to Action</h1>
    </Reveal>
  </div>

  <div class="section-content">
    <Reveal>
      <p class="body-text">
        The COVID-19 pandemic has been a global shock; one that has exacerbated many stresses facing
        cities around the world, including unequal outcomes based on long-standing bias and
        discrimination built into our systems that impact the health, wealth, and sustainability of
        our communities. Addressing these inequalities, laid bare through the loss of lives and
        livelihoods during the pandemic, demands solutions that recognize how people, planet,
        prosperity &mdash; <span class="bold-blue"><em>and place</em></span>&mdash; intersect.
      </p>
    </Reveal>
    <Reveal>
      <p class="body-text">
        In Los Angeles and globally, cities have been on the frontlines of pandemic response and
        recovery. From establishing testing and vaccination sites, emergency cash assistance
        programs, childcare, and housing solutions, and standing up virtual services to ensure civic
        engagement and access, the past 16 months demonstrate the agility of local government. L.A.
        has been able to quickly innovate and deliver these needed services, operating in
        partnership with community-based organizations and service providers, including the <a
          href="http://publichealth.lacounty.gov/"
          target="_blank"
          rel="noopener">Los Angeles County Department of Public Health</a
        >,
        <a href="https://www.coreresponse.org/" target="_blank" rel="noopener"
          >Community Organized Relief Effort</a
        >
        (CORE), the
        <a href="https://mayorsfundla.org/covid19/" target="_blank" rel="noopener">
          Mayor&rsquo;s Fund for Los Angeles</a
        >,
        <a
          href="https://carbonhealth.com/covid-19-vaccines/los-angeles"
          target="_blank"
          rel="noopener">Carbon Health</a
        >, <a href="https://curative.com/" target="_blank" rel="noopener">Curative</a>,
        <a
          href="https://pharmacies.usc.edu/services/covid19-testing/"
          target="_blank"
          rel="noopener">USC School of Pharmacy</a
        >, and the
        <a
          href="https://www.mlb.com/dodgers/community/foundation/covid-19"
          target="_blank"
          rel="noopener">Los Angeles Dodgers</a
        >.
      </p>
    </Reveal>

    <div class="sub-section-drop">
      {#each data as section, i}
        <Reveal>
          <div class="doing-container" id="doing-{i}">
            <div
              class="title-row"
              on:click={() => (show = show == section.title ? "" : section.title)}
            >
              <div style="display: flex; justify-content: center; align-items:center;">
                <img
                  src="/assets/images/covid_icon{i + 1}.png"
                  style="width:40px; margin-right: 1rem;"
                  alt={section.title}
                />
                <p class="hw-quote hover" style="pointer-events: none;">{section.title}</p>
              </div>

              <p class="hw-quote" style="pointer-events: none;">
                {#if show == section.title} - {:else} + {/if}
              </p>
            </div>
            {#if show == section.title}
              <p class="body-text" style="color: var(--black);" transition:slide>
                {@html section.text}
              </p>
            {/if}
          </div>
        </Reveal>
      {/each}
    </div>

    <IntersectionObserver {element} bind:intersecting>
      <div id="covid-wheel" bind:this={element}>
        <p class="paragraph-headline">
          MAYOR’S FUND FOR LOS ANGELES COVID-19 RESPONSE PROGRAMS (MARCH 2020 - MARCH 2021)
        </p>
        <div id="covid-stats">
          <div id="covid-wheel">
            <div style="display: inline-block;" bind:clientWidth={w}>
              <img src="assets/images/COVID-Stats-Circle.png" alt="Covid" />
            </div>
            {#each wheelData as piece, i}
              <div
                class="info-button hw-nav default"
                style="transition-delay: {i * 0.1}s; {move(
                  linkCoords(w * 0.98, i).x,
                  linkCoords(w * 0.98, i).y
                )}"
                on:click={() => (activePiece = activePiece == piece ? "home" : piece)}
                class:show={intersecting}
              >
                i
              </div>
            {/each}

            {#if activePiece != "home"}
              <div
                style="position:absolute; color: white; font-size: 1.6rem; opacity: .6; top: 48%;
    left: 48%; transform: translate({linkCoords(w * 1.08, activePiece.id).x}px, {linkCoords(
                  w * 1.08,
                  activePiece.id
                ).y}px )"
              >
                <div>•</div>
              </div>
            {/if}
          </div>

          <div class="info-description" style="width:{w * 0.5}px; height:{w * 0.5}px;">
            {#if activePiece != "home"}
              <div class="info-description-bg" />
              <div class="info-description-text">
                <div id="home" on:click={() => (activePiece = "home")}>
                  <svg
                    height="35px"
                    width="35px"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                  >
                    <g transform="translate(0,-952.36218)">
                      <path
                        style="text-indent:0;text-transform:none;direction:ltr;block-progression:tb;baseline-shift:baseline;enable-background:accumulate;"
                        d="m 49.96875,959.01857 a 3.0003,3.0003 0 0 0 -2.09375,0.875 l -36.75,36.74997 a 3.0052038,3.0052038 0 1 0 4.25,4.24996 L 50,966.26857 84.625,1000.8935 a 3.0052038,3.0052038 0 1 0 4.25,-4.24996 l -8.9375,-8.9375 a 3.0003,3.0003 0 0 0 0,-0.375 l 0,-15.0312 a 3.0003,3.0003 0 0 0 -3.0625,-3.03127 3.0003,3.0003 0 0 0 -2.9375,3.03127 l 0,9.4062 -21.8125,-21.81247 a 3.0003,3.0003 0 0 0 -2.15625,-0.875 z M 17.5,1006.6123 a 3.0003,3.0003 0 0 0 -2.96875,3.0312 l 0,23.0625 0,10 a 3.0003,3.0003 0 0 0 3,3 l 10,0 44.90625,0 10,0 a 3.0003,3.0003 0 0 0 3,-3 l 0,-33.0625 a 3.0003,3.0003 0 1 0 -6,0 l 0,30.0625 -7,0 -44.90625,0 -7,0 0,-7 0,-23.0625 A 3.0003,3.0003 0 0 0 17.5,1006.6123 z"
                        fill-opacity="1"
                        fill-rule="nonzero"
                        stroke="none"
                        marker="none"
                        visibility="visible"
                        display="inline"
                        overflow="visible"
                      /></g
                    ></svg
                  >
                </div>
                {#key activePiece.title}
                  <p
                    class="body-text-bold"
                    in:slide={{ delay: 100, duration: 400 }}
                    out:fade={{ duration: activePiece == "home" ? 400 : 0 }}
                  >
                    {activePiece.title}
                  </p>
                  <p
                    class="tertiary-text"
                    in:slide={{ delay: 100, duration: 400 }}
                    out:fade={{ duration: activePiece == "home" ? 400 : 0 }}
                  >
                    {activePiece.text}
                  </p>
                  <p
                    class="body-text"
                    in:slide={{ delay: 100, duration: 400 }}
                    out:fade={{ duration: activePiece == "home" ? 400 : 0 }}
                  >
                    <a href={activePiece.link} target="_blank">Learn more ></a>
                  </p>
                {/key}
              </div>
            {/if}
          </div>

          <div class="info-description-mobile">
            {#if activePiece != "home"}
              <div class="info-description-text">
                {#key activePiece.title}
                  <p
                    class="body-text-bold"
                    in:slide={{ delay: 100, duration: 400 }}
                    out:fade={{ duration: activePiece == "home" ? 400 : 0 }}
                  >
                    {activePiece.title}
                  </p>
                  <p
                    class="tertiary-text"
                    in:slide={{ delay: 100, duration: 400 }}
                    out:fade={{ duration: activePiece == "home" ? 400 : 0 }}
                  >
                    {activePiece.text}
                  </p>
                  <p
                    class="body-text"
                    in:slide={{ delay: 100, duration: 400 }}
                    out:fade={{ duration: activePiece == "home" ? 400 : 0 }}
                  >
                    <a href={activePiece.link} target="_blank">Learn more ></a>
                  </p>
                {/key}
              </div>
            {/if}
          </div>
        </div>
      </div>
    </IntersectionObserver>

    <Reveal>
      <p class="paragraph-headline after-wheel">A green and just recovery</p>

      <p class="body-text">
        Throughout the pandemic, Los Angeles has worked closely with cities around the globe to
        learn from one another&rsquo;s response while taking the first steps towards recovery. These
        exchanges have happened bilaterally and through city networks like <a
          href="https://www.c40.org"
          target="_blank"
          rel="noopener">C40</a
        >, a network of the world&rsquo;s megacities committed to addressing climate change. As C40
        Chair, Mayor Garcetti convened a
        <a href="https://www.c40.org/other/covid-task-force" target="_blank" rel="noopener"
          >task force of C40 Mayors in April 2020</a
        >, and in July 2020 they released the
        <a
          href="https://www.c40.org/other/agenda-for-a-green-and-just-recovery"
          target="_blank"
          rel="noopener">Agenda for a Green and Just Recovery</a
        >. Forty-seven local leaders have signed onto its principles, acknowledging that the
        intersecting social, health, and economic harms of the pandemic have not been equitable, and
        recovery should not be a return to an unjust business as usual. The agenda centers on public
        health, reduced inequality, and the climate crisis; is aligned to the Global Goals; and
        calls for recognition of cities as the engines of enduring resilience and recovery.
      </p>
    </Reveal>
  </div>
</section>

<style>
  a {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }
  a:hover {
    color: var(--black);
    border-bottom: 1px solid var(--black);
  }

  section {
    background-color: #2a61bc;
    color: var(--white);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-image: url("/assets/images/covid-background.png");
    background-attachment: fixed;
  }

  .doing-container:hover {
    color: var(--secondary-color);
  }

  .doing-container:hover .hover {
    border-bottom: 1px solid var(--secondary-color);
  }
  #covid-wheel {
    margin: 0rem 0 4rem 0;
  }

  #home {
    cursor: pointer;
    fill: var(--primary-color);
  }

  #home:hover {
    fill: var(--secondary-color);
  }
  #covid-stats {
    object-fit: contain;
    width: 80%;
    margin: 2rem auto;
    text-align: center;
    position: relative;
    color: var(--black);
  }

  #covid-stats a {
    color: var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
  }

  #covid-stats a:hover {
    color: var(--secondary-color);
    border-bottom: 1px solid var(--secondary-color);
  }

  .info-button {
    background-color: var(--l-grey);
    position: absolute;
    top: 48%;
    left: 48%;
    box-shadow: var(--button-shadow);
    border-radius: 50%;
    border: 1px solid var(--button-border);
    width: 25px;
    height: 25px;
    z-index: 10;
    cursor: pointer;
    color: var(--primary-color);
  }

  .info-button:hover {
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
  }

  .info-description {
    position: absolute;
    left: 50%;
    top: 50%;
  }

  .info-description-bg {
    position: absolute;
    left: -50%;
    top: -50%;
    border-radius: 50%;
    background-color: var(--l-grey);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;
    padding: 1rem;
  }

  .info-description-text {
    position: relative;
    left: -50%;
    top: -50%;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;
    padding: 1rem;
    color: var(--black);
  }

  .info-description-text > p {
    padding: 0.5rem 0;
    text-align: center;
    flex-basis: 100%;
  }

  .default {
    opacity: 0;
    margin-top: 20px;
  }
  .default.show {
    margin-top: 0px;
    opacity: 1;
    transition: opacity 1s;
  }

  .sub-section-drop {
    margin: 3.5rem 0;
  }

  /* #doing-0 {
    border-top: 1px solid var(--black);
    padding-top: 1rem;
  } */
  .doing-container {
    flex: 1 1 40%;
    margin: 0 0.5rem 2rem 0.5rem;
    /* border-bottom: 1px solid var(--black); */
    padding: 3%;
    color: var(--primary-color);
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    cursor: pointer;
  }
  .body-text {
    padding-bottom: 1rem;
  }

  .body-text,
  .paragraph-headline {
    text-align: left;
  }
  .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0.5rem;
  }

  #covid-image {
    background-color: var(--l-grey);
    object-fit: cover;
    margin-bottom: 3.5rem;
  }

  .title-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    /* pointer-events: none; */
    margin-bottom: 1rem;
  }

  .info-description-mobile {
    display: none;
  }

  @media only screen and (max-width: 640px) {
    section {
      background-image: none;
    }

    #covid-image {
      height: 130px;
    }

    .doing-container {
      flex: 1 1 40%;
      margin: 0 0 2rem 0;
    }

    .info-description {
      display: block;
    }

    .info-description-bg {
      display: none;
    }

    .info-description {
      display: none;
    }

    .info-description-mobile {
      position: absolute;
      left: 50%;
      top: 98%;
      width: 100%;
      display: block;
    }

    .info-description-text {
      color: var(--white);
    }

    #covid-stats {
      width: 95%;
    }

    #covid-wheel {
      margin: 0rem;
    }

    .info-button {
      left: 46%;
      top: 46%;
    }

    .after-wheel {
      margin-top: 9rem;
    }

    .doing-container:hover {
      color: var(--primary-color);
    }

    .doing-container:hover .hover {
      border-bottom: 0px solid var(--primary-color);
    }
  }
</style>
