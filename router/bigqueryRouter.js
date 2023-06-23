"use strict";
const express = require('express');
const router = express.Router();
const { BigQueryHelper } = require('../utils/bigQueryHelper');

// Create an instance of BigQueryHelper
const bigQueryHelper = new BigQueryHelper('./config/key.json');

// Define a route to run a BigQuery query
//http://localhost:3000/bquery?q=SELECT%20CURRENT_DATE()
router.get('/', async (req, res) => {
  const query = req.query.q;

  try {
    const result = await bigQueryHelper.runQuery(query);
    //const htmlTable = generateHTMLTable(result);
    res.send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
 