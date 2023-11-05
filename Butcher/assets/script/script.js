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
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  slidesPerGroupSkip: 3,
  centeredSlides: true,
  centerSlide: true,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  fade: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
    },
    769:{
      slidesPerView: 1,
    },
    600:{
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
swiper.update();


// animation

// $(document).ready(function(){
//   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
//   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//       return new bootstrap.Tooltip(tooltipTriggerEl)
//   });

//   $('#jingle').click(function(){
//       $(this).toggleClass("expand");
//       tooltipList.forEach((el) => {
//           el.hide();
//       });
//   });

//   function elementScrolled(elem) {
//       var docViewTop = $(window).scrollTop();
//       var docViewBottom = docViewTop + $(window).height();
//       var elemTop = $(elem).offset().top;
//       return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
//   }

//   $(window).scroll(function(){
//       if(elementScrolled('.aboutus')) {
//           $('.aboutus').addClass('visible');
//       }
//       if(elementScrolled('.community')) {
//           $('.community').addClass('visible');
//       }
//       $('.servicebrief .servicebrief_card').each(function(){
//           if(elementScrolled($(this))) {
//               $(this).addClass('visible');
//           }
//       });
//       if(elementScrolled('footer')) {
//           $('footer').addClass('visible');
//       }
//   });
// });