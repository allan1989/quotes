$(document).ready(function(){
  


  // Slider
  $('.js-slider-button').on('click', function(){

    // DOM elements
    var $this = $(this);
    var $currentSlide = $this.attr('data-number');
    var $allButtons = $this.siblings();
    var $sliderContent = $('.js-slider-img');
    var $target = $sliderContent.css('background-image');
    var $regex = /pic-\d+/;

    // Add active class on first button
    $('.js-slider-button').first().addClass('active');

    // Change active class
    $this.addClass('active');
    $allButtons.removeClass('active');

    // Change background image based on selected button
    var $newImageName = 'pic-' + $currentSlide;
    var $newImageUrl = $target.replace($regex, $newImageName);
    $sliderContent.css('background-image', $newImageUrl);    
  });


});