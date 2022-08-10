import './footer.css';

export const footer = document.createElement('footer');

const links = document.createElement('div');
links.classList.add('links');

const github = document.createElement('div');

const githubLink = document.createElement('a');
githubLink.setAttribute('href', 'https://github.com/imranradzi/restaurant-page');
githubLink.setAttribute('target', '_blank');

const githubIcon = document.createElement('img');
githubIcon.setAttribute('src', 'svg/github.svg');
githubIcon.setAttribute('alt', 'github icon');
githubIcon.setAttribute('width', '24px');
githubIcon.setAttribute('height', '24px');

githubLink.appendChild(githubIcon);
github.appendChild(githubLink);

const linkedin = document.createElement('div');

const linkedinLink = document.createElement('a');
linkedinLink.setAttribute('href', 'https://uk.linkedin.com/in/imran-radzi-575aba194');
linkedinLink.setAttribute('target', '_blank');

const linkedinIcon = document.createElement('img');
linkedinIcon.setAttribute('src', 'svg/linkedin.svg');
linkedinIcon.setAttribute('alt', 'linkedin icon');
linkedinIcon.setAttribute('width', '24px');
linkedinIcon.setAttribute('height', '24px');

linkedinLink.appendChild(linkedinIcon);
linkedin.appendChild(linkedinLink);

links.appendChild(github);
links.appendChild(linkedin);

footer.appendChild(links);