/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    let left = 0;
    let right = 1;

    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[right] - prices[left] < 0) {
            left = right;
            right++;
        } else {
            if (profit < prices[right] - prices[left]) profit = prices[right] - prices[left];
            right++;
        }
    }
    return profit;
};

const t = maxProfit([7, 1, 5, 3, 6, 4]);
