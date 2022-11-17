// https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
  let low = 1;
  let high = x;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (x === mid * mid) {
      return mid;
    }

    if (x > mid * mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return high;
};

console.log(mySqrt(5));
