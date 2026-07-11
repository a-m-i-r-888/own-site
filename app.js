const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
console.log(document.querySelectorAll('.slide').length);
let number = 0;
const totalSlide = slide.length;
const goToSlide = function (num) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${(i - num) * 100}%)`
  })
}
goToSlide(0)
// const nextSlide = function () {
//   if (number === totalSlide - getSlidesPerView()) number = 0;
//   else number++;
//   goToSlide(number);
// }
// const preSlide = function () {
//   if (number === 0) number = totalSlide - getSlidesPerView();
//   else number--;
//   goToSlide(number);
// }
// make slider container's height responsive
const p = slider.querySelectorAll('p');
let paragraphHeight;
// important
// const getSlidesPerView = function () {
//   if (window.innerWidth <= 576) return 3;
//   if (window.innerWidth <= 768) return 4;
//   if (window.innerWidth <= 992) return 5;
//   return 6;
// }
const calcSliderHeight = function () {
  p.forEach(line => {
    paragraphHeight = getComputedStyle(line).height;
  })
  const mainParagraphHeight = Number(paragraphHeight.slice(0, -2));
  const totalHeight = mainParagraphHeight + 10 + 'px';
  slider.style.height = totalHeight;
}
window.addEventListener('resize', function () {
  calcSliderHeight();
  // getSlidesPerView();
})
window.addEventListener('load', function () {
  calcSliderHeight();
  // getSlidesPerView();
})