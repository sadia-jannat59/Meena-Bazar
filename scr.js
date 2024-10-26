 
 $(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        margin:6,
      loop: true,
      nav: true,
      autoplay:true,
      responsive:{
        0:{
          items:2,
        },
        400:{
          items:2,
        },
        600:{
          items:3,
        },
        1000:{
          items:5,
        },
      }
    });
  });