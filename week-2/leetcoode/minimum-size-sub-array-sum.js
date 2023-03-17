// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
function minimumSizeSubArraySum(target, nums) {
  if (nums.length === 1) {
    if (nums[0] >= target) {
      return 1;
    }

    return 0;
  }

  let windowStart = 0;
  let windowEnd = 0;
  let currentSum = 0;
  let currentSumLength = 0;
  let minimumSubarrayLength = 0;

  while (windowStart < nums.length) {
    if (currentSum < target) {
      if (!nums[windowEnd]) {
        break;
      }

      currentSum = currentSum + nums[windowEnd];
      console.log("currentSum", currentSum);
      windowEnd++;
    } else if (currentSum >= target) {
      console.log("windowEnd", windowEnd);
      console.log("windowStart", windowStart);

      currentSumLength = windowEnd - windowStart;

      console.log("currentSumLength", currentSumLength);

      if (minimumSubarrayLength === 0) {
        minimumSubarrayLength = currentSumLength;
      } else {
        minimumSubarrayLength = Math.min(
          currentSumLength,
          minimumSubarrayLength
        );
      }

      currentSum = currentSum - nums[windowStart];
      windowStart++;
    }
  }

  return minimumSubarrayLength;
}

console.log(minimumSizeSubArraySum(7, [2, 3, 1, 2, 4, 3]));
console.log(minimumSizeSubArraySum(4, [1, 4, 4]));
console.log(minimumSizeSubArraySum(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minimumSizeSubArraySum(7, [1, 1, 1, 1, 7]));
