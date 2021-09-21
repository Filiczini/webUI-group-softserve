const findMersenne = require("./app");

describe("findMersenne", () => {
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
});
