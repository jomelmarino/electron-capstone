// This file contains the frontend logic for the login page.

document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the existing form element from the static HTML
    const form = document.getElementById('loginForm') as HTMLFormElement | null;
    
    if (!form) {
        console.error('Login form element with ID "loginForm" not found!');
        return;
    }

    // 2. Attach the event handler
    form.addEventListener('submit', (e: SubmitEvent) => {
        e.preventDefault();
        
        // Find the input values
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const passwordInput = document.getElementById('password') as HTMLInputElement | null;

        const email = emailInput?.value || '';
        const password = passwordInput?.value || '';

        console.log(`Attempting login with: Email: ${email}, Password: ${password.length} characters`);
        
        // --- THIS IS WHERE MY BACKEND/SUPABASE CALL WILL GO ---
        // (For now, just logging the details)
        
        // In the future, this is where I would call an IPC method 
        // that talks to your secure main process:
        // window.api.login({ email, password });
    });
});