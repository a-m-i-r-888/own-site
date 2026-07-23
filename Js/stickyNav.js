'use strict';
const body = document.querySelector('body')
const header = document.querySelector('header')
const nav = document.querySelector('.top-header-content')
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries
  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
    body.style.paddingTop = `${navHeight}px`;
  }
  else {
    nav.classList.remove('sticky')
    body.style.paddingTop = "0";
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
});
headerObserver.observe(header)