window.addEventListener("scroll", function () {
  var element = document.querySelector("nav");
  element.classList.toggle("active", window.scrollY > 0);
});

document.addEventListener("DOMContentLoaded", function () {
  var owl = document.querySelector(".owl-carousel-1");

  $(owl).owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var owl = document.querySelector(".owl-carousel-2");

  $(owl).owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    autoplay: false,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.6,
      },
      1200: {
        items: 4.6,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var owl = document.querySelector(".owl-carousel-3");

  $(owl).owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    autoplay: false,
    dots: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3.6,
      },
      1200: {
        items: 4.6,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var owl = document.querySelector(".detail-carousel");

  $(owl).owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    autoplay: true,
    margin: 15,
    lazyLoad: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});
