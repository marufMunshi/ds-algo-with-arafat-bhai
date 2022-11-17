// const testArray = [5, 2, 4, 4, 6, 4, 4, 3];
// const pivot = 4;

const testArray = [0, 1, 2, 0, 1, 2];
const pivot = 1;

function dutchNationalFlag(array, pivot) {
  let boundaryIndexLeft = 0;
  let boundaryIndexRight = array.length - 1;
  let i = 0;

  while (i <= boundaryIndexRight) {
    const element = array[i];
    if (element < pivot) {
      const temp = array[boundaryIndexLeft];
      array[boundaryIndexLeft] = array[i];
      array[i] = temp;
      boundaryIndexLeft++;
      i++;
    } else if (element > pivot) {
      const temp = array[boundaryIndexRight];
      array[boundaryIndexRight] = array[i];
      array[i] = temp;
      boundaryIndexRight--;
    } else {
      i++;
    }
  }

  return array;
}

console.log(dutchNationalFlag(testArray, pivot));
