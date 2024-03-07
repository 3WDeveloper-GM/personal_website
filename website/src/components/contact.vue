<template>
   <div class="footer-contact" id="contact">
      <i>
         <svg :width="svgWidth" height="50" viewBox="0 0 105.83333 13.229167" preserveAspectRatio="none" version="1.1"
            id="svg1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <defs id="defs1" />
            <g id="layer1">
               <path style="fill:#f1f1f1;fill-opacity:1;stroke-width:0.264583"
                  d="M 99.247384,13.291668 0,13.229167 V -2e-6 L 67.02754,-3.3333975e-7 C 81.138923,0 82.902751,0 84.446177,0.22048935 c 1.543426,0.22048935 2.866322,0.66145469 4.304684,1.74705015 1.438362,1.0855955 2.992167,2.815812 4.48646,4.5034037 1.494292,1.6875916 2.929059,3.3325431 4.314208,4.3595348 1.385148,1.026992 2.720641,1.435996 4.092671,1.732781 1.37203,0.296785 2.78058,0.481346 4.18913,0.665908"
                  id="path11" />
            </g>
         </svg>
      </i>
      <i>

         <svg :width="svgWidth" height="50" viewBox="0 0 105.83333 13.229167" preserveAspectRatio="none" version="1.1"
            id="svg2" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            <defs id="defs2" />
            <g id="layer12">
               <path style="fill:#f1f1f1;fill-opacity:1;stroke-width:0.264583"
                  d="M 99.247384,13.291668 0,13.229167 V -2e-6 L 67.02754,-3.3333975e-7 C 81.138923,0 82.902751,0 84.446177,0.22048935 c 1.543426,0.22048935 2.866322,0.66145469 4.304684,1.74705015 1.438362,1.0855955 2.992167,2.815812 4.48646,4.5034037 1.494292,1.6875916 2.929059,3.3325431 4.314208,4.3595348 1.385148,1.026992 2.720641,1.435996 4.092671,1.732781 1.37203,0.296785 2.78058,0.481346 4.18913,0.665908"
                  id="path11" transform="matrix(-1,0,0,1,105.83333,0)" />
            </g>
         </svg>


      </i>
   </div>
   <div class="contact-wrapper">
      <i></i>
      <i>
         <div class="footer-contact-message">
            <i></i>
            <i>
               <h3 class="subtitles contact-message">
                  get in touch
               </h3>
               <a href="mailto:glopezmad@gmail.com" class="h5 subtitles contact-message">me@gmail.com</a>
            </i>
            <i></i>
         </div>
      </i>
      <i></i>
      <i>
         <div class="footer-icons">
            <i>
               <span class="separator">
                  <a href="https://github.com/3WDeveloper-GM" class="h5">
                  <i class="bi bi-github"></i>
               </a>
               </span>
               <span class="separator">
                  <a href="https://www.linkedin.com/in/3wgm/" class="h5">
                  <i class="bi bi-linkedin"></i>
               </a>
               </span>
               <span class="separator">
                  <a href="mailto:glopezmad@gmail.com" class="h5">
                  <i class="bi bi-envelope"></i>
               </a>
               </span>
            </i>
            <i></i>
            <i>
               <h5 class="subtitles">2014 | by Gabriel López</h5>
            </i>
         </div>
      </i>
   </div>
</template>

<script>
export default {
   setup() {
      return {}
   },
   data() {
      return {
         svgWidth: 0
      }
   },
   mounted() {
      window.addEventListener('load', this.innerWidthCalc, { once: true })
      window.addEventListener('resize', this.innerWidthCalc)
   },
   methods: {
      innerWidthCalc() {
         this.svgWidth = window.innerWidth / 2
         console.log(this.svgWidth)
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");

.footer-contact {
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 50px;
   margin: 0;
}

.contact-wrapper {
   background-image: url("../assets/images/emile-seguin-R9OueKOtGGU-unsplash.jpg");
   background-position: center;
   background-size: cover;
   height: 400px;
   width: 100%;
   background-color: var(--nord1);
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 20px 100px 120px 40px;
   row-gap: 40px;
   align-items: center;
   text-align: center;
}

.footer-contact-message {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 60px;
   text-align: center;
   align-items: center;
}

.contact-message {
   font-weight: 500;
}

.footer-icons {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
}

.separator {
   margin-right: 4px;
   margin-left: 4px;
}


</style>