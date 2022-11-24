const { ScoresKey } = require("../constants");
const { KeyValueDb } = require("../db");

async function IncrementUserScoreHandler(id, score) {
  const scores = await KeyValueDb.getItem(ScoresKey);
  const user = (scores || []).find(s => s.id === id);
  if (user) {
    user.score += score;
  } else {
    scores.push({ id, score });
  }
  await KeyValueDb.setItem(ScoresKey, scores);
}
module.exports = {
  IncrementUserScoreHandler
}