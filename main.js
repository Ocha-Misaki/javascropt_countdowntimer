{
  'use strict'

  const pElement = document.querySelector('p')
  const buttonElement = document.querySelector('button')

  buttonElement.addEventListener('click',() => {
    const showClock = () => {
      setTimeout(() => {
        pElement.textContent = new Date()
        showClock()
      },1000)
    }
    showClock()

  })
  
}

