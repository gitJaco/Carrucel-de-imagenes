// Grab DOM elements
const images = document.querySelector(".images")
const imagesCollection = document.querySelectorAll(".image")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
//listen click
next.addEventListener("click", nextSlide)
prev.addEventListener("click", prevSlide)
// Utility vars
let index = 0
// Set interval
let interval = setInterval(startInterval, 2000)

function startInterval() {
    index++
    moveCarousel()
  
}

function resetInterval() {
   clearInterval(interval)
   interval = setInterval(startInterval, 2000)

}

function moveCarousel() {
    if (index > imagesCollection.length -1){
        index = 0
        
        
    } if (index < 0) {
        index = imagesCollection.length -1
    }

    images.style.transform = `translateX(-${index * 800}px)`
}

function prevSlide(){
   index--
   clearInterval(interval)
   moveCarousel()

}

function nextSlide(){
   index++
   clearInterval(interval)
   moveCarousel()
   
}