function enable() {
    document.querySelector('#mySelect').disabled = false;
}

function disable() {
    document.querySelector('#mySelect').disabled = true;
}

const p = document.querySelectorAll('p');
const display = document.querySelector('#display');

p.forEach((a) => {
    display.innerHTML += a.innerHTML + " ";
    display.style.color = 'dodgerblue';
})
// display.innerHTML +=