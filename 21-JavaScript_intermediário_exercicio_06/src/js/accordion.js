let pergunta = document.getElementsByClassName('pergunta')
let icone = document.getElementsByClassName('icone')
let primeiraPergunta = pergunta[0]
let segundaPergunta = pergunta[1]
let terceiraPergunta = pergunta[2]
let primeiroIcone = icone[0]
let segundoIcone = icone[1]
let terceiroIcone = icone[2]
let perguntaAtiva = 1

primeiraPergunta.addEventListener("click", function(){
    perguntaAtiva = 1
    if(perguntaAtiva === 1 && !primeiraPergunta.hasAttribute('open')){
        segundaPergunta.removeAttribute('open', "")
        terceiraPergunta.removeAttribute('open', "")
        primeiroIcone.classList.add('perguntaAtiva')
        primeiroIcone.classList.remove('perguntaInativa')
        segundoIcone.classList.remove('perguntaAtiva')
        segundoIcone.classList.add('perguntaInativa')
        terceiroIcone.classList.remove('perguntaAtiva')
        terceiroIcone.classList.add('perguntaInativa')
    } else primeiroIcone.classList.add('perguntaInativa'), 
    primeiroIcone.classList.remove('perguntaAtiva')
})

segundaPergunta.addEventListener("click", function(){
    perguntaAtiva = 2
    if(perguntaAtiva === 2 && !segundaPergunta.hasAttribute('open')){
        primeiraPergunta.removeAttribute('open', "")
        terceiraPergunta.removeAttribute('open', "")
        segundoIcone.classList.add('perguntaAtiva')
        segundoIcone.classList.remove('perguntaInativa')
        primeiroIcone.classList.remove('perguntaAtiva')
        primeiroIcone.classList.add('perguntaInativa')
        terceiroIcone.classList.remove('perguntaAtiva')
        terceiroIcone.classList.add('perguntaInativa')
    } else segundoIcone.classList.add('perguntaInativa'), 
    segundoIcone.classList.remove('perguntaAtiva')
})

terceiraPergunta.addEventListener("click", function(){
    perguntaAtiva = 3
    if(perguntaAtiva === 3 && !terceiraPergunta.hasAttribute('open')){
        segundaPergunta.removeAttribute('open', "")
        primeiraPergunta.removeAttribute('open', "")
        terceiroIcone.classList.add('perguntaAtiva')
        terceiroIcone.classList.remove('perguntaInativa')
        primeiroIcone.classList.remove('perguntaAtiva')
        primeiroIcone.classList.add('perguntaInativa')
        segundoIcone.classList.remove('perguntaAtiva')
        segundoIcone.classList.add('perguntaInativa')
    } else terceiroIcone.classList.add('perguntaInativa'), 
    terceiroIcone.classList.remove('perguntaAtiva')
})