var moveZeros = function (arr) {
    let t = [...arr.filter(x => x !== 0), ...arr.filter(x => x === 0)];
    let m = arr.sort((x, y) => {
        if (x === 0 && y === 0) return 0;
        else if (x === 0) return 1;
        else if (y === 0) return -1;
        else return 0;
    })
    return m;
}

let x = moveZeros([9, 9, 9, 9, 1, 2, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
let y = moveZeros([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.assert(moveZeros([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);