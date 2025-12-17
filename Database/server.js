const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log('running successfully');
});
