const findMersenne = function (n) {
  let resultArr = [];
  i = 0;
  let Mn = 2 ** i - 1;
  do {
    i++;
    Mn = 2 ** i - 1;
    if (Mn <= n) {
      resultArr.push(Mn);
    }
  } while (Mn < n);
  return resultArr;
};

module.exports = findMersenne;

// findMersenne(2000000);
