'use strict';

//current Year
const year = (document.querySelector('#curYear').textContent =
  new Date().getFullYear());

//theme

const button = document.querySelector('.button--submit');

button.addEventListener('click', e => {
  e.preventDefault();
  let selected = document.getElementsByName('theme');
  let currentSelect = document.getElementById('days').value;
  let currentSelect2 = document.getElementById('position').value;
  let currentSelect3 = document.getElementById('projects').value;

  for (const color of selected) {
    if (color.checked) {
      document
        .querySelector('[title="theme"]')
        .setAttribute('href', `css/theme-${color.value}.css`);
      localStorage.setItem('theme', color.value);
      localStorage.setItem('input', document.getElementById('title').value);
      localStorage.setItem('input2', document.getElementById('size').value);
      localStorage.setItem('input3', document.getElementById('code1').value);
      localStorage.setItem('input4', document.getElementById('code2').value);
      localStorage.setItem('input5', document.getElementById('code3').value);

      localStorage.setItem('select', currentSelect);
      localStorage.setItem('select2', currentSelect2);
      localStorage.setItem('select3', currentSelect3);
    }
  }
});
//theme dark mode
let activeTheme = localStorage.getItem('theme');
if (activeTheme === 'light' || activeTheme === null) {
  document
    .querySelector('[title="theme"]')
    .setAttribute('href', `css/theme-light.css`);
  document.getElementById('light').checked = true;
} else {
  document
    .querySelector('[title="theme"]')
    .setAttribute('href', `css/theme-dark.css`);
  document.getElementById('dark').checked = true;
}

const activeInputTitle = localStorage.getItem('input');
if (activeInputTitle !== '1' || activeInputTitle !== '') {
  document.getElementById('title').value = activeInputTitle;
} else {
  document.getElementById('title').value = '';
}

const activeInputSize = localStorage.getItem('input2');
if (activeInputSize !== '1' || activeInputSize !== '') {
  document.getElementById('size').value = activeInputSize;
} else {
  document.getElementById('size').value = '';
}

const activeInputCode = localStorage.getItem('input3');
if (activeInputCode !== '1' || activeInputCode !== '') {
  document.getElementById('code1').value = activeInputCode;
} else {
  document.getElementById('code1').value = '';
}

const activeInputCode2 = localStorage.getItem('input4');
if (activeInputCode2 !== '1' || activeInputCode2 !== '') {
  document.getElementById('code2').value = activeInputCode2;
} else {
  document.getElementById('code2').value = '';
}

const activeInputCode3 = localStorage.getItem('input5');
if (activeInputCode3 !== '1' || activeInputCode3 !== '') {
  document.getElementById('code3').value = activeInputCode3;
} else {
  document.getElementById('code3').value = '';
}

const activeSelectDays = localStorage.getItem('select');
if (activeSelectDays !== '1' || activeSelectDays !== '') {
  document.getElementById('days').value = activeSelectDays;
} else {
  document.getElementById('days').value = 1;
}

const activeSelectPosition = localStorage.getItem('select2');
if (activeSelectPosition !== '1' || activeSelectPosition !== '') {
  document.getElementById('position').value = activeSelectPosition;
} else {
  document.getElementById('position').value = 1;
}
const activeSelectSize = localStorage.getItem('select3');
if (activeSelectSize !== '1' || activeSelectSize !== '') {
  document.getElementById('projects').value = activeSelectSize;
} else {
  document.getElementById('projects').value = 1;
}
