const currentPage = window.location.pathname.split("/").pop();
console.log(currentPage);
document.querySelectorAll("header nav a").forEach(link => {
  console.log(link.getAttribute('href') === currentPage)
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});