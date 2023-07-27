{
  'use strict'
  const pElement = document.getElementById('second')
  const buttonElement = document.querySelector('button')

  const showCountDown = (seconds) => {
    const startTime = new Date().getTime()
    const endTime = startTime + seconds * 1000 
    
    const intervalID = setInterval(() => {
      const currentTime = new Date().getTime()
      const restTime = Math.ceil((endTime - currentTime)/1000)
      pElement.textContent = restTime
      
      if(restTime < 10){
        pElement.textContent = '0' + restTime
      }
      if(restTime < 1){
        clearInterval(intervalID)
      }
    },1000)
  }
  buttonElement.addEventListener('click',() => {
    showCountDown(10)
  })
}

