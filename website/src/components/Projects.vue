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
                     <img :class="currentImageClass.className" src="../assets/images/stock.png" alt="stockwell-transform">
                  </div>
               </i>
               <i>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam at numquam sequi. Nam excepturi mollitia, beatae corrupti, iste commodi ipsam magnam ad perspiciatis odio voluptas minus nobis laboriosam! Qui nam, cupiditate obcaecati dolorum possimus ab autem temporibus quam natus aspernatur unde sequi perferendis aliquam deserunt minus harum a eligendi esse.
               </i>
            </div>
         </i>
         <i></i>
      </div>


   </div>
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
         ]
      }
   },
   methods: {
      setClassName(index) {
         this.isHovered = !this.isHovered
         // this.currentImageClass[index].isHovered = !this.currentImageClass[index].isHovered
         this.currentImageClass[index].className = (this.currentImageClass[index].isHovered)
            ? ["image-centered", "image-on-hover"]
            : ["image-centered", "image-non-hover"]
         // console.log(this.currentImageClass)
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");

.contained {
   height: 1000px;
   width: 100%;
}

.project-section {
   display: grid;
   grid-template-columns: 9fr 16fr;
   grid-template-rows: 400px;
   text-align: center;
   align-items: center;
}

.project-section-wrapper {
   height: 400px;
   width: 100%;
   display: grid;
   grid-template-columns: 9fr 21fr 9fr;
   grid-template-rows: 1fr;
   text-align: center;
   align-items: center;
   margin-top: 50px;
}

.image-centered {
   height: inherit;
   width: inherit;
   margin: auto;
}

.image-on-hover {
   animation-name: onHover;
   animation-duration: 1200ms;
   animation-timing-function: ease-in-out;
   animation-delay: 100ms;
   animation-fill-mode: forwards;
}

.image-non-hover {
   animation-name: offHover;
   animation-duration: 1200ms;
   animation-timing-function: ease-in-out;
   animation-delay: 100ms;
   animation-fill-mode: forwards;
}

@keyframes offHover {
   from {
      transform: scale(1.05) rotate(-5deg);
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
      transform: scale(1.05) rotate(-5deg);
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
}

.keywords {
   font-weight: 600;
   margin-left: 5px;
   margin-right: 5px;
}
</style>