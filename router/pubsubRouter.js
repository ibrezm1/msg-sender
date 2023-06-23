const express = require('express');
const router = express.Router();
const PubSubHelper = require('../utils/pubsubHelper');

// Create an instance of PubSubHelper
const pubsubHelper = new PubSubHelper('./config/key.json');

// Define a route to receive messages from Pub/Sub
// http://localhost:3000/pubsub?sub=projects/plated-ensign-390102/subscriptions/test-sub
router.get('/', async (req, res) => {
  const subscriptionName = req.query.sub;

  try {
    const messages = await pubsubHelper.receiveMessages(subscriptionName);
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//https://github.com/googleapis/nodejs-pubsub/blob/ac86600cda69e89ade8ae6ea60e4a21100ed89aa/samples/synchronousPull.js
module.exports = router;
