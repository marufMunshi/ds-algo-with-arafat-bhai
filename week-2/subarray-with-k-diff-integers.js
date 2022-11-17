const a = [1, 2, 1, 2, 3];
const k = 2;

function subArray(array, k) {
  let windowStart = 0;
  let subArrays = [];
  let windowArray = [];
  let uniqIntegersCount = 0;
  let i = 0;

  while (i < array.length) {
    if (windowArray.includes(array[i]) === false) {
      windowArray.push(array[i]);
      uniqIntegersCount++;
      i++;
    }

    if (uniqIntegersCount === k) {
      subArrays.push(windowArray);
      let slicedArray = [];
      slicedArray = windowArray.slice(1);
      windowArray = [...slicedArray];
      windowStart++;
      uniqIntegersCount = 0;
    }
  }

  return subArrays;
}

console.log(subArray(a, k));
