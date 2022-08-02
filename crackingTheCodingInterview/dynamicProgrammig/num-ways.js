// https://www.youtube.com/watch?v=5o-kdjv7FD0
const map = new Map();

const numWays = (n, x) => {
    if (n < 0) return 0;
    else if (n === 0) return 1;
    else if (map.get(n)) return map.get(n);

    let total = 0;
    for (let i = 0; i < x.length; i++) {
        total += numWays(n - x[i], x);
    }
    map.set(n, total);
    return total;
};

const temp = numWays(4, [1, 2]);
console.log(temp);
