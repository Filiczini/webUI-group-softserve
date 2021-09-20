const sumFinder = require("./app");

describe("sumFinder", () => {
  test("Takes 2 last nums from 233 and add them. Expect 3 + 3 = 6", () => {
    expect(sumFinder(2, 233)).toBe(6);
  });

  test("Takes 3 last nums of 2111. Expect 1 + 1 + 1 = 3", () => {
    expect(sumFinder(3, 2111)).toBe(3);
  });
});
