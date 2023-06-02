/*
Write a function, linkedListCycle, that takes in the head of a linked list as an argument.
The function should return a boolean indicating whether or not the linked list contains a cycle.

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');

a.next = b;
b.next = c;
c.next = d;
d.next = b; // cycle

//         _______
//       /        \
// a -> b -> c -> d

*/

//Approach: Fast & slow pointers
// Time & Space Complexity: O(n) time | O(1) space

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListCycle = (head) => {
  // if at any point, the next of curr points at something that was seen return true. if we hit a null at any point  return false
  if (!head) return false;
  let curr = head;
  let seen = {};
  while (curr.next) {
    console.log(curr.val);
    seen[curr.val] = true;
    console.log(seen);
    if (seen.hasOwnProperty(curr.next.val)) {
      return true;
    }
    curr = curr.next;
  }
  return false;
};

const a = new Node(5);
const b = new Node(4);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(linkedListCycle(a));
module.exports = { linkedListCycle };
