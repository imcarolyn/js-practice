const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is a glorious text-content!';

container.appendChild(content);

// a <p> with red text that says "Hey I'm red!"
const redtext = document.createElement('p');
redtext.style.color = 'red';
redtext.textContent = "Hey I'm red!";
container.appendChild(redtext);

//an <h3> with blue text that says “I’m a blue h3!”
const blueh3 = document.createElement('h3');
blueh3.style.color = 'blue';
blueh3.textContent = "I'm a blue h3!";
container.appendChild(blueh3);

// a <div> with a black border and pink background color with the following elements inside of it:
const pinkBox = document.createElement('div');
pinkBox.style.cssText = 'background-color: pink; border-style: solid; border-color: black; border-width: 2px';
container.appendChild(pinkBox);

const innerh1 = document.createElement('h1');
innerh1.textContent = "I'm in a div";
pinkBox.appendChild(innerh1);

const meToo = document.createElement('p');
meToo.textContent = "ME TOO!";
pinkBox.appendChild(meToo);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");