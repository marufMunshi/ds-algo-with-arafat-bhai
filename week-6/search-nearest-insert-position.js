/**
 * Given a sorted array A and a target T, find the target.
 * If the target is not in the array, find the number closest to the target.
 * For example, if A = [2,3,5,8,9,11] and T = 7, return index of 8, i.e. return 3
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchClosestInsertPosition = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let guess = nums[mid];

    if (target === guess) {
      return mid;
    }

    if (target > guess) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  if (Math.abs(nums[low - 1] - target) < Math.abs(nums[low] - target)) {
    console.log("nums[low] - target,", nums[low] - target);
    console.log("nums[low - 1] - target,", nums[low + 1] - target);
    return low - 1;
  }

  return low;
};

console.log(searchClosestInsertPosition([2, 3, 5, 8, 9, 11], 7));
console.log(searchClosestInsertPosition([2, 3, 5, 8, 9, 11], 6));
console.log(searchClosestInsertPosition([1, 2, 7, 8, 20, 22], 10));
console.log(searchClosestInsertPosition([1, 2, 7, 8, 20, 22], 18));
