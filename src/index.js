import {Counter} from './Counter';

// Setup
document.title = 'IFD homework 1';
const c = new Counter();

document.body.onload = addElement;

function addElement() {
    // create button
    let button = document.createElement('button');
    button.id = 'button';

    button.addEventListener('click', increment);
    let text = document.createTextNode(c.getClickText());
    button.appendChild(text);

    document.body.appendChild(button);
}

function increment() {
    c.increase();
    document.getElementById('button').innerHTML = c.getClickText();
}
