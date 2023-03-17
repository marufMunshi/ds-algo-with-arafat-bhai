// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  let currentProduct = nums[0];
  let maximumProduct = currentProduct;

  for (let i = 1; i < nums.length; i++) {
    console.log("nums[i]", nums[i]);
    console.log("currentProduct", currentProduct);
    console.log("nums[i] * currentProduct", nums[i] * currentProduct);
    console.log(
      "Math.abs(nums[i] * currentProduct)",
      Math.abs(nums[i] * currentProduct)
    );
    if (
      nums[i] * currentProduct > currentProduct ||
      Math.abs(nums[i] * currentProduct) > currentProduct
    ) {
      currentProduct = nums[i] * currentProduct;
    } else {
      currentProduct = nums[i];
    }

    maximumProduct = Math.max(currentProduct, maximumProduct);
  }

  if (maximumProduct <= 0) {
    return 0;
  }

  return maximumProduct;
};

// console.log(maxProduct([2, 3, -2, 4]));
// console.log(maxProduct([-2, 0, -1]));
// console.log(maxProduct([-2, 3, -4]));
// console.log(maxProduct([-3, -1, -1]));
console.log(maxProduct([3, -1, 4]));
