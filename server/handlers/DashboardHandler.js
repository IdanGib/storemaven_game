const { ScoresKey } = require("../constants");
const { KeyValueDb } = require("../db");

const html = (socres) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
  </head>
  <body>
    <h1>Users Scores</h1>
    <ol>
      ${
        socres.map(s => `<li>${s.id}: ${s.score}</li>`)
      }
    </il>
  </body>
  </html>
  `
}
async function DashboardHandler() {
  const scores = await KeyValueDb.getItem(ScoresKey);
  const sorted = (scores || []).sort((s1, s2) => s2.score - s1.score);
  return html(sorted);
}

module.exports = { DashboardHandler }