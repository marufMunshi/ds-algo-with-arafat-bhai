const a = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

function subArraySum(array, k) {
  let windowStart = 0;
  let windowSum = 0;
  let sums = [];

  for (let i = windowStart; i < array.length; i++) {
    windowSum = windowSum + array[i];

    if (i === windowStart + k - 1) {
      sums.push(windowSum);
      windowSum = windowSum - array[windowStart];
      windowStart++;
    }
  }

  return sums;
}

console.log(subArraySum(a, k));
