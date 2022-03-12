'use strict';

const board = document.querySelector('#board')
const squaresNumber = 500
const colors = ['#0D3B66', '#FAF0CA', '#F4D35E', '#EE964B', '#F95738']

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}

function setColor(el) {
  const color = getRandomColor()
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 20px ${color}`
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d '
  el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}
