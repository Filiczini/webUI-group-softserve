function numPower(n) {
  let i = 0;
  if (n > 0) {
    while (2 ** i < n) {
      i++;
    }
  } else {
    return console.log("Enter positive Number");
  }
  return i - 1;
}

const findMersenne = function (n) {
  let resultArr = [];
  for (let i = 1; i <= numPower(n); i++) {
    let Mn = 2 ** i - 1;
    if (Mn < n) {
      resultArr.push(Mn);
    }
  }
  console.log(resultArr);
  return resultArr;
};

findMersenne(200000);
numPower(-2);
