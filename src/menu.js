import './styles/menu.css';
import { optBtn, mainContent } from './misc';

function menuDisplay() {
  while(mainContent.firstChild) {
    mainContent.removeChild(mainContent.lastChild);
  }
  mainContent.appendChild(gridContainer);
}

export const menuButton = optBtn('menu');
menuButton.addEventListener('click', menuDisplay);

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');



for (let i = 0; i < 4; i++) {
  const item = document.createElement('div');

  const itemName = document.createElement('div');
  itemName.textContent = 'Water $1';

  const description = document.createElement('div');
  description.textContent = 'For the thirsty';
  
  item.appendChild(itemName);
  item.appendChild(description);
  item.classList.add('grid-item');
  gridContainer.appendChild(item);
}