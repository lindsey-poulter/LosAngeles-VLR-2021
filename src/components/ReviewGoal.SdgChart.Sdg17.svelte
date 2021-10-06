<script>
  import Link from "$components/Link.svelte";
</script>

<div class="doing-container">
  <p class="paragraph-headline">UNIVERSITY PARTNERSHIPS</p>

  <p class="body-text">
    Our university partnerships are an engine for translating the Global Goals into actionable
    projects that add value for the City, for the students and faculty engaged, and for our
    community. In the past four years, the City has partnered with faculty and more than 160
    students on <a href="https://sdg.lamayor.org/our-work/projects" target="_blank" rel="noopener"
      >25 SDG projects</a
    >. These projects generally take three shapes: interinstitutional project teams as part of an
    SDG Summer Cohort; single-institutional semester-long task forces; and, embedded internships
    within the Mayor&rsquo;s Office.&nbsp;&nbsp;
  </p>
  <p class="body-text">
    The SDGs in L.A. have benefitted from these partnerships with academic institutions from the
    program&rsquo;s inception. <a
      href="https://thunderbird.asu.edu/sanjeev-khagram"
      target="_blank"
      rel="noopener">Dr. Sanjeev Khagram</a
    >, then the John Parke Young Professor at Occidental College, brought his full support into the
    program and has sustained that engagement from Arizona State University, where he is now Dean of
    the
    <a href="https://thunderbird.asu.edu" target="_blank" rel="noopener"
      >Thunderbird School of Global Management</a
    >. Occidental, now through
    <a
      href="https://www.oxy.edu/academics/faculty/anthony-tirado-chase"
      target="_blank"
      rel="noopener">Dr. Anthony Tirado Chase</a
    >
    and
    <a
      href="https://www.oxy.edu/academics/global-engagement/young-initiative"
      target="_blank"
      rel="noopener">the Young Initiative on the Global Political Economy</a
    >, remains a central partner.
    <a href="https://globalhealth.usc.edu" target="_blank" rel="noopener"
      >University of Southern California&rsquo;s (USC) Institute on Inequalities in Global Health</a
    >
    and its Director,
    <a
      href="https://globalhealth.usc.edu/about/our-team/core-faculty/sofia-gruskin/"
      target="_blank"
      rel="noopener">Sofia Gruskin</a
    >, has been a partner since mid-2018, and USC has expanded its partnership to include its
    <a href="https://publicexchange.usc.edu/" target="_blank" rel="noopener"
      >Dornsife College of Letters, Arts, and Sciences and Public Exchange program</a
    >, led by Director
    <a href="https://dornsife.usc.edu/kate-weber/" target="_blank" rel="noopener">Kate Weber</a>.
    The University of California, Los Angeles (UCLA) has supported students from its
    <a href="https://luskin.ucla.edu" target="_blank" rel="noopener"
      >Luskin School of Public Affairs</a
    >,
    <a href="https://ph.ucla.edu" target="_blank" rel="noopener"
      >the Fielding School of Public Health</a
    >
    and its
    <a
      href="https://ph.ucla.edu/research/centers/world-policy-analysis-center"
      target="_blank"
      rel="noopener">WORLD Policy Analysis Center</a
    >
    to work with the City on SDG project teams. Pomona College, one of the Claremont Colleges Consortium,
    has been partnered with the City since 2020, as led by
    <a
      href="https://www.pomona.edu/directory/people/heidi-nichols-haddad"
      target="_blank"
      rel="noopener">Dr. Heidi Nichols Haddad</a
    >.&nbsp;
  </p>

  <p class="links">
    <Link
      url="http://sdg.lamayor.org/student-projects"
      text="Learn More"
      color="var(--sdg17-primary)"
    />
  </p>
</div>

<style>
  .doing-container {
    margin: 0 4rem 2rem 0;
  }
  .body-text,
  .paragraph-headline,
  .links {
    text-align: left;
  }

  .paragraph-headline {
    font-weight: var(--bold);
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 640px) {
    .doing-container {
      margin: 0 0rem 1rem 0;
    }
  }
</style>
