const themeSelect = document.getElementById('theme-select');
const themeImage = document.getElementById('theme-image');
const storedTheme = localStorage.getItem('theme');


function applyTheme(theme) {
  if (theme === 'system') {
    // Detect system preference (i used ai to figure out system theme i thought it would be really cool)
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  document.documentElement.setAttribute('data-theme', theme);
  themeImage.src = themeImage.getAttribute(`data-${theme}`);
}

themeSelect.addEventListener('change', () => {
  const selected = themeSelect.value;
  localStorage.setItem('theme', selected);
  applyTheme(selected);
});
