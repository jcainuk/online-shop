const mongodb = require('mongodb');

const {
  MONGODB_URI, DB_NAME,
} = process.env;

const { MongoClient } = mongodb;

MongoClient.connect(MONGODB_URI);
