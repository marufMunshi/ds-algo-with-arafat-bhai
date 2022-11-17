const a = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

function findSubArrayAvg(array, k) {
  let windowStart = 0;
  let windowSum = 0;
  let sumsAvg = [];

  for (let i = windowStart; i < array.length; i++) {
    windowSum = windowSum + array[i];

    if (i === windowStart + k - 1) {
      sumsAvg.push(windowSum / k);
      windowSum = windowSum - array[windowStart];
      windowStart++;
    }
  }

  return sumsAvg;
}

console.log(findSubArrayAvg(a, k));

// [2.2, 2.8, 2.4, 3.6, 2.8]
