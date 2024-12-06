const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

const DISCORD_WEBHOOK_URL = "webhook lil bro";

app.get("/discord-callback", async (req, res) => {
    const code = req.query.code;

    try {
        const tokenResponse = await axios.post("https://discord.com/api/oauth2/token", null, {
            params: {
                client_id: "YOUR_DISCORD_CLIENT_ID",
                client_secret: "YOUR_DISCORD_CLIENT_SECRET",
                grant_type: "authorization_code",
                code,
                redirect_uri: "YOUR_REDIRECT_URI",
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        const accessToken = tokenResponse.data.access_token;

        const userResponse = await axios.get("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const username = userResponse.data.username;

        await axios.post(DISCORD_WEBHOOK_URL, {
            content: `User logged in: ${username}`,
        });

        res.send("Login successful!");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during login.");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
