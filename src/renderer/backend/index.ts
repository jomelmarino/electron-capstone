document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  
  // --- Password Toggle Elements ---
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  const togglePasswordButton = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeSlashIcon = document.getElementById('eye-slash-icon');

  // --- Login Form Submission Logic ---
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents the form from submitting in the traditional way
      // Redirect the window to the dashboard page
      window.location.href = 'dashboard.html';
    });
  }

  // --- Password Toggle Logic ---
  if (togglePasswordButton && passwordInput && eyeIcon && eyeSlashIcon) {
    togglePasswordButton.addEventListener('click', () => {
      // Toggle the input type
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      // Toggle the icon visibility
      eyeIcon.classList.toggle('hidden', isPassword);
      eyeSlashIcon.classList.toggle('hidden', !isPassword);
    });
  }
});