/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const sortedNums = nums.sort((a, b) => a - b);

  let count = 1;
  let maxCount = 1;

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] !== sortedNums[i - 1]) {
      const diff = Math.abs(sortedNums[i] - sortedNums[i - 1]);

      if (diff > 1) {
        maxCount = Math.max(maxCount, count);
        count = 1;
      } else {
        count++;
        maxCount = Math.max(maxCount, count);
      }
    }
  }

  return maxCount;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([0, -1]));
console.log(longestConsecutive([0, 0]));

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
