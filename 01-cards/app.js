'use strict';

/*
* Мне кажется мой код оптимизированнее чем в видео у Владлена
* Так как использую делегирование событий.
* По мнению многих экспертов, делегирование событий дорогостоящая операция,
* потому имеет смысл повесить обработчик на один элемент.
* */

function sliderPlugin(activeEl = 0) {
  document.querySelectorAll('.slide')[activeEl].classList.add('slide__active')

  document.querySelector('.slider').addEventListener('click', function (event) {
    if (!event.target.classList.contains('slider')) {
      for (const slide of this.children) {
        slide.classList.remove('slide__active');
      }
      event.target.classList.add('slide__active');
    }
  })

}

sliderPlugin(1)
