
//=========================================MAIN-JS==================================
// window.addEventListener('scroll', function() {
//   var scroll = window.scrollY;

//   if (scroll >= 0) {
//       document.querySelector('.navbar').classList.add('nav-scroll');
//       // document.querySelector('.back_to_top').classList.add('show_btn');
//   } else {
//       // document.querySelector('.navbar').classList.remove('nav-scroll');
//       // document.querySelector('.back_to_top').classList.remove('show_btn');
//   }
// });










//=================================SLICK-JS========================================

$('.testimonial_slider').slick({
    dots: true,           // Enable dots for navigation
    arrows: false,         // Disable arrow navigation
    infinite: true,         // Enable infinite looping

    speed: 300,               // Transition speed in milliseconds                           
    slidesToShow: 2,            // Number of slides to show at once                               
    slidesToScroll:1,               // Number of slides to scroll at once                         
    responsive: [
      {
        breakpoint: 1024,        // Settings for screens below 1024 pixels                              
        settings: {
          slidesToShow: 2,            // Settings for screens below 768 pixels                                
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