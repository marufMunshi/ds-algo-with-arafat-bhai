// const a = [6, 3, -2, 4, -1, 0, -5];
// const i = 2;
// const j = 6;

const a = [12, 10, -20, 30, 1];
const i = 1;
const j = 3;

// prefix sum
// time O(n)

// sum between [0,6] = [0,1] + [2,6]
// A[1] + sum between [2,6] = A[6]
// sum between [2,6] = A[6] - A[1]
// sum between [start, end] = A[end] - (A[start -1] || 0)
// if start is 0 than start -1 would be undefined

function findSumWithGivenRange(array, start, end) {
  for (let i = 1; i < array.length; i++) {
    array[i] = array[i] + array[i - 1];
  }

  console.log(array);

  return array[end] - (array[start - 1] || 0);
}

console.log(findSumWithGivenRange(a, i, j));
