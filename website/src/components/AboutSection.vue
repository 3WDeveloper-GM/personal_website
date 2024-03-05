<template>
   <div class="header-whitespace">

   </div>
   <div class="header-logo">
      <i></i>
      <i>
         <LogoVue></LogoVue>
      </i>
      <i></i>
   </div>
   <div class="text-section">
      <i></i>
      <i></i>
      <i></i>
   </div>
</template>

<script>
import LogoVue from './Logo.vue'

export default {
   components: {
      LogoVue
   },
   data() {
      return {
         angles: {
            rotate: 0,
         },
         styleSetter: {
         }
      }
   },
   mounted() {
      window.addEventListener('scroll', this.handleScrollRotation)
   },
   methods: {
      handleScrollRotation() {
         const scroller = window.scrollY
         const weight = 5
         this.angles.rotate = (scroller/weight) 

         this.styleSetter = this.setRotation()
      },
      setRotation() {
         return {
            transform: "rotate(" + this.angles.rotate + "deg)"
         }
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");




svg {
   height: inherit;
   width: inherit;
}


i {
   height: inherit;
   width: inherit;
}

* {
   height: 1200px;
   width: 100%;
   background-color: #FFF;
}

.logo {
   height: 100px;
   width: 100%;
}

.header-logo {
   display: grid;
   height: 300px;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 1fr;
   align-items: center;
   margin-top: 100px;
}

.logo-rotation {
   transform: rotate(15);
}

.header-whitespace {
   height: 150px;
   width: 100%;
}


.text-section {
   display: grid;
   height: 500px;
   padding: 50px;
   grid-template-columns: 2fr 1fr 2fr;
   align-items: center;
}
</style>