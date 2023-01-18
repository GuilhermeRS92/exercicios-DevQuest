const botaoEnviar = document.getElementById('form');
const informacoes = document.querySelectorAll('.campo')

botaoEnviar.addEventListener('click', function(){
    informacoes.forEach(item =>{
        if(item.value !== ""){
            item.classList.remove('erroCampoObrigatorio')
            item.classList.add('campoPreenchido')
            item.nextElementSibling.classList.add('textoSemErroCampoObrigatorio')
        } else{
            item.classList.remove('campoPreenchido')
            item.classList.add('erroCampoObrigatorio')
            item.nextElementSibling.classList.remove('textoSemErroCampoObrigatorio')
        }
    })
})