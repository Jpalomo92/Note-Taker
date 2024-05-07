// Import Express.js
const express = require('express');

// Import  html routes
const htmlRoutes = require('./routes/html-routes')

// Import api routes
const apiRoutes = require('./routes/api-routes')


const PORT = process.env.PORT || 3001;

// Initialize an instance of Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Static middleware pointing to the public folder
app.use(express.static('public'));

// Middleware to use api routes
app.use(apiRoutes);

// Middleware to use html routes
app.use(htmlRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});