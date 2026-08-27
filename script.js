const themeButton = document.querySelector('.theme-toggle');

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light colour theme' : 'Switch to dark colour theme');
  localStorage.setItem('notes-theme', isDark ? 'dark' : 'light');
});

if (localStorage.getItem('notes-theme') === 'dark') {
  document.body.classList.add('dark');
  themeButton.setAttribute('aria-label', 'Switch to light colour theme');
}
