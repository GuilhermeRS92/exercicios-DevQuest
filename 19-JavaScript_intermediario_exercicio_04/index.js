let inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(event){
        let value = event.target.value
        if (value.length > 0){
            inputs[i].classList.add('inputFocus')
        } else if (value.length <= 0){
            inputs[i].classList.remove('inputFocus')
        } 
    })
}