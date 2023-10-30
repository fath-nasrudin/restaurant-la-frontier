import { homeContent, ourProductsContent, aboutUsContent } from '../tabContent';

export const switchTabContent = (tabName = 'home') => {
  const tabContents = {
    home: homeContent(),
    'our-products': ourProductsContent(),
    'about-us': aboutUsContent(),
  }
  
  const tabContent = tabContents[tabName] ? tabContents[tabName] : tabContents['home'];


  const content = document.querySelector('#content');
  content.textContent = '';
  content.appendChild(tabContent);

  
}

export const setTabActiveState = (dom) => {
  const nav = dom.closest('.nav');
  const navItems = nav.querySelectorAll('.nav-item');
  Array.from(navItems).forEach(navItem => {
    navItem.classList.remove('active');
  })

  dom.classList.add('active');
}

export const setTab = (dom) => {
  const { tabName } = dom.dataset;

  switchTabContent(tabName);
  setTabActiveState(dom);
}
