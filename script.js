const discordLoginButton = document.getElementById("discord-login");
const adminLoginForm = document.getElementById("admin-login");

discordLoginButton.addEventListener("click", () => {
    // Redirect to Discord OAuth URL
    const clientId = "YOUR_DISCORD_CLIENT_ID";
    const redirectUri = "YOUR_REDIRECT_URI";
    const scope = "identify";
    const responseType = "code";

    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${scope}`;
});

// Handle admin login
adminLoginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (username === "skyfollows" && password === "skyfollowsadmin") {
        alert("Admin login successful!");
        // Add additional admin functionality here
    } else {
        alert("Invalid admin credentials!");
    }
});
