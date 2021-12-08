$('.slider-list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  autoplaySpeed: 2000,
  dots:true,
  dotsClass:'slider__dots',
  appendDots:$('.slider-dots__wrap'),
	prevArrow: $('.slider--btn-prev'),
  nextArrow: $('.slider--btn-next')
});
