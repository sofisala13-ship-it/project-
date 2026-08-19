document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(button => {
        button.addEventListener("click", () => {
            const targetPanelId = button.getAttribute("data-target");
            switchTab(targetPanelId);
        });
    });
});

// Function to handle shifting view tabs seamlessly
function switchTab(panelId) {
    // Hide all panels
    const panels = document.querySelectorAll(".content-panel");
    panels.forEach(panel => panel.classList.remove("active-panel"));

    // Deactivate all navigation items
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach(item => item.classList.remove("active-panel", "active"));

    // Show selected panel
    const targetPanel = document.getElementById(panelId);
    if (targetPanel) {
        targetPanel.classList.add("active-panel");
    }

    // Highlight the active menu button matching the display panel
    const correspondingButton = document.querySelector(`[data-target="${panelId}"]`);
    if (correspondingButton) {
        correspondingButton.classList.add("active");
    }

    // Update main header title dynamically based on location
    const titleMap = {
        "home-section": "Welcome back, Admin",
        "games-section": "Game Center Portal",
        "social-section": "Social Application Portal",
        "browser-section": "Isolated Browser Settings"
    };
    document.getElementById("page-title").innerText = titleMap[panelId] || "Dashboard";
}