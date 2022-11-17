const testArray = [1, 2, 3, 6, 4, 8, 0, 0, 3, 0, 2, -1, 5, 0];

const testPivot = 0;

function moveItemsToRight(array, pivot) {
  let boundaryIndexLeft = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === pivot) {
      const temp = array[boundaryIndexLeft];
      array[boundaryIndexLeft] = array[i];
      array[i] = temp;
      boundaryIndexLeft++;
    }
  }

  return array;
}

console.log(moveItemsToRight(testArray, testPivot));
