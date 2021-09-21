const findMersenne = require("./app");

describe("findMersenne", () => {
  test("Expect to return Mersenne numbers 3, 7, 31, 127", () => {
    expect(findMersenne(1000)).toEqual(expect.arrayContaining([3, 7, 31, 127]));
  });
  test("Expect to return Mersenne numbers 3, 7, 31, 127", () => {
    expect(findMersenne(1000).length).toBe(4);
  });

  test("Expect to return Mersenne numbers 3, 7, 31", () => {
    expect(findMersenne(100)).toEqual(expect.arrayContaining([3, 7, 31]));
  });

  test("Expect to return Mersenne numbers 3, 7, 31", () => {
    expect(findMersenne(100).length).toBe(3);
  });

  test("Expect to return Mersenne numbers 3, 7, 31, 127, 2047, 8191, 131071, 524287", () => {
    expect(findMersenne(10000000)).toEqual(
      expect.arrayContaining([3, 7, 31, 127, 8191, 131071, 524287])
    );
  });

  test("Expect to return Mersenne numbers 3, 7, 31, 127, 2047, 8191, 131071, 524287", () => {
    expect(findMersenne(1000000).length).toBe(8);
  });
});
