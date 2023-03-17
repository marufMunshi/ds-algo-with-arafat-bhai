// https://leetcode.com/problems/maximum-subarray/

const a = [2, 1, 5, 1, 3, 2];
const k = 3;

function subArrayMaximumSum(array, k) {
  let windowStart = 0;
  let windowSum = 0;
  let maximumSum = 0;

  for (let i = windowStart; i < array.length; i++) {
    windowSum = windowSum + array[i];

    if (i === windowStart + k - 1) {
      if (windowSum > maximumSum) {
        maximumSum = windowSum;
      }

      windowSum = windowSum - array[windowStart];
      windowStart++;
    }
  }

  return maximumSum;
}

console.log(subArrayMaximumSum(a, k));
