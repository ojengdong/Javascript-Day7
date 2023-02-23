const h1 = document.querySelector('h1');
h1.innerHTML = 'Hello, World';

const h2 = document.querySelector('h2');
h2.innerHTML = 'Hello, World';

const h3 = document.querySelector('h3');
h3.innerHTML = 'Hello, World';

const h4 = document.querySelector('h4');
h4.innerHTML = 'Hello, World';

const h5 = document.querySelector('h5');
h5.innerHTML = 'Hello, World';

const h6 = document.querySelector('h6');
h6.innerHTML = 'Hello, World';

const div = document.querySelector('.divClass');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
div.style.color = 'orange';
document.querySelector('#divId').style.fontSize = '24px';
div.firstElementChild.innerHTML = "Hi I'm P1";
// div.firstElementChild.innerHTML = ""
div.lastElementChild.innerHTML = "Hi I'm P3";
const child = document.querySelector('#p2');
child.parentElement.style.fontSize = '24px';
child.nextElementSibling.style.color = 'blue';
child.nextElementSibling.style.fontSize = '20px';
child.
child.previousElementSibling.style.color = 'red';
child.previousElementSibling.style.fontSize = '18px';
// div.lastElementChild.remove();
// div.lastElementChild.remove();
// div.lastElementChild.remove();
// document.querySelector('#p1').innerText = div.innerText;
// document.querySelector('#p1').style.color = 'black';
// document.querySelector('#p2').innerText = div.innerText;
// document.querySelector('#p2').style.color = 'blue';
// document.querySelector('#p3').innerText = div.innerText;
// document.querySelector('#p3').style.color = 'red';