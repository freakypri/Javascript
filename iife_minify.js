//minifying it->iife makes global variable to local (window.JQuery)
(function ($) {
    $(this).addClass('MyClass');
})(window.JQuery);