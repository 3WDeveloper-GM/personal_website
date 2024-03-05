<template>
   <div :class="classnames" ref="splashScreen" :style="setStyles">
      <i>
         <div class="greeting-container">
            <i></i>
            <i></i>
            <i></i>
            <i>
               <h1 class="titles title-options" ref="greetings">

               </h1>
            </i>
         </div>
      </i>
      <i>
         <div class="more-section-container">
            <i></i>
            <i>
               <h5 class="subtitle-options subtitles">
                  more
               </h5>
            </i>
            <i></i>
         </div>
      </i>
   </div>
</template>

<script>

import { removeTyping, typing } from './utils/utils'

export default {
   mounted() {
      this.toggleClassnames()
      this.CombinedTyping(this.typingText, this.unTyping)
      window.addEventListener('scroll', this.handleScroll)
   },
   data() {
      return {
         initialBlurValues: {
            blur: 20,
            opacity: 0.2
         },
         setStyles: {
         },
         classnames: ["container-basic", "fade-in"],
      }
   },
   methods: {
      handleScroll() {
         const scrollPosition = window.scrollY
         const maxScroll = 800
         const maxBlur = 20
         this.initialBlurValues.opacity = (scrollPosition < maxScroll)
            ? 1 - scrollPosition / maxScroll
            : 0
         this.initialBlurValues.blur = (scrollPosition > maxScroll)
            ? maxBlur
            : Math.ceil(maxBlur * (scrollPosition / maxScroll))

         this.setStyles = this.setStylesScroll()
      },
      setStylesScroll() {
         return {
            opacity: this.initialBlurValues.opacity,
            filter: "blur(" + this.initialBlurValues.blur + "px)"
         }
      },
      toggleClassnames() {
         setTimeout(() => {
            this.classnames = ["container-basic"]
         }, 1500)
      },
      typingText(resolve) {
         let element = this.$refs.greetings
         let typingSpeed = 200
         let message = "Hello, there"
         let iterations = message.length

         setTimeout(() => typing(element, message, typingSpeed, iterations, resolve), 1500)
      },
      unTyping() {
         let element = this.$refs.greetings
         let typingSpeed = 250
         let character = ","

         removeTyping(element, character, typingSpeed)
      },
      CombinedTyping(callback1, callback2) {
         return new Promise((resolve, reject) => {
            callback1(resolve)
         }).then(() => {
            callback2()
         })
      }
   },
}
</script>

<style lang="scss" scoped>
@import url("../assets/base.css");

* {
   margin: 0;

}

.container-basic {
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: 80vh 20vh;
   background-image: url("../assets/images/david-jusko-zVv47rYG3cg-unsplash.jpg");
   background-size: 100% 100%;
   background-repeat: no-repeat;
   height: 100vh;
   width: 100%;
   object-fit: cover;
}

.greeting-container {
   display: grid;
   height: 100%;
   width: 100%;
   grid-template-columns: 4fr 3fr;
   grid-template-rows: 4fr 3fr;
   align-items: center;
   text-align: center;
}

.more-section-container {
   display: grid;
   height: 100%;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr;
   align-items: end;
   text-align: center;
}

.title-options {
   color: #0e0d0d;
}

.subtitle-options {
   color: var(--nord5);
}

.fade-in {
   opacity: 0.2;
   filter: blur(20px);
   animation: fades;
   animation-delay: 190ms;
   animation-duration: 1500ms;
   animation-timing-function: ease-in-out;
   animation-fill-mode: forwards;
}

@keyframes fades {
   from {
      opacity: 0.2;
      filter: blur(20px);
   }

   to {
      opacity: 1;
      filter: blur(0px);
   }
}
</style>