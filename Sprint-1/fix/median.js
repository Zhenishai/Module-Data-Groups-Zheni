// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).


function calculateMedian(list) {
  // Unit 1: validate input
  if (!Array.isArray(list)) {
    return null;
  }

  // Unit 2: keep only numbers
  const numbers = list.filter((value) => typeof value === "number");

  // Unit 3: handle empty numeric list
  if (numbers.length === 0) {
    return null;
  }

  // Unit 4: sort numbers (without mutating input)
  const sortedNumbers = [...numbers].sort((a, b) => a - b);

  // Unit 5: find middle index
  const middleIndex = Math.floor(sortedNumbers.length / 2);

  // Unit 6: calculate median
  if (sortedNumbers.length % 2 !== 0) {
    // odd length
    return sortedNumbers[middleIndex];
  } else {
    // even length
    return (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
  }
}

module.exports = calculateMedian;
