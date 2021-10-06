<script>
  import { getContext } from "svelte";
  const copy = getContext("copy");
  import City from "$components/Intro.SdgLA.City.svelte";
  import Globe from "$components/Intro.SdgLA.Globe.svelte";
  import Reveal from "$components/Reveal.svelte";
  export let mobile;
  let w = 1440,
    w2 = 500;
</script>

<section id="la">
  <!-- <Reveal>
    <span class="hw-section-index" style="color: var(--m-grey)">03</span>
  </Reveal> -->

  <div class="section-content">
    <Reveal>
      <h1>{copy.AboutLA_title}</h1>
    </Reveal>

    <Reveal trigger=".2">
      <div id="la-intro">
        <div
          style="width: 50%; height: 100%; margin-top: 1rem; padding-bottom: 1.5rem; display: flex; align-items: center; justify-content: center;"
          bind:clientWidth={w2}
        >
          <Globe width={w2} />
        </div>

        <div>
          <p class="body-text">
            Los Angeles (L.A.) has been described as the western capital of the United States, the
            eastern capital of the Pacific Rim, and the northern capital of Latin America. L.A.'s
            $1.1 trillion regional economy rivals that of most countries and our ports and airports
            are some of the busiest in the world. Home to a diverse population that speaks more than
            175 languages, Los Angeles is a city where you can see the faces of the world on our
            streets and the faces of Los Angeles in the world. With a commitment to equity and
            leaving no one behind, L.A. is a place where everyone is welcome and everyone belongs.
          </p>
        </div>
      </div>
    </Reveal>
  </div>

  <div bind:clientWidth={w}>
    <City width={w} {mobile} />
  </div>
</section>

<style>
  .body-text {
    text-align: left;
    margin-left: 2rem;
  }

  #la-intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0rem;
  }

  #la-intro > div {
    flex-basis: 50%;
  }

  @media only screen and (max-width: 640px) {
    #la-intro {
      flex-wrap: wrap;
    }
    #la-intro > div {
      flex-basis: 100%;
    }
    .body-text {
      margin-top: 2rem;
      margin-left: 0rem;
    }

    #la-intro {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;
    }

    #la {
      padding-bottom: 0rem;
    }
  }
</style>
