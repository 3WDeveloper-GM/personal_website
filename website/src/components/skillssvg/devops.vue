<template>
   <div ref="header">
      <svg width="58em" height="32em" preserveAspectRatio="none" viewBox="0 0 985 520" fill="none" xmlns="http://www.w3.org/2000/svg">
   <g id="Frame 1" clip-path="url(#clip0_1_2)">
      <rect width="985" height="520" fill="#2E3440" />
      <g class="content">
         <rect class="fades-out" y="80" width="148" height="30" fill="#D8DEE9" />
         <rect class="slider" x="148" y="80" width="651" height="30" fill="url(#paintt_linear_1_2)" />
         <rect class="slider" x="798.917" y="80" width="186.325" height="30" fill="#4C566A" />
         <text class="fades-out" id="Github" fill="black" xml:space="preserve"
            style="white-space: pre" font-family="Inter" font-size="12.6875" letter-spacing="0em"><tspan x="53.6853" y="99.6136">Github</tspan></text>
      </g>
   </g>
   <defs>
      <linearGradient id="paintt_linear_1_2" x1="148" y1="95" x2="799" y2="95"
         gradientUnits="userSpaceOnUse">
         <stop stop-color="#5E81AC" />
         <stop offset="0.502468" stop-color="#81A1C1" />
         <stop offset="1" stop-color="#88C0D0" />
      </linearGradient>
      <clipPath id="clip0_1_2">
         <rect width="985" height="520" fill="white" />
      </clipPath>
   </defs>
</svg>
   </div>
</template>

<script>

import { setDelayTimes } from '../utils/utils'

export default {
   mounted() {
      this.addDelayTimes()
   },
   methods: {
      addDelayTimes() {
         let element = this.$refs.header.getElementsByClassName("content")
         let offset = 500
         let delayStep = 500
         let elementNumber = element.length
         for (let index = 1; index <= elementNumber; index++) {
            let newOffset = setDelayTimes(element[elementNumber - index].children, delayStep, offset)
            offset = newOffset
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.fades-out {
   opacity: 0;
   animation-name: fadein;
   animation-duration: 1s;
   animation-delay: 5s;
   animation-fill-mode: forwards;
   animation-timing-function: ease-in-out;
}

@keyframes fadein {
   from {
      opacity: 0;
      transform: translateY(-50px);
   }

   to {
      opacity: 1;
      transform: translateY(0px);
   }
}

.slider {
   opacity: 0;
   width: 0;
   animation-name: slide;
   animation-duration: 3s;
   animation-delay: 5s;
   animation-fill-mode: forwards;
   animation-timing-function: ease-in-out;
}

@keyframes slide {
   from {
      opacity: 0;
      width: 0;
   }

   to {
      opacity: 1;
      width: 100%;
   }
}
</style>