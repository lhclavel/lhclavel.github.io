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

document.addEventListener("DOMContentLoaded", function () {
  // Typing effect
  const typingEl = document.querySelector(".typing");
  if (typingEl) {
    const text = typingEl.textContent;
    typingEl.textContent = "";

    function typeWriter() {
      let i = 0;
      function type() {
        if (i < text.length) {
          typingEl.textContent += text.charAt(i);
          i++;
          setTimeout(type, 80);
        } else {
          setTimeout(erase, 1500);
        }
      }
      function erase() {
        if (typingEl.textContent.length > 0) {
          typingEl.textContent = typingEl.textContent.slice(0, -1);
          setTimeout(erase, 40);
        } else {
          setTimeout(typeWriter, 500);
        }
      }
      type();
    }
    typeWriter();
  }

  let images = document.querySelectorAll(".certification_wrapper img");

  let maxWidth = 0;
  let maxHeight = 0;

  images.forEach((img) => {
    img.onload = function () {
      if (img.naturalWidth > maxWidth) maxWidth = img.naturalWidth;
      if (img.naturalHeight > maxHeight) maxHeight = img.naturalHeight;

      // Apply same dimensions to all images
      images.forEach((image) => {
        image.style.width = maxWidth + "px";
        image.style.height = maxHeight + "px";
      });
    };
  });
});
