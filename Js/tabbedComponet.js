'use strict';

// Tabbed componet
// select the Tabs
document.querySelector('.operations__tab-container').addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')
  // guard clause
  if (!clicked) return
  // remove old active class and ad the new(tabs and contents)
  document.querySelectorAll('.operations__tab').forEach(tab => tab.classList.remove('operations__tab--active'));
  // c === content
  document.querySelectorAll('.operations__content').forEach(c => c.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active');

  // change content
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})