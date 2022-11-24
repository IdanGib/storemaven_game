const { ScoresKey } = require("../constants");
const { KeyValueDb } = require("../db");

async function getUserScoreHandler(id) {
  const scores = await KeyValueDb.getItem(ScoresKey);
  return (scores || []).find(s => s.id === id) || {};
}
module.exports = {
  getUserScoreHandler
}