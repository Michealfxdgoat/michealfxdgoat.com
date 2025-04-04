jQuery(document).ready(function (){
    "user strick "

    $('.slider').ripples({
        dropRadius: 5,
        perturbance: 0.05,
        
      });

      $('.work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
          enabled: true
        }
      });

      // $("#team-member").owlCarousel({
      //   items:3,
      //   autoplay: true,
      //   smartSpeed:500,
      //   loop:true,
      //   autoplayHoverPause: true,
      //   Responsive:{
      //   0:{
      //     items: 1
      //   },
      //   480:{
      //     items: 2
      //   },
      //   768:{
      //     items: 3
      //   }
      // }
      // });
      $(document).ready(function(){
        $("#team-member").owlCarousel({
            loop: true,
            margin: 0,
            smartSpeed:500,
            autoplay: true,
            autoplayTimeout: 1200,
            autoplayHoverPause: true,
            nav: true,
            dots: true,
            responsive: {
                0: {
                  items: 1,
                  margin: 7
                },
                600: {
                  items: 2,
                  margin: 14
                },
                1000: {
                  items: 3,
                  margin: 19
                }
            }
        });
    });
    
    $('.counter').counterUp({
      delay: 10,
      time: 5000

  });    
      $('a.smooth-scroll').click(function(event){
        event.preventDefault();

        var section = $(this).after("href");

        $('html, body').animate({
          scrollTop: $(section).offset().top - -2

        }, 1250, "easeInOutExpo");
      });


    
})

