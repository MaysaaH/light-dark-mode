const toggleSwitch = document.querySelector('.toggle');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', switchTheme);

function switchTheme(e) {
  if (e.target.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}