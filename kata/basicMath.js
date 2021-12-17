function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').map(Number).reduce((sum, x) => { return sum + x }, 0)
  );
}


console.assert(digital_root(16), 7)
console.assert(digital_root(456), 6)


/*
Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findOdd(A) {
  // dictionary [elements, appearance]
  let dict = A.reduce((res, x) => { return res.set(x, ((res.get(x) || 0) + 1)) }, new Map());
  // transform dictionary to array
  let array = [...dict];
  // find first odd appearance
  let theNumber = array.find(x => x[1] % 2 !== 0);
  return theNumber[0];
}

function findOdd2(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

let t = findOdd2([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]);

console.assert(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]), 5);
console.assert(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), -1);
console.assert(findOdd[20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
console.assert(findOdd[10], 10);
console.assert(findOdd[1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
console.assert(findOdd[5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);