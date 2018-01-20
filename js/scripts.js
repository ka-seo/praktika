var version=detectIE();if(version===false){}else if(version>=12){document.querySelector('body').className+=' IE IE'+version;}else{document.querySelector('body').className+=' IE IE'+version;} function detectIE(){var ua=window.navigator.userAgent;var msie=ua.indexOf('MSIE ');if(msie>0){return parseInt(ua.substring(msie+5,ua.indexOf('.',msie)),10);} var trident=ua.indexOf('Trident/');if(trident>0){var rv=ua.indexOf('rv:');return parseInt(ua.substring(rv+3,ua.indexOf('.',rv)),10);} var edge=ua.indexOf('Edge/');if(edge>0){return parseInt(ua.substring(edge+5,ua.indexOf('.',edge)),10);} return false;}


// SEARCH :: start
function search() {

    // FOR DEMO!!!
    $('form.search-form').on('submit', function (e) {
        e.preventDefault();
        window.location.href="search-result.html";
    });


    var search_suggest = $('.search-suggest');
    $('body').on('click', '.search-bar__button', function () {
        $('body').addClass('open-searchbar').append('<div class="overlay"></div>');
        $('.header').addClass('search-active');
        search_suggest.show().find('.search-form__input').focus();

        //close navmenu
        $('#inner-wrap').animate({ right: '0' }, 300);
        $('#inner-wrap').removeAttr('style');
        $('body').removeClass('open-menu');
    });

    $('.search-form__close').on('click', function () {
        search_suggest.fadeOut('fast').find('.search-form__input').blur();
        $('body').removeClass('open-searchbar').find('.overlay').fadeOut('fast');
        $('.header').removeClass('search-active');
    });

    $('body').on('click', '#nav-open-btn', function()
    {
        var nav_open = false,
            $inner = $('#inner-wrap');

        if (!nav_open) {
            $inner.animate({ right: '251px' }, 300);
            $('body').addClass('open-menu');
            nav_open = true;
            return false;
        }
    });

    $(document).mouseup(function (e) {
        if(e.target != search_suggest[0] && !search_suggest.has(e.target).length){
            search_suggest.fadeOut('fast').find('.search-form__input').blur();
            $('body').removeClass('open-searchbar').find('.overlay').fadeOut();
            $('.header').removeClass('search-active');
        }
    });
}
search();
// SEARCH :: end


// SLIDER :: start
var slider = $('#slider-popular');
slider.slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1240,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.slider-next').on('click', function () {
    slider.slick('slickNext');
});

$('.slider-prev').on('click', function () {
    slider.slick('slickPrev');
});
// SLIDER :: end



// subscribe form validation :: start
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
}

$(".subscribe-form").on('submit', function () {
    var email = $(".subscribe-form input[name='email']"),
        error = $(this).find('div.error');

    if(email.val() != 0 && email.val().length > 0 && email.val() != '')
    {
        if(isValidEmailAddress(email.val()))
        {
            $(this).removeClass('has-error');
            error.hide();
        }
        else {
            $(this).addClass('has-error');
            error.show();
            return false;
        }
    }
    else {
        $(this).addClass('has-error');
        error.show();
        return false;
    }
});

// subscribe form validation :: end

// DETECT SAFARI :: start
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

if (isSafari) {
    $('body').addClass('safari');
}
// DETECT SAFARI :: end