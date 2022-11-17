// const testString = "whatwhywhere";
// const testString = "tmmzuxt";
// const testString = "abba";
// const testString = "au";
// const testString = "aab";
const testString = "aabaab!bb";
function findLongestSubsrtingOfUniqeCharacters(chars) {
  let uniqeCharIndexMap = {};
  let windowStart = 0;
  let windowEnd = 0;
  let currentLongestSubstring = "";
  let currentSubString = "";

  if (chars.trim().length === 0) {
    const regex = /\s/g;
    const found = chars.match(regex);

    if (!found) {
      return 0;
    }
    return 1;
  }

  while (windowEnd < chars.length) {
    // whatwhywhere
    // aabaab!bb
    if (currentSubString.includes(chars[windowEnd]) === false) {
      uniqeCharIndexMap[chars[windowEnd]] = windowEnd;
      currentSubString = chars.substring(windowStart, windowEnd + 1);
      console.log("currentSubString", currentSubString);
    } else {
      if (uniqeCharIndexMap[chars[windowEnd]] + 1 > windowStart) {
        windowStart = uniqeCharIndexMap[chars[windowEnd]] + 1;
      }
      console.log("windowStart on else", windowStart);
      uniqeCharIndexMap[chars[windowEnd]] = windowEnd;
    }

    if (currentSubString.length > currentLongestSubstring.length) {
      currentLongestSubstring = currentSubString;
    }

    windowEnd++;
  }

  return currentLongestSubstring;
}

console.log(findLongestSubsrtingOfUniqeCharacters(testString));
