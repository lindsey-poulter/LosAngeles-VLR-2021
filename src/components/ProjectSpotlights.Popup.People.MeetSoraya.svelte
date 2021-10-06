<script>
   import Reveal from "$components/Reveal.svelte";
</script>

<Reveal>
<div id="soraya-icon" class="popup-icon" />
</Reveal>

<Reveal>
<p class="hw-sub-section-headline">Meet Soraya</p>
</Reveal>

<Reveal>
<p class="body-text small-width" style="margin:0 auto; margin-bottom:2rem;">
  One of the renters featured is Soraya.<br><br> Soraya is a caring and attentive mother to six children:
</p>

</Reveal>



<blockquote>


  <svg width="45" height="36" style="text-align:left; fill:#6B71BF; position:absolute; left:0; margin-top:-1rem;">
    <path
      d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
    />
  </svg>


<Reveal>
  <p class="hw-quote">
    I have raised my kids...to love each other, so much that there are no problems between them.
    They all have their own different personalities. All my kids are really good kids, thank God.
  </p>
</Reveal>

<Reveal>

  <p class="body-text small-width" style=" margin:0 auto;">
    But her current housing situation is challenging for her whole family:
  </p>

</Reveal>

<Reveal>

  <p class="hw-quote">
    Everything is unbalanced – how do you get to work? How do the kids go to school? 
    <span style="color:#6B71BF">If you have
    [housing] instability, you have to take it one day at a time</span>. Otherwise, you will go crazy or
    your health will deteriorate and you will die.
  </p>
</Reveal>


  <svg
    width="45"
    height="36"
    style="transform:rotate(180deg);  position:absolute; right:0; margin-top:-1rem; fill:#6B71BF"
  >
    <path
      d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
    />
  </svg>

</blockquote>

<style>
  #soraya-icon {
    background-image: "";
    margin-bottom: 1rem;
  }

  .hw-quote {
    font-size: 1.3rem;
    padding: 2rem 0;
  }

  blockquote {
    position: relative;

  }

  .small-width{
    width:50%;
  }

  .hw-sub-section-headline {
    margin-bottom: 2rem;
  }

  .popup-icon{
    background-image: url("/assets/images/PEOPLE_soraya.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(107,113,191,.45)
  }
  @media only screen and (max-width: 640px) {
    
    .small-width {
      width:70%;
    }

    .hw-sub-section-headline {
      font-size: 2rem;
    }
   
   .popup-icon{
    width: 130px;
    height: 130px;
    }

    .sub-section{
      margin-bottom: 0rem;
      padding-bottom: 0rem;
    }
    .hw-quote{
      font-size: 1.125rem;
    }

  }
</style>
