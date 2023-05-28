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
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 1;

  const nodeCount = (rootNode, maxValue) => {
    if (!rootNode) {
      return 0;
    }

    let leftNodesCount = 0;
    let rightNodesCount = 0;

    if (!rootNode.left && rootNode.val >= maxValue) {
      leftNodesCount = leftNodesCount + 1;
    }

    if (!rootNode.right && rootNode.val >= maxValue) {
      rightNodesCount = rightNodesCount + 1;
    }

    nodeCount(rootNode.left, rootNode.val);
    nodeCount(rootNode.right, rootNode.val);

    return leftNodesCount + rightNodesCount;
  };

  const l = nodeCount(root.left, root.val);
  const r = nodeCount(root.right, root.val);

  return count + l + r;
};
