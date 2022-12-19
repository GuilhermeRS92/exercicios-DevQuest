let quadrado = document.getElementById('quadrado')

let corAtual = quadrado.classList[1]

quadrado.addEventListener('click', function(){
    if(corAtual === 'preto'){
        quadrado.classList.remove('preto')
        quadrado.classList.add('azul')
        corAtual = quadrado.classList[1]
        alert('Esse quadrado agora TEM a classe ' + corAtual +'!')
    } else if(corAtual === 'azul'){
        quadrado.classList.remove('azul')
        quadrado.classList.add('preto')
        corAtual = quadrado.classList[1]
        alert('Esse quadrado agora TEM a classe ' + corAtual +'!')
    }
}
)

