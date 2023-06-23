const express = require('express');
const router = express.Router();
const fs = require('fs');

// Define the route to get the configuration
router.get('/', (req, res) => {
  try {
    // Read the configuration file
    const configData = fs.readFileSync('./config/config.json', 'utf8');
    const config = JSON.parse(configData);

    // Send the configuration as the response
    res.json(config);
  } catch (error) {
    // Handle errors if the configuration file cannot be read or parsed
    console.error('Error loading configuration:', error);
    res.status(500).json({ error: 'Failed to load configuration' });
  }
});

module.exports = router;
