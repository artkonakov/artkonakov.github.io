'use strict';

$(function() {

    $.fn.prSlider = function() {

        return this.each(function() {

            //Определяем параметры элементов
            var $slider = $(this);
            var $width = $('.pr-tumbs li', $slider).width();
            var $imagesCount = $('.pr-tumbs li', $slider).length;
            var $thumbContainerWidth = ($width + 3) * $imagesCount;
            var $currentImage = 0;
            var $images = $('.pr-thumbs-wrapper .pr-tumbs', $slider).find('li');
            var $imageDest = $('.pr-slide-wrapper .pr-slide .current', $slider).find('img');
            var $url = $images.find('img').eq($currentImage).data('url');

            $('.pr-tumbs', $slider).css('width', $thumbContainerWidth);

            $('.pr-nav-thumbs .next', $slider).click(function() {
                $('.pr-thumbs-wrapper', $slider).animate({
                    scrollLeft: '+=332'
                }, 500)
            });
            $('.pr-nav-thumbs .prev', $slider).click(function() {
                $('.pr-thumbs-wrapper', $slider).animate({
                    scrollLeft: '-=332'
                }, 500)
            });


            $url = $images.find('img').eq($currentImage).data('url');
            $imageDest.attr('src', $url);


            setClasstoThumbs();


            $images.on('click', function() {

                //удаляем активный класс
                $images.find('img').removeClass('active');

                $url = $(this).find('img').data('url');
                $imageDest.attr('src', $url);
                $currentImage = $(this).index();
                //Применяем активный класс
                setClasstoThumbs();

                autoMove();

            });

            $('.pr-nav .next', $slider).click(function() {

                MoveForward();

            });

            $('.pr-nav .prev', $slider).click(function() {

                MoveBackward();

            });


            function MoveForward() {

                if ($currentImage < ($imagesCount - 1)) {
                    $currentImage += 1;

                    addClass();
                    autoMove();
                };
            };

            function MoveBackward() {

                if ($currentImage > 0) {
                    $currentImage -= 1;
                    addClass();
                    autoMove();
                };
            };

            function setClasstoThumbs() {
                $('.pr-thumbs-wrapper', $slider).find('img').eq($currentImage).addClass('active');
            };

            //автоматическое перелистываение
            function autoMove() {

                var $pos = $('.pr-thumbs-wrapper', $slider).find('img').eq($currentImage).position();

                if ($pos.left >= 332) {
                    $('.pr-thumbs-wrapper', $slider).animate({
                        scrollLeft: '+=332'
                    }, 500);
                };
                if ($pos.left <= 0) {
                    $('.pr-thumbs-wrapper', $slider).animate({
                        scrollLeft: '-=332'
                    }, 500);
                };
            };

            //Добавление активного класса в навигации
            function addClass() {

                $images.find('img').removeClass('active');

                $url = $images.find('img').eq($currentImage).data('url');

                $imageDest.attr('src', $url);

                setClasstoThumbs();
            }

            //Ховер стили
            $('.pr-slide-wrapper ', $slider).mouseenter(function() {
                $('.pr-nav', $slider).css('visibility', 'visible');
            });
            $('.pr-slide-wrapper ', $slider).mouseleave(function() {
                $('.pr-nav', $slider).css('visibility', 'hidden');
            });

            $('.pr-thumbs-contorols ', $slider).mouseenter(function() {
                $('.pr-nav-thumbs', $slider).css('visibility', 'visible');
            });
            $('.pr-thumbs-contorols ', $slider).mouseleave(function() {
                $('.pr-nav-thumbs', $slider).css('visibility', 'hidden');
            });

            //Режим полного экрана
          $('.pr-slide-wrapper .pr-slide .current', $slider).on('click', function() {
                $('.pr-slide', $slider).fullScreen(true);

            });

            //управление стелками

                $(window).on('keydown', function(event) {
                    if (event.which == 39) {
                        console.log('levo');
                        MoveForward();
                    };
                });

              $(window).on('keydown', function(event) {
                    if (event.which == 37) {
                        console.log('levo');
                        MoveBackward();
                    };
                });





        });
    };
});

$(document).ready(function() {
    $('#pr-slider').prSlider();
    $('#pr-slider2').prSlider();
});
