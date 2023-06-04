// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};

  for (const item of strs) {
    const charCount = new Array(26).fill(0); // a would be 0 index, z would be 25

    for (let char of item) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      charCount[index] = charCount[index] + 1;
    }

    const anagramKey = charCount.join(",");

    if (result[anagramKey]) {
      result[anagramKey].push(item);
    } else {
      result[anagramKey] = [item];
    }
  }

  return Object.values(result);
};

console.log(groupAnagrams(["eat", "tan", "tea"]));
