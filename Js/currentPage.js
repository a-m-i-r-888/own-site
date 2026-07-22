'use strict';

const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("header nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});