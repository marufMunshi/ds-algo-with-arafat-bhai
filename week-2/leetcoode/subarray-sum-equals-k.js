/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// https://leetcode.com/problems/subarray-sum-equals-k/solutions/127728/subarray-sum-equals-k/
// applying approach 4
// but have to cahnged a bit
// currentSum also need to compare with K

var subarraySum = function (nums, k) {
  const sumOccurrencesMap = new Map();
  let subarrayCount = 0;
  let currentSum = 0;

  // if (k === 0) {
  //   currentSum = currentSum + 1;
  //   // beacuse empty array
  // }

  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i];

    if (sumOccurrencesMap.has(currentSum - k)) {
      subarrayCount++;
      sumOccurrencesMap.set(
        currentSum - k,
        sumOccurrencesMap.get(currentSum - k) + 1
      );
    } else if (currentSum === k && sumOccurrencesMap.has(currentSum)) {
      subarrayCount++;
      sumOccurrencesMap.set(currentSum, sumOccurrencesMap.get(currentSum) + 1);
    } else if (
      currentSum === k &&
      sumOccurrencesMap.has(currentSum) === false
    ) {
      sumOccurrencesMap.set(currentSum, 1);
      subarrayCount = subarrayCount + sumOccurrencesMap.get(currentSum);
    } else {
      sumOccurrencesMap.set(currentSum, 1);
    }

    console.log("subarrayCount", subarrayCount);
    console.log("sumOccurrencesMap", sumOccurrencesMap);
  }

  return subarrayCount;
};

console.log(subarraySum([1, 1, 1], 2));
console.log("------------------------\n");
console.log(subarraySum([1, 2, 3], 3));
console.log("------------------------\n");
console.log(subarraySum([-1, -1, 1], 1));
console.log("------------------------\n");
console.log(subarraySum([1, -1, 0], 0));
console.log("------------------------\n");
console.log(subarraySum([1, 2, 1, 2, 1], 3));
