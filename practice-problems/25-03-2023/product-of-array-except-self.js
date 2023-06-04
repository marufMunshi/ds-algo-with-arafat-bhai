// https://leetcode.com/problems/product-of-array-except-self/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = [];
  const prefixProducts = [];
  const suffixProducts = [];

  for (let i = 0; i < nums.length; i++) {
    let prefix;

    if (prefixProducts[i - 1] === undefined) {
      prefix = 1;
    } else {
      prefix = prefixProducts[i - 1];
    }

    prefixProducts[i] = prefix * nums[i];
  }

  for (let j = nums.length - 1; j >= 0; j--) {
    let suffix;

    if (suffixProducts[j + 1] === undefined) {
      suffix = 1;
    } else {
      suffix = suffixProducts[j + 1];
    }

    suffixProducts[j] = suffix * nums[j];
  }

  console.log("prefixProducts", prefixProducts);
  console.log("suffixProducts", suffixProducts);

  for (let k = 0; k < nums.length; k++) {
    let suffix;
    let prefix;
    if (prefixProducts[k - 1] === undefined) {
      prefix = 1;
    } else {
      prefix = prefixProducts[k - 1];
    }

    if (suffixProducts[k + 1] === undefined) {
      suffix = 1;
    } else {
      suffix = suffixProducts[k + 1];
    }

    result.push(prefix * suffix);
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
