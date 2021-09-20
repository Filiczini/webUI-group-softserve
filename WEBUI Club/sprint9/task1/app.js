let sumFinder = function (m, n) {
  let str = n.toString().slice(-m).split("");
  let res = str.reduce(function (prev, current) {
    return parseInt(prev) + parseInt(current);
  });
  return res;
};

module.exports = sumFinder;
