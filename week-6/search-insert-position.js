/**
You are given a sorted array A and a target T. 
Return the index where T would be placed if inserted in order. 

For example,
A = [1,2,4,5,6,8] and T = 3, return index 2
A = [1,2,4,5,6,8] and T = 0, return index 0
A = [1,2,4,5,6,8] and T = 4, return index 3.
*/

// // https://leetcode.com/problems/search-insert-position/

function searchInsertPosition(array, target) {
  let low = 0;
  let high = array.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    console.log("mid", mid);
    console.log(array[mid]);

    if (target === array[mid]) {
      if (target !== array[mid + 1]) {
        return mid + 1;
      }

      low = mid + 1;
    } else if (target > array[mid]) {
      if (target < array[mid + 1]) {
        return mid + 1;
      }

      low = mid + 1;
    } else if (target < array[mid]) {
      if (target > array[mid - 1]) {
        return mid;
      }

      high = mid - 1;
    }
  }

  return -1;
}

// console.log(searchInsertPosition([1, 2, 4, 5, 6, 8], 4));
// console.log(searchInsertPosition([1, 2, 4, 5, 6, 8], 3));
console.log(searchInsertPosition([1, 2, 4, 5, 6, 8], 7));
