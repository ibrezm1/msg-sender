const express = require('express');
const router = express.Router();
const GCSStorage = require('../utils/gcsStorage');

// Create an instance of GCSStorage
const gcsStorage = new GCSStorage('./config/key.json');

// Define a route to get the last 5 items uploaded to the bucket
// http://localhost:3000/gcs-storage/plated-ensign-390102-ml/models/
router.get('/:bucketName/:folderName', async (req, res) => {
  const bucketName = req.params.bucketName;
  const folderName = req.params.folderName;

  try {
    const files = await gcsStorage.getLast5UploadedItems(bucketName, folderName);
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
