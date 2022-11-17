// const a = [1, 2, 3, 5, 2];
// const sum = 8;

// const a = [1, 4, 0, 0, 3, 10, 5];
// const sum = 7;

const a = [15, 2, 4, 8, 9, 5, 10, 23];
const sum = 23;

function findSubArrayWithSum(array, sum) {
  let windowStart = 0;
  let windowEnd = 0;
  let currentSum = 0;

  while (windowEnd < array.length) {
    if (currentSum < sum) {
      currentSum = currentSum + array[windowEnd];
      windowEnd++;
      // all the element is positive, so we have add  element
    } else if (currentSum > sum) {
      currentSum = currentSum - array[windowStart];
      // all the element is positive, so we have remove element
      // subarray is continuios, so we have to remove from the start
      windowStart++;
    } else if (currentSum === sum) {
      return array.slice(windowStart, windowEnd);
    }
  }
}

console.log(findSubArrayWithSum(a, sum));
