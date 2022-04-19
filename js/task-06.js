const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', validationForm);

function validationForm(event) {
    if (event.currentTarget.value.length < inputRef.dataset.length) {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    } else {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }
}