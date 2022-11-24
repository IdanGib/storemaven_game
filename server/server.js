const express = require('express');
const cors = require('cors');
const { DashboardHandler } = require('./handlers/DashboardHandler');
const { getUserScoreHandler } = require('./handlers/getUserScoreHandler');
const { IncrementUserScoreHandler } = require('./handlers/IncrementUserScoreHandler');
const app = express();
const port = 4000;
app.use(cors());
app.get('/dashboard', async (req, res) => {
  const result = await DashboardHandler();
  res.send(result);
});

app.get('/score/:id', async (req, res) => {
  const { id } = req.params;
  const result = await getUserScoreHandler(id);
  res.json({ result });
});

app.post('/score/:id/:score', async (req, res) => {
  const { id, score } = req.params;
  const result = await IncrementUserScoreHandler(id, Number(score));
  res.json({ result });
});

app.use('*', (req, res) => {
  return res.redirect('/dashboard');
});

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});