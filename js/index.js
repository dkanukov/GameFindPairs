const cards = document.querySelectorAll('.card');
let firstFlippedCard;
let secondFlippedCard;
let haveFlippedCard = false;

cards.forEach(element => {
    element.addEventListener('click', function name() {
        element.classList.add('flipped');

        if (!haveFlippedCard) {
            haveFlippedCard = true;
            firstFlippedCard = element;
            return;
        } else {
            secondFlippedCard = element;
        }

        haveFlippedCard = false;
        if (!checkPair(firstFlippedCard, secondFlippedCard)) {
            setTimeout(removeFlip, 1000, firstFlippedCard, secondFlippedCard)
        }
    })
});

function checkPair(firstCard, secondCard) {
    if (firstCard.dataset.num === secondCard.dataset.num) {
        lockPair(firstCard, secondCard);
        return true;
    }
    return false;
}

function removeFlip(firstCard, secondCard) {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    console.log(firstCard.classList, secondCard.classList)
}
