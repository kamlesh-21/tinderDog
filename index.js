// Remember to import the data and Dog class!

import Character from './Dog.js'
import dogArray from './data.js'

let isWaiting = false
let currentDogIndex = 0;
let currentDog = new Character(dogArray[currentDogIndex])

function getNewDog(){
    currentDogIndex = currentDogIndex + 1
            if(currentDogIndex === 3) {
            currentDogIndex = 0 
    }
    currentDog = new Character(dogArray[currentDogIndex])

}

function render(){
    document.getElementById("card").innerHTML = currentDog.getDogsHtml()
}
render()

document.getElementById("accept-button").addEventListener("click", like)
document.getElementById("reject-button").addEventListener("click", reject)


function like() {
    if(!isWaiting) {
        isWaiting = true
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = true 
        render()
        setTimeout(() => {
            getNewDog() 
            isWaiting = false
            render()
        }, 1000)    
    }   
}

function reject() {
    if(!isWaiting) {
        isWaiting = true
        currentDog.hasBeenSwiped = true
        currentDog.hasBeenLiked = false
        render()
        setTimeout(() => {
            getNewDog()
            isWaiting = false
            render()
        }, 1000)     
    }
}



