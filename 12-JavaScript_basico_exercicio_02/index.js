let boletoPago = false;
let pagarBoleto = false;

if(boletoPago) {
    alert("Parabéns! O boleto está pago.")
} else if (boletoPago === false) {
    pagarBoleto = confirm("O boleto não está pago. Gostaria de paga-lo agora?")
}

if(pagarBoleto) {
    alert("Outro boleto pago com sucesso!")
    boletoPago = true
} else if(boletoPago === false) {
    alert("Não pagou agora, mas não esqueça de realizar o pagamento até o vencimento.")
}