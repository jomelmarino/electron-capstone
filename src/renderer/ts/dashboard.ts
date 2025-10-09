// This function contains all the logic that needs to run AFTER the sidebar is loaded.
function initializeDashboardLogic() {
  console.log('Sidebar loaded, initializing dashboard logic...');

  const logoutButton = document.getElementById('logout-btn');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      // Redirect back to the login page
      window.location.href = 'index.html';
    });
    console.log('Logout button event listener attached.');
  } else {
    console.error('Logout button not found after sidebar load.');
  }

  // You can add other dashboard-specific logic here,
  // like attaching event listeners to the main content area.
}

// Instead of running on DOMContentLoaded, we now wait for our custom 'sidebarLoaded' event.
// This ensures the script doesn't try to find 'logout-btn' before it exists in the DOM.
document.addEventListener('sidebarLoaded', initializeDashboardLogic);
