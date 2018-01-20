(function(window, document, undefined)
{
    window.App = (function()
    {
        var _init = false, app = { };

        app.init = function()
        {
            if (_init) {
                return;
            }
            _init = true;

            var nav_open = false,
                $inner = $('#inner-wrap');

            $('body').on('click', '#nav-open-btn', function()
            {
                if (!nav_open) {
                    $inner.animate({ right: '251px' }, 300);
                    $('body').addClass('open-menu');
                    nav_open = true;
                    return false;
                }
            });

            $('body').on('click', '#nav-close-btn', function()
            {
                if (nav_open) {
                    $inner.animate({ right: '0' }, 300);
                    $('body').removeClass('open-menu');
                    nav_open = false;
                    return false;
                }
            });

            $(document.documentElement).addClass('js-ready');
        };
        return app;
    })();

    $.fn.ready(function()
    {
        window.App.init();
    });
})(window, window.document);