const cardWrapper = document.querySelector('.itemFood-wrapper');
let cardId = 1;

for (i = 0; i<9; i++) {
    let cardHTML = `
    <!--Card of food START-->
    <div class="itemFood-card">

        <div class="cardPhoto">

            <div class="cardPhoto__hiddenDesc">73гр, пряный ананас/голубика/финиковый крем</div>

        </div>

        <div class="cardInfo">

            <div class="cardInfo__title">Брускетта с вяленой уткой</div>

            <div class="cardInfo__price">300</div>

        </div>

    </div>
    <!--Card of food END-->
    `;

    cardWrapper.insertAdjacentHTML('beforeend', cardHTML);
    cardId++;
}