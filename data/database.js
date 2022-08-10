const mongodb = require('mongodb');

const {
  MONGODB_URI, DB_NAME,
} = process.env;

const { MongoClient } = mongodb;

let database;

const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URI);
  database = client.db(DB_NAME);
};

const getDb = () => {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
};

module.exports = {
  connectToDatabase, getDb,
};
