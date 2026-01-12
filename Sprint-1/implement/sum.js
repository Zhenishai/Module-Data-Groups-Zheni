function sum(elements) {
  return elements
    .filter((el) => typeof el === "number" && !Number.isNaN(el))
    .reduce((total, num) => total + num, 0);
}

module.exports = sum;
