const express = require('express');
const { faker } = require('@faker-js/faker');
const config = require('../config.json');

const router = express.Router();

// Endpoint for getting message details
router.get('/', (req, res) => {
  const messageType = req.query.messageType;

  if (!config[messageType]) {
    res.status(400).json({ error: 'Invalid message type' });
    return;
  }

  const tokenEndpoint = config[messageType].tokenEndpoint;
  const defaultContent = config[messageType].defaultContent;

  if (messageType == 'sms') {
    // Generate random phone number using faker
    defaultContent.phoneNumber = faker.string.uuid();
  }

  res.json({ tokenEndpoint, defaultContent });
});

module.exports = router;
