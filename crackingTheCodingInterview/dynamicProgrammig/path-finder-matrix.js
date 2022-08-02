const findPath = (n, m, offLimits) => {
    const path = [];
    const makeStep = (x, y) => {
        // visit
        path.push(`${x},${y}`);

        // check is end
        if (x == n && y == m) return path;

        // get possible next steps
        const nextSteps = [];
        if (x + 1 <= n && path.indexOf(`${x + 1},${y}`) === -1 && offLimits.indexOf(`${x + 1},${y}`) === -1) nextSteps.push([x + 1, y]);
        if (y + 1 <= m && path.indexOf(`${x},${y + 1}`) === -1 && offLimits.indexOf(`${x},${y + 1}`) === -1) nextSteps.push([x, y + 1]);
        if (x - 1 > 0 && path.indexOf(`${x - 1},${y}`) === -1 && offLimits.indexOf(`${x - 1},${y}`) === -1) nextSteps.push([x - 1, y]);
        if (y - 1 > 0 && path.indexOf(`${x},${y - 1}`) === -1 && offLimits.indexOf(`${x},${y - 1}`) === -1) nextSteps.push([x, y - 1]);

        // try to do next step
        let result = false;
        for (let i = 0; i < nextSteps.length; i++) {
            result = makeStep(nextSteps[i][0], nextSteps[i][1]);
            // do next step
            if (result) return result;
        }

        // return back
        path.splice(path.indexOf(`${x},${y}`), 1);
        return false;
    };
    return makeStep(1, 1);
};

const temp = findPath(10, 10, [
    "1,2",
    "2,2",
    "4,2",
    "5,2",
    "6,2",
    "7,2",
    "8,2",
    "9,2",
    "10,2",
    "1,4",
    "2,4",
    "3,4",
    "4,4",
    "5,4",
    "6,4",
    "8,4",
    "9,4",
    "10,4"
]);
console.log(temp);
