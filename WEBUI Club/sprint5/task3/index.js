const maxInterv = (...args) => {
  let interval = 0;
  let answer = args.reduce((previousValue, currentValue, i) => {
    Math.abs(args[i + 1] - args[i]) > interval
      ? (interval = Math.abs(args[i + 1] - args[i]))
      : currentValue;
  }, 0);
  return interval;
};

console.log(maxInterv(3, 5, 2, 37, 11, 0, -2));
