/*アコーディオン*/
$(function() {
    $('#side_menu dt').on('click', function() {
        $(this).next().slideToggle();
    });

});

