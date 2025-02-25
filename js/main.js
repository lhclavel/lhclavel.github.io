// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }

  // Background Fade Effect on Scroll
  let scrollPosition = window.scrollY;
  let banner = document.querySelector(".banner_wrapper");
  let fadeStart = 100;
  let fadeEnd = 400;

  let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
  banner.style.opacity = Math.max(opacity, 0); //
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
