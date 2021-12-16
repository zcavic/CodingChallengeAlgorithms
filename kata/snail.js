function snail(array) {
  let clockwiseArray = [];
  generateClockwiseArray(0, 0, 0, array, clockwiseArray);
  return clockwiseArray;
}

function generateClockwiseArray(i, j, layer, array, clockwiseArray) {
  if(clockwiseArray.length === array.length * array[0].length) return;

  clockwiseArray.push(array[j][i]);

  if (i < array[0].length - layer - 1 && j - layer == 0) {
    generateClockwiseArray(++i, j, layer, array, clockwiseArray);
  }
  else if (j < array[0].length - layer - 1 && i + layer == array[0].length - 1) {
    generateClockwiseArray(i, ++j, layer, array, clockwiseArray);
  }
  else if (i > 0 + layer && j + layer == array[0].length - 1) {
    generateClockwiseArray(--i, j, layer, array, clockwiseArray);
  }
  else if (j > 0 + layer && i - layer == 0) {
    if (j - layer - 2 == 0 && i - layer == 0) {
      layer++;
    }
    generateClockwiseArray(i, --j, layer, array, clockwiseArray);
  }
}

export function test() {
  console.assert((snail([[]]), []));
  console.assert((snail([[1]]), [1]));
  console.assert((snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]));
  console.assert((snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]));
  console.assert((snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]));
}