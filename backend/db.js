const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://rajputshubham615:Rshubham@13@cluster0.3uoj5vb.mongodb.net/';

async function connectToDatabase() {
  const client = new MongoClient(uri);
  await client.connect();

  const database = client.db('jewels@99');
  const collection = database.collection('jewels_info');

  return { client, database, collection };
}

module.exports = { connectToDatabase };
