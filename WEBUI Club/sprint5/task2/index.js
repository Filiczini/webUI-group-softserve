const howMuchSec = (...params) => {
  const [secs, mins, hours, days, months, years] = [
    1, 60, 3600, 86400, 2592000, 31104000,
  ];
  let arr = [secs, mins, hours, days, months, years];

  if (params.length > 0) {
    return params.reduce(function (previousValue, currentValue, index) {
      return previousValue + currentValue * arr[index];
    });
  }

  return 0;
};
