const cards = document.querySelectorAll(".card");
let cardOne, cardTwo;

function flipCard(e) {
  let clickedCard = e.target;
  if (clickedCard !== cardOne) {
    clickedCard.classList.add("flip");
    if (!cardOne) {
      return (cardOne = clickedCard);
    }
    cardTwo = clickedCard;

    let cardOneImg = cardOne.querySelector("img");
    let cardTwoImg = cardTwo.querySelector("img");
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  if (img1 === img2) {
    return console.log("match");
  }
  console.log("not");
}
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
