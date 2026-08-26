'use strict';

const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll(".side-bar a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});