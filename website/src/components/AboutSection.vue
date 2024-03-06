<template>
   <div id="about" class="header-whitespace">

   </div>
   <div class="header-logo">
      <i></i>
      <i>
         <LogoVue :style="styleSetter"></LogoVue>
      </i>
      <i></i>
   </div>
   <HeaderVue text="About"></HeaderVue>
   <div class="text-section">
      <i></i>
      <i>
         <div class="text-sections paragraph">
            Hi there! My name is Gabriel López. Based on Latin America, particularly in Honduras, I'm a recent
            electrical engineering and physics graduate from the <strong> Universidad Nacional Autónoma de
               Honduras</strong>, currently working on research that explores the frontier between physics and
            computing. Due to this fact alone, I can safely attest that I'm passionate about exploring new
            technologies
            and science related topics.
         </div><br>
         <div class="text-sections paragraph">
            Aside from my academic background, I'm quite the cinephile, and I've been this way since I entered
            college due to film recommendations by some of my colleages. My favorite directors are: <em>
               Nicholas WindingRefn, Bong
               Joon-ho, Park Chan-wook and Ingmar Bergman.</em>
            I am also fond of music and literature, particularly the latter, with philosophy being one of my favorite
            genres, although I must admit that most of their ideas pose a challenge to understand at times.
         </div>
      </i>
      <i>
         <div class="icons">
            <i>
               <h4 class="icon-item">
                  <a href="https://github.com/3WDeveloper-GM"> <i class="bi bi-github"></i></a>
               </h4>
            </i>
            <i>
               <h4 class="icon-item">
                  <a href="https://www.linkedin.com/in/3wgm/"><i class="bi icon-item bi-linkedin"></i></a>
               </h4>
            </i>
            <i>
               <h4 class="icon-item">
                  <a href="mailto:glopezmad@gmail.com"> <i class="bi icon-item bi-envelope"></i></a>
               </h4>
            </i>
         </div>
      </i>
      <i></i>
   </div>
</template>

<script>
import LogoVue from './Logo.vue'
import HeaderVue from './HeadersComp.vue'

export default {
   components: {
      LogoVue,
      HeaderVue
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
         const weight = 7
         this.angles.rotate = (scroller / weight)

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

a {
   color: inherit;
   text-decoration: none;
}


svg {
   height: inherit;
   width: inherit;
}


i {
   height: inherit;
   width: inherit;
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
   margin-top: 25px;
   margin-bottom: 25px;
}

.logo-rotation {
   transform: rotate(15);
}

.header-whitespace {
   height: 150px;
   width: 100%;
}


.text-section {
   margin-top: 15px;
   margin-bottom: 50px;
   display: grid;
   grid-template-columns: 9fr 15fr 2fr 9fr;
   column-gap: 30px;
   grid-template-rows: 50vh;
   align-items: center;
}

.icons {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr 1fr;
   row-gap: 40px;
   text-align: center;
   transition: all 500ms;
   align-items: center;
}


.icon-item:hover {
   transform: scale(1.25);
   transition: all 500ms ease-in-out;
}



.paragraph:hover {
   transform: scale(1.025);
   transition: all 500ms ease-in-out;
}
</style>