const { BigQuery } = require('@google-cloud/bigquery');

class BigQueryHelper {
  constructor(keyFilePath) {
    this.bigquery = new BigQuery({ keyFilename: keyFilePath });
  }

  async runQuery(query) {
    const options = {
      query,
      location: 'US',
    };

    const [job] = await this.bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();

    return rows;
  }
}

module.exports = {
    BigQueryHelper,
  };
