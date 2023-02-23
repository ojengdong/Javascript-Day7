function changeText() {
document.querySelector('div').innerHTML = 'OK button disable';
const btn01 = document.querySelector('#btn01');
btn01.disabled = true;
}

// document.querySelector('button').onclick = function () {
//     alert("Hello World");
// }