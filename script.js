const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toogle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');
const DARK_THEME = true;
const LIGHT_THEME = false;

function imageMode(color){
  image1.src = `img/undraw_chilling_re_4iq9_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_qne1_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toogleLightDarkMode(isDark){
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 70%)' : 'rgb(0 0 0 / 50%)';
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
  isDark ?  imageMode('dark') : imageMode('light')
}

// Switching Theme
function switchTheme(event){
  if(event.target.checked){
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark')
    toogleLightDarkMode(DARK_THEME)
    } else{
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light')
    toogleLightDarkMode(LIGHT_THEME)
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
if(currentTheme){
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  if(currentTheme === 'dark'){
    toggleSwitch.checked = true;
    toogleLightDarkMode(DARK_THEME)
  }
}
