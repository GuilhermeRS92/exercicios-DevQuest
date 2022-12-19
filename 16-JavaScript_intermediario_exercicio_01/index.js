function trocarCorPrimeiroQuadrado() {
    let primeiroQuadrado = document.getElementById('primeiro-quadrado')
    
    corAtual = primeiroQuadrado.classList[1]
    
    if(corAtual === 'azul'){
        primeiroQuadrado.classList.remove('azul')
        primeiroQuadrado.classList.add('amarelo')
    }else if(corAtual === 'amarelo'){
        primeiroQuadrado.classList.remove('amarelo')
        primeiroQuadrado.classList.add('azul')
    }
}