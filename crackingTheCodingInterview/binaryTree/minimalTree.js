/*
4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm
to create a binary search tree with minimal height.
*/

class Node {
  constructor(x) {
    this.key = x;
    this.left = null;
    this.right = null;
  }
}

function buildTree(sortedArray, start = -1, end = -1) {
  if (sortedArray.length === 0) return null;
  return buildMinimalTree(sortedArray, 0, sortedArray.length)
}

function buildMinimalTree(arr, start, end) {
  if (start > end) return null;

  const iRoot = Math.floor((start + end) / 2);
  
  const node = new Node(arr[iRoot]);
  node.left = buildMinimalTree(arr, start, iRoot - 1)
  node.right = buildMinimalTree(arr, iRoot + 1, end)

  return node;
}

const test = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(test);