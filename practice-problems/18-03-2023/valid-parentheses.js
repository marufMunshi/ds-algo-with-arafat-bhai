// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const openingParenthesesStack = [];
  const closingToOpeningParenthesesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const char of s) {
    if (["(", "{", "["].includes(char)) {
      openingParenthesesStack.push(char);
      console.log(openingParenthesesStack);
    } else {
      const popedChar = openingParenthesesStack.pop();

      if (closingToOpeningParenthesesMap[popedChar] !== char) {
        return false;
      }
    }
  }

  console.log("openingParenthesesStack before return", openingParenthesesStack);

  return openingParenthesesStack.length === 0;

  // console.log(openingParenthesesStack);
  // console.log(closingParenthesesStack);
};

console.log(isValid("({}[]{}[({})])"));
console.log(isValid("(){]"));
console.log(isValid("(("));
