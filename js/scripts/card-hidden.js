$('.cardPhoto__hiddenDesc').slideUp(0);

window.addEventListener('mouseover', function(el) {
    if (el.target.classList.contains("cardPhoto")) {
        const card = el.target.closest('.itemFood-card');
        if (card) {
            const cardHidden = card.querySelector('.cardPhoto__hiddenDesc');
            $(cardHidden).slideDown(300);
        }
    }
});

$('.cardPhoto').mouseout(function(el){
    const cardHidden = el.target.querySelector('.cardPhoto__hiddenDesc');
    $(cardHidden).slideUp(300);
})