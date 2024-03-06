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


export function getDelayTimes(blockAmount, delayStep, offset) {
   let delaysArray = new Array(blockAmount)
   for (let index = 0; index < blockAmount; index++) {
      delaysArray[index] = (index % 3) * delayStep + offset
   }
   return delaysArray
}

export function setDelayTimes(element, delayStep, offset) {
   let childNodesAmount = element.length

   let delaysArray = getDelayTimes(childNodesAmount, delayStep, offset)
   for (let index = 0; index < childNodesAmount; index++) {
      element[index].style.animationDelay = `${delaysArray[index]}ms`
   }
   let nextOffset = Math.max(...delaysArray)
   return nextOffset
}

export function keySwap(keysObject, offset) {
   let skillsAmount = keysObject.length
   for (let index = 0; index < skillsAmount; index++) {
      keysObject[index].isActive = (((index - offset) % skillsAmount) + skillsAmount) % skillsAmount
   }
}