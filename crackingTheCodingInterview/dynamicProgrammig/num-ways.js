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

const numWays_2 = (n, x) => {
    const levels = new Array(n + 1).fill(0);
    levels[0] = 1;
    for (let level = 1; level <= n; level++) {
        let total = 0;
        for (let i = 0; i < x.length; i++) {
            if (level - x[i] >= 0) {
                total += levels[level - x[i]];
            }
        }
        levels[level] = total;
    }
    return levels[n];
};

const temp2 = numWays_2(4, [1, 2]);
console.log(temp2);
