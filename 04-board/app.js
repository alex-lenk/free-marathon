'use strict';

const board = document.querySelector('#board')
const squaresNumber = 500
const colors = ['#0D3B66', '#FAF0CA', '#F4D35E', '#EE964B', '#F95738']

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const el = event.target
  const color = getRandomColor()
  el.style.cssText = `background-color: ${color}; box-shadow: 0 0 20px ${color}`
}

function removeColor(event) {
  const el = event.target
  el.style.cssText = `background-color: #1d1d1d; box-shadow: 0 0 20px 0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
