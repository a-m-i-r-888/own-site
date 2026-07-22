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