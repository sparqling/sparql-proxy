export default class NullCache {
  get(key) {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }

  put(key, value) {
    return new Promise((resolve, reject) => {
      resolve(null);
    });
  }
}