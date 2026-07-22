'use strict';

const navHoverHandler = function (e) {
  if (e.target.classList.contains('nav-link') & !e.target.classList.contains('active')) {
    const hovered = e.target
    const links = hovered.closest('.top-header-nav').querySelectorAll('.nav-link');
    const logo = hovered.closest('.top-header-content').querySelector('img');
    const headerBtn = hovered.closest('.top-header-content').querySelector('button');
    links.forEach(e => {
      if (e !== hovered) e.style.opacity = this;
    })
    logo.style.opacity = this;
    headerBtn.style.opacity = this;
  }
}
document.querySelector('.top-header-content').addEventListener('mouseover', navHoverHandler.bind(0.6))
document.querySelector('.top-header-content').addEventListener('mouseout', navHoverHandler.bind(1))