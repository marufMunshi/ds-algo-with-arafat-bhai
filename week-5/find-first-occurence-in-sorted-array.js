function findFirstOccurenceInSortedArray(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let fisrtOccuerenceIndex = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (target === nums[mid]) {
      fisrtOccuerenceIndex = Math.min(mid, fisrtOccuerenceIndex);
    }

    if (target > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return fisrtOccuerenceIndex;
}

// const testNums = [-1, 1, 2, 3, 4, 5, 5, 9, 12];
// const testTarget = 5;
const testElements = [
  1, 1, 1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9, 9, 10, 11, 11, 11,
];
const testValue = 11;
console.log(findFirstOccurenceInSortedArray(testElements, testValue));
