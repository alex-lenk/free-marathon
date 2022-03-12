'use strict';

const screens = document.querySelectorAll('.screen')
const start = document.querySelector('#start')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
let time = 20

start.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
    startGame()
  }
})

function startGame() {
  screens[1].classList.add('up')
  timeEl.innerHTML = `00:${time}`
}
