const winston = require('winston');
const path = require('path');
const fs = require('fs');


// Create a logger instance
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(__dirname, '../logs/logs.log') })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  )
});

// Function to log message and response
function logWithResponse(level, message, response) {
  // Log the message
  logger.log(level, message);

  // Store the log message and response in separate JSON files
  const logEntry = {
    timestamp: new Date().toISOString(),
    message,
    response
  };

  const logFileName = path.join(__dirname, `../logs/msg/log_${Date.now()}.json`);
  console.log(logFileName);
  fs.writeFileSync(logFileName, JSON.stringify(logEntry, null, 2));
}

module.exports = {
  logger,
  logWithResponse
};
