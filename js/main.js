
//=========================================MAIN-JS==================================
window.addEventListener('scroll', function() {
  var scroll = window.scrollY;

  if (scroll >= 10) {
      document.querySelector('.navbar').classList.add('nav-scroll');
      document.querySelector('.back_to_top').classList.add('show_btn');
  } else {
      document.querySelector('.navbar').classList.remove('nav-scroll');
      document.querySelector('.back_to_top').classList.remove('show_btn');
  }
});








//=================================SLICK-JS========================================

$('.testimonial_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })



  //====================================AOS-JS=============================================  
  AOS.init();