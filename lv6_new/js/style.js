$(function () {
        $('parent').on('click', function() {
        $(this).next().slideToggle();
    });
});