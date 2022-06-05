//本地缓存
class localCache {
  set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }
  remove(key: string) {
    window.localStorage.removeItem(key);
  }
  clear() {
    window.localStorage.clear();
  }
}
class sessionCache {
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    const value = window.sessionStorage.getItem(key);
    if (value) {
      JSON.parse(value);
      return value;
    }
  }
  remove(key: string) {
    window.sessionStorage.removeItem(key);
  }
  clear() {
    window.sessionStorage.clear();
  }
}
const local = new localCache();
const session = new sessionCache();
export { local as localCache, session as sessionCache };
