import './styles/home.css';
import { optBtn, mainContent } from './misc';

export function homeDisplay() {
  while(mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
  mainContent.appendChild(about);
}

export const homeButton = optBtn('home');
homeButton.addEventListener('click', homeDisplay);

const about = document.createElement('div');
about.setAttribute('id', 'about');

const paragraphOne = document.createElement('div');
paragraphOne.textContent = 'We serve water, and only water.';

const paragraphTwo = document.createElement('div');
paragraphTwo.textContent = 'Interested? Take a look at our menu.'

about.appendChild(paragraphOne);
about.appendChild(paragraphTwo);

