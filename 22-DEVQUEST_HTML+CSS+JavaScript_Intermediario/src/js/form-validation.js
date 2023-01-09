let camposFormulario = document.getElementsByClassName("campo")
let textosErrosCampo = document.getElementsByClassName("textoSemErroCampoObrigatorio")
let campoNomeCompleto = camposFormulario[0]
let erroNomeCompleto = textosErrosCampo[0]
let campoEmail = camposFormulario[1]
let erroEmail = textosErrosCampo[1]
let campoTelefone = camposFormulario[2]
let erroTelefone = textosErrosCampo[2]
let campoMensagem = camposFormulario[3]
let erroMensagem = textosErrosCampo[3]

campoNomeCompleto.addEventListener("keyup", function estaPreenchido() {
    let preenchimentoCampo = campoNomeCompleto.value
    console.log(preenchimentoCampo)
    if(preenchimentoCampo !== ""){
        campoNomeCompleto.classList.add('campoPreenchido')
        campoNomeCompleto.classList.remove('erroCampoObrigatorio')
        erroNomeCompleto.classList.add('textoSemErroCampoObrigatorio')
    } else if (preenchimentoCampo === "") {
        campoNomeCompleto.classList.remove('campoPreenchido')
        campoNomeCompleto.classList.add('erroCampoObrigatorio')
        erroNomeCompleto.classList.remove('textoSemErroCampoObrigatorio')    }
})

campoEmail.addEventListener("keyup", function estaPreenchido() {
    let preenchimentoCampo = campoEmail.value
    console.log(preenchimentoCampo)
    if(preenchimentoCampo !== ""){
        campoEmail.classList.add('campoPreenchido')
        campoEmail.classList.remove('erroCampoObrigatorio')
        erroEmail.classList.add('textoSemErroCampoObrigatorio')
    } else if (preenchimentoCampo === "") {
        campoEmail.classList.remove('campoPreenchido')
        campoEmail.classList.add('erroCampoObrigatorio')
        erroEmail.classList.remove('textoSemErroCampoObrigatorio')    }
})

campoTelefone.addEventListener("keyup", function estaPreenchido() {
    let preenchimentoCampo = campoTelefone.value
    console.log(preenchimentoCampo)
    if(preenchimentoCampo !== ""){
        campoTelefone.classList.add('campoPreenchido')
        campoTelefone.classList.remove('erroCampoObrigatorio')
        erroTelefone.classList.add('textoSemErroCampoObrigatorio')
    } else if (preenchimentoCampo === "") {
        campoTelefone.classList.remove('campoPreenchido')
        campoTelefone.classList.add('erroCampoObrigatorio')
        erroTelefone.classList.remove('textoSemErroCampoObrigatorio')    }
})

campoMensagem.addEventListener("keyup", function estaPreenchido() {
    let preenchimentoCampo = campoMensagem.value
    console.log(preenchimentoCampo)
    if(preenchimentoCampo !== ""){
        campoMensagem.classList.add('campoPreenchido')
        campoMensagem.classList.remove('erroCampoObrigatorio')
        erroMensagem.classList.add('textoSemErroCampoObrigatorio')
    } else if (preenchimentoCampo === "") {
        campoMensagem.classList.remove('campoPreenchido')
        campoMensagem.classList.add('erroCampoObrigatorio')
        erroMensagem.classList.remove('textoSemErroCampoObrigatorio')    }
})

document.getElementById("enviar").addEventListener("click", function enviarFormulario() {
    validarFormulario()
})

function validarFormulario(){
    let campoNomeCompletoPreenchido = campoNomeCompleto.classList.contains('campoPreenchido')
    let campoEmailPreenchido = campoEmail.classList.contains('campoPreenchido')
    let campoTelefonePreenchido = campoTelefone.classList.contains('campoPreenchido')
    let campoMensagemPreenchido = campoMensagem.classList.contains('campoPreenchido')
    if (campoNomeCompletoPreenchido && campoEmailPreenchido && campoTelefonePreenchido && campoMensagemPreenchido) {
        alert("Dúvida enviada com sucesso!")
    } else if (!campoNomeCompletoPreenchido && !campoEmailPreenchido && !campoTelefonePreenchido && !campoMensagemPreenchido) {
        campoNomeCompleto.classList.add('erroCampoObrigatorio')
        erroNomeCompleto.classList.remove('textoSemErroCampoObrigatorio')
        campoEmail.classList.add('erroCampoObrigatorio')
        erroEmail.classList.remove('textoSemErroCampoObrigatorio')
        campoTelefone.classList.add('erroCampoObrigatorio')
        erroTelefone.classList.remove('textoSemErroCampoObrigatorio')
        campoMensagem.classList.add('erroCampoObrigatorio')
        erroMensagem.classList.remove('textoSemErroCampoObrigatorio')
    } else if (!campoNomeCompletoPreenchido) {
        campoNomeCompleto.classList.add('erroCampoObrigatorio')
        erroNomeCompleto.classList.remove('textoSemErroCampoObrigatorio')
    } else if (!campoEmailPreenchido) {
        campoEmail.classList.add('erroCampoObrigatorio')
        erroEmail.classList.remove('textoSemErroCampoObrigatorio')
    } else if (!campoTelefonePreenchido) {
        campoTelefone.classList.add('erroCampoObrigatorio')
        erroTelefone.classList.remove('textoSemErroCampoObrigatorio')
    } else if (!campoMensagemPreenchido) {
        campoMensagem.classList.add('erroCampoObrigatorio')
        erroMensagem.classList.remove('textoSemErroCampoObrigatorio')
    }
}