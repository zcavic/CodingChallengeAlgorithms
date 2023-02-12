/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = Array(nums.length).fill(1);
    dp[nums.length - 1] = 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j] && dp[i] < 1 + dp[j]) dp[i] = 1 + dp[j];
        }
    }
    return Math.max(...dp);
};

const res = lengthOfLIS([0, 1, 0, 3, 2, 3]);
console(res);
