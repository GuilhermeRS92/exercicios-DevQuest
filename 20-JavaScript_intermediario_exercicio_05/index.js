let slideAtivo = 1;
const slider = document.querySelector(".slider")
let sliderMovement = slider.classList
let setaEsquerda = document.querySelectorAll(".setasNavEsquerda")
let setaDireita = document.querySelectorAll(".setasNavDireita")

setaDireita[0].addEventListener("click", function(){
    if(slideAtivo === 1){
        sliderMovement.remove('slideAtivo1')
        sliderMovement.add('slideAtivo2')
        setaEsquerda[0].classList.remove('setaInativa')
        setaEsquerda[0].innerHTML = "<img src='src/images/seta_esquerda.png' alt='Seta esquerda'>"
        slideAtivo++
    } else if (slideAtivo === 2){
        sliderMovement.remove('slideAtivo2')
        sliderMovement.add('slideAtivo3')
        slideAtivo++
        } else if (slideAtivo === 3){
            sliderMovement.remove('slideAtivo3')
            sliderMovement.add('slideAtivo4')
            setaDireita[0].innerHTML = "<img src='src/images/seta_direita_off.png' alt='Seta direita'>"
            setaDireita[0].classList.add('setaInativa')
            slideAtivo++
            console.log(slideAtivo)
            }
})

setaEsquerda[0].addEventListener("click", function(){
    if(slideAtivo === 4){
        sliderMovement.remove('slideAtivo4')
        sliderMovement.add('slideAtivo3')
        setaDireita[0].classList.remove('setaInativa')
        setaDireita[0].innerHTML = "<img src='src/images/seta_direita.png' alt='Seta direita'>"
        slideAtivo--
        } else if (slideAtivo === 3){
        sliderMovement.remove('slideAtivo3')
        sliderMovement.add('slideAtivo2')
        slideAtivo--
        } else if (slideAtivo === 2){
            sliderMovement.remove('slideAtivo2')
            sliderMovement.add('slideAtivo1')
            setaEsquerda[0].innerHTML = "<img src='src/images/seta_esquerda_off.png' alt='Seta esquerda'>"
            setaEsquerda[0].classList.add('setaInativa')
            slideAtivo--
            }
})