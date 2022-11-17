const testArray = [1, 2, 3, 6, 4, 8, 0, 0, 3, 0, 2, -1, 5, 0];

const testPivot = 0;

function moveItemsToLeft(array, pivot) {
  const arrayLength = array.length - 1;
  let boundaryIndexRight = arrayLength;

  for (let i = arrayLength; i > 0; i--) {
    if (array[i] === pivot) {
      const temp = array[boundaryIndexRight];
      array[boundaryIndexRight] = array[i];
      array[i] = temp;
      boundaryIndexRight--;
    }
  }

  return array;
}

console.log(moveItemsToLeft(testArray, testPivot));
