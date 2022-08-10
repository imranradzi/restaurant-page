import './styles/contact.css'
import { optBtn, mainContent } from './misc';

function contactDisplay() {
  while(mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
  mainContent.appendChild(contactInfo);
}

export const contactButton = optBtn('contact');
contactButton.addEventListener('click', contactDisplay);

const contactInfo = document.createElement('div');
contactInfo.setAttribute('id', 'contact-info');

const paragraph = document.createElement('div');
paragraph.textContent = 'Got any questions? Contact us at'

const paragraphFodder = document.createElement('div');
paragraphFodder.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

contactInfo.appendChild(paragraph);
contactInfo.appendChild(paragraphFodder);