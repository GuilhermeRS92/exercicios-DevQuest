const nome = prompt('Qual seu nome?')
const idade = prompt('Qual a sua idade?')
const programador = confirm('Você é programador?')

function eProgramador(nome, idade, programador) {
    if(programador) {
        return 'Bem Vindo, ' + nome + '! Parabéns por ter ' + idade + ' anos e ser programador'
    } else return 'Bem Vindo, ' + nome + '! Que pena ter ' + idade + ' anos e não ser programador Vire agora'
}

let fraseAlert = eProgramador(nome, idade, programador);
alert(fraseAlert)