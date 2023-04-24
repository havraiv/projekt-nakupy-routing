import { Header } from '../Header';
import { Footer } from '../Footer';

export const ErrorPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container">
      <h1>Tato stránka neexistuje</h1>
    </main>
  `;
  element.append(Footer());
  return element;
};
