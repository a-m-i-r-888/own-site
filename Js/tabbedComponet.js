'use strict';

// Tabbed componet
// select the Tabs
document.querySelector('.operations__tab-container').addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')
  const test = document.querySelector(
    `.operations__tab--${clicked.dataset.tab}`
  );

  // guard clause
  if (!clicked) return
  // remove old active class and ad the new(tabs and contents)
  document.querySelectorAll('.operations__tab').forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');
})