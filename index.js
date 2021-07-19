//Variable declerations and init
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
let message = ""

//Object to to act as the player of the game (static values without changes)
let player = {
    name: "Sean",
    chips: 500
}


playerEl.textContent = player.name + ": $" + player.chips


function getRandomCard(){
    
    let card = Math.floor(Math.random() * 13) + 1
    if(card > 10){
        return 10
    }
    else if (card === 1){
        return 11
    }
    else{
        return card
    }

}

function startGame(){
        isAlive = true
        firstCard = getRandomCard()
        secondCard = getRandomCard()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for(i = 0; i < cards.length; i++){
        cardsEl.textContent+= " " + cards[i]
    }


    if(sum < 21){
        message = "Would you like another card?"
    }
    else if(sum === 21){
        message = "You've got blackjack"
        hasBlackJack = true
    }
    else{
        message = "Unlucky, you're bust"
        isAlive = false
    }

    sumEl.textContent = "Sum: " + sum
    messageEl.textContent = message

}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

    console.log("We are here")
    
}



