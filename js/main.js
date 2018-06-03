$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";
   $('#sidebar-btn').on('click', function() {
      $('#sidebar').toggleClass('visible');
   });

   
   $(".owl-carousel").owlCarousel({
     loop: true,
     margin: 10,
     nav: false,
     responsive: {
         0:{
             items:1
         },
         768:{
             items:2
         },
         1200:{
             items:3
         }
     }
    });

   /*Navigation*/
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  /*Magnific Popup*/
   $(function() {
    $('div.photos').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });  
}); 
});

