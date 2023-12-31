$(document).ready(function(){
    //при экране 768 переносим блок в другой блок либо наоборот
    function windowWidth(){
        if ($(window).width() <= 776) {
            if($('.header__elements').hasClass('header__elements--active')){
                $('body').addClass('off-scroll');
            }
            $('.menu,.header__links').appendTo('.header__elements');
        }
        else{
            $('.header__elements').before($('.menu,.header__links'));
            $('body').removeClass('off-scroll');
        }
    }
    //вызов функции перед загрузкой страницы
    windowWidth();
    //вызов функции перед изменением ширины экрана
    $(window).resize(function() {
        windowWidth()
    });

    $('.header__mobile-btn').on('click',function(){
        $('body').addClass('off-scroll');
        $('.header__elements').addClass('header__elements--active');
    });
    $('.header__elements-btnclose').on('click',function(){
        $('body').removeClass('off-scroll');
        $('.header__elements').removeClass('header__elements--active');
    });
});