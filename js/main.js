'use strict';


$(function() {

    //Настройки
    var width = 720;
    var animationSpeed = 500;
    var currentSlide = 1;


    //Определяем элементы DOM
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var $controlRight = $('.right');
    var $controlLeft = $('.left');
    var $sliderCount = $('.slider-count');
    var $indicator = $('.strip');

    //Вычисляем ширину одной полоски для отображения под слайдом
    var divider = width / $slides.length;

    //Задаем параметры элементов на основании настроек
    $slideContainer.css( {'width': width * $slides.length});
    $slider.css( {'width': width});
    $slides.css( {'width': width});
    $('.indicator').css( {'width': width});

    //Функция для отображения счетчика слайдов
    function updateCount() {

        $sliderCount.html( currentSlide + " из " + $slides.length);

    }

    updateCount() ;

    $indicator.css( {'width': divider});

    //Функции для изменения размера индикатора в зависимсоти от положения слайда
    function indicatorPlus() {

      divider = width / $slides.length;
      $indicator.animate({
        'width': '+=' + divider }, animationSpeed);
      }

    function indicatorMinus() {
      divider = width / $slides.length;
      $indicator.animate({
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

});
