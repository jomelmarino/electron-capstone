document.addEventListener('DOMContentLoaded', () => {

    const logoutButton = document.getElementById('logout-btn');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Redirect back to the login page
            window.location.href = 'index.html';
        });
    }
});
