const mongodb = require('mongodb');

const {
  MONGODB_URI, DB_NAME,
} = process.env;

const { MongoClient } = mongodb;

const connectToDatabase = async () => {
  MongoClient.connect(MONGODB_URI);
};
