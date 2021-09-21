function isPrime(num) {
  for (var i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
}

const findMersenne = function (n) {
  let resultArr = [];
  i = 1;
  let Mn = 2 ** i - 1;

  do {
    i++;
    Mn = 2 ** i - 1;
    if (Mn <= n && isPrime(i)) {
      if (isPrime(Mn)) {
        resultArr.push(Mn);
      }
    }
  } while (Mn < n);
  return resultArr;
};

module.exports = findMersenne;

// findMersenne(1000000);
