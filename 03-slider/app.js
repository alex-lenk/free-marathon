'use strict';

const slider = document.querySelector('.slider')
const upBtn = document.querySelector('.slider__controls-up')
const downBtn = document.querySelector('.slider__controls-down')
const sidebar = document.querySelector('.slider__sidebar')
const sliderMain = document.querySelector('.slider__main')
const slidersCount = document.querySelectorAll('.slider__main-item').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidersCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex === slidersCount) {
      activeSlideIndex = 0
    }
  } else {
    activeSlideIndex--

    if (activeSlideIndex < 0) {
      activeSlideIndex = slidersCount - 1
    }
  }

  const height = slider.clientHeight

  sliderMain.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
