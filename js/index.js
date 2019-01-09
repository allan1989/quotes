$(document).ready(function(){
  
  // Header Slider

  $('.js-slider-button').on('click', function(){

    // DOM elements
    var $this = $(this);
    var $currentSlide = $this.attr('data-number');
    var $allButtons = $this.siblings();
    var $sliderContent = $('.js-slider-img');
    var $target = $sliderContent.css('background-image');
    var $regex = /pic-\d+/;

    // Change active class
    $this.addClass('active');
    $allButtons.removeClass('active');

    // Change background image based on selected button
    var $newImageName = 'pic-' + $currentSlide;
    var $newImageUrl = $target.replace($regex, $newImageName);
    $sliderContent.css('background-image', $newImageUrl);    
  });




  // Main Menu
  $('.js-site-nav-menu-button').on('click', function(){

    $('.js-site-nav-close-button, .js-site-nav').removeClass('js-hidden');
  
  });

  $('.js-site-nav-close-button').on('click', function(){
    $('.js-site-nav').addClass('js-hidden');
    $('.js-site-nav-close-button').addClass('js-hidden');
  });

});