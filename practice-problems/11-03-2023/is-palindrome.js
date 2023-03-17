// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const alphaNumericRemovedString = s.replace(/[^0-9a-zA-Z]/gi, "");
  const trimmedString = alphaNumericRemovedString.trim();

  if (trimmedString.length === 0) {
    return true;
  }

  const testString = trimmedString.toLowerCase();

  console.log("testString", testString);

  let backwardString = "";

  for (let i = testString.length - 1; i >= 0; i--) {
    backwardString = backwardString + testString[i];
  }

  console.log("backwardString", backwardString);

  return backwardString === testString;
};

console.log(isPalindrome("ab_a"));
