import './sass/main.scss';
import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';



const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchToggle = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');
const menuListEl = document.querySelector('.js-menu');

const menuMarkup = menuCardTpl(menu);
menuListEl.insertAdjacentHTML('beforeend', menuMarkup);


function populateToggle() {
    const valueCheck = localStorage.getItem('themeValue');
      if (valueCheck) {
      bodyEl.classList.add(valueCheck);  
    } else {
        bodyEl.classList.add(Theme.LIGHT);
      localStorage.setItem('themeValue', Theme.LIGHT)  
    };
    if (valueCheck === Theme.DARK) {
        switchToggle.setAttribute('checked', 'true')
    };
};
populateToggle();

switchToggle.addEventListener('change', onChangeTheme);

function onChangeTheme(evt) {
if (bodyEl.classList.contains(Theme.LIGHT)) {
    bodyEl.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('themeValue', Theme.DARK);
    switchToggle.setAttribute('checked', 'true')
} else {
    bodyEl.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('themeValue', Theme.LIGHT);
    switchToggle.removeAttribute('checked');
    };   
};
