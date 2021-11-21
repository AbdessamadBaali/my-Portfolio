let player = {
    name : "Abdessamad",
    chips: 145
}
// array - ordered list of items
let cards = []  
let sum = 0

let hasBlackJack = false
let isAlive = false
let isStartGame = true

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")
let newCardEl = document.querySelector("#newCard-el")


playerEl.textContent = player.name + " : $" + player.chips 

//function getRandomCard() make you get an rondom number between 1 and 13
function getRandomCard() {

    let randomNumbe = Math.floor( Math.random() * 13) + 1
    if (randomNumbe == 1) {
        return 11

    } else if (randomNumbe > 10) {
        return 10

    } else {
        return randomNumbe
    }
}
// function of start the game 
function startGame() {
    if (isStartGame === true)  {

        isStartGame = false
        isAlive= true
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards.push(firstCard, secondCard)    
        sum = firstCard + secondCard
        renderGame()

    }
}
// function renderGmae() checked if you are still in the game or you win or you are out of the game 
function renderGame() {
    // render out firstCard and secondCard
    cardEl.textContent = "Cards : " 

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

    // render out All the cards we have
    sumEl.textContent = "Sum : " + sum
if (sum <= 20)  {
    message  = "Do you want to draw a new card?"
    
} else if (sum === 21){
    message = "Wohooo! You've got Blackjack!"
    hasBlackJack =  true
} else if (sum > 21) {
    message = "You're out of the game!"
    isAlive = false

}
messageEl.textContent = message

}
// fuction make you get a new card randomly
function newCard() {
    if (isAlive === true && hasBlackJack === false ) {
        let card = getRandomCard()
        sum += card
        newCardEl.style.display = "block"
        newCardEl.textContent +=  getRandomCard()+ " "
        renderGame()
    } 
}
