import { optBtn} from './index';

export function contactDisplay() {
  console.log('contact display');
}

export const contactButton = optBtn('contact');
contactButton.addEventListener('click', contactDisplay);