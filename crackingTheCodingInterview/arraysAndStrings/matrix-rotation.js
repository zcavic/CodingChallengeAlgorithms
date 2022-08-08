const rotate = (matrix) => {
    return matrix.map((row, i) => row.map((val, j) => matrix[matrix.length - 1 - j][i]));
};

const temp = rotate([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]);
console.log(temp);
