const axios = require('axios');

async function generateToken(clientId, clientSecret, tokenEndpoint) {
  try {
    // Request body parameters
    const requestBody = {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    };

    // Make a POST request to the token endpoint
    const response = await axios.post(tokenEndpoint, requestBody);

    // Extract the access token from the response
    const accessToken = response.data.access_token;

    // Return the access token
    return accessToken;
  } catch (error) {
    console.error('Error generating token:', error.message);
    throw error;
  }
}

module.exports = {
  generateToken
};
