function binarySearchA(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

function binarySearchD(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const _numsA = [-1, 0, 3, 5, 9, 12];
const _numsD = [12, 9, 5, 3, 0, -1];
const _target = 3;

console.log(binarySearchA(_numsD, _target));
// console.log(binarySearchD(_numsD, _target));
