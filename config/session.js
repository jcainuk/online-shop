const {
  MONGODB_URI, DB_NAME, COLLECTION, SECRET,
} = process.env;

const expressSession = require('express-session');

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

const createSessionConfig = () => ({
  secret: SECRET,
  resave: false,
  saveUninitialized: false,
  store: createSessionStore(),
  cookie: {
    maxAge: 2 * 24 * 60 * 60 * 1000,
  },
});

module.exports = createSessionConfig;
