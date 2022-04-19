const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', changeOutput);


function changeOutput(event) {
    refs.output.textContent = event.currentTarget.value;
}