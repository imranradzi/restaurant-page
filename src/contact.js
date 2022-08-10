import { optBtn, mainContent } from './misc';

function contactDisplay() {
  console.log('contact display');
}

export const contactButton = optBtn('contact');
contactButton.addEventListener('click', contactDisplay);

const contactInfo = document.createElement('div');