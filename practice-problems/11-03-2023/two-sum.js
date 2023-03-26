// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numberIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numberIndexMap.has(complement)) {
      return [i, numberIndexMap.get(complement)];
    }

    numberIndexMap.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));
