export function optBtn(name) {
  const div = document.createElement('div');
  div.textContent = name;
  div.setAttribute('id', name);
  div.appendChild(document.createElement('div'));
  return div
}

export const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'mainContent');