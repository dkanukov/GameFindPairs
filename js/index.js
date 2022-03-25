const cards = document.querySelectorAll('.card');
let firstFlippedCard;
let secondFlippedCard

cards.forEach(element => {
    element.addEventListener('click', function name() {
        if (!firstFlippedCard) {
            element.classList.add('flipped');
        }
    })
});