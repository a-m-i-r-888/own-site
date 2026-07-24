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
        lenis.scrollTo(`#${id}`, {
          offset: -111,
          duration: 1.2
        });
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
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') nextSlide();
  // else if (e.key === 'ArrowLeft') preSlide();
  e.key === 'ArrowLeft' && preSlide();
})
// make slider container's height responsive
const comments = document.querySelectorAll(".comment p");
const userName = document.querySelectorAll(".user-information-container h3");
const userRoll = document.querySelectorAll(".user-information-container p");
let commentsHeight;
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


// fourth section check marks
const fourthSection = document.querySelector('.forth-section')
const checkMarks = document.querySelectorAll('.forth-section .icon-box ul li i');

const activeCheckMarks = function (entries) {
  const [entry] = entries
  if (entry.isIntersecting) {
    checkMarks.forEach((checkMark, index) => {
      setTimeout(() => {
        checkMark.classList.add('active')
      }, index * 600);
    });
  }
}
const fourthSectionObserve = new IntersectionObserver(activeCheckMarks, {
  root: null,
  threshold: 0,
  rootMargin: "-550px",
});
fourthSectionObserve.observe(fourthSection)