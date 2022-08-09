import { optBtn} from './index';

export function homeDisplay() {
  console.log('home display');
}

export const homeButton = optBtn('home');
homeButton.addEventListener('click', homeDisplay);