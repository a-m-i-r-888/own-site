'use strict';

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

modalBtn.addEventListener('click', function () {
  modal.classList.toggle('active-modal')
})

closeModalBtn.addEventListener('click', function () {
  modal.classList.toggle('active-modal')
})