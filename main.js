// change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// News Letter load function

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("newsletterWrapper").style.display = "flex";
  }, 9000);
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("newsletterWrapper").style.display = "none";
});

// show/hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

// show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// Slider Main Page

var swiper = new Swiper(".blog-slider", {
  loop: true,
  slidesPerView: "1",
  speed: 500,
  effect: "coverflow",
  coverflowEffect: {
    slideShadows: false,
  },
  mousewheel: {
    invert: false,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    0: {
      effect: "slide",
      centeredSlides: false,
    },
    768: {
      slidesPerView: "2",
      centeredSlides: true,
    },
    1200: {
      slidesPerView: "3",
      centeredSlides: true,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
});
