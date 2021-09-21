const findMersenne = require("./app");

describe("findMersenne", () => {
  test("findMersenne(1000) Expect to return Mersenne numbers 3, 7, 31, 127", () => {
    expect(findMersenne(1000)).toEqual([3, 7, 31, 127]);
  });

  test("Expect to return Mersenne numbersfindMersenne(1000) Expect to return 4 numbers : 3, 7, 31, 127", () => {
    expect(findMersenne(1000).length).toBe(4);
  });

  test("findMersenne(100) Expect to return Mersenne numbers 3, 7, 31", () => {
    expect(findMersenne(100)).toEqual([3, 7, 31]);
  });

  test("Expect to return Mersenne numbersfindMersenne(100) Expect to return 3 numbers : 3, 7, 31", () => {
    expect(findMersenne(100).length).toBe(3);
  });

  test("findMersenne(10000000) Expect to return Mersenne numbers 3, 7, 31, 127, 8191, 131071, 524287", () => {
    expect(findMersenne(10000000)).toEqual([
      3, 7, 31, 127, 8191, 131071, 524287,
    ]);
  });

  test("Expect to return Mersenne numbersfindMersenne(1000) Expect to return 4 numbers : 3, 7, 31, 127, 8191, 131071, 524287", () => {
    expect(findMersenne(10000000).length).toBe(7);
  });
});
