/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  console.log("result", result);

  if (nums.length === 1) {
    return [[...nums]];
  }

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift();
    const perms = permute(nums);

    console.log(`perms with index ${i}`, perms);

    for (const perm of perms) {
      perm.push(n);
    }

    console.log(`perms after 2nd loop index ${i}`, perms);

    result.push(...perms);
    nums.push(n);
  }

  return result;
};

// console.log(permute([1]));
// console.log(permute([0, 1]));
console.log(permute([1, 2, 3]));
