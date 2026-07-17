// Header Scroll — switch navbar text color when past the hero
let nav = document.querySelector(".navbar");

// Watch the HERO section: when it leaves view, switch to dark text for ALL sections below
const heroSection = document.querySelector("#home");
if (heroSection) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Hero is visible — white text (on dark photo)
          nav.classList.remove("header-scrolled");
        } else {
          // Hero is gone — dark charcoal text (stays dark for ALL sections below)
          nav.classList.add("header-scrolled");
        }
      });
    },
    {
      root: null,
      threshold: 0,
      rootMargin: "-80px 0px 0px 0px", // buffer so toggle only fires well past the edge
    },
  );
  navObserver.observe(heroSection);
}

let bannerParallaxTicking = false;

function updateBannerParallax() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  // Parallax: hero bg image moves at 35% scroll speed
  const banner = document.querySelector(".banner_wrapper");
  if (banner) {
    banner.style.backgroundPositionY = `calc(15% + ${scrollY * 0.35}px)`;
  }
  bannerParallaxTicking = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (bannerParallaxTicking) {
      return;
    }

    bannerParallaxTicking = true;
    window.requestAnimationFrame(updateBannerParallax);
  },
  { passive: true },
);

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Smooth scroll for internal links, including navbar items and CTA buttons.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

    if (navCollapse) {
      navCollapse.classList.remove("show");
    }

    history.pushState(null, "", targetId);
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

  // Image Lightbox
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("imgModalImg");
  const modalClose = document.querySelector(".img-modal-close");

  const clickableImages = document.querySelectorAll(
    ".certification_wrapper img, .portfolio_wrapper img",
  );

  clickableImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      modal.classList.add("active");
      modalImg.src = this.src;
      document.body.style.overflow = "hidden";
    });
  });

  modalClose.addEventListener("click", function () {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Scroll Reveal Animation — supports all variants
  const revealSelectors = ".reveal, .reveal-left, .reveal-right, .reveal-fade";
  const revealElements = document.querySelectorAll(revealSelectors);

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
  );

  revealElements.forEach((el) => revealObserver.observe(el));
});
