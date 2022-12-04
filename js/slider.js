var currentSlide;
var slidesCount;
var sliderCounter = document.createElement("div");
sliderCounter.classList.add("slider__counter");

var updateSliderCounter = function (slick, currentIndex) {
  currentSlide = slick.slickCurrentSlide() + 1;
  slidesCount = slick.slideCount;
  $(sliderCounter).text(currentSlide + "/" + slidesCount);
};

$(".slider").on("init", function (event, slick) {
  $(".slider").append(sliderCounter);
  updateSliderCounter(slick);
});

$(".slider").on("afterChange", function (event, slick, currentSlide) {
  updateSliderCounter(slick, currentSlide);
});



$(document).ready(function(){
	$('.slider_wraper').slick({
		slidesToShow: 1,
		SlidesToScrol: 1,
		dots:true,
		appendArrows: $('.ar'),
		appendDots: $('.dot'),
	});
})