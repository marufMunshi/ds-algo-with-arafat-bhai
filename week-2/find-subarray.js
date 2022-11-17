const a = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 5;

function subArray(array, k) {
  let windowStart = 0;
  let subArrays = [];
  let windowArray = [];

  for (let i = windowStart; i < array.length; i++) {
    windowArray.push(array[i]);

    if (i === windowStart + k - 1) {
      subArrays.push(windowArray);
      let slicedArray = [];
      slicedArray = windowArray.slice(1);
      windowArray = [...slicedArray];
      windowStart++;
    }
  }

  return subArrays;
}

console.log(subArray(a, k));
