/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length < 3) return Math.max(...nums);
    let one = nums[0],
        two = nums[1];

    for (let i = 2; i < nums.length; i++) {
        const tOne = one;
        const tTwo = two;
        two = tOne + nums[i] > tTwo ? tOne + nums[i] : two;
        one = tTwo > tOne ? tTwo : tOne;
    }
    return two;
};

const res = rob([2, 1, 1, 2]);
console.log(res);
