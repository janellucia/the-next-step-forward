'use strict';

//client testimonial
$(document).ready(function () {
  // Scroll Reveal
//     window.sr = ScrollReveal();
//     sr.reveal('.title-header, .about-wrapper, .consult-wrapper, .team-container, .service-item');

//   $('.title-header').on('inview', function(event, isInView) {
//       if (isInView) {
//         $(this).find('img').addClass('jsColorShow');
//       } else {
//         $(this).find('img').removeClass('jsColorShow');
//       }
//     });

//     $('.about-wrapper').on('inview', function(event, isInView) {
//       if (isInView) {
//         $(this).find('img').addClass('jsColorShow');
//       } else {
//         $(this).find('img').removeClass('jsColorShow');
//       }
//     });

//      $('.consult-wrapper').on('inview', function(event, isInView) {
//       if (isInView) {
//         $(this).find('img').addClass('jsColorShow');
//       } else {
//         $(this).find('img').removeClass('jsColorShow');
//       }
//     });

//     $('.team-container').on('inview', function(event, isInView) {
//       if (isInView) {
//         $(this).find('img').addClass('jsColorShow');
//       } else {
//         $(this).find('img').removeClass('jsColorShow');
//       }
//     });
//      $('.service-wrapper').on('inview', function(event, isInView) {
//       if (isInView) {
//         $(this).find('img').addClass('jsColorShow');
//       } else {
//         $(this).find('img').removeClass('jsColorShow');
//       }
//     });
//     //end of scroll reveal

});//end of doc ready


/*============================================================================
Back to Top
==============================================================================*/

$(function(){
    $(window).scroll(function() {

      $('body').prepend('<a href="#" class="back-to-top"></a>');
      //back to top button
      if ( $(window).scrollTop() / 500 ) {
        $('a.back-to-top').fadeIn('slow');
      } else {
        $('a.back-to-top').fadeOut('slow');
      }

    });

    $('a.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});

}); 

/*============================================================================
Hamburger Menu
==============================================================================*/

$( ".cross" ).hide();
$( ".hammy-menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".hammy-menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".hammy-menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});


/*============================================================================
Front Page Flexslider
==============================================================================*/
$(document).ready(function () {

    //rotation speed and timer
    var speed = 13000;
    var run = setInterval(rotate, speed);

    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width(); 
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();

    // $('#slides ul li').css('width', item_width);
    // container.width(slides.length * item_width); //set the slides container to the correct total width
    // container.find(elm + ':first').before(container.find(elm + ':last'));
    // resetSlides(item_width);

    $(window).resize(function() {
        item_width = $('#carousel').width();
        container.width(slides.length * item_width);
        $('#slides ul li').css('width', item_width);
        resetSlides(item_width);
    });
    //if user clicked on prev button
    $('#slide-buttons button').click(function (e) {
        //slide the item
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides(item_width);
            });
        }

        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides(item_width);
            });
        }
        //cancel the link behavior
        return false;
    });

    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
}); //end of document ready function

//a function to click next link
function rotate() {
    $('#next').click();
}

/*============================================================================
Services Click and Toggle information
==============================================================================*/

$('.service-item-1').click(function() {
    $( ".toggle-1" ).toggle( "fast");
    $( ".info-1" ).css( "background", "#01a7e3");
});
$('.service-item-2').click(function() {
    $( ".toggle-2" ).toggle( "fast");
    $( ".info-2" ).css( "background", "#01a7e3");
});
$('.service-item-3').click(function() {
    $( ".toggle-3" ).toggle( "fast");
    $( ".info-3" ).css( "background", "#01a7e3");
});
$('.service-item-4').click(function() {
    $( ".toggle-4" ).toggle( "fast");
    $( ".info-4" ).css( "background", "#01a7e3");
});
$('.service-item-5').click(function() {
    $( ".toggle-5" ).toggle( "fast");
    $( ".info-5" ).css( "background", "#01a7e3");
});
$('.service-item-6').click(function() {
    $( ".toggle-6" ).toggle( "fast");
    $( ".info-6" ).css( "background", "#01a7e3");
});


$('.service-item-1').mouseover(function() {
    $( ".toggle-1" ).show( "fast");
    $( ".info-1" ).css( "background", "#01a7e3");
});
$('.service-item-1').mouseleave(function() {
    $( ".toggle-1" ).hide( "fast");
    $( ".info-1" ).css( "background", "rgba(65, 64, 66, 0.9)");
});
$('.service-item-2').mouseover(function() {
    $( ".toggle-2" ).show( "fast");
    $( ".info-2" ).css( "background", "#01a7e3");
});
$('.service-item-2').mouseleave(function() {
    $( ".toggle-2" ).hide( "fast");
    $( ".info-2" ).css( "background", "rgba(65, 64, 66, 0.9)");
});
$('.service-item-3').mouseover(function() {
    $( ".toggle-3" ).show( "fast");
    $( ".info-3" ).css( "background", "#01a7e3");
});
$('.service-item-3').mouseleave(function() {
    $( ".toggle-3" ).hide( "fast");
    $( ".info-3" ).css( "background", "rgba(65, 64, 66, 0.9)");
});
$('.service-item-4').mouseover(function() {
    $( ".toggle-4" ).show( "fast");
    $( ".info-4" ).css( "background", "#01a7e3");
});
$('.service-item-4').mouseleave(function() {
    $( ".toggle-4" ).hide( "fast");
    $( ".info-4" ).css( "background", "rgba(65, 64, 66, 0.9)");
});
$('.service-item-5').mouseover(function() {
    $( ".toggle-5" ).show( "fast");
    $( ".info-5" ).css( "background", "#01a7e3");
});
$('.service-item-5').mouseleave(function() {
    $( ".toggle-5" ).hide( "fast");
    $( ".info-5" ).css( "background", "rgba(65, 64, 66, 0.9)");
});
$('.service-item-6').mouseover(function() {
    $( ".toggle-6" ).show( "fast");
    $( ".info-6" ).css( "background", "#01a7e3");
});
$('.service-item-6').mouseleave(function() {
    $( ".toggle-6" ).hide( "fast");
    $( ".info-6" ).css( "background", "rgba(65, 64, 66, 0.9)");
});

