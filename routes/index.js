const router = require('express').Router();

// Import for html-routes
const htmlRouter = require('./html-routes');
// Import for api-routes
const apiRouter = require('./api-routes');

// Use our html route
router.use('/html', htmlRouter);
// Use our api route
router.use('/api', apiRouter);

// Exports app
module.exports = router;