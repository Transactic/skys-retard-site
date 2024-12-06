document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "skyfollows" && password === "skyfollowsadmin") {
        localStorage.setItem("admin", "true");
        window.location.href = "home.html";
    } else {
        alert("Invalid login credentials.");
    }
});
