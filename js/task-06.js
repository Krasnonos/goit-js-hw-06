const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validationForm);

function validationForm(event) {
    if (event.currentTarget.value.length < inputRef.dataset.length) {
        inputRef.classList.add('invalid')
    } else {
         inputRef.classList.add('valid')
    }
   
}