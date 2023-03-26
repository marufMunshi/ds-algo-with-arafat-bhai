// https://leetcode.com/problems/contains-duplicate/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numberIndexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numberIndexMap.has(nums[i])) {
      return true;
    }

    numberIndexMap.set(nums[i], i);
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
