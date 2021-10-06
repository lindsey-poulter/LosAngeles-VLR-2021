<script>

import mq from "$stores/mq";

$: sm = $mq.sm;
$: md = $mq.md;
$: lg = $mq.lg;
$: xl = $mq.xl;
$: mobile = !lg && !md ? true : false;

</script>
  <style>
    .embed-container {
      position: relative;
  
      height: 555px;
      max-width: 100%;
    }
    .embed-container iframe,
    .embed-container object,
    .embed-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    small {
      position: absolute;
      z-index: 40;
      bottom: 0;
      margin-bottom: -15px;
    }

    .embed{
        overflow: hidden; min-width: 400px; flex-basis: 40%;
      
      }

    .body-text {
        flex-basis: 60%; 
        padding: 0rem 3rem; 
        text-align: left
    }

    @media only screen and (max-width: 640px) {
      .embed{
        overflow: hidden; min-width: 400px; flex-basis: 100%;
      
      }

      .container{
        flex-flow: column wrap;
      }

      .embed-container {
      position: relative;
  
      height: 555px;
      max-width: 85%;
    }

    .body-text{
      margin-top: 1rem;
      width: 100%;
    }
    
    }
  </style>

  <div class="container" style="display: flex;">

    <div class="embed" >
  <div class="embed-container">
    <iframe
      width="{mobile ? 200 : 450}"
      height="550"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      title="Habitat Quality in the City of Los Angeles"
      src="//lahub.maps.arcgis.com/apps/Embed/index.html?webmap=b9b9c447cf6543f4872fa18bc7b0193b&extent=-119.4766,33.5786,-117.3305,34.4607&zoom=true&previewImage=false&scale=true&disable_scroll=true&theme=light&level=10"
    />
  </div>
</div>

  <div class="body-text" >
      <p >
    Areas with the best habitat quality scores, shown in purple and dark green, have large patches of intact native vegetation while areas with the lowest habitat quality scores, shown in light green and gray, have limited, fragmented vegetation.  Creating habitat and gardens and/or expanding the size of various green spaces in urban and suburban neighborhoods in LA will improve the ability of these areas, creating stepping stones to support regional wildlife movement and climate resilience.  
</p>

<p style="margin: 3rem 0 1rem 0">
    Urban habitat quality score: 
</p>
<div style="width:100%">
  <img src="/assets/images/SDG15legend.png" alt="Legend showing urban habitat quality score on a scale of 0 to 10">
</div>


<p>

</p>
  </div>
</div>