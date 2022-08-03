const numberOfWays = (nCents) => {
    const ways = [];
    let oneWay = [];
    const addCoin = (sum, coins) => {
        for (let i = 0; i < coins.length; i++) {
            if (nCents > sum + coins[i]) {
                oneWay.push(coins[i]);
                addCoin(sum + coins[i], coins.slice(i, coins.length));
            } else if (nCents === sum + coins[i]) {
                ways.push([...oneWay, coins[i]]);
            }
        }
        oneWay.pop();
    };
    if (nCents <= 0) return 0;
    else if (nCents === 1) return 1;

    addCoin(0, [1, 5, 10, 25]);
    return ways;
};

const temp = numberOfWays(10);
console.log(temp);
