/*
* Мне кажется мой код оптимизированнее чем в видео у Владлена
* Так как использую делегирование событий.
* По мнению многих экспертов, делегирование событий дорогостоящая операция,
* потому имеет смысл повесить обработчик на один элемент.
* */

document
  .querySelector('.slider')
  .addEventListener('click', function (event) {
    if (!event.target.classList.contains('slider')) {
      for (const slide of this.children) {
        slide.classList.remove('slide__active');
      }
      event.target.classList.add('slide__active');
    }
  })

/*
const sliders = document.querySelectorAll('.slide')

for (const slide of sliders) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('slide__active');
  })
}

function clearActiveClasses() {
  sliders.forEach(slide => {
    slide.classList.remove('slide__active')
  })
}
*/
