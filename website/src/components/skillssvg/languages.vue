<template>
   <div ref="header">
      <svg width="58em" height="32em" preserveAspectRatio="none" viewBox="0 0 985 520" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="985" height="520" fill="#1E1E1E" />
         <g>
            <rect width="985" height="520" fill="#2E3440" />
            <g class="content">
               <rect class="fades-out" y="135" width="147.75" height="29.9208" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="135" width="754.034" height="30" fill="url(#paint0_linear_0_1)" />
               <rect class="slider" x="901.542" y="135" width="83.4581" height="30" fill="#4C566A" />
               <text class="fades-out" id="Spanish" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
                  font-size="12.6875" letter-spacing="0em">
                  <tspan x="50.1107" y="154.574">Spanish</tspan>
               </text>
            </g>
            <g class="content">
               <rect class="fades-out" y="80" width="148" height="30" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="80" width="651.167" height="30" fill="url(#paint1_linear_0_1)" />
               <rect class="slider" x="798.675" y="80" width="186.325" height="30" fill="#4C566A" />
               <text class="fades-out" id="English" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
                  font-size="12.6875" letter-spacing="0em">
                  <tspan x="52.4339" y="99.6136">English</tspan>
               </text>
            </g>
         </g>
         <defs>
            <linearGradient id="paint0_linear_0_1" x1="147.507" y1="150" x2="901.542" y2="150"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="147.507" y1="95" x2="798.675" y2="95"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
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

.header {
   height: 520;
   width: 985;
}

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
   animation-name: slide;
   animation-duration: 4s;
   animation-delay: 5s;
   animation-fill-mode: forwards;
   animation-timing-function: ease-in-out;
   max-width: 100%;
}

@keyframes slide {
   from {
      opacity: 0;
      width: 0%;
   }

   to {
      opacity: 1;
      width: 100%;
   }
}
</style>