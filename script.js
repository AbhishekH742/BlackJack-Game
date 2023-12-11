// variables


let sum = 0;
let Cards = [];
const target = 21;
let isBlackJack = false;
let isAlive = false;

let message = "Do you want play the game!";

let player = {
    name: "Abhi",
    cash : 1000
};

let cardEl = document.querySelector('.cards-el');
let sumEL = document.querySelector('.sum-el');
let messageEL = document.querySelector('.message-el');

let startBtn = document.querySelector('.start-btn');
let newcardBtn = document.querySelector('.newcard-btn');

let playerEl = document.querySelector('.player-el');

playerEl.textContent = player.name + " : $ " + player.cash;

function getRandomNo() {
    let randomNo = Math.floor(Math.random() * 13) + 1
    if (randomNo > 10) {   // king, queen, jack have value of 10
        return 10;
    }
    else if (randomNo === 1) {  // Ace has value of 11 which comes first
        return 11;
    }
    else {
        return randomNo;
    }
}


startBtn.addEventListener('click', function () {

    isAlive = true;

    let firstCard = getRandomNo();
    Cards.push(firstCard);

    let secondCard = getRandomNo();
    Cards.push(secondCard);

    sum += firstCard + secondCard;

    renderGame();


});

function renderGame() {
    cardEl.textContent = "Cards : ";
    for (let i = 0; i < Cards.length; i++) {
        cardEl.textContent += Cards[i] + " ";
    }

    sumEL.textContent = "Sum : " + sum;

    if (sum < target) {
        messageEL.textContent = "Do you want draw new card?";
    }
    else if (sum === target) {
        messageEL.textContent = "Whoo! you won the game";
        isBlackJack = true;
    }
    else {
        messageEL.textContent = "Sorry! you are out of the game";
        isAlive = false;
    }
}

newcardBtn.addEventListener('click', function () {

    if (isAlive === true && isBlackJack === false) {
        let newCard = getRandomNo();
        Cards.push(newCard);
        sum += newCard;

        renderGame();

    }

})
