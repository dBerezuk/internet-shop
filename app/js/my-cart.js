$(document).ready(function(){
    //общая цена заказа
    let totalSum = 0;
    function totalAmount(){
        $('.cart-table__value').each(function(){
            totalSum += Number($(this).find('.cart-table__value-price').attr('data-price')) * Number($(this).find('.cart-table__value-input').val());
        });
        $('.subtotal__price-general').text('$' + totalSum);
        totalSum += Number($('.subtotal__shipping-num').attr('data-price'));
        $('.subtotal__order-num').text('$' + totalSum);
        totalSum = 0;
    }

    //добавления товара на один
    $('.cart-table__value-btnminus').on('click',function(){
        let quantityInput = $(this).next();
        if(quantityInput.val() > 1){
            quantityInput.val( Number( quantityInput.val() )  - 1 );
        }
    });
    //уменшения товара на один
    $('.cart-table__value-btnplus').on('click',function(){
        let quantityInput = $(this).prev()
        quantityInput.val( Number( quantityInput.val() ) + 1 );
    });
    //количества товаров input - проверяем ввод
    $('.cart-table__value-input').on('input',function(){
        if($(this).val() == 0 || $(this).val() < 1 || $(this).val()[0] == 0){
            $(this).val(1);
        }
        //вывод общий цены товара
        totalAmount();
    });

    //вывод общий цены товара
    totalAmount();
    $('.cart-table__value-btnminus,.cart-table__value-btnplus').on('click',function(){
        totalAmount();
    });

    //при экране 680 переносим блок в другой блок либо наоборот
    function windowWidth(){
        if ($(window).width() <= 680) {
            $('.cart-table__value').each(function(){
                $(this).find('.cart-table__value-title').after($(this).find('.cart-table__value-price,.cart-table__value-quantity'));
            });
        }
        else{
            $('.cart-table__value').each(function(){
                $(this).find('.cart-table__value-pricetd').append($(this).find('.cart-table__value-price'));
                $(this).find('.cart-table__value-quantitytd').append($(this).find('.cart-table__value-quantity'));
            });
        }
    }
    windowWidth();
    //вызов функции перед изменением ширины экрана
    $(window).resize(function() {
        windowWidth()
    });
});