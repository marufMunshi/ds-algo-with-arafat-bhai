// Kadane's Algorithm - Minimum Sum Subarray

function minimumSum(nums) {
  let currentSum = nums[0];
  let minimumSum = currentSum;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + currentSum < nums[i]) {
      currentSum = nums[i] + currentSum;
    } else {
      currentSum = nums[i];
      startIndex = i;
    }

    if (currentSum < minimumSum) {
      minimumSum = currentSum;
      endIndex = i;
    }
  }

  console.log(nums.slice(startIndex, endIndex + 1));

  return minimumSum;
}

console.log(minimumSum([-2, 2, 5, -11, 6])); // [-11]
console.log(minimumSum([-2, 2, -5, -1, 6])); // [-5,-1]
