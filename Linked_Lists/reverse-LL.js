/**
 * Write a function, reverseList, that takes in the head of a linked list as an argument.
 * The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.
 *
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/*
a -> b -> c -> d
d -> c -> b -> a
*/

// Approach:
// Time & Space Complexity:
const reverseList = (head) => {
  let curr = head;
  let prev = null;
  while (curr) {
    const nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
};

module.exports = { reverseList };
