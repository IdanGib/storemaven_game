const express = require('express');
const app = express();
const port = 4000;
app.get('/dashboard', (req, res) => {});
app.get('/score/:id', (req, res) => {});
app.post('/score/:id/:score', (req, res) => {});
app.use('*', (req, res) => {
  return res.redirect('/dashboard');
});
app.listen(() => {
  console.log(`Server listen on port: ${port}`);
}, port);