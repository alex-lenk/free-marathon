'use strict';

const screens = document.querySelectorAll('.screen')
const start = document.querySelector('#start')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const boardEl = document.querySelector('#board')
const colors = ['#0D3B66', '#FAF0CA', '#F4D35E', '#EE964B', '#F95738']
let time = 0
let score = 0

start.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    screens[1].classList.add('up')
    time = parseInt(event.target.getAttribute('data-time'))
    startGame()
  }
})

boardEl.addEventListener('click', event => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

function startGame() {
  setInterval(decreaseTime, 1000)
  createRandomCircle()
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`
}

function finishGame() {
  timeEl.parentElement.classList.add('hide')
  boardEl.innerHTML = `<h2>Ваш счёт: <strong>${score}</strong></h2>`
}

function createRandomCircle() {
  const circle = document.createElement('div')
  circle.classList.add('circle')

  const size = getRandomNum(10, 60)
  const {width, height} = boardEl.getBoundingClientRect()

  circle.style.cssText = `
  width: ${size}px;
  height: ${size}px;
  top: ${getRandomNum(0, height- size)}px;
  left: ${getRandomNum(0, width - size)}px;
  background: ${getRandomColor()}
  `

  boardEl.append(circle)
}

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
