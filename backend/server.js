const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 10000;

app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: "Hello from Node.js backend hi!" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${PORT}`);
});