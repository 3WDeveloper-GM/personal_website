<template>
   <div id="skills" class="header-whitespace"> </div>

   <HeaderVue text="Skills" textColor="#d8dee9" underline="#eceff4"></HeaderVue>
   <div class="text-container-skills">
      <i></i>
      <i>
         <div class="text-sections text-sections-bg-dark paragraph">
            In the classic sense, I think that most of my skills come from the things that interest me.
            Following from the previous point, I do think that in this day and age, most, if not all of
            the new discoveries and techniques discovered in science and technology go hand in hand with
            the advent of computers. That's why they interested me in the first place. You can build all
            your wildest dreams with them.
         </div>
      </i>
      <i></i>
   </div>
   <div class="skills-visualization-container">
      <i></i>
      <i>
         <div class="skills-wrapper-container">
            <i>
               <div class="skills-list">
                  <i v-for="(item, index) in listItems" :key="index" @mouseover="selectItem(index)"
                     @mouseleave="changeItem(index)" @click="keySwapper(index)">
                     <h5 class="logo-section skill-item">{{ item.name }}</h5>
                  </i>
               </div>
            </i>
            <i>
               <div class="logo-list">
                  <i></i>
                  <i>
                     <h1>
                        <i :class="className"></i>
                     </h1>
                  </i>
                  <i></i>
               </div>
            </i>
            <i>
               <Transition name="fade" mode="out-in">
              <!--- <component v-for="item in componentList" :key="item.name" :is="item.component" v-show="isKeyActive(item.isActive)"></component> --->
              <component :is="currentComponent"></component>
              </Transition>
            </i>
         </div>
      </i>
   </div>
</template>

<script>
import HeaderVue from './HeadersComp.vue'
import devopsVue from './skillssvg/devops.vue'
import langsVue from './skillssvg/languages.vue'
import ProgLangs from './skillssvg/progLangs.vue'
import webdevVue from './skillssvg/webdev.vue'
import MiscelVue from './skillssvg/miscell.vue'

//import { keySwap } from './utils/utils'


export default {
   components: {
      HeaderVue,
      ProgLangs,
      langsVue,
      webdevVue,
      devopsVue,
      MiscelVue,
   },
   data() {
      return {
         listItems: [
            { name: "DevOps", icon: "bi bi-gear" },
            { name: "Programming", icon: "bi bi-code" },
            { name: "WebDev", icon: "bi bi-browser-firefox" },
            { name: "Languages", icon: "bi bi-translate" },
            { name: "Miscellaneous", icon: "bi bi-kanban-fill" }
         ],
         className: "",
         componentList: [
            {name: "devops", component: "devopsVue", isActive: 0},
            {name: "programming", component: "ProgLangs",isActive:1},
            {name: "webdev", component: "webdevVue", isActive:2},
            {name: "languages", component: "langsVue", isActive:3},
            {name: "languages", component: "MiscelVue", isActive:4}
         ],
         currentComponent: "ProgLangs"
      }
   },
   methods: {
      selectItem(index) {
         this.className = this.listItems[index].icon.split(" ")
         this.className.push("logo-item")
      },
      changeItem(index) {
         this.className = this.listItems[index].icon.split(" ")
         this.className.push("fade-out")
      },
      isKeyActive(key) {
         return key === 0
      },
      keySwapper(index) {
         //keySwap(this.componentList,index)
         this.currentComponent = this.componentList[index].component
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");

* {
   background-color: var(--nord0);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.header-whitespace {
   height: 4rem;
   width: 100%;
}

.text-container-skills {
   display: grid;
   grid-template-columns: 9fr 16fr 9fr;
   grid-template-rows: 200px;
   align-items: center;
   text-align: center;
}

.skills-visualization-container {
   display: grid;
   grid-template-columns: 9fr 36fr 9fr;
   grid-template-rows: 32em;
   align-items: center;
   text-align: center;

}

.skills-wrapper-container {
   display: grid;
   grid-template-rows: 32em;
   grid-template-columns: 9fr 9fr 36fr;
   column-gap: 30px;
   align-items: center;
}

.skills-list {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(5, 35px);
   row-gap: 15px;
   color: var(--nord6);
   align-items: center;
}

.skill-item:hover {
   font-weight: 300;
}

.logo-list {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 95px 100px 95px;
   align-items: center;
}

.logo-item {
   opacity: 0;
   color: var(--nord3);
   animation-name: fades;
   animation-fill-mode: forwards;
   animation-timing-function: ease-in-out;
   animation-duration: 1400ms;
   animation-delay: 50ms;
}

@keyframes fades {
   from {
      opacity: 0;
      filter: blur(20px);
   }

   to {
      opacity: 1;
      filter: blur(0px);
   }

}

.fade-out {
   opacity: 1;
   color: var(--nord3);
   animation-name: blur;
   animation-timing-function: ease-in-out;
   animation-fill-mode: forwards;
   animation-duration: 1400ms;
   animation-delay: 20ms;
}

@keyframes blur {
   from {
      opacity: 1;
      filter: blur(0px);
   }

   to {
      opacity: 0;
      filter: blur(20px);
   }
}



.text-sections-bg-dark {
   color: var(--nord6);
}

.paragraph:hover {
   transform: scale(1.025);
   transition: all 500ms ease-in-out;
}
</style>