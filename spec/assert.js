var assert = {
  eq: function(assertionToCheck, actual) {
    if (assertionToCheck !== actual) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  includes: function(assertionToCheck, actual) {
    if (!actual.includes(assertionToCheck)) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};
