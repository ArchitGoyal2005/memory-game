"use strict";

const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const container = document.querySelector(".image-container");
const score = document.querySelector(".score");
const resultDisplay = document.querySelector(".result");
let cardChosen = [];
let cardChosenId = [];
let cardsWon = [];

function createBoard() {
  let html = "";

  for (let i = 0; i < cardArray.length; i++) {
    html += `<img src="images/blank.png" data-id="${i}">`;
  }
  container.insertAdjacentHTML("beforeend", html);

  const cards = container.querySelectorAll("img");
  cards.forEach((card) => {
    card.addEventListener("click", flipCard);
  });
}

createBoard();

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  const cards = document.querySelectorAll("img");
  const optionId1 = cardChosenId[0];
  const optionId2 = cardChosenId[1];
  if (optionId1 === optionId2) {
    cards[optionId1].setAttribute("src", "images/blank.png");
    cards[optionId2].setAttribute("src", "images/blank.png");
    alert("You have clicked the same image!");
  } else if (cardChosen[0] === cardChosen[1]) {
    cards[optionId1].setAttribute("src", "images/white.png");
    cards[optionId2].setAttribute("src", "images/white.png");
    cards[optionId1].removeEventListener("click", flipCard);
    cards[optionId2].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
  } else {
    cards[optionId1].setAttribute("src", "images/blank.png");
    cards[optionId2].setAttribute("src", "images/blank.png");
  }
  cardChosen = [];
  cardChosenId = [];
  score.textContent = cardsWon.length;
  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations! You found them all!";
  }
}
