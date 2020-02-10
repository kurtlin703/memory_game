const cards = document.querySelectorAll(".memory-card");

let hasTurnOverCard = false;
let initialCard, secondCard;
let lockBoard = false;

function turnOverCard() {
  if (lockBoard) return;
  this.classList.toggle("flip");
  if (this === initialCard) return;

  if (!hasTurnOverCard) {
    hasTurnOverCard = true;
    initialCard = this;


  } else {
    hasTurnOverCard = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  if (initialCard.dataset.framework === secondCard.dataset.framework) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
    initialCard.removeEventListener("click", turnOverCard);
  secondCard.removeEventListener("click", turnOverCard);
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    initialCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1000);
}
function resetBoard() {
  [hasTurnOverCard, lockBoard] = [false, false][(firstCard, secondCard)] = [
    null,
    null
  ];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 6);
    card.style.order = randomPos;
  });
})();
cards.forEach(card => card.addEventListener("click", turnOverCard));
