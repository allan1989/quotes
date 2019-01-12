$(document).ready(function(){

  (function(){
    
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

  })();
  

  (function(){

    // Main Menu
    $('.js-site-nav-menu-button').on('click', function(){

      $('.js-site-nav-close-button, .js-site-nav').removeClass('js-hidden');
    
    });

    $('.js-site-nav-close-button').on('click', function(){
      $('.js-site-nav').addClass('js-hidden');
      $('.js-site-nav-close-button').addClass('js-hidden');
    });

  })();




  (function(){
    // Famous quotes slider

    // Quotes
    var quotes = [
      {
        quote: 'I love people who make me laugh. I honestly think it\'s the thing I like most,to laugh. It cures a multitude of ills. It\'s probably the most important thing in a person.',
        name: 'Audrey Hepburn'
      },
      {
        quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.',
        name: 'Leonardo Da Vinci' 
      },
      {
        quote: 'Don’t think. Thinking is the enemy of creativity. It’s self-conscious, and anything self-conscious is lousy. You can’t try to do things. You simply must do things.',
        name: 'Ray Bradbury'
      },
      {
        quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
        name: 'Audre Lorde'
      }
    ];

    // DOM elements
    $blockquote = $('.famous-quotes-quote');
    $name = $('.famous-quotes-name');
    $sliderControls = $('.famous-quotes-button');
  

    $sliderControls.on('click', function(){
      var $this = $(this);
      var $current = Number($this.attr('data-number'));
      var $sliderControlButtons = $this.siblings();

      // Change active class
      $this.addClass('active');
      $sliderControlButtons.removeClass('active');

      // Change content on page
      $blockquote.text(quotes[$current].quote);
      $name.text(quotes[$current].name);
    });

  })();

});