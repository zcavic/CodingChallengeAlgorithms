/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];

    let sum = nums[0],
        tempSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (tempSum < 0) {
            tempSum = nums[i];
            if (sum < tempSum) sum = tempSum;
            continue;
        } else if (tempSum + nums[i] < 0) {
            tempSum = nums[i];
            if (sum < tempSum) sum = tempSum;
            continue;
        } else {
            tempSum += nums[i];
            if (sum < tempSum) sum = tempSum;
        }
    }
    return sum;
};

const res = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
