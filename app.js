const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const csrf = require('csurf');

const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(csrf());

app.use(addCsrfTokenMiddleware);

app.use(authRoutes);

app.use();

db.connectToDatabase().then(() => {
  const { PORT } = process.env || 3000;
  app.listen(PORT);
}).catch((error) => {
  console.log('Failed to connect to the database!');
  console.log(error);
});
