$(function(){

    $('.menu__btn').on('click', function() {
      $('.menu__list').toggleClass('menu__list--active')
    })

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="images/arrow-left.png" alt="prew"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="images/arrow-right.png" alt="next"></button>',
        asNavFor: '.heroes__slider-text',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true
            }
          }
        ]  
      });

      $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false,
      });

});