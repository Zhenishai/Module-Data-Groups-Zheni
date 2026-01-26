const tally = require("./tally.js");
// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item
test("tally counts multiple unique items", () => {
  expect(tally(["a", "a", "b", "c"])).toEqual({
    a: 2,
    b: 1,
    c: 1,
  });
});

// Given an empty array
// When passed to tally
// Then it should return an empty object
test("tally on an empty array returns an empty object", () => {
  expect(tally([])).toEqual({});
});

// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item

test("tally counts duplicate items", () => {
  expect(tally(["a", "a", "a"])).toEqual({
    a: 3,
  });
});


// Given an invalid input like a string
// When passed to tally
// Then it should throw an error

test("tally throws an error for invalid input", () => {
  expect(() => tally("abc")).toThrow();
});
