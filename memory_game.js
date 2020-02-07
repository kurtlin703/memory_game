const cards = document.querySelectorAll(".memory-card") 


let hasFlippedCard = false
let firstCard, secondCard
let lockBoard = false


function flipCard() {
    if(lockBoard) return
    this.classList.toggle("flip")
    if(this === firstCard) return
    console.log("i was clicked")
    console.log(this)

    if(!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = this

        console.log({hasFlippedCard, firstCard})
    }else {
        hasFlippedCard = false
        secondCard = this

        checkForMatch()

        console.log(firstCard.dataset.emoji)
        console.log(secondCard.data.emoji)

}
}

function checkForMatch(){

    if(firstCard.dataset.framework === secondCard.dataset.framework) {
        console.log("cards match")
        disableCards()
      
    }else{
        unflipCards()
        console.log("cards doesnt match because ")
    }
 

}

function disableCards() {

firstCard.removeEventListener("click", flipCard)
        secondCard.removeEventListener("click", flipCard)

}

function unflipCards(){
    lockBoard = true
   
        setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        lockBoard = false
        },1000)

        
    

}
function resetBoard () {
    [hasFlippedCard, lockBoard] =  [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 6)
        card.style.order = randomPos
    })

})()
cards.forEach(card => card.addEventListener("click", flipCard))

