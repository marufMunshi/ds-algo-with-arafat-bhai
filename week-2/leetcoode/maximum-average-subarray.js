// https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let windowStart = 0;
  let windowSum = 0;
  let maximumSum = Number.MIN_SAFE_INTEGER;

  if (nums.length === 1) {
    return nums[0] / k;
  }

  for (let i = 0; i < nums.length; i++) {
    windowSum = windowSum + nums[i];

    if (i === windowStart + k - 1) {
      if (windowSum > maximumSum) {
        maximumSum = windowSum;
      }

      windowSum = windowSum - nums[windowStart];
      windowStart++;
    }
  }

  return maximumSum / k;
};

/**
 * applying sliding window algo
 * input is postive and negative integers
 */

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));
console.log(findMaxAverage([0, 4, 0, 3, 2], 1));
