import { resolveComponent } from "vue"

export function iterativeBlurring(blurValues, direction, timeStep, iterations) {
   let counter = 0
   let intervalId = window.setInterval(() => {

      let opacityStep = 0.05
      let blurStep = 2
      let newOpacity = (blurValues.opacity < 1)
         ? blurValues.opacity + (opacityStep * direction)
         : 1
      let newBlur = (blurValues.blur > 0)
         ? blurValues.blur - (blurStep * direction)
         : 0

      blurValues.opacity = newOpacity
      blurValues.blur = newBlur

      if (++counter === iterations || blurValues.isOn) {
         window.clearInterval(intervalId)
      }
   }, timeStep)
}

export function typing(element, message ,timeStep, iterations, resolve) {
   let counter = 0 
   let intervalID = window.setInterval(() => {
      element.innerHTML += message[counter]
      counter++

      if (counter === iterations) {
         window.clearInterval(intervalID)
         resolve()
      }
   }, timeStep)

}

export function removeTyping(element, character, timeStep) {
   let counter = 0 
   let size = element.innerHTML.length
   let intervalID = window.setInterval(() => {
      element.innerHTML = element.innerHTML.slice(0,size-counter)
      counter++
      console.log(element.innerHTML)

      if (element.innerHTML.at(-1) === character) {
         element.innerHTML = element.innerHTML.slice(0,size-counter)
         window.clearInterval(intervalID)

      }
   }, timeStep)

}

