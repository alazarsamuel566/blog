// Mobile menu button
var menuBtn = document.getElementById("menuBtn");
var navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("show");
});

// Close the menu when a link is clicked
var allLinks = navLinks.querySelectorAll("a");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("show");
  });
});
