const cards = document.querySelectorAll('.card');
let firstFlippedCard;
let secondFlippedCard;
let haveFlippedCard = false;
let tableLock = false;

cards.forEach(element => {
    element.addEventListener('click', flipCard)
});

function flipCard() {
    if (tableLock) {
        return;
    }

    this.classList.add('flipped');

    if (!haveFlippedCard) {
        haveFlippedCard = true;
        firstFlippedCard = this;
        return;
    } else {
        secondFlippedCard = this;
    }
    tableLock = true;
    haveFlippedCard = false;
    if (!(firstFlippedCard.dataset.num === secondFlippedCard.dataset.num)) {
        setTimeout(removeFlip, 1000, firstFlippedCard, secondFlippedCard)
    } else {
        setTimeout(lockMatchedCards, 1000, firstFlippedCard, secondFlippedCard)
    }
}

function removeFlip(firstCard, secondCard) {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    tableLock = false;
}
function lockMatchedCards(first, second) {
    first.removeEventListener('click', flipCard);
    second.removeEventListener('click', flipCard);
    tableLock = false;
}