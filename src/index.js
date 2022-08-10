import './styles/index.css';
import { homeButton, homeDisplay } from './home';
import { menuButton } from './menu';
import { contactButton } from './contact';
import { mainContent } from './misc';

const contentContainer = document.querySelector('#content');

const options = document.createElement('div');
options.setAttribute('id', 'options');

const buttons = [homeButton, menuButton, contactButton];

contentContainer.appendChild(options);
contentContainer.appendChild(mainContent);

for (const button of buttons) {
  options.appendChild(button);
}

homeDisplay(mainContent);
