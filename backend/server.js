const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files like CSS, JS, images from this folder
app.use(express.static(__dirname));

// Serve index.html on root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve about.html on /about route
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Simple API endpoint
app.get('/api/data', (req, res) => {
  res.json({ name: "Gowtham Institution", students: 1000 });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


