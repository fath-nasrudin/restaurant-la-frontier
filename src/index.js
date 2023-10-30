import './views/css/style.css';
import headerComponent from './views/components/header.component.js';
import mainComponent from './views/components/main.component.js';
import footerComponent from './views/components/footer.component.js';
import { setTab } from './views/modules/switchTab';
const loadPage = () => {
  const mainContainer = document.querySelector('#mainContainer');
  
  mainContainer.append(
    headerComponent(),
    mainComponent(),
    footerComponent(),
  )
  
  const home = document.querySelector('[data-tab-name="home"]');
  setTab(home);
}

loadPage();


