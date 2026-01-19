const createLookup = require("./lookup.js");


/*

Create a lookup object of key value pairs from an array of code pairs

Acceptance Criteria:

Given
 - An array of arrays representing country code and currency code pairs
   e.g. [['US', 'USD'], ['CA', 'CAD']]

When
 - createLookup function is called with the country-currency array as an argument

Then
 - It should return an object where:
 - The keys are the country codes
 - The values are the corresponding currency codes

Example
Given: [['US', 'USD'], ['CA', 'CAD']]

When
createLookup(countryCurrencyPairs) is called

Then
It should return:
 {
   'US': 'USD',
   'CA': 'CAD'
 }
*/

test("creates a country currency code lookup for multiple codes", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["CA", "CAD"],
    ["JP", "JPY"],
  ];

  const expected = {
    US: "USD",
    CA: "CAD",
    JP: "JPY",
  };

  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});

test("handles empty array", () => {
  const countryCurrencyPairs = [];
  const expected = {};
  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});

test("overwrites duplicate country codes with last value", () => {
  const countryCurrencyPairs = [
    ["US", "USD"],
    ["US", "USN"],
  ];

  const expected = { US: "USN" };
  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});

test("works with one pair only", () => {
  const countryCurrencyPairs = [["GB", "GBP"]];
  const expected = { GB: "GBP" };
  expect(createLookup(countryCurrencyPairs)).toEqual(expected);
});
