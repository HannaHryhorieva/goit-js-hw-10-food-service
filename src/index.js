import './sass/main.scss';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchToggle = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');


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
