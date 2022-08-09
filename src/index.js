import './styles/index.css';
import { homeButton } from './home';
import { menuButton } from './menu';
import { contactButton } from './contact';

const contentContainer = document.querySelector('#content');

const options = document.createElement('div');
options.setAttribute('id', 'options');

const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'mainContent');
mainContent.textContent = 'main content goes here'

export function optBtn(name) {
  const div = document.createElement('div');
  div.textContent = name;
  div.setAttribute('id', name);
  let functName = name + 'Display';
  return div
}

const buttons = [homeButton, menuButton, contactButton];

contentContainer.appendChild(options);
contentContainer.appendChild(mainContent);

for (const button of buttons) {
  options.appendChild(button);
}

