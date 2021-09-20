const { numPower, findMersenne } = require("./app");

test("Takes num and return max power of 2. 2000 is greater then 1024 but less then 2048. 1024 = 2 ** 10. Expect return 10", () => {
  expect(numPower(2000)).toBe(10);
});

test("wer of 2. 1000 is greater then 512 but less then 1024. 512 = 2 ** 9. Expect return 9", () => {
  expect(numPower(1000)).toBe(9);
});

test("Expect to return Mersenne numbers 1, 3, 7, 15, 31, 63, 127, 255, 511", () => {
  expect(findMersenne(1000)).toEqual(
    expect.arrayContaining([1, 3, 7, 15, 31, 63, 127, 255, 511])
  );
});

test("Expect to return Mersenne numbers 1, 3, 7, 15, 31, 63", () => {
  expect(findMersenne(100)).toEqual(
    expect.arrayContaining([1, 3, 7, 15, 31, 63])
  );
});

test("Expect to return Mersenne numbers 1, 3, 7, 15, 31, 63", () => {
  expect(findMersenne(100).length).toBe(6);
});
