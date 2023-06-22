const fs = require('fs');
const path = require('path');

// Create the logs and msg folders if they don't exist
const logsFolderPath = path.join(__dirname, 'logs');
const msgFolderPath = path.join(__dirname, 'msg');

if (!fs.existsSync(logsFolderPath)) {
  fs.mkdirSync(logsFolderPath);
}

if (!fs.existsSync(msgFolderPath)) {
  fs.mkdirSync(msgFolderPath);
}
