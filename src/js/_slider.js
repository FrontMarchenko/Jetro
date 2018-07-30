import 'slick-carousel';

$('.js-post').slick({
  nextArrow: '.slider__next',
  prevArrow: '.slider__prev',
  cssEase: 'cubic-bezier(0.67, 0.01, 0.23, 1)',
  easing: 'cubic-bezier(0.67, 0.01, 0.23, 1)'
});

$('.js-post-2').slick({
  nextArrow: 'false',
  prevArrow: 'false'
});
