'use strict';

// infinity slider
const slider = document.querySelector('.slider');
const slide = document.querySelectorAll('.slide');
let number = 0;
const totalSlide = slide.length;
const goToSlide = function (num) {
  slide.forEach((s, i) => {
    s.style.transform = `translateX(${(i - num) * 100}%)`
  })
}
goToSlide(0)
const p = slider.querySelectorAll('p');
let paragraphHeight;
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
})
window.addEventListener('load', function () {
  calcSliderHeight();
})


// scroll to section
document.querySelectorAll('.navbar').forEach(navbar => {
  navbar.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link') && e.target.getAttribute('href').includes('section')) {
      e.preventDefault()
      const id = e.target.getAttribute('href');
      if (id.includes('section'))
        // document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        lenis.scrollTo(`#${id}`);
    }
  })
})



// comments slider

const slider2 = document.querySelector('.comments-card-container');
const slide2 = document.querySelectorAll('.comments-card');
const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');
let number2 = 0;
const totalSlide2 = slide2.length;
const goToSlide2 = function (num) {
  slide2.forEach((s, i) => {
    s.style.transform = `translateX(${(i - num) * 105}%)`
  })
}
goToSlide2(0)
const nextSlide = function () {
  if (number2 === totalSlide2 - getSlidesPerView()) number2 = 0;
  else number2++;
  goToSlide2(number2);
}
const preSlide = function () {
  if (number2 === 0) number2 = totalSlide2 - getSlidesPerView();
  else number2--;
  goToSlide2(number2);
}
rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', preSlide);
// make slider container's height responsive
const comments = document.querySelectorAll(".comment p");
const userName = document.querySelectorAll(".user-information-container h3");
const userRoll = document.querySelectorAll(".user-information-container p");
let commentsHeight;
let paragraphHeight2;
let userNameHeight;
let userRollHeight;
// important
const getSlidesPerView = function () {
  // if (window.innerWidth <= 576) return 3;
  // if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 992) return 2;
  return 3;
}
const calcSliderHeight2 = function () {
  let mainCommentsHeight = 0;
  comments.forEach(comment => {
    if (Number(getComputedStyle(comment).height.slice(0, -2)) > mainCommentsHeight) mainCommentsHeight = getComputedStyle(comment).height.slice(0, -2);
  })
  userName.forEach(name => {
    userNameHeight = getComputedStyle(name).height.slice(0, -2);
  })
  userRoll.forEach(roll => {
    userRollHeight = getComputedStyle(roll).height.slice(0, -2);
  })
  const totalHeight2 = Number(userRollHeight) + Number(userNameHeight) + Number(mainCommentsHeight) + 90 + 'px';
  slider2.style.height = totalHeight2;
}
window.addEventListener('resize', function () {
  calcSliderHeight2();
  getSlidesPerView();
})
window.addEventListener('load', function () {
  calcSliderHeight2();
  getSlidesPerView();
})

// const dotsContainer = document.querySelector('.dots');
// const creatDots = function () {
//   slide.forEach(function (_, i) {
//     dotsContainer.insertAdjacentHTML('beforeend',
//       `<button class="dots__dot" data-slide="${i}"></button>`)
//   });
// }
// const activateDot = function (slide) {
//   dotsContainer.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
//   dotsContainer.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
// }
// dotsContainer.addEventListener('click', function (e) {
//   if (e.target.classList.contains('dots__dot')) {
//     const go = e.target.dataset.slide
//     goToSlide(go);
//     activateDot(go);
//   }
// })