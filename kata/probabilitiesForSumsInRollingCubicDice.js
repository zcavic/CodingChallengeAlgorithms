function rolldiceSumProb(arr, totalSides) {
    let allCombinations = [];
    roleDice(arr, 0, totalSides, [], allCombinations);
    return allCombinations.length / Math.pow(6, totalSides);
}

function roleDice(sum, current, dices, combinations, allCombinations) {
    for (let i = 1; i < 7; i++) {
        let tempComb = [...combinations];
        if (current + i < sum && combinations.length < dices - 1) {
            tempComb.push(i);
            roleDice(sum, current + i, dices, tempComb, allCombinations);
        }
        else if (current + i === sum && combinations.length === dices - 1) {
            tempComb.push(i);
            allCombinations.push(tempComb);
        }
    }
}

console.assert(rolldiceSumProb(11, 2), 0.055555555555);
console.assert(rolldiceSumProb(8, 2), 0.13888888889);
console.assert(rolldiceSumProb(6, 2), 0.0972222222222);