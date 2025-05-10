const express = require('express');
const app = express();
const port = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Basic API route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello from Node.js on EC2!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
