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

