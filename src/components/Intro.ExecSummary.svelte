<script>
  import Graphic from "$components/Intro.ExecSummary.Graphic.svelte";
  import Reveal from "$components/Reveal.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import { slide } from "svelte/transition";

  let element, intersecting;

  let w;
  $: show = "less";
</script>

<section id="executive-summary">
  <div id="instructions-hover" class="default hw-nav" class:show={intersecting}>
    Hover to navigate <br />to other sections

    <svg width="20%" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.340199 45.2486C-0.0748101 45.613 -0.115838 46.2448 0.24856 46.6598L6.18677 53.4228C6.55117 53.8378 7.183 53.8788 7.59801 53.5144C8.01302 53.15 8.05405 52.5182 7.68965 52.1032L2.41124 46.0916L8.42276 40.8132C8.83777 40.4488 8.8788 39.817 8.5144 39.402C8.15 38.987 7.51817 38.946 7.10316 39.3103L0.340199 45.2486ZM0.935201 46.9979C10.6259 47.6272 17.5351 46.7599 22.4161 44.5769C27.3581 42.3667 30.1493 38.8393 31.6362 34.3787C33.1021 29.981 33.2968 24.6872 33.1481 18.904C32.9974 13.0413 32.5 6.75278 32.5 0H30.5C30.5 6.74722 31.0026 13.2712 31.1488 18.9554C31.297 24.719 31.0854 29.7065 29.7388 33.7463C28.4132 37.7232 25.9856 40.7896 21.5995 42.7512C17.1524 44.7401 10.6241 45.6228 1.0648 45.0021L0.935201 46.9979Z"
        fill="var(--primary-color)"
      />
    </svg>
  </div>

  <div class="section-content-intro">
    <div id="img-logo">
      <img src="assets/images/LASDG.png" alt="Los Angeles Sustainable Development Goals" />
    </div>
    <div bind:clientWidth={w} style="display: flex;">
      <Graphic width={w} />
    </div>

    <!-- <div class="line" /> -->
  </div>
  <div class="section-content">
    <div id="intro-first-section">
      <Reveal>
        <p
          class="hw-quote"
          style="color: var(--black); text-align: center; text-transform:uppercase; margin-bottom: 2rem;"
        >
          2021 Voluntary Local Review of Progress Toward the Sustainable Development Goals in Los
          Angeles
        </p>
        <div id="instructions-click" class="default hw-nav" class:show2={intersecting}>
          <svg width="20%" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.340199 45.2486C-0.0748101 45.613 -0.115838 46.2448 0.24856 46.6598L6.18677 53.4228C6.55117 53.8378 7.183 53.8788 7.59801 53.5144C8.01302 53.15 8.05405 52.5182 7.68965 52.1032L2.41124 46.0916L8.42276 40.8132C8.83777 40.4488 8.8788 39.817 8.5144 39.402C8.15 38.987 7.51817 38.946 7.10316 39.3103L0.340199 45.2486ZM0.935201 46.9979C10.6259 47.6272 17.5351 46.7599 22.4161 44.5769C27.3581 42.3667 30.1493 38.8393 31.6362 34.3787C33.1021 29.981 33.2968 24.6872 33.1481 18.904C32.9974 13.0413 32.5 6.75278 32.5 0H30.5C30.5 6.74722 31.0026 13.2712 31.1488 18.9554C31.297 24.719 31.0854 29.7065 29.7388 33.7463C28.4132 37.7232 25.9856 40.7896 21.5995 42.7512C17.1524 44.7401 10.6241 45.6228 1.0648 45.0021L0.935201 46.9979Z"
              fill="var(--primary-color)"
            />
          </svg>
          <br />
          Click for more information
        </div>

        <div id="intro-button">
          <div class="button">
            <a
              href="https://drive.google.com/file/d/1OK_yVDuWMO8Ti6KVVUedgbny23-tAqmg/view"
              target="_blank">View full PDF report ></a
            >
          </div>
          <div class="button">
            <a href="https://sdgdata.lamayor.org" target="_blank">View data platform ></a>
          </div>
          <div class="button">
            <a href="https://sdg.lamayor.org/get-involved/sdg-activities-index" target="_blank"
              >View activities index ></a
            >
          </div>
        </div>
      </Reveal>

      <div id="intro-text">
        <Reveal>
          <p class="body-text">
            This Voluntary Local Review (VLR) is the second review of progress toward the <a
              href="https://sdgs.un.org/goals"
              target="_blank"
              rel="noopener">17 Sustainable Development Goals (SDGs)</a
            >
            by the City of Los Angeles (L.A.). It builds on
            <a
              href="https://sdg.lamayor.org/our-work/voluntary-local-review"
              target="_blank"
              rel="noopener">L.A.&rsquo;s first VLR in 2019,</a
            > sharing new stories, activities, and initiatives. In this time, the COVID-19 pandemic has
            emphasized the interdependence between the health of our communities, our planet, and our
            economic well-being. It has shown how local, place-based action is essential in leading response
            and recovery.&nbsp;
          </p>

          <IntersectionObserver {element} bind:intersecting>
            <div bind:this={element} />
          </IntersectionObserver>

          <p class="body-text">
            <strong>Local, place-based action is also essential to achieving the SDGs</strong>. This
            VLR provides examples of the SDGs in action in Los Angeles &mdash; in the neighborhoods
            and communities that comprise one of the world&rsquo;s most diverse urban centers. L.A.
            is a global city of more than four million residents, in a county of more than 10
            million, a greater metropolitan area approaching 19 million, and it is the largest city
            in California, the most populous state in the U.S.
          </p>

          <p class="body-text">
            L.A. has made progress or met many SDG targets by international standards. But the work
            of sustainable development is about <strong
              >building enduring progress that leaves no one behind</strong
            >, and L.A. has more work to do. Through this VLR, we hope to share stories of
            sustainable development in action, and convey the importance of working together &mdash;
            &nbsp;across our city and across our borders &mdash; &nbsp;to accelerate our progress
            toward the communities and the world we want.
          </p>
        </Reveal>

        <div class="body-text" on:click={() => (show = show == "more" ? "less" : "more")}>
          <a href="">
            {#if show == "less"}Read More {/if}</a
          >
        </div>
      </div>

      <div class="intro-text">
        {#if show == "more"}
          <div style="text-align: left;" transition:slide class="read-more">
            <p class="body-text">
              <strong
                >Local government programs and policies directly impact how people interact with
                their communities.
              </strong>Achieving the Global Goals will depend on empowering cities and local
              governments as the engines of sustainable development, providing the resources and
              voice needed to scale success.&nbsp;
            </p>
            <p class="body-text">
              <strong
                >With fewer than nine years remaining to 2030, our collective focus must shift from
                alignment to action.</strong
              > Voluntary Local Reviews offer a platform for cities and local governments to assess and
              report their progress, often building internal and external networks in the process. It
              is how we use these networks to create and accelerate action toward the Goals that will
              define success through the remainder of this decade.
            </p>
            <p class="body-text">
              <strong
                >Action is rooted in projects and the partnerships that bring them to life</strong
              >. There are many models for building partnerships: this report offers examples of how
              Los Angeles has approached new and innovative ways to meet the needs of our residents
              and to develop scalable and lasting solutions. While this VLR offers one way to share
              these models, more capacity and investment are needed to connect practitioners to one
              another and foster a truly global, inclusive community of practice.
            </p>
            <p class="body-text">
              <strong
                >Making progress toward the Goals depends on understanding local context.</strong
              > That context is informed by place, as well as the lived experience of those who call
              it home. Too often dashboards and data measures can obscure how people experience the services
              that cities provide. Understanding more about their journey will inform how the City can
              better meet their needs, and ensure we leave no one behind.
            </p>
            <p class="body-text">
              <strong
                >The Sustainable Development Goals have strengthened L.A.&rsquo;s global ties.
              </strong>The SDGs give us a vision for the future we want here in Los Angeles and a
              common language through which we can share our progress with the global community. We
              continue to learn from other cities, governments, and civil society organizations
              around the world and are committed to sharing our lessons in return.&nbsp;
            </p>
            <p class="body-text">
              These are themes for L.A.&rsquo;s 2021 Voluntary Local Review and the lessons we hope
              to share here: <strong
                >Our efforts to realize the SDGs are rooted in community-based action, building
                tools and partnerships as enablers and multipliers, centering the lived experience
                of our residents to leave no one behind, and engaging with a growing, global
                community of practice</strong
              >. This is how Los Angeles will accelerate momentum to achieve the Global Goals in the
              nine years that remain in this agenda. We hope you will join us.
            </p>
          </div>
        {/if}

        <div class="body-text" on:click={() => (show = show == "more" ? "less" : "more")}>
          <a href="">
            {#if show == "more"}Read Less {/if}</a
          >
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="section-content">
    <div id="instructions-click" class="default hw-nav" class:show2={intersecting}>
      <svg width="20%" viewBox="0 0 34 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.340199 45.2486C-0.0748101 45.613 -0.115838 46.2448 0.24856 46.6598L6.18677 53.4228C6.55117 53.8378 7.183 53.8788 7.59801 53.5144C8.01302 53.15 8.05405 52.5182 7.68965 52.1032L2.41124 46.0916L8.42276 40.8132C8.83777 40.4488 8.8788 39.817 8.5144 39.402C8.15 38.987 7.51817 38.946 7.10316 39.3103L0.340199 45.2486ZM0.935201 46.9979C10.6259 47.6272 17.5351 46.7599 22.4161 44.5769C27.3581 42.3667 30.1493 38.8393 31.6362 34.3787C33.1021 29.981 33.2968 24.6872 33.1481 18.904C32.9974 13.0413 32.5 6.75278 32.5 0H30.5C30.5 6.74722 31.0026 13.2712 31.1488 18.9554C31.297 24.719 31.0854 29.7065 29.7388 33.7463C28.4132 37.7232 25.9856 40.7896 21.5995 42.7512C17.1524 44.7401 10.6241 45.6228 1.0648 45.0021L0.935201 46.9979Z"
          fill="var(--primary-color)"
        />
      </svg>
      <br />
      Click for more information
    </div>
  </div> -->
  <!-- <div id="instructions-scroll" class="hw-nav">
    <Reveal trigger="0.1">
      Scroll to read
      <svg
        width="20%"
        height="56"
        viewBox="0 0 16 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.29289 45.7071C7.68342 46.0976 8.31658 46.0976 8.7071 45.7071L15.0711 39.3431C15.4616 38.9526 15.4616 38.3195 15.0711 37.9289C14.6805 37.5384 14.0474 37.5384 13.6569 37.9289L8 43.5858L2.34314 37.9289C1.95262 37.5384 1.31945 37.5384 0.928931 37.9289C0.538406 38.3195 0.538406 38.9526 0.92893 39.3431L7.29289 45.7071ZM7 -4.37114e-08L7 45L9 45L9 4.37114e-08L7 -4.37114e-08Z"
          fill="var(--primary-color)"
        />
      </svg>
    </Reveal>
  </div> -->
</section>

<style>
  #intro-first-section {
    margin: 6rem 0;
  }
  #intro-text {
    flex-basis: 60%;
  }
  #intro-button {
    display: flex;
    flex-flow: row no-wrap;
    justify-content: space-between;
    margin: 4rem 0rem;
  }

  .read-more {
    background-color: var(--l-grey);
    padding: 1rem;
  }
  /* .button:first-child {
    flex-basis: 100%;
    margin: 0rem 1rem 2rem 2rem;
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
  } */

  .button {
    padding: 1.6rem 1rem;
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow);
    display: flex;
    border: 1px solid var(--button-border);
  }

  .button > a {
    align-self: center;
    margin: 0 auto;
  }

  .line {
    width: 40%;
    background-color: var(--m-grey);
    height: 1px;
    margin: 6rem auto 6rem auto;
  }

  #img-logo {
    width: 60%;
    margin: 0 auto;
  }
  section {
    background-color: var(--white);
    color: var(--black);
    position: relative;
    padding: 0rem 0 0rem 0;
  }

  .body-text,
  .paragraph-headline,
  .key-points {
    text-align: left;
  }

  .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0.5rem;
  }

  #scroll-placeholder {
    padding: 3rem;
  }

  .key-points {
    margin-top: 3rem;
    margin-bottom: 3rem;
    /* padding: 3%; 
    background-color: var(--white);
    border-radius: var(--round-sm);
    box-shadow: var(--card-shadow); 
    margin: 3.5rem 1rem 3rem 1rem; */
  }

  .key-points li {
    margin-bottom: 0.8rem;
  }

  .key-points ul {
    padding-left: 2rem;
  }

  #instructions-click {
    position: absolute;
    top: 70%;
    left: 95%;
    color: black;
    width: 200px;
    display: flex;
    flex-flow: row wrap;
    padding-left: 1rem;
    height: 0px;
    z-index: 12;
    color: var(--primary-color);
  }

  #instructions-click:only-child {
    width: 100%;
  }

  #instructions-click svg {
    margin-left: 4rem;
    margin-top: 0.5rem;
    transform: scaleY(-1);
  }

  #instructions-hover {
    position: sticky;
    top: 25%;
    left: 4%;
    width: 200px;
    text-align: left;
    padding-left: 1rem;
    height: 0px;
    z-index: 10;
    color: var(--primary-color);
  }

  #instructions-hover svg {
    margin-left: 3rem;
    margin-top: 0.5rem;
  }

  .section-content-intro {
    width: 100%;
    height: 100%;
    margin: 0px auto;
    padding-top: 5rem;
    background-color: #2a61bc;
    color: var(--white);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-image: url("/assets/images/header-background.png");
    /* background-attachment: fixed; */
  }

  .default {
    opacity: 0;
  }
  .default.show {
    opacity: 1;
    transition: all 2s;
    transition-delay: 0s;
  }
  .default.show2 {
    opacity: 1;
    transition: all 2s;
    transition-delay: 0.5s;
  }

  @media only screen and (max-width: 1000px) {
    #instructions-hover {
      display: none;
    }

    #instructions-click {
      display: none;
    }
  }

  @media only screen and (max-width: 640px) {
    #instructions-hover {
      display: none;
    }

    #instructions-click {
      display: none;
    }
    .section-content-intro {
      width: 100%;
    }

    #intro-first-section {
      display: block;
    }
    .button:first-child,
    .button {
      height: 60px;
      width: 100%;

      margin: 1rem 0.7rem 1rem 0.7rem;
    }

    .line {
      width: 60%;
      background-color: var(--m-grey);
      height: 1px;
      margin: 3rem auto 3rem auto;
    }

    #intro-first-section {
      margin: 2rem;
    }

    #img-logo {
      width: 90%;
    }

    #intro-button {
      margin-top: 0rem;
      flex-flow: row wrap;
    }
  }
</style>
