// const a = [2, 4, -2, 1, -3, 5, -3];
// const sum = 0;

// const a = [2, 4, -2, 1, -3, 5, -3];
// const sum = 5;

// const a = [-1, 4, -2, 1, -3, 5, -3];
// const sum = 5;

// const a = [6, 3, -2, 4, -1, 0, -5];
// const sum = -4;

// const a = [2, 4, -2, 3, 1];
// const sum = 1;

const a = [12, 10, -20, 30, 1];
const sum = 20;

// const a = [2, 4, -2, 3, 1];
// const sum = 1;

// const a = [2, 4, -2, 1, -3, 5, -3];
// const sum = 0;

// const a = [10, 2, -2, -20, 10];
// const sum = 0;

function findSubArrayWithSum(array, sum) {
  let sumIndexMap = {
    [array[0]]: 0,
  };
  let currentSum = array[0];

  for (let i = 1; i < array.length; i++) {
    currentSum = currentSum + array[i];

    if (currentSum === sum) {
      return array.slice(0, i + 1);
    }

    console.log(
      "sumIndexMap.hasOwnProperty(currentSum - sum)",
      sumIndexMap.hasOwnProperty(currentSum - sum)
    );
    console.log("sumIndexMap[currentSum - sum]", sumIndexMap[currentSum - sum]);

    if (sumIndexMap.hasOwnProperty(currentSum - sum)) {
      console.log("sum", sum);
      console.log("currentSum", currentSum);
      console.log("sumIndexMap", sumIndexMap);
      console.log(
        "sumIndexMap[currentSum - sum]",
        sumIndexMap[currentSum - sum]
      );
      console.log("i", i);
      return array.slice(sumIndexMap[currentSum - sum] + 1, i + 1);
    }

    sumIndexMap[currentSum] = i;
  }

  console.log(JSON.stringify(sumIndexMap, null, 2));

  return "no such subarray found";
}

// if (sum === 0 && sumIndexMap[currentSum] !== undefined) {
//   // if sum is equal 0
//   // than find same sum on two index
//   return array.slice(sumIndexMap[currentSum] + 1, i + 1);
// }

console.log(findSubArrayWithSum(a, sum));
