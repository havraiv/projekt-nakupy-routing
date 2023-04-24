import { Header } from '../Header';
import { Footer } from '../Footer';

export const ErrorPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container">
      <p>Tato stránka neexistuje</p>
    </main>
  `;
  element.append(Footer());
  return element;
};
