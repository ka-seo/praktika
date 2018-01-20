$(document).ready(function(){

    /********************************
     * VALIDATION RUSSIAN LOCALIZED
     *********************************/
    $.extend( $.validator.messages, {
        required: "Обязательное поле.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный адрес электронной почты.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        extension: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format( "Пожалуйста, введите не больше {0} символов." ),
        minlength: $.validator.format( "Пожалуйста, введите не меньше {0} символов." ),
        rangelength: $.validator.format( "Пожалуйста, введите значение длиной от {0} до {1} символов." ),
        range: $.validator.format( "Пожалуйста, введите число от {0} до {1}." ),
        max: $.validator.format( "Пожалуйста, введите число, меньшее или равное {0}." ),
        min: $.validator.format( "Пожалуйста, введите число, большее или равное {0}." )
    } );


    /********************************
     * INPUT MASK
     *********************************/
    $("input[name='phone']").inputmask(
        "+7 (999) 999-99-99",
        {
            clearIncomplete: true,
            "onincomplete": function () {
                $(this).removeClass('valid').addClass('error');
            }
        });

    $("input[name='email']").inputmask('Regex', { regex: "[a-zA-Z0-9._%-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}" });



    /********************************
     * ADD NEW METHODS
     *********************************/
    $.validator.addMethod("russian", function(value, element) {
        return this.optional(element) || /^[а-яА-ЯёЁ ]+$/.test(value);
    }, "Допускается ввод только русских букв");

    $.validator.addMethod("phoneField", function(value, element) {
        return this.optional(element) || /^[0-9-+() ]+$/.test(value);
    }, "Допускается ввод только телефонных символов");

    $.validator.addMethod("FirstLetterUp", function(value, element) {
        return this.optional(element) || /^[А-ЯЁ ]+$/.test(value[0]);
    }, "Первая буква должна быть заглавной");




    /********************************
     * VALIDATION QUESTIONNAIRE FORM
     *********************************/
    $("#form-bid").validate({
        rules:{
            name:{ required: true, russian: true, FirstLetterUp: true, minlength: 2 },
            phone:{ required: true, phoneField: true },
            email:{ required: true, email: true, minlength: 5 },
        },
        errorElement: "span",
        submitHandler: function(form) {
            // Send form
            form.submit();
        }
    });

});