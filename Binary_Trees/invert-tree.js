/**
Write a function, invertTree, that takes in the root of a binary tree.
The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. This flipping should occur in-place by modifying the original tree. The function should return the root of the tree


     a
   /    \
  b      c
 / \      \
d   e      f
   / \
   g  h

flipTree(a);

      a
   /    \
  c      b
 /     /   \
f     e    d
    /  \
   h    g
 * */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const invertTree = (root) => {
  // if a node has a left or a right, move it to the other side
  // do this for all nodes
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.shift();
    if (curr.left) {
      stack.push(curr.left);
    }
    if (curr.right) {
      stack.push(curr.right);
    }
    const origLeft = curr.left;
    const origRight = curr.right;
    curr.left = origRight;
    curr.right = origLeft;
  }
  return root;
};

module.exports = { invertTree };
