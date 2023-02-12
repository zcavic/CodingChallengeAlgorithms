var climbStairs = function (n) {
    let one = 1,
        two = 1;
    for (let i = 0; i < n - 1; i++) {
        const temp = one;
        one = one + two;
        two = temp;
    }
    return one;
};
