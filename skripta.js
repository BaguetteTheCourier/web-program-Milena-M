document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('input');

  toggle.addEventListener('change', (e) => {
    if (!toggle.checked) {
      alert('Who uses Light Mode in 2025?');
      
      // Revert to dark mode
      toggle.checked = true;

      // Rickroll in a new tab
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
  });
});
