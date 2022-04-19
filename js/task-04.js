const ref = {
    increment: document.querySelector('button[data-action="increment"]'),
    decrement: document.querySelector('button[data-action="decrement"]'),
    counter: document.querySelector('#value')
}

let counterValue = 0;

ref.increment.addEventListener('click', () => {
    counterValue += 1;

    ref.counter.textContent = counterValue;
})

ref.decrement.addEventListener('click', () => {
    counterValue -= 1;

    ref.counter.textContent = counterValue;
})