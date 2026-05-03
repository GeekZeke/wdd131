const themeSelect = document.getElementById('theme-select');
const themeImage = document.getElementById('theme-image');

// listens for changes on the dropdowb
themeSelect.addEventListener('change', () => {
  const selectedTheme = themeSelect.value;

  if (selectedTheme === 'system') {
    // use system preferences
    // i thought this would be really cool
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  } else {
    applyTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
  }
});

// applies theme and update logo
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const lightSrc = themeImage.getAttribute('data-light');
  const darkSrc = themeImage.getAttribute('data-dark');
  themeImage.src = theme === 'dark' ? darkSrc : lightSrc;
}
