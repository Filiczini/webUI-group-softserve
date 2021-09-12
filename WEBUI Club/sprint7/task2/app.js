function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x === "number" && typeof y === "number") {
      resolve(x + y);
    } else {
      reject("Error!");
    }
  });
}
