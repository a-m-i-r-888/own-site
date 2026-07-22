'use strict';

const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;

  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent = (scrollTop / documentHeight) * 100;

  progressBar.style.width = scrollPercent + '%';
});