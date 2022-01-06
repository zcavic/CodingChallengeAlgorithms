import { bst } from './minimalTree.js';

/*
4.5 Validate BST: Implement a function to check if a binary tree is a binary search tree.
*/

class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

function validate(node) {
  if(node === null) return true;
  else if(node.right !== null && node.right.key < node.key) return false;
  else if(node.left !== null && node.left.key > node.key) return false;
  else if(!validate(node.left) || !validate(node.right)) return false;
  return true;
}

const test = validate(bst);
console.log(test);