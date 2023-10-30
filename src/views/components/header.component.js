import { switchTabContent, setTabActiveState } from '../modules/switchTab.js';

const headerComponent = () => {
  const tabsData = [
    {
      textContent: 'Home',
      dataTabName: 'home',
    },
     {
      textContent: 'About Us',
      dataTabName: 'about-us',
    },
     {
      textContent: 'Our Products',
      dataTabName: 'our-products',
    },
  ];

  const header = document.createElement('header');
  header.classList.add('main-header');

  const textLogo = document.createElement('div');
  textLogo.classList.add('text-logo');
  textLogo.textContent = 'La Frontier';
  header.appendChild(textLogo);

  const nav = document.createElement('nav');
  header.appendChild(nav);

  const ul = document.createElement('ul');
  nav.appendChild(ul);
  ul.classList.add('nav');

  const tabHandler = (e) => {
    const { tabName } = e.target.dataset;
    const tab = e.target;
    setTabActiveState(tab);
    switchTabContent(tabName)
  }

  tabsData.forEach(tabData => {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.setAttribute('data-tab-name', tabData.dataTabName);
    li.textContent = tabData.textContent;
    li.addEventListener('click', tabHandler)
    ul.appendChild(li);
  })

  return header;
}

export default headerComponent;