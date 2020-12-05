//<![CDATA[
    $(function() {
        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#logo').offset().top + 160;
      
        $(window).scroll(function() {
          if ($(window).scrollTop() > stickyHeaderTop) {
            $('#logo').addClass('sticky');
            $('#finder').removeClass('navi2');
          } else {
            $('#logo').removeClass('sticky');
            $('#finder').addClass('navi2');
          }
        });
      }); //]]>

      setTimeout(function(){
        $('.loader_bg').fadeToggle();
      }, 2000);
      


// Index Main Banner Owl Carousel
$("#owl-demo").owlCarousel({
    pagination : false,
    dots: false,
      center: true,
      loop:true,
      margin:0,
      nav:false,
      autoplay: true,
      autoplayTimeout:4000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });


// Client Area Owl Carousel
$("#owl-client").owlCarousel({
  pagination : false,
  center: true,
  loop:true,
  margin:0,
  nav:false,
  autoplay:true,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

/* 
  Testimonial
  ========================================================================== */

  // vars
  'use strict'
  var	testim = document.getElementById("testim"),
      testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
      testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
      testimLeftArrow = document.getElementById("left-arrow"),
      testimRightArrow = document.getElementById("right-arrow"),
      testimSpeed = 4500,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;
  ;
  
  window.onload = function() {
  
      // Testim Script
      function playSlide(slide) {
          for (var k = 0; k < testimDots.length; k++) {
              testimContent[k].classList.remove("active");
              testimContent[k].classList.remove("inactive");
              testimDots[k].classList.remove("active");
          }
  
          if (slide < 0) {
              slide = currentSlide = testimContent.length-1;
          }
  
          if (slide > testimContent.length - 1) {
              slide = currentSlide = 0;
          }
  
          if (currentActive != currentSlide) {
              testimContent[currentActive].classList.add("inactive");            
          }
          testimContent[slide].classList.add("active");
          testimDots[slide].classList.add("active");
  
          currentActive = currentSlide;
      
          clearTimeout(testimTimer);
          testimTimer = setTimeout(function() {
              playSlide(currentSlide += 1);
          }, testimSpeed)
      }
  
      testimLeftArrow.addEventListener("click", function() {
          playSlide(currentSlide -= 1);
      })
  
      testimRightArrow.addEventListener("click", function() {
          playSlide(currentSlide += 1);
      })    
  
      for (var l = 0; l < testimDots.length; l++) {
          testimDots[l].addEventListener("click", function() {
              playSlide(currentSlide = testimDots.indexOf(this));
          })
      }
  
      playSlide(currentSlide);
  
      // keyboard shortcuts
      document.addEventListener("keyup", function(e) {
          switch (e.keyCode) {
              case 37:
                  testimLeftArrow.click();
                  break;
                  
              case 39:
                  testimRightArrow.click();
                  break;
  
              case 39:
                  testimRightArrow.click();
                  break;
  
              default:
                  break;
          }
      })
      
      testim.addEventListener("touchstart", function(e) {
          touchStartPos = e.changedTouches[0].clientX;
      })
    
      testim.addEventListener("touchend", function(e) {
          touchEndPos = e.changedTouches[0].clientX;
        
          touchPosDiff = touchStartPos - touchEndPos;
        
          console.log(touchPosDiff);
          console.log(touchStartPos);	
          console.log(touchEndPos);	
  
        
          if (touchPosDiff > 0 + ignoreTouch) {
              testimLeftArrow.click();
          } else if (touchPosDiff < 0 - ignoreTouch) {
              testimRightArrow.click();
          } else {
            return;
          }
        
      })
  }
  
  
  // MagnificPopup
$(function() {
    $('.popup-youtube, .popup-vimeo').magnificPopup({
        disableOn: 100,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
  });