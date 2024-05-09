const menu = document.getElementById("menu"),
  toggleBtn = document.getElementById("toggle-btn"),
  menuItems = document.querySelectorAll(".menu__item"),
  siteHeader = document.getElementById("site-header");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("menu--open");
  toggleIcon();
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (menu.classList.contains("menu--open")) {
      menu.classList.remove("menu--open");
    }
    toggleIcon();
  });
});

function toggleIcon() {
  if (menu.classList.contains("menu--open")) {
    toggleBtn.classList.replace("icon-menu", "icon-close");
  } else {
    toggleBtn.classList.replace("icon-close", "icon-menu");
  }
}

const testimonialSlider = new Swiper(".testimonial-slider", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    520: {
      slidesPerView: "auto",
    },
  },
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    siteHeader.classList.add("header--scrolled");
  } else {
    siteHeader.classList.remove("header--scrolled");
  }
});

const scrollRevealConfig = {
  duration: 2000,
  distance: "100px",
  delay: 400,
  reset: false,
};

const scrollReveal = ScrollReveal(scrollRevealConfig);

scrollReveal.reveal(".reveal");

