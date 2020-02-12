const display = document.querySelector('.display');

document.querySelector(".clear").addEventListener('click', clear);
function clear(CE) {
    display.value = null
}

document.querySelectorAll('.digits button')
    .forEach( button => button.addEventListener('click', digitsPressed));
function digitsPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll('.opers button')
    .forEach( button => button.addEventListener('click', opersPressed));
function opersPressed(ev) {
    display.value += ev.target.innerText;
}


document.querySelector('.eq').addEventListener('click', calculate);
function calculate() {
    display.value = eval(display.value);
}