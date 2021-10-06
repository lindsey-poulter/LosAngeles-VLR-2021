<script>
  import { getContext } from "svelte";

  import Reveal from "$components/Reveal.svelte";
  import { slide } from "svelte/transition";

  $: show = "less";
</script>

<section id="footer">
  <div class="section-content">
    <!-- <Reveal>
      <span class="hw-section-index" style="color: rgba(255,255,255,.5)">08</span>
    </Reveal> -->

    <Reveal>
      <h1>Conclusion: <br />The SDGs as a Multiplier</h1>
    </Reveal>
  </div>

  <div id="intro-first-section">
    <div id="intro-text">
      <p class="body-text">
        In both our 2019 and 2021 reports, we have articulated how our commitment to the SDGs adds
        value for Angelenos through a <span class="bold-blue">common language</span> that fosters
        partnerships and progress toward the Goals. These partnerships themselves create momentum
        and have a multiplier effect, in which one project can lead into subsequent, often related,
        follow-up efforts. Our university partners are an ecosystem of faculty and student experts
        and community-based partners. Our colleagues within the City are deep subject matter
        experts, well-versed in the steps required to translate goals into discrete actions. And
        community groups and residents in Los Angeles give voice to how their experiences shape the
        work to be done. While this VLR has been prepared by the Office of the Mayor of Los Angeles,
        achieving the goals will require that
        <span class="bold-blue">Angelenos come together to define and build the future we want</span
        >.
      </p>

      <div class="body-text" on:click={() => (show = show == "more" ? "less" : "more")}>
        <a href="">
          {#if show == "less"}Read More {/if}</a
        >
      </div>

      {#if show == "more"}
        <div style="text-align: left;" transition:slide class="read-more">
          <p class="body-text">
            <span class="bold-blue"
              >Los Angeles welcomes and tests innovative and new ideas to solve our local (and
              global) challenges.</span
            > From recycled-plastic asphalt to piloting the nation&rsquo;s largest guaranteed basic income
            program, this VLR demonstrates how L.A. innovates to solve problems and deliver services
            to our residents. We continue to welcome new partnerships and innovations to help us solve
            our City&rsquo;s challenges.&nbsp;
          </p>
          <p class="body-text">
            <span class="bold-blue"
              >As the SDGs are interconnected, so our solutions need to be.</span
            > While projects in this report are categorized into specific Goals, each initiative included
            in this VLR delivers multiple, cross-cutting benefits. We must continue to deliver holistic
            solutions that do not prioritize short-term benefits at the expense of the long-term health,
            resilience, and prosperity of people, our planet, or our communities.&nbsp;
          </p>
          <p class="body-text">
            <span class="bold-blue"
              >Hyperlocal solutions show us how we can deliver on the 2030 Agenda.</span
            > In the remaining nine years in this decade of action, we continue to turn to our neighborhoods
            and local communities to learn how to co-create solutions, from reimagining public safety
            or investing in public transit and green spaces, to supporting housing and food security.
            Local context allows us to tailor solutions that marry data-driven approaches with the experience
            of the residents we serve to better meet their needs.
          </p>
        </div>
      {/if}

      <div class="body-text" on:click={() => (show = show == "more" ? "less" : "more")}>
        <a href="">
          {#if show == "more"}Read Less {/if}</a
        >
      </div>
    </div>

    <div id="intro-button">
      <div class="button">
        <a
          href="https://drive.google.com/file/d/1OK_yVDuWMO8Ti6KVVUedgbny23-tAqmg/view"
          target="_blank">View full PDF <br />report ></a
        >
      </div>
      <div class="button">
        <a href="https://sdgdata.lamayor.org/" target="_blank">View data <br /> platform ></a>
      </div>
      <div class="button">
        <a href="https://sdg.lamayor.org/get-involved/sdg-activities-index" target="_blank"
          >View activities <br />index ></a
        >
      </div>
    </div>
  </div>
</section>

<section id="ack">
  <div class="section-content">
    <p class="paragraph-headline">Attribution</p>
    <p class="body-text">
      This, the second Voluntary Local Review of progress toward the Sustainable Development Goals
      in Los Angeles, summarizes only briefly the tireless efforts of our colleagues, neighbors, and
      partners to improve lives throughout our community and our world. We thank you for your
      generosity in sharing your time with us, and it is our hope that our shared love for our City
      shines through these imperfect descriptions of your hard work. We also hope that readers will
      take the opportunity to dig deeper, learn more, and reach out to build new partnerships
      centered in this ever-growing community of practice dedicated to people, planet, and
      prosperity that leaves no one behind.
    </p>

    <div>
      <p class="tertiary-text-bold">PRINCIPAL AUTHORS</p>
      <p class="tertiary-text">
        <b>Angela Kim</b>, SDG Program and Data Manager, Mayor’s Fund for Los Angeles <br />
        <b>Erin Bromaghim</b>, Director of Olympic and Paralympic Development and Conrad N. Hilton
        Foundation Fellow on the Sustainable Development Goals, Office of Los Angeles Mayor Eric
        Garcetti
      </p>
    </div>

    <div>
      <p class="tertiary-text-bold">CONTRIBUTING AUTHORS</p>
      <p class="tertiary-text">
        <b>Los Angeles Mayor’s Office of International Affairs 2021 interns</b>: Alejo Maggini,
        Caroline Diamond, Jonathan Fang, Lily Laugharn, Rachel Seiberg, Morgan Lee, and Emily
        Gardner
      </p>
      <p class="tertiary-text">
        <b>Los Angeles City departments including:</b>
        the Los Angeles Bureau of Sanitation and Environment (LASAN), Los Angeles Department of Water
        and Power (LADWP), Los Angeles Housing and Community Investment Department (HCID), Bureau of
        Street Services (StreetsLA), Bureau of Street Lighting (LALights), Department of Civil and Human
        Rights and Equity (LA Civil Rights)
      </p>
    </div>

    <div>
      <p class="tertiary-text-bold">DESIGN AND PRODUCTION</p>
      <p class="tertiary-text">
        Lindsey Poulter, designer & developer, <a
          href="http://www.lindseypoulter.com/ "
          target="_blank"
        >
          lindseypoulter.com</a
        >
      </p>
      <p class="tertiary-text">
        Jenny Lin, designer,
        <a href="https://winjoy.design" target="_blank">winjoy.design</a>
      </p>
      <br />
      <p class="tertiary-text">
        We would like to acknowledge and thank the Conrad N. Hilton Foundation for supporting L.A.'s
        work on the Sustainable Development Goals.
      </p>
    </div>

    <div class="line" />

    <p class="paragraph-headline">Acknowledgments</p>

    <p class="tertiary-text-bold">PARTNER AND SUPPORTING INSTITUTIONS</p>
    <p class="tertiary-text">
      The Conrad N. Hilton Foundation · Mayor’s Fund for Los Angeles · The John Parke Young
      Initiative on the Global Political Economy, Occidental College · The Thunderbird School of
      Global Management, Arizona State University · The Institute on Inequalities in Global Health,
      University of Southern California · Public Exchange, Dornsife College of Letters, Arts and
      Sciences, University of Southern California · Pomona College
    </p>

    <p class="tertiary-text-bold">CITY OF L.A. SDG ADVISORY GROUP AND COLLABORATORS</p>
    <p class="tertiary-text">
      Aaron Gross · Adriana Garcia · Andre Herndon · Angelica Frias · Ashley Stracke · Becca
      MacLaren · Brenda Shockley · Celeste Rodriguez · Chloe Donovan · Christopher Covino ·
      Christopher Hawthorne · Claudia Luna · David Price · Dawn Comer · Dominique Hargreaves · Don
      Tran · Doug Walters · Edward Belden · Elena Guevara · Emmanuelle Lopez · Eva Pereira · Evelina
      Tverdohleb · Irene Burga · Jeanne Holm · Jennifer McDowell · Jessica Jinn · Joumana
      Silyan-Saba · Jacqueline Woo · Julia Thayne · Julien Antelin · Karcy Bowles · Katie Camp · Ken
      Bernstein · Kenneth Tang · Kevin Minne · Kevin Taylor · Larry Vasquez · Lisa Salazar · Lulu
      Mickelson · Mahsa Ostowari · Mara Landay · Maria Sison-Roces · Megan Ross · Meghan Mai ·
      Michelle Barton · Neeraj Bhatnagar · Nora Chin · Nora Preciado · Paola Adler · Peggy Nguyen ·
      Preston Mills · Ramon Covarrubias · Rebecca Rasmussen · Richard Saplan · Ronnell Hampton ·
      Ryan Jackson · Sofia Peralta · Sonia Chavez-Meza · Susan Sanchez · Susie Santilena · Tanya
      Pineda · Thalia Polychronis · Victoria Simon · Victoria Wigle · Zita Davis
    </p>

    <p class="tertiary-text-bold">MAYOR’S OFFICE OF INTERNATIONAL AFFAIRS</p>
    <p class="tertiary-text">
      An Tran · Angela Kim · Christine Peterson · David Ou · Dilpreet Sidhu · Erin Bromaghim · Holly
      Milburn-Smith · Naseam Alavi · Nina Hachigian · Zachia Nazarzai
    </p>

    <p class="tertiary-text-bold">ACADEMIC AND OTHER PARTNERS</p>
    <p class="tertiary-text">
      Alisa Kreynes · Dr. Anthony Tirado Chase · Anthony Pipa · Avery Everhart · Chamnan Lim ·
      Charles Reeves · Daniel Ibarrola · Deidre Lind · Emily Skehan · Gaea Morales · Ghazal
      Khorshidi · Dr. Heidi Haddad · Ilir Lita · Dr. John McCormack · Kate Weber · Kaysie Brown ·
      Krista Rasmussen · Linda Mejia · Dr. Madeline Baer · Max Bouchet · Dr. Mijin Cha · Dr. Monica
      Kerretts-Makau · Olivia Mulerwa · Philip Thigo · Rachel Huguet · Dr. Sanjeev Khagram · Shaheen
      Kassim‑Lakha · Sofia Gruskin · Thalia Gonzales
    </p>

    <p class="tertiary-text-bold">SDG STUDENTS AND INTERNS</p>
    <p class="tertiary-text">
      Abbey Martichenko · Alban Martinez · Alejo Maggini · Alexis Patton · Alison Schulte · Andres
      Williamson · Andrew Leung · Austin Berry · Brilliarch Dayag · Caroline Diamond · Devon Rizer ·
      Dilay Akcora · Ellory Longdon · Eric Miller · Fatime Uruci · Hamsini Balaji · Harrison Maxwell
      · Hope Hendry · Jack Fernandes · Jackson Caudle · Janie Marcus · Jarod Majeika · Joan Lee ·
      Johnny Hammer · Joseph Daud · Joseph Waldow · Josephine Gardner · Julia Eubanks · Kush Shanker
      · Kyler Parris · Lily Sedigh Sarvestani · Lola Fisher · Maggie McCabe · Makenna Flynn ·
      Margaret Worrall · Mayowa Akintewe · McClaran Shirley · Micah Kirscher · Michael Najarian ·
      Nan Ni · Nancy Linghui Zhou · Nhi Trinh · Olivia Vorster · Perri Ji · Prachi Kale · Reed
      Holland · Sarah Eng · Seth Bae · Simone Flournoy · Snigdha Suvarna · Stephanie Oyolu · Sydney
      Scudder · Tanisha Shetty · Tyler Branum · Virginia Paschal · Wafa Abedin · Xeneb Shah · Zach
      Goodwin · Zoe Navapanich
    </p>
  </div>
</section>

<section id="la-footer">
  <div class="footer-content">
    <div class="footer-section-1">
      <div class="image-row" style="width: 170px;">
        <a href="https://mayorsfundla.org/"
          ><img
            alt="Mayor's Fund for Los Angeles"
            height="81"
            src="assets/images/mayor-logo.png"
            width="75"
          />
        </a>

        <a href="https://www.lamayor.org/"
          ><img alt="Eric Garcetti" height="81" src="assets/images/eric-logo.png" width="75" />
        </a>
      </div>

      <div class="contact-us">
        <p style="font-weight: bold">Contact Us</p>
        <a href="mailto:sdg@lacity.org">sdg@lacity.org</a>
      </div>
    </div>

    <div class="content" style="display: flex; flex-flow: column wrap; justify-content: center;">
      <p>
        © Copyright 2021 City of Los Angeles. All rights reserved.
        <a href="https://disclaimer.lacity.org/disclaimer.htm" target="_blank">Disclaimer</a> |
        <a href="https://disclaimer.lacity.org/privacy.htm" target="_blank">Privacy Policy</a>
      </p>
    </div>
  </div>
</section>

<style>
  .footer-section-1 {
    display: flex;
    flex-flow: row nowrap;
  }
  #la-footer {
    width: 100%;
    position: relative;
    background: #0e2941;
    display: flex;
    justify-content: center;
    color: white;
    margin: auto 0;
    text-align: left;
    padding: 2.5rem 0rem 8rem 0rem;
  }

  .contact-us {
    margin-left: 2rem;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
  }

  .footer-content {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  #la-footer a {
    font-family: var(--sans);
    color: white;
    border-bottom: none;
    font-size: 1rem;
  }
  .image-row {
    display: flex;
    flex-flow: row nowrap;
  }

  .image-row img {
    margin-left: 0.5rem;
    margin-bottom: 1rem;
  }
  #ack-row {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    text-align: left;
    margin: 2rem 0;
  }
  #footer {
    background-color: #2a61bc;
    color: var(--white);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center bottom;
    background-image: url("/assets/images/conclusion-background.png");
    background-attachment: fixed;
  }

  #ack {
    background-color: var(--l-grey);
    color: var(--black);
  }

  /* a {
    color: var(--white);
    border-bottom: 1px solid var(--white);
    text-decoration: none;
    font-family: var(--hw);
    font-size: 2.5rem;
  }

  a:hover {
    border-bottom: 3px solid var(--primary-tertiary-color);
    color: var(--primary-tertiary-color);
  } */

  li {
    margin-bottom: 0.8rem;
  }

  ul {
    padding-left: 2rem;
    text-align: left;
    width: 85%;
  }

  .body-text,
  .paragraph-headline,
  .body-text-bold,
  .tertiary-text,
  .tertiary-text-bold {
    text-align: left;
  }
  .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0.5rem;
  }

  #section-content {
    display: flex;

    max-width: 700px;
    margin: auto;
  }

  #intro-first-section {
    width: 60%;
    margin: 0 auto;
  }
  #intro-text {
    flex-basis: 60%;
  }

  #intro-button {
    flex-basis: 40%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 4rem 0.5rem 0rem 0.5rem;
  }

  #intro-text a {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }

  #intro-text a:hover {
    color: var(--black);
    border-bottom: 1px solid var(--black);
  }

  .button {
    flex-basis: 30%;
    padding: 1.6rem 1.2rem;
    background-color: var(--white);
    border-radius: var(--round-sm);
    display: flex;
  }

  .button > a {
    align-self: center;
    margin: 0 auto;
    border: none;
    text-decoration: underline;
  }

  .line {
    width: 100%;
    background-color: var(--m-grey);
    height: 1px;
    margin: 3rem auto 3rem auto;
  }

  .tertiary-text-bold {
    margin-top: 2rem;
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
    .footer-section-1 {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 2rem;
    }

    .button {
      flex-basis: 100%;
      padding: 1rem 1rem;
      margin: 1rem 0rem;
    }

    .footer-content {
      width: 60%;
      display: flex;
      flex-flow: column wrap;
      justify-content: space-between;
    }

    #footer {
      background-image: none;
    }

    .contact-us {
      margin-left: 0rem;
    }
  }
</style>
