import './styles/index.css';

const contentContainer = document.querySelector('#content');

const options = document.createElement('div');
options.setAttribute('id', 'options');

const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'mainContent');
mainContent.textContent = 'main content goes here'

function optBtn(name) {
  const div = document.createElement('div');
  div.textContent = name;
  div.setAttribute('id', name);
  return div
}

const buttons = [optBtn('home'), optBtn('menu'), optBtn('contact')];

contentContainer.appendChild(options);
contentContainer.appendChild(mainContent);

for (const button of buttons) {
  options.appendChild(button);
}

