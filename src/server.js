const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello CI/CD' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/calc', (req, res) => {
  const expression = req.query.expr || '1+1';
  const result = eval(expression);
  res.json({ expression, result });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
