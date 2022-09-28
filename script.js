let slideShow = document.getElementsByClassName('slide')
console.log(slideShow)
let i=0

console.log(slideShow[i])
slideShow[i].classList.add('showSlide')
// add showSlide class to the first slide in order to give its style and show it with display=block.
function next(){
    slideShow[i].classList.remove('showSlide')
    // hide the current slide before going on and showing the next one.

    i++
    if(i===slideShow.length){
        i=0
    }
    // IF is necessary to avoi reading and undefined element when i gets larger than array.length.

    slideShow[i].classList.add('showSlide')
}

function previous(){
    slideShow[i].classList.remove('showSlide')
    i--
    if(i<0){
        i=slideShow.length-1
    }
    slideShow[i].classList.add('showSlide')
}

