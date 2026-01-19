function findMax(elements) {
  if (!Array.isArray(elements)) {
    return -Infinity;
  }

  const numbers = elements.filter((value) => typeof value === "number");
  return Math.max(...numbers);
}

module.exports = findMax;
