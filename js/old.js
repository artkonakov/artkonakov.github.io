var $setthumbWrapperWidth = $imagesPerPage * parseInt($thumbImg.substring(0, $thumbImg.length - 2));
$setthumbWrapperWidth += 10 * $imagesPerPage;
$setthumbWrapperWidth += -8;
$thumbWrapperWidth.css('width', 700);



//Вычисим ширину контейнера для миниатюр
var $singleThumbWidth = $('.pr-tumbs').find('img').css( "width" );
var $thumbwidth = $totalImages + 1;
$singleThumbWidth = parseInt($singleThumbWidth.substring(0, $singleThumbWidth.length - 2));
console.log($singleThumbWidth);
var $totalThumbCount = $('#pr-slider .pr-thumbs-wrapper .pr-tumbs ul li').length;

$thumbwidth =  $totalThumbCount * $singleThumbWidth;
console.log($thumbwidth);
$thumbwidth +=  11 * $totalImages + 200;
$('.pr-tumbs').css( "width", $thumbwidth);
console.log($thumbwidth);
