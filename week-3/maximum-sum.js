const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function findMaximumsumOn2(array) {
  let maximumSum = Number.MIN_SAFE_INTEGER;
  let maximumSumStartIndex = 0;
  let maximumSumEndIndex = 0;

  for (let i = 0; i < array.length; i++) {
    let currentSum = 0;
    for (let j = i; j < array.length; j++) {
      currentSum = currentSum + array[j];
      if (currentSum > maximumSum) {
        maximumSumStartIndex = i;
        maximumSumEndIndex = j;
        maximumSum = currentSum;
      }
    }
  }

  console.log(array.slice(maximumSumStartIndex, maximumSumEndIndex + 1));

  return maximumSum;
}

// console.log(findMaximumsumOn2(nums));

// Kadane's Algorithm - Maximum Sum Subarray
function findMaximumSum(array) {
  let currentSum = array[0];
  let maximumSum = currentSum;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] + currentSum > array[i]) {
      currentSum = array[i] + currentSum;
    } else {
      currentSum = array[i];
      startIndex = i;
    }

    console.log(`-----Step ${i}------`);
    console.log("array[i]", array[i]);
    console.log("currentSum", currentSum);

    if (currentSum > maximumSum) {
      endIndex = i;
      maximumSum = currentSum;
    }

    console.log("maximumSum", maximumSum);
  }

  console.log(array.slice(startIndex, endIndex + 1));

  return maximumSum;
}

console.log(findMaximumSum(nums));
