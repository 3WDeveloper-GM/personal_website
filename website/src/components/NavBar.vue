<template>
   <div class="bar" :class="navBarPosition" :style="navBarStyles">
      <div class="grids">
         <i></i>
         <i v-for="(item, index) in navBArCategories" :key="index">
            <a :href="item.href" :class="[item.style, item.active]">{{ item.name }}</a>
         </i>
         <i></i>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         navBarPosition: [" relative "],
         navBArCategories: [
            { name: "Home", href: "#", style: ["h5", "titles", "title-options"], active: "" },
            { name: "About", href: "#about", style: ["h5", "titles", "title-options"], active: "" },
            { name: "Skills", href: "#skills", style: ["h5", "titles", "title-options"], active: "" },
            { name: "Projects", href: "#projects", style: ["h5", "titles", "title-options"], active: "" },
            { name: "Contact", href: "#contact", style: ["h5", "titles", "title-options"], active: "" }
         ],
         opacityVariables: {
            opacity: 0.2,
            blur: 20
         },
         navBarStyles: {
         }
      }
   },
   mounted() {
      window.addEventListener('scroll', this.handleScrollNavPosition)
      window.addEventListener('scroll', this.handleScrollStyles)
      window.addEventListener('scroll', this.handleScrollOpacity)
   },
   methods: {
      setStylesScroll() {
         return {
            opacity: this.opacityVariables.opacity,
            filter: "blur(" + this.opacityVariables.blur + "px)"
         }
      },
      handleScrollOpacity() {
         const scrollPos = window.scrollY
         const maxScroll = 1026.5
         const maxBlur = 2


         this.opacityVariables.opacity = (scrollPos < maxScroll)
            ? 0.60 * (scrollPos / maxScroll)
            : 0.60
         this.opacityVariables.blur = (scrollPos < maxScroll)
            ? maxBlur * (1 - scrollPos / maxScroll)
            : 0

         this.navBarStyles = this.setStylesScroll()
      },
      handleScrollNavPosition() {
         const scrollPosition2 = window.scrollY
         const maxScroll = 1031
         this.navBarPosition = (scrollPosition2 > maxScroll)
            ? ["top"]
            : ["relative"]


      },
      handleScrollStyles() {
         const breakpointNumber = 4
         const breakpoints = [993, 2223, 3200, 3800]
         const scrollPosition3 = window.scrollY

         this.navBArCategories[0].active = (scrollPosition3 <= breakpoints[0])
            ? "is-active"
            : ""
         for (let index = 1; index < breakpointNumber; index++) {
            this.navBArCategories[index].active = (breakpoints[index - 1] <= scrollPosition3 && scrollPosition3 < breakpoints[index])
               ? "is-active"
               : ""
         }
         this.navBArCategories[breakpointNumber].active = (breakpoints[breakpointNumber - 1] < scrollPosition3)
            ? "is-active"
            : ""
      }
   }
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");


i {
   padding: 0.5px;
}

.bar {
   opacity: 0.2;
   display: grid;
   height: 50px;
   width: 100%;
   background-color: var(--nord0);
   z-index: 1000;
   transition: all 100ms;
}

.is-active {
   border-top: 2px solid var(--nord4);
}

.grids {
   display: grid;
   height: inherit;
   grid-template-columns: 4fr 1fr 1fr 1fr 1fr 1fr 4fr;
   align-items: center;
   text-align: center;
}

.title-options {
   color: var(--nord6);
   font-weight: 300;
   text-decoration: none;
   padding: 10px;
}

.top {
   position: fixed;
   top: 0px;
}

.relative {
   position: relative;
   top: auto
}
</style>