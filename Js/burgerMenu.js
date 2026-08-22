'use strict';
// burger menu
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuLine = document.querySelectorAll('.burger-menu-line');
const mobileMenuPopUp = document.querySelector('.mobile-menu-pop-up')
burgerMenu.addEventListener('click', function () {
  burgerMenuLine.forEach(line => line.classList.toggle('active'));
  mobileMenuPopUp.classList.toggle('active')
})