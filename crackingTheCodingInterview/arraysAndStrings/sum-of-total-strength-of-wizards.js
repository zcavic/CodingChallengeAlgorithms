var totalStrength = function (strength) {
    const results = [];
    for (let i = 0; i < strength.length; i++) {
        for (let j = i; j < strength.length; j++) {
            const subStrength = strength.slice(i, j + 1).sort();
            const result = subStrength[0] * subStrength.reduce((prev, current) => prev + current, 0);
            results.push(result);
        }
    }
    return results.reduce((prev, current) => prev + current, 0);
};

const temp = totalStrength([14, 9, 14, 3]);
console.log(temp);
