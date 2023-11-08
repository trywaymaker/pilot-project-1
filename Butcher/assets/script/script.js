// burger menu

function navMenu() {
  var x = document.getElementById("menuitems");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};



// carousal

var swiper = new Swiper(".mySwiper", {
  // observer: true,
  // observeParents: true,
  slidesPerView: 3,
  slidesPerGroupSkip: 3,
  centeredSlides: true,
  centerSlide: true,
  grabCursor: true,
  spaceBetween: 50,
  loop: true,
  fade: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
    992:{
      slidesPerView: 1,
    },
    767:{
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
// swiper.update();


// animation

$(document).ready(function(){
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
  });

  $('#jingle').click(function(){
      $(this).toggleClass("expand");
      tooltipList.forEach((el) => {
          el.hide();
      });
  })});