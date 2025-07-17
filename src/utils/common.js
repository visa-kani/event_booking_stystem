const setLocalStorage = (key, value) => localStorage.setItem(key, value);
const getLocalStorage = (key) => localStorage.getItem(key);
const removeLocalStorage = (key) => localStorage.removeItem(key);
export { setLocalStorage, getLocalStorage, removeLocalStorage };