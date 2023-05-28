/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];

  const leftValues = postorderTraversal(root.left);
  const rightValues = postorderTraversal(root.right);

  return result.concat(leftValues).concat(rightValues).concat([root.val]);
};

const test = {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: null,
  },
};

console.log(postorderTraversal(test));
