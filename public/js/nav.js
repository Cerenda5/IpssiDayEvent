$(document).ready(function() {
    $('#burger-menu ').click(function() {
        $('#navbar').css('transform', 'translateY(0)');
        $('#nav_cache').css('display', 'block');
        $('body').css('overflow', 'hidden');
    });

    $('a').click(function() {
        $('#navbar').css('transform', 'translateY(-100%)');
        $('#nav_cache').css('display', 'none');
        $('body').css('overflow', 'auto');
    });

    $('#nav_cache').click(function() {
        $('#navbar').css('transform', 'translateY(-100%)');
        $('#nav_cache').css('display', 'none');
        $('body').css('overflow', 'auto');
    });
});