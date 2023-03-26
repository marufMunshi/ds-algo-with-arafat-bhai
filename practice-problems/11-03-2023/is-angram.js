// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const firstWordCharMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (firstWordCharMap.has(s[i])) {
      firstWordCharMap.set(s[i], firstWordCharMap.get(s[i]) + 1);
    } else {
      firstWordCharMap.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (firstWordCharMap.has(t[j]) === false) {
      return false;
    }

    const occurrenceOfChar = firstWordCharMap.get(t[j]);

    if (occurrenceOfChar === 0) {
      return false;
    }

    firstWordCharMap.set(t[j], occurrenceOfChar - 1);
  }

  return true;
};

console.log(isAnagram("aacc", "ccac"));
