const store = {};
class KeyValueDb {
  static async setItem(key, value) {
    store[key] = value;
  }
  static async getItem(key, defaulrVal = []) {
    if (!store[key]) {
      store[key] = [];
    }
    return store[key];
  }
} 

module.exports = {
  KeyValueDb
}