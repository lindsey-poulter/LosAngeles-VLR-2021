<script>
  import { getContext } from "svelte";
  import Reveal from "$components/Reveal.svelte";
  import viewport from "$stores/viewport.js";
  let showOverlay = false;
  import * as d3 from "d3";

  // let top = d3.select("#letter").node().getBoundingClientRect();

  // $: console.log(top);
</script>

<section id="letter">
  <div class="section-content">
    <!-- <Reveal>
      <span class="hw-section-index" style="color: rgba(255,255,255,.5)">02</span>
    </Reveal> -->

    <Reveal>
      <div id="title_letter">
        <h1>A Message from <br />Mayor Eric Garcetti</h1>
      </div>
    </Reveal>

    <Reveal>
      <div id="section-content">
        <div id="mayor-container">
          <Reveal>
            <div id="mayor" />
          </Reveal>
          <p class="paragraph-headline">Los Angeles Mayor<br /> Eric Garcetti</p>
          <p class="signature" />
        </div>

        <blockquote>
          <svg width="45" height="36">
            <path
              d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
            />
          </svg>
          <p class="body-text">
            This decade of action must carry us forward to a recovery that reinvests in resilience,
            equity, and the fundamental public services that our cities provide. From the start of
            our journey, I have said that none of these Global Goals could be accomplished by City
            Hall alone. Leaving no one behind means everyone is a part of this Agenda, and only
            through our collective efforts can we build the future we want.
          </p>
          <div
            class="view-full"
            style="text-align:left"
            on:click={function () {
              showOverlay = true;
              document.body.classList.add("no-scroll");
              var element = document.getElementById("title_letter");
              element.scrollIntoView({ block: "start" });
            }}
          >
            <a href="">Read the full letter ></a>
          </div>
        </blockquote>
      </div>
    </Reveal>
  </div>

  <div id="overlay-container" style="color:black;  " class={showOverlay ? "show" : "hide"}>
    <div
      id="circle"
      on:click={function () {
        showOverlay = false;
        document.body.classList.remove("no-scroll");
      }}
    >
      <p>X</p>
    </div>
    <div id="letter-full">
      <div class="mayor-full">
        <div id="mayor" />
        <p class="paragraph-headline">Los Angeles Mayor<br /> Eric Garcetti</p>
        <p class="signature" />
      </div>

      <div class="text-full">
        <p class="body-text">Friends,</p>
        <p class="body-text">
          In the two years that have passed since our last report on progress toward the Sustainable
          Development Goals (SDGs), our world has experienced unthinkable loss. The COVID-19
          pandemic challenged all of us to refocus on our responsibility to one another. We have
          learned that we can rise to meet these moments when we rise together.&nbsp;
        </p>
        <p class="body-text">
          From the start of our journey, I have said that none of these Global Goals could be
          accomplished by City Hall alone. Nor will they be delivered by any one nation acting
          alone. Leaving no one behind means everyone is a part of this Agenda &mdash; cities,
          nations, civil society, workers, companies &mdash; and only through our collective efforts
          can we build the future we want.&nbsp;
        </p>
        <p class="body-text">
          This Voluntary Local Review shares some of what we are doing in Los Angeles to build that
          future. From guaranteed basic income to urban aerial mobility, I am proud that L.A. is a
          place where we lean into new ideas. Just two years ago, cities reporting directly on their
          progress toward the SDGs was one of those new ideas. But reporting alone will not deliver
          the Goals. With fewer than nine years remaining to deliver the 2030 Agenda, I am
          challenging all of us to lean into action.&nbsp;
        </p>
        <p class="body-text">
          We know what we accomplish through the remainder of this decade will shape the balance of
          this century and the future of our planet. And our collective trauma of the last year has
          reminded us that we cannot move forward without accounting for how and why our history and
          its legacy, which lives in our social and institutional structures, compound tremendous
          inequity.
        </p>
        <p class="body-text">
          This decade of action must carry us forward to a recovery that reinvests in resilience,
          equity, and the fundamental public services that our cities and local governments provide.
          It is essential that our national governments recognize and value the role of local action
          in achieving our Global Goals, and invest in a future that prioritizes people, our planet,
          and our shared prosperity.
        </p>
        <p class="body-text">
          I want to thank the Conrad N. Hilton Foundation, Mayor&rsquo;s Fund for Los Angeles,
          Occidental College, Arizona State University, University of California at Los Angeles,
          University of Southern California, and the Claremont Colleges for their partnership on
          this journey. Working together, I know we will build a stronger, more sustainable,
          equitable, and just world.&nbsp;
        </p>
        <p class="body-text">Sincerely,&nbsp;</p>
        <p class="body-text">Eric Garcetti</p>
      </div>
    </div>
  </div>
</section>

<style>
  #letter-full {
    display: flex;
  }

  .text-full {
    flex-basis: 55%;
    margin-left: 45%;
    margin-right: 7%;
  }

  .mayor-full {
    flex-basis: 40%;
    position: fixed;
  }
  #circle {
    background-color: var(--white);
    border-radius: 50%;
    box-shadow: var(--card-shadow);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    top: 10%;
    right: 8%;
    z-index: 20;
    border: 1px solid var(--button-border);
    color: var(--primary-color);
  }

  #overlay-container {
    position: fixed;
    overflow-y: scroll;
    top: 3%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 90%;
    margin: 0 auto;
    z-index: 1000;
    background-color: var(--white);
    box-shadow: var(--card-shadow);
    padding: 3% 4% 10% 10%;
    border-radius: var(--round-sm);
  }
  .show {
    display: block;
  }

  .hide {
    display: none;
  }
  section {
    background-color: #2a61bc;
    color: var(--white);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-image: url("/assets/images/mayor-background.png");
    position: relative;
    background-attachment: fixed;
  }

  svg {
    fill: var(--secondary-color);
    stroke: white;
    stroke-width: 2px;
    display: block;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  #section-content {
    display: flex;

    max-width: 700px;
    margin: auto;
  }

  #mayor {
    width: 280px;
    height: 350px;
    margin-bottom: 0.5rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("/assets/images/mayor-image.png");
    border-radius: var(--round-sm);
  }

  a:hover {
    color: var(--black);
    border-bottom: 1px solid var(--black);
  }

  .signature {
    width: 330px;
    height: 50px;
    margin-top: -1rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("/assets/images/Eric_Garcetti_Signature.png");
  }

  blockquote p {
    max-width: auto;
  }
  p {
    text-align: left;
  }

  a {
    color: var(--white);
    border-bottom: 1px solid var(--primary-tertiary-color);
  }

  @media only screen and (max-width: 1000px) {
    #section-content {
      flex-wrap: wrap;
    }

    #mayor-container {
      margin: 0 auto;
      padding-bottom: 1.5rem;
    }

    blockquote p {
      padding-bottom: 2rem;
    }
  }

  @media only screen and (max-width: 640px) {
    #mayor {
      width: 200px;
      height: 200px;
    }

    section {
      background-image: none;
    }

    #mayor-container {
      display: flex;
      flex-flow: column wrap;
      align-items: center;
    }

    .mayor-full {
      display: none;
    }

    .text-full {
      flex-basis: 100%;
      margin-left: 0%;

      margin-top: 10%;
    }

    /* #overlay-container {
      position: fixed;
      overflow-y: scroll;
      width: 80%;
      margin: 1rem;
    }
    */

    #circle {
      position: fixed;
      top: 5%;
    }
  }
</style>
