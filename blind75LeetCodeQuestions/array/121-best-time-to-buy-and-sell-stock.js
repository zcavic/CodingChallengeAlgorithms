/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // let profit = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] - prices[i] > profit) profit = prices[j] - prices[i];
    //     }
    // }
    // return profit;

    // let profit = 0;
    // const pricesSet = new Map();
    // for (let i = 0; i < prices.length; i++) {
    //     pricesSet.set(prices[i], i);
    // }
    // const sortedPrices = prices.sort();
    // for (let i = 0; i < sortedPrices.length; i++) {
    //     if (
    //         pricesSet.get(sortedPrices[i]) < pricesSet.get(sortedPrices[sortedPrices.length - i - 1]) &&
    //         sortedPrices[sortedPrices.length - i - 1] - sortedPrices[i] > profit
    //     )
    //         profit = prices[sortedPrices.length - i - 1] - prices[i];
    // }
    // return profit;

    let profit = 0;
    for (let i = prices.length - 1; i >= 0; i--) {
        if (prices[i] < profit) continue;
        for (let j = 0; j < prices.length; j++) {
            if (j > i) break;
            if (prices[i] - prices[j] > profit) profit = prices[i] - prices[j];
        }
    }
    return profit;
};

const t = maxProfit([7, 1, 5, 3, 6, 4]);
