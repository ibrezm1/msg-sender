const express = require('express');
const bodyParser = require('body-parser');
const getMessageDetailsRouter = require('./router/getMessageDetailsRouter');
const messageEndpointRouter = require('./router/messageEndpointRouter');

const app = express();
const port = 3000;

// Enable parsing of JSON bodies
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

// Register routers
app.use('/get-message-details', getMessageDetailsRouter);
app.use('/message-endpoint', messageEndpointRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
