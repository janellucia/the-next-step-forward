"use strict";

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
        $("nav").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("nav").removeClass("active");
    }
});

$(document).ready(function () {

    /*============================================================================
    Hamburger Menu
    ==============================================================================*/

    $(".cross").hide();
    $(".hammy-menu").hide();
    $(".hamburger").click(function () {
        $(".hammy-menu").slideToggle("slow", function () {
            $(".hamburger").hide();
            $(".cross").show();
            $("nav").removeClass("active");
        });
    });

    $(".cross").click(function () {
        $(".hammy-menu").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger").show();
        });
    });

    /*============================================================================
    Back to Top
    ==============================================================================*/
    // if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    // 	$('#return-to-top').fadeIn(200);    // Fade in the arrow
    // } else {
    //     $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    // }


    /*============================================================================
    Front Page Flexslider
    ==============================================================================*/
    //rotation speed and timer
    var speed = 9000;
    var run = setInterval(rotate, speed);

    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = $('#carousel').outerWidth();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button

    $('#slides ul li').css('width', item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides(item_width);

    $(window).resize(function () {
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

    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });

    function resetSlides(width) {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * width
        });
    }
}); //end of document ready function


//======== a function to click next link =========
function rotate() {
    $('#next').click();
}

//============= Back to Top Cont. ================
$('#return-to-top').click(function () {
    // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});

/*============================================================================
Services Click and Toggle information
==============================================================================*/

$('.service-item-1').click(function () {
    $(".toggle-1").toggle("fast");
    $(".info-1").css("background", "rgba(1, 167, 227, 0.7)");
});
$('.service-item-2').click(function () {
    $(".toggle-2").toggle("fast");
    $(".info-2").css("background", "rgba(1, 167, 227, 0.7)");
});
$('.service-item-3').click(function () {
    $(".toggle-3").toggle("fast");
    $(".info-3").css("background", "rgba(1, 167, 227, 0.7)");
});
$('.service-item-4').click(function () {
    $(".toggle-4").toggle("fast");
    $(".info-4").css("background", "rgba(1, 167, 227, 0.7)");
});
$('.service-item-5').click(function () {
    $(".toggle-5").toggle("fast");
    $(".info-5").css("background", "rgba(1, 167, 227, 0.7)");
});
$('.service-item-6').click(function () {
    $(".toggle-6").toggle("fast");
    $(".info-6").css("background", "rgba(1, 167, 227, 0.7)");
});

$('.service-item-1').mouseover(function () {
    $(".toggle-1").show("fast");
    $(".info-1").css("background", "rgba(1, 167, 227, 0.7)");
    $(".info-1").css("height", "100%");
});
$('.service-item-1').mouseleave(function () {
    $(".toggle-1").hide("fast");
    $(".info-1").css("background", "rgba(65, 64, 66, 0.9)");
    $(".info-1").css("height", "40px");
});
$('.service-item-2').mouseover(function () {
    $(".toggle-2").show("fast");
    $(".info-2").css("background", "rgba(1, 167, 227, 0.7)");
    $(".info-2").css("height", "100%");
});
$('.service-item-2').mouseleave(function () {
    $(".toggle-2").hide("fast");
    $(".info-2").css("background", "rgba(65, 64, 66, 0.9)");
    $(".info-2").css("height", "40px");
});
$('.service-item-3').mouseover(function () {
    $(".toggle-3").show("fast");
    $(".info-3").css("background", "rgba(1, 167, 227, 0.7)");
    $(".info-3").css("height", "100%");
});
$('.service-item-3').mouseleave(function () {
    $(".toggle-3").hide("fast");
    $(".info-3").css("background", "rgba(65, 64, 66, 0.9)");
    $(".info-3").css("height", "40px");
});
$('.service-item-4').mouseover(function () {
    $(".toggle-4").show("fast");
    $(".info-4").css("background", "rgba(1, 167, 227, 0.7)");
    $(".info-4").css("height", "100%");
});
$('.service-item-4').mouseleave(function () {
    $(".toggle-4").hide("fast");
    $(".info-4").css("background", "rgba(65, 64, 66, 0.9)");
    $(".info-4").css("height", "40px");
});
$('.service-item-5').mouseover(function () {
    $(".toggle-5").show("fast");
    $(".info-5").css("background", "rgba(1, 167, 227, 0.7)");
    $(".info-5").css("height", "100%");
});
$('.service-item-5').mouseleave(function () {
    $(".toggle-5").hide("fast");
    $(".info-5").css("background", "rgba(65, 64, 66, 0.9)");
    $(".info-5").css("height", "40px");
});
$('.service-item-6').mouseover(function () {
    $(".toggle-6").show("fast");
    $(".info-6").css("background", "rgba(1, 167, 227, 0.7)");
    $(".info-6").css("height", "100%");
});
$('.service-item-6').mouseleave(function () {
    $(".toggle-6").hide("fast");
    $(".info-6").css("background", "rgba(65, 64, 66, 0.9)");
    $(".info-6").css("height", "40px");
});