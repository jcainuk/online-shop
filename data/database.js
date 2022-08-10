const mongodb = require('mongodb');

const {
  MONGODB_URI, DB_NAME,
} = process.env;

const { MongoClient } = mongodb;

const connectToDatabase = async () => {
  await MongoClient.connect(MONGODB_URI);
};
