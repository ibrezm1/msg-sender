const {v1} = require('@google-cloud/pubsub');

class PubSubHelper {
  constructor(credentialsFilePath) {
    // Creates a client; cache this for further use.
    this.subClient = new v1.SubscriberClient({ keyFilename: credentialsFilePath });
  }
  // . projects/plated-ensign-390102/subscriptions/test-sub
  async receiveMessages(formattedSubscription, maxMessages = 10) {

    const request = {
        subscription: formattedSubscription,
        maxMessages: maxMessages,
      };

  // The subscriber pulls a specified number of messages.
  const [response] = await this.subClient.pull(request);



    return response.receivedMessages.map(message => ({
        messageId: message.message.id,
        data: message.message.data.toString(),
      attributes: message.message.attributes,
    }));
  }
}

module.exports = PubSubHelper;
