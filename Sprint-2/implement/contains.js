function contains(obj, prop) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {// Check if the input is an object
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, prop); // Check if the property exists in the object
}

module.exports = contains;


