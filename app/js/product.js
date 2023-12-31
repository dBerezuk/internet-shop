$(document).ready(function(){
   //добавления товара на один
   $('.product__adding-btnplus').on('click',function(){
      let quantityInput = $('.product__adding-input');
      if(quantityInput.val() > 1){
         quantityInput.val( Number( quantityInput.val() )  - 1 );
      }
   });
   //уменшения товара на один
   $('.product__adding-btnminus').on('click',function(){
      let quantityInput = $('.product__adding-input');
      quantityInput.val( Number( quantityInput.val() ) + 1 );
   });
   //количества товаров input - проверяем ввод
   $('.product__adding-input').on('input',function(){
      if($(this).val() == 0 || $(this).val() < 1 || $(this).val()[0] == 0){
         $(this).val(1);
      }
   });
   //при клике на картинки отображаем их в главной картинкой
   $('.product__images-item').on('click',function(){
      $('.product__img').attr('src',$(this).attr('src'));
   });
   //при экране 1020 переносим блок в другой блок либо наоборот
   function windowWidth(){
      if ($(window).width() <= 1020) {
         $('.product__images-items').appendTo('.product__inner');
      }
      else{
         $('.product__adding').after($('.product__images-items'));
      }
   }
   windowWidth();
   //вызов функции перед изменением ширины экрана
   $(window).resize(function() {
      windowWidth()
   });
});