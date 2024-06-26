// Imports express
const html = require('express').Router();
// The path module provides a way of working with directories and file paths
const path = require('path');

// This HTML Route is a Get route for displaying the notes page
html.get('/notes', (req, res) => {
    // console.info(`${req.method} request received for notes`);
    // using the platform-specific separator as a delimiter, then normalizes the resulting path
    res.sendFile(path.join(__dirname, '../Public/notes.html'));
});

// This HTML Route is a Get route for displaying the homepage
html.get('*', (req, res) => {
    // console.info(`${req.method} request received for index`);
    res.sendFile(path.join(__dirname, '../Public/index.html'));
});

// Exports the app
module.exports = html;