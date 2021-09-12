function getPromise(delay, message) {
  return new Promise((resolve) => setTimeout(() => resolve(message), delay));
}
