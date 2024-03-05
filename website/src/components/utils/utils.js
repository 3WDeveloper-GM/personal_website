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

export function typing(element, message, timeStep, iterations) {
   return new Promise(resolve => {
      let counter = 0
      let intervalID = window.setInterval(() => {
         element.innerHTML += message[counter]
         counter++

         if (counter === iterations) {
            window.clearInterval(intervalID)
            resolve()
         }
      }, timeStep)
   })
}

export function removeTyping(element, phrase, timeStep) {
   return new Promise(resolve => {
      if (phrase !== "\n") {
         let counter = 0
         let size = element.innerHTML.length
         let intervalID = window.setInterval(() => {
            element.innerHTML = element.innerHTML.slice(0, size - counter)
            counter++
            if (element.innerHTML === phrase) {
               window.clearInterval(intervalID)
               resolve()
            }
         }, timeStep)
      }
   })
}



