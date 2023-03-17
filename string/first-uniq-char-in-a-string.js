/**
 * @param {string} s
 * @return {number}
 */

const firstUniqChar = function (s) {
  let charIndexMap = {};
  let firstUniqChar = "";

  for (let i = 0; i < s.length; i++) {
    if (charIndexMap.hasOwnProperty(s[i])) {
      charIndexMap[s[i]] = i;

      if (firstUniqChar === s[i]) {
        firstUniqChar = "";
      }
    } else {
      charIndexMap[s[i]] = i;

      if (firstUniqChar === "") {
        firstUniqChar = s[i];
      }
    }
  }

  console.log("charCountMap", charIndexMap);

  return firstUniqChar;
};

// console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
