let sumFinder = function (m, n) {
  let str = n.toString().slice(-m).split("");
  let res = str.reduce(function (prev, current) {
    return parseInt(prev) + parseInt(current);
  });
  console.log(res);
};

sumFinder(3, 2998);
