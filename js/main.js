'use strict';


$(function() {

  $.fn.sliderjs = function() {

    return this.each(function() {

    //Настройки
    var width = 720;
    var animationSpeed = 500;
    var currentSlide = 1;


    //Определяем элементы DOM
    var $slider = $(this);
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var $controlRight = $('.right', $slider);
    var $controlLeft = $('.left', $slider);
    var $sliderCount = $('.slider-count',$slider);
    var $strip = $('.strip', $slider);
    var $indicator = $('.indicator', $slider);

    //Вычисляем ширину одной полоски для отображения под слайдом
    var divider = width / $slides.length;

    //Задаем параметры элементов на основании настроек
    $slideContainer.css( {'width': width * $slides.length});
    $slider.css( {'width': width});
    $slides.css( {'width': width});
    $indicator.css( {'width': width});

    //Создаем области по краям для переключения слайдов
    $slider.append("<div class='right-control-field'> </div>");
    var $rightControlField = $('.right-control-field', $slider);

    $slider.append("<div class='left-control-field'> </div>");
    var $leftControlField = $('.left-control-field', $slider);

    //Функция для отображения счетчика слайдов
    function updateCount() {

        $sliderCount.html( "<label>" + currentSlide + " из " + $slides.length + "</label>");

    }

    updateCount() ;

    $strip.css( {'width': divider});

    //Функции для изменения размера индикатора в зависимсоти от положения слайда
    function indicatorPlus() {

      divider = width / $slides.length;
      $strip.animate({
        'width': '+=' + divider }, animationSpeed);
      }

    function indicatorMinus() {
      divider = width / $slides.length;
      $strip.animate({
        'width': '-=' + divider }, animationSpeed);
    }

    // функция для движения слайда вперед и анимации
    function forward() {

      if (currentSlide < $slides.length) {
        currentSlide = currentSlide + 1;
        updateCount();
        $slideContainer.animate({
          'margin-left': '-=' + width }, animationSpeed);
        indicatorPlus();
        }
      }

    // функция для движения слайда назад и анимации
    function backward() {

        if (currentSlide > 1) {
          currentSlide = currentSlide - 1;
          updateCount() ;

              $slideContainer.animate({
                'margin-left': '+=' + width }, animationSpeed);
                indicatorMinus();
        };

    }

    //Элементы управления

    $controlRight.on('click', forward);
    $controlLeft.on('click', backward);

    $rightControlField.on('click', forward);
    $leftControlField.on('click', backward);
});
}
});

//Вызываем функцию по селектору для каждого слайдера на странице
$(document).ready(function() {
    $('.slider').sliderjs();
    $('.slider2').sliderjs();
});
