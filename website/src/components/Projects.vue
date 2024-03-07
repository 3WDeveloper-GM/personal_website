<template>
   <div id="projects" class="header-whitespace"> </div>
   <div class="contained">
      <div class="header-wrapper">
         <HeadersVue text="Projects"></HeadersVue>
      </div>


      <div class="keyword-bar">
         <i></i>
         <i>
            <span class="keywords text-sections">KEYWORDS</span>
            <span v-for="(item, index) in keywordLabels" :key="index"
               class="badge main-badge rounded-pill text-sections">
               {{ item }}
            </span>
         </i>
         <i></i>
      </div>

      <div class="project-section-wrapper">
         <i></i>
         <i>
            <div class="project-section">
               <i>
                  <div class="project-image" @mouseover="setClassName(0)" @mouseleave="setClassName(0)">
                     <img :class="currentImageClass[0].className" src="../assets/images/stock.png"
                        alt="stockwell-transform">
                  </div>
               </i>
               <i>
                  <h5 class="logo-section project-title">Power Quality Event Classifier</h5>
                  <p class="text-sections">
                     The simulated Power Quality Events (PQE) mentioned in the literature were processed using the
                     Stockwell transform to characterize their main properties and generate a tree based classifier
                     for real time sorting of PQEs on the wild.
                  </p>
                  <a href="https://github.com/3WDeveloper-GM/Python_Investigation" :class="currentBtnClass[0].className"
                     @mouseover="setButtonOutline(0)" @mouseleave="setButtonOutline(0)">
                        Github Repo
                  </a>
               </i>
            </div>
         </i>
         <i></i>
      </div>
   </div>
   <div id="projects" class="header-whitespace"> </div>
</template>

<script>

import HeadersVue from './HeadersComp.vue'

export default {
   components: {
      HeadersVue,
   },
   data() {
      return {
         keywordLabels: [
            "Power Systems",
            "Machine Learning",
            "Integral Transforms"
         ],
         isHovered: false,
         currentImageClass: [
            { className: ["image-centered"] }
         ],
         currentBtnClass: [
            { className: ["btn ", "repo-btn", "rounded-pill"] }
         ]
      }
   },
   methods: {
      setClassName(index) {
         this.isHovered = !this.isHovered
         // this.currentImageClass[index].isHovered = !this.currentImageClass[index].isHovered
         this.currentImageClass[index].className = (this.isHovered)
            ? ["image-centered", "image-on-hover"]
            : ["image-centered", "image-non-hover"]
         // console.log(this.currentImageClass)
      },
      setButtonOutline(index) {
         this.isHovered = !this.isHovered

         this.currentBtnClass[index].className = (this.isHovered)
            ? ["btn ", "repo-btn", "rounded-pill", "btn-hover"]
            : ["btn ", "repo-btn", "rounded-pill", "btn-offhover"]
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");

.contained {
   height: auto;
   width: 100%;
}

.project-section {
   display: grid;
   grid-template-columns: 9fr 16fr;
   grid-template-rows: 400px;
   column-gap: 150px;
   text-align: start;
   align-items: center;
}

.project-section-wrapper {
   height: 400px;
   width: 100%;
   display: grid;
   grid-template-columns: 9fr 21fr 9fr;
   grid-template-rows: 1fr;
   text-align: start;
   align-items: center;
   margin-top: 50px;
}

.project-title {
   font-weight: 400;
   font-style: italic;
}

.image-centered {
   height: inherit;
   width: inherit;
   margin: auto;
}

.image-on-hover {
   animation-name: onHover;
   animation-duration: 700ms;
   animation-timing-function: ease-in-out;
   animation-delay: 100ms;
   animation-fill-mode: forwards;
}

.image-non-hover {
   transform: scale(1.05) rotate(-2deg);
   animation-name: offHover;
   animation-duration: 700ms;
   animation-timing-function: ease-in-out;
   animation-delay: 100ms;
   animation-fill-mode: forwards;
}

@keyframes offHover {
   from {
      transform: scale(1.05) rotate(-2deg);
   }

   to {
      transform: scale(1.00) rotate(0deg);
   }
}

@keyframes onHover {
   from {
      transform: scale(1.00) rotate(0deg);
   }

   to {
      transform: scale(1.05) rotate(-2deg);
   }
}

.keyword-bar {
   margin-top: 50px;
   height: 40px;
   width: 100%;
   display: grid;
   grid-template-columns: 9fr 16fr 9fr;
   grid-template-rows: 1fr;
   text-align: center;
   align-items: center;
   margin-bottom: 20px;
}

.header-whitespace {
   height: 150px;
   width: 100%;
}

.header-wrapper {
   height: 100px;
   width: 100%;
}

.main-badge {
   background-color: var(--nord3);
   color: var(--nord5);
   font-weight: 600;
   margin-left: 5px;
   margin-right: 5px;
}

.project-image {
   height: 300px;
   width: 300px;
   clip-path: circle(50%);
   margin: 0 auto;
}

.keywords {
   font-weight: 600;
   margin-left: 5px;
   margin-right: 5px;
}

.repo-btn {
   color: var(--nord0);
   border-color: var(--nord0);
}


.btn-hover {
   animation-name: btn-onhover;
   animation-duration: 700ms;
   animation-timing-function: ease-in-out;
   animation-delay: 100ms;
   animation-fill-mode: forwards;
}

.repo-link {
   text-decoration: none;
   color: inherit;
}

@keyframes btn-onhover {
   from {
      background-color: #FFF;
      color: var(--nord0);
   }

   to {
      background-color: var(--nord0);
      color: #FFF;
   }
}

.btn-offhover {
   background-color: var(--nord0);
   color: #FFF;
   animation-name: btn-offhover;
   animation-duration: 700ms;
   animation-timing-function: ease-in-out;
   animation-delay: 100ms;
   animation-fill-mode: forwards;
}

@keyframes btn-offhover {
   from {
      background-color: var(--nord0);
      color: #FFF;
   }

   to {
      background-color: #FFF;
      color: var(--nord0);
   }
}
</style>