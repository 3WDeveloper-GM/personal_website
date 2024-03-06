<template>
   <div ref="header">
      <svg width="985" height="520" viewBox="0 0 985 520" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="985" height="520" fill="#1E1E1E" />
         <g id="Frame 2">
            <rect width="985" height="520" fill="#2E3440" />
            <g class="content">
               <rect class="fades-out" y="300" width="148" height="30" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="300" width="595.852" height="30" fill="url(#paintr_linear_0_1)" />
               <rect class="slider" x="743.36" y="300" width="241.64" height="30" fill="#4C566A" />
               <text class="fades-out" id="PowerWorld Sim" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="24.9897" y="319.614">PowerWorld Sim</tspan>
               </text>
            </g>
            <g class="content">
               <rect class="fades-out" y="245" width="148" height="30" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="245" width="560.916" height="30" fill="url(#paintw_linear_0_1)" />
               <path class="slider" d="M708.424 245H985V275H708.424V245Z" fill="#4C566A" />
               <text class="fades-out" id="Autocad" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="48.6699" y="264.614">Autocad</tspan>
               </text>
            </g>
            <g class="content">
               <rect class="fades-out" y="190" width="148" height="30" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="190" width="773.443" height="30" fill="url(#painte_linear_0_1)" />
               <rect class="slider" x="920.951" y="190" width="64.0493" height="30" fill="#4C566A" />
               <text class="fades-out" id="Office Suite" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="38.749" y="209.614">Office Suite</tspan>
               </text>
            </g>
            <g class="content">
               <rect class="fades-out" y="135" width="148" height="30" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="135" width="722.01" height="30" fill="url(#painty_linear_0_1)" />
               <rect class="slider" x="869.517" y="135" width="115.483" height="30" fill="#4C566A" />
               <text class="fades-out" id="Markdown" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="42.5156" y="154.614">Markdown</tspan>
               </text>
            </g>
            <g class="content">
               <rect class="fades-out" y="80" width="148" height="30" fill="#D8DEE9" />
               <rect class="slider" x="147.507" y="80" width="773.443" height="30" fill="url(#paintu_linear_0_1)" />
               <rect class="slider" x="920.951" y="80" width="64.0493" height="30" fill="#4C566A" />
               <text class="fades-out" id="LaTeX" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="55.5712" y="99.6136">LaTeX</tspan>
               </text>
            </g>
         </g>
         <defs>
            <linearGradient id="paintw_linear_0_1" x1="147.507" y1="260" x2="708.424" y2="260"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="painte_linear_0_1" x1="147.507" y1="205" x2="920.951" y2="205"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paintr_linear_0_1" x1="147.507" y1="315" x2="743.36" y2="315"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="painty_linear_0_1" x1="147.507" y1="150" x2="869.517" y2="150"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paintu_linear_0_1" x1="147.507" y1="95" x2="920.951" y2="95"
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