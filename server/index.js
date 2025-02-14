// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// A test route
app.get('/', (req, res) => {
  res.send('Hello from Unihabitat backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
