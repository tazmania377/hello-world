const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow requests from frontend

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});