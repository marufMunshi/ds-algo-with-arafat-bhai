// https://leetcode.com/problems/minimum-size-subarray-sum/

function minimumSizeSubArraySum(target, nums) {
  let windowStart = 0;
  let windowEnd = 0;
  let currentSum = 0;
  let shortestSubArrayLength = 0;
  let currentShortestSubArray = 0;

  while (windowEnd < nums.length) {
    currentSum = currentSum + nums[windowEnd];

    if (currentSum >= target) {
      const subArray = nums.slice(windowStart, windowEnd + 1);
      console.log("currentSum", currentSum);
      console.log("subArray", subArray);
      console.log("windowEnd", windowEnd);
      console.log("windowStart", windowStart);
      currentShortestSubArray = subArray.length;

      if (shortestSubArrayLength === 0) {
        shortestSubArrayLength = currentShortestSubArray;
      }

      if (currentShortestSubArray < shortestSubArrayLength) {
        shortestSubArrayLength = currentShortestSubArray;
      }

      currentSum = currentSum - nums[windowStart];
      windowStart = windowStart + 1;
    } else {
      windowEnd = windowEnd + 1;
    }
  }

  return shortestSubArrayLength;
}

const _target = 11;
const _nums = [1, 2, 3, 4, 5];

console.log(minimumSizeSubArraySum(_target, _nums));
