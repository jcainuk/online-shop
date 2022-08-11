const mongoDbStore = require('connect-mongodb-session');

const createSessionStore = (session) => {
  const MongoDBStore = mongoDbStore(session);

  new MongoDBStore({
    uri:
  })
};
