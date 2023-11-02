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

// var swiper = new Swiper(".swiper", {
//   observer: true,
//   observeParents: true,
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   centerSlide: true,
//   fade: true,
//   grabCursor: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoint: {
//     1280: {
//       slidesPerView: 3,
//     },
//     769:{
//       slidesPerView: 2,
//     },
//     600:{
//       slidesPerView: 1,
//     }
//   }
// });
// swiper.update();