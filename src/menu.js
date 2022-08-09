import { optBtn} from './index';

export function menuDisplay() {
  console.log('menu display');
}

export const menuButton = optBtn('menu');
menuButton.addEventListener('click', menuDisplay);