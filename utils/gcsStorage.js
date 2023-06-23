const { Storage } = require('@google-cloud/storage');

class GCSStorage {
  constructor(keyFilePath) {
    this.storage = new Storage({ keyFilename: keyFilePath });
  }

  async getLast5UploadedItems(bucketName, location) {
    this.bucketName = bucketName;
    this.location=location;
    const bucket = this.storage.bucket(bucketName);
    const [files] = await bucket.getFiles({
      autoPaginate: false,
      directory: decodeURI(location),
    });

    const sortedFiles = files.sort((a, b) => {
      return b.metadata.timeCreated - a.metadata.timeCreated;
    });
    //https://storage.cloud.google.com/plated-ensign-390102-ml/models/multiclass_text_classification_model.h5
    const last5Files = sortedFiles.slice(0, 5);
    const prefixUrl = `https://storage.cloud.google.com/${bucketName}`;
    return last5Files.map(file => ({
      name: file.name,
      time_created: file.metadata.timeCreated,
      link: `${prefixUrl}/${file.name}`,
    }));
  }
}

module.exports = GCSStorage;
