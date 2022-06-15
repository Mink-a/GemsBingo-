const cards = document.querySelectorAll(".card");
let metchedCard = 0;
let cardOne, cardTwo;
let disableDesk = false;

function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne && !disableDesk) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;
    disableDesk = true;

    let cardOneImg = cardOne.querySelector("img").src;
    let cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    metchedCard++;
    if (metchedCard == 8) {
      setTimeout(() => {
        return shuffleCards();
      }, 1000);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return (disableDesk = false);
  }
  setTimeout(() => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne = cardTwo = "";
    disableDesk = false;
  }, 1200);
}

function shuffleCards() {
  metchedCard = 0;
  cardOne = cardTwo = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  cards.forEach((card, index) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector("img");
    imgTag.src = `./gems/${arr[index]}.png`;
    card.addEventListener("click", flipCard);
  });
}
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
