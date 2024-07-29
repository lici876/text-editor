const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist')));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes setup (example using htmlRoutes)
require('./routes/htmlRoutes')(app);

// Catch-all route to serve index.html for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server now running on port ${PORT}!`);
});
