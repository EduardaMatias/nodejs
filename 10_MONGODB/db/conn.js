const { MongoClient } = require('mongodb');

const uri = 'mongodb://0.0.0.0:27017/testemongodb';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log('...✅ conectado ao mongodb');
  } catch (err) {
    console.log(err);
  }
}

run()

module.exports = client
