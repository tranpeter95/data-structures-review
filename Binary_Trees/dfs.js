/*
 Write a function, dfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in depth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 9, 4, 2, 3]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const dfs = (root) => {
  // if you can go left, go left.
  // if you cant, go right.
  let curr = root;
  const output = [];
  const traverse = (curr) => {
    if (curr === null) return;
    output.push(curr.val);
    traverse(curr.left);
    traverse(curr.right);
  };
  traverse(curr);
  return output;
};
module.exports = { dfs };
