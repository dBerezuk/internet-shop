$(document).ready(function(){
   $('.aside-menu__filter-forminput').on('input',function (){
      $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''));
      if($(this).val().length !== 0){
          $(this).addClass('aside-menu__filter-forminput--focus');
      }
      else{
          $(this).removeClass('aside-menu__filter-forminput--focus');
      }
   });
   //вывод всех фильтров
   $('.aside-menu__filter-othersbtn').on('click',function(){
      $(this).prev().toggleClass('aside-menu__filter-list--visibility');
      $(this).toggleClass('aside-menu__filter-othersbtn--active');
   });

   //открытие фильтра на мобильных экранах
   $('.all-products__filter-btn').on('click',function(){
      $('body').addClass('off-scroll');
      $('.aside-menu').addClass('aside-menu--active aside-menu--of-scroll');
   });
   //закрытие фильтра на мобильных экранах
   $('.aside-menu__btn-close').on('click',function(){
      $('body').removeClass('off-scroll');
      $('.aside-menu').removeClass('aside-menu--of-scroll');
      $('.aside-menu').removeClass('aside-menu--active');
   });

   $(window).resize(function(){
      if($(window).width() >= 732 && $('.aside-menu').hasClass('aside-menu--of-scroll')){
         $('body').removeClass('off-scroll');
         $('.aside-menu').removeClass('aside-menu--of-scroll');
         $('.aside-menu').removeClass('aside-menu--active');
      }
   });
});