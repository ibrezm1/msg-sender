const express = require('express');
const bodyParser = require('body-parser');
const getMessageDetailsRouter = require('./router/getMessageDetailsRouter');
const messageEndpointRouter = require('./router/messageEndpointRouter');
const gcsStorageRouter = require('./router/gcsStorageRouter'); // Add this line
const configrouter = require('./router/configRouter');
const bigqueryRouter = require('./router/bigqueryRouter');
const pubsubRouter = require('./router/pubsubRouter');

const app = express();
const port = 3000;

// Enable parsing of JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Register routers
app.use('/get-message-details', getMessageDetailsRouter);
app.use('/message-endpoint', messageEndpointRouter);
app.use('/gcs-storage', gcsStorageRouter); // Add this line
app.use('/config', configrouter); // Add this line
app.use('/bquery', bigqueryRouter); // Add this line
app.use('/pubsub', pubsubRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
