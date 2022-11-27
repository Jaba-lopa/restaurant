if ($('.menuWrapper__hiddenMenu div').width()) {
    $('.menuWrapper__nav').slideUp(0);
}

$('.menuWrapper__hiddenMenu').click(function(){
    const menuWrapper = document.querySelectorAll('.menuWrapper__hiddenMenu div');
    if ($('.menuWrapper__hiddenMenu').hasClass('activeMenu')) {
        menuWrapper.forEach((item) => item.style.cssText = `display: block; transform: rotate(0) translate(0);`)
        $('.menuWrapper__hiddenMenu').removeClass('activeMenu');
        $('.menuWrapper__nav').slideUp(300);
    } else {
        menuWrapper[0].style.transform = "rotate(45deg) translate(1px, 5px)";
        menuWrapper[1].style.display = "none";
        menuWrapper[2].style.transform = "rotate(-45deg) translate(1px, -5px)";
        $('.menuWrapper__hiddenMenu').addClass('activeMenu');

        $('.menuWrapper__nav').slideDown(300);
    }
});