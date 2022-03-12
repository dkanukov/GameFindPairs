const cards = document.querySelectorAll('card');

function flipCards(card) {
    card.classList.toggle('flipped')
}

cards.forEach(card => addEventListener('click', flipCards(card)))
