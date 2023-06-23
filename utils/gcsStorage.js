const { Storage } = require('@google-cloud/storage');

class GCSStorage {
  constructor(keyFilePath) {
    this.storage = new Storage({ keyFilename: keyFilePath });
  }

  async getLast5UploadedItems(bucketName, location) {
    const bucket = this.storage.bucket(bucketName);
    const [files] = await bucket.getFiles({
      autoPaginate: false,
      directory: location,
    });

    const sortedFiles = files.sort((a, b) => {
      return b.metadata.timeCreated - a.metadata.timeCreated;
    });

    const last5Files = sortedFiles.slice(0, 5);

    return last5Files.map(file => ({
      name: file.name,
      time_created: file.metadata.timeCreated,
    }));
  }
}

module.exports = GCSStorage;
