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
            <div class="project-section"></div>
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
         ]
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
   grid-template-rows: 200px;
   text-align: center;
   align-items: center;
}

.project-section-wrapper {
   height: auto;
   width: 100%;
   display: grid;
   grid-template-columns: 9fr 16fr 9fr;
   grid-template-rows: 200px;
   text-align: center;
   align-items: center;
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



.keywords {
   font-weight: 600;
   margin-left: 5px;
   margin-right: 5px;
}
</style>