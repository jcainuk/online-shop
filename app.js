const dotenv = require('dotenv').config();
const express = require('express');

const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(authRoutes);

const { PORT } = process.env || 3000;
app.listen(PORT);
