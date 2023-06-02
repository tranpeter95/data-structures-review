/*
 Write a function, bfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 2, 9, 4, 3]
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
const bfs = (root) => {
  if (!root) return [];
  const stack = [root];
  const final = [];
  while (stack.length > 0) {
    const curr = stack.shift();
    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
    final.push(curr.val);
  }
  return final;
};

module.exports = { bfs };
