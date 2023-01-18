const botaoEnviar = document.getElementById('form');
const informacoes = document.querySelectorAll('.campo')

botaoEnviar.addEventListener('click', function(){
    informacoes.forEach(item =>{
        if(item.value !== ""){
            console.log(true)
            item.classList.remove('erroCampoObrigatorio')
            item.classList.add('campoPreenchido')
            item.nextElementSibling.classList.add('textoSemErroCampoObrigatorio')
        } else{
            console.log(false)
            item.classList.remove('campoPreenchido')
            item.classList.add('erroCampoObrigatorio')
            item.nextElementSibling.classList.remove('textoSemErroCampoObrigatorio')
            console.log(item.parentElement)
        }
    })
})