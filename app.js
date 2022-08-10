const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');

const db = require('./data/database');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(authRoutes);

db.connectToDatabase().then().catch((error) => {
  console.log('Failed to connect to the database!');
  console.log(error);
});
const { PORT } = process.env || 3000;
app.listen(PORT);
