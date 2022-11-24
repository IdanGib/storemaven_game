const store = {};
class KeyValueDb {
  static async setItem(key, value) {
    store[key] = value;
  }
  static async getItem() {
    return store[key];
  }
} 

module.exports = {
  KeyValueDb
}