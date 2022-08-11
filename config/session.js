const {
  MONGODB_URI, DB_NAME, COLLECTION,
} = process.env;

const mongoDbStore = require('connect-mongodb-session');

const createSessionStore = (session) => {
  const MongoDBStore = mongoDbStore(session);

  const store = new MongoDBStore({
    uri: MONGODB_URI,
    databaseName: DB_NAME,
    collection: COLLECTION,
  });

  return store;
};
