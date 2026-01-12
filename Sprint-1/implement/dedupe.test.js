const dedupe = require("./dedupe.js");
/*
Dedupe Array

📖 Dedupe means **deduplicate**

In this kata, you will need to deduplicate the elements of an array

E.g. dedupe(['a','a','a','b','b','c']) target output: ['a','b','c']
E.g. dedupe([5, 1, 1, 2, 3, 2, 5, 8]) target output: [5, 1, 2, 3, 8]
E.g. dedupe([1, 2, 1]) target output: [1, 2]
*/

// Acceptance Criteria:

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element


describe("dedupe", () => {
  // Test 1:empty array
  it("returns an empty array when given an empty array", () => {
    expect(dedupe([])).toEqual([]);
  });

  // Test 2:array with no duplicates
  it("returns a copy of the array if there are no duplicates", () => {
    const arr = [1, 2, 3];
    expect(dedupe(arr)).toEqual([1, 2, 3]);
    //the original array is not modified
    expect(arr).toEqual([1, 2, 3]);
  });

  // Test 3: array with duplicates(numbers)
  it("removes duplicate numbers, preserving first occurrences", () => {
    expect(dedupe([5, 1, 1, 2, 3, 2, 5, 8])).toEqual([5, 1, 2, 3, 8]);
    expect(dedupe([1, 2, 1])).toEqual([1, 2]);
  });

  // Test 4: array with duplicates(strings)
  it("removes duplicate strings, preserving first occurrences", () => {
    expect(dedupe(["a", "a", "a", "b", "b", "c"])).toEqual(["a", "b", "c"]);
    expect(dedupe(["x", "y", "x", "z", "y"])).toEqual(["x", "y", "z"]);
  });

  // Test 5: array with mixed numbers and strings
  it("removes duplicates in mixed arrays", () => {
    expect(dedupe([1, "1", 2, "2", 1])).toEqual([1, "1", 2, "2"]);
  });

  // Test 6: ensure original array is not modified
  it("does not modify the original array", () => {
    const arr = [1, 2, 2, 3];
    dedupe(arr);
    expect(arr).toEqual([1, 2, 2, 3]);
  });
});

