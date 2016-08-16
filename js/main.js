'use strict';

$(function() {

  $.fn.prSlider = function() {

    return this.each(function() {

      var $slider = $(this);
      var $image = $('.pr-tumbs a', $slider);
      var $slide = $('.pr-slide-wrapper .pr-slide img', $slider);

      $image.stop().click(function(){

      		UD_IMG_URL = $(this).attr('href');

      		$slide.attr('src', UD_IMG_URL);

      	});


    });
  };
});

var $URL;
var $CURRENT_IMG = 0;
var $totalImages = $('#pr-slider .pr-thumbs-wrapper .pr-tumbs ul li').length - 1;
var $images = $("#pr-slider .pr-thumbs-wrapper .pr-tumbs").find( 'li' );
var $imageDest =   $("#pr-slider .pr-slide-wrapper .pr-slide").find('img');
var $thumbWrapperWidth = $("#pr-slider .pr-thumbs-wrapper");
var $imagesPerPage = 10;
var $thumbImg = $("#pr-slider .pr-thumbs-wrapper .pr-tumbs").find( 'img' ).css('width');



$URL = $images.find('img').eq( $CURRENT_IMG ).data( 'url' );

$imageDest.attr('src', $URL );
setClasstoThumbs();

//Переключаем слайды кликая по миниатурбрам
$images.on('click', function() {

  //удаляем активный класс
   $images.find('img').removeClass('active');

  $URL = $(this).find("img").data( "url" );
  $imageDest.attr('src', $URL);
  $CURRENT_IMG = $(this).index();
  console.log($CURRENT_IMG);

  //Применяем активный класс
  setClasstoThumbs();
});

// Кнопка для переключения на следующий слайд
$("#pr-slider").find('.pr-nav .next').on('click', function(){
  if  ( $CURRENT_IMG < $totalImages ) {
    console.log('Меньше');

    //удаляем активный класс
     $images.find('img').removeClass('active');

    $CURRENT_IMG = $CURRENT_IMG + 1;
    $URL = $images.find("img").eq( $CURRENT_IMG ).data( "url" );
    $imageDest.attr('src', $URL );

    //Применяем активный класс
    setClasstoThumbs();
  } else {
      console.log('Больше');
  };



});

//  Кнопка для переключения на предыдущий слайд
$('#pr-slider').find('.pr-nav .prev').on('click', function(){
  if  ( $CURRENT_IMG > 0 ) {
    console.log('Меньше');
    //удаляем активный класс
     $images.find('img').removeClass('active');

    $CURRENT_IMG = $CURRENT_IMG - 1;
    $URL = $images.find("img").eq( $CURRENT_IMG ).data( "url" );
    $imageDest.attr('src', $URL );

    //Применяем активный класс
    setClasstoThumbs();

  } else {
      console.log('Больше');
  };

});


//Функция добавления активного класса
function setClasstoThumbs() {
  $('#pr-slider .pr-thumbs-wrapper').find('img').eq( $CURRENT_IMG ).addClass('active');
};

//Функции перемещения миниатюр
function MoveThumbsForvard() {
  var $width = $('.pr-tumbs').find('img').css( 'width' );
  $width = parseInt($width.substring(0, $width.length - 2));
  $width = $width + 10;
  var $step = $width*3 + 32;

  var $cureentMargin = $('.pr-tumbs').css('margin-left');

  if (parseInt($cureentMargin.substring(0, $cureentMargin.length - 2)) >= -1000 ) {
    $('.pr-tumbs').animate({scrollLeft: 300 }, 500);
  };
};
function MoveThumbsBackrvard() {
  var $width = $('.pr-tumbs').find('img').css( "width" );
  $width = parseInt($width.substring(0, $width.length - 2));
  $width = $width + 10;
  var $step = $width*3 + 32;
  console.log($width);
    $('.pr-tumbs').animate({
        scrollLeft: 300 }, 500);
};

$('#pr-slider').find('.pr-nav-thumbs .next').on('click', MoveThumbsForvard);
$('#pr-slider').find('.pr-nav-thumbs .prev').on('click', MoveThumbsBackrvard);



$('.test').click(function(){$('.pr-thumbs-wrapper').animate({scrollLeft: '+=100'}, 500)});


// fullscreen api
var requestFullscreen = function (ele) {
	if (ele.requestFullscreen) {
		ele.requestFullscreen();
	} else if (ele.webkitRequestFullscreen) {
		ele.webkitRequestFullscreen();
	} else if (ele.mozRequestFullScreen) {
		ele.mozRequestFullScreen();
	} else if (ele.msRequestFullscreen) {
		ele.msRequestFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var exitFullscreen = function () {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else {
		console.log('Fullscreen API is not supported.');
	}
};

var fsDocButton = document.getElementById('fullscreen');

fsDocButton.addEventListener('click', function(e) {
	e.preventDefault();
	requestFullscreen(document.getElementById("pr-slider"));
});
