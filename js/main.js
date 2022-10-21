'use strict';

//current Year
const year = (document.querySelector('#curYear').textContent =
  new Date().getFullYear());

//theme

const button = document.querySelector('.button--submit');

button.addEventListener('click', e => {
  e.preventDefault();
  let selected = document.getElementsByName('theme');
  for (const color of selected) {
    if (color.checked) {
      document
        .querySelector('[title="theme"]')
        .setAttribute('href', `css/theme-${color.value}.css`);
        localStorage.setItem('theme', color.value)
    }
  }
  let activeTheme = localStorage.getItem('theme')
  if (activeTheme === 'light' || activeTheme === null) {
    document
        .querySelector('[title="theme"]')
        .setAttribute('href', `css/theme-light.css`);
  } else { 
     document
        .querySelector('[title="theme"]')
        .setAttribute('href', `css/theme-dark.css`);
  }
  
});
