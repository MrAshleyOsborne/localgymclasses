// server.js
const express = require('express');
const path = require('path');
const app = express();

// Serve everything in the repo root (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
