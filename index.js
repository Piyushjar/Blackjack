let cards = [];
let player = "Money left";
let sum = 0;
let total = 500;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let start = document.getElementById("start");

playerEl.textContent = player + ": ₹" + total;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  messageEl.style.color = "white";
  start.innerHTML = "SKIP CARDS";
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    start.innerHTML = "NEW 2 CARDS";
    messageEl.style.color = "green";
    isAlive = false;
    total += 200;
  } else {
    message = "You're out of the game!";
    start.innerHTML = "NEW 2 CARDS";
    messageEl.style.color = "red";
    isAlive = false;
    total -= 100;
  }
  if (total === 0) {
    playerEl.textContent = player + ": ₹" + total;
    start.innerHTML = "RELOADING..";
    setTimeout(function () {
      window.location.reload(1);
    }, 2000);
  }
  playerEl.textContent = player + ": ₹" + total;
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
