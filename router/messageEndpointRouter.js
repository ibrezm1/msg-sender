const express = require('express');
const axios = require('axios');
const { logger, logWithResponse } = require('../utils/logger');
const { isFieldExists } = require('../utils/helpers');
const config = require('../config/config.json');

const router = express.Router();

// Endpoint for sending messages
router.post('/', (req, res) => {
  // Extract the necessary data from the request body
  const { tokenEndpoint, messageType, message } = req.body;

  // Make the request to the token endpoint
  axios.post(tokenEndpoint, message)
    .then(response => {
      // Perform the necessary logic for sending the message
      // using the extracted data and the response received

      // Log the message and response
      logWithResponse('info', message, response.data);

      // Return a response indicating success
      res.json({ success: true });
    })
    .catch(error => {
      // Log the error, message, and response (if available)
      const errorMessage = error.message;
      const response = error.response ? error.response.data : undefined;
      logWithResponse('error', message, response, errorMessage);

      // Return a response indicating failure
      res.status(500).json({ success: false, error: errorMessage });
    });
});

module.exports = router;
