document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents the form from submitting in the traditional way

      // Redirect the window to the dashboard page
      window.location.href = 'dashboard.html';
    });
  }
});
