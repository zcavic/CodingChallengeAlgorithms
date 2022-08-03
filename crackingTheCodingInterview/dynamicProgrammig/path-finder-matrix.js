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

const temp = findPath(5, 5, ["1,2", "3,2", "4,2", "5,2", "4,4", "4,5"]);
console.log(temp);

const findPath_bfs = (startX, startY, map) => {
    // initialization
    const queueX = [];
    const queueY = [];
    const lengthX = map[0].length;
    const lengthY = map.length;

    // add start point
    queueX.push(startX);
    queueY.push(startY);

    // start BFS
    while (queueX.length > 0 && queueY.length > 0) {
        const x = queueX.pop();
        const y = queueY.pop();

        // check is End
        if (map[x][y] === "E") {
            return "success";
        }

        // visit
        map[x][y] = "x";

        // add next layer
        if (x + 1 < lengthX && map[x + 1][y] !== "x" && map[x + 1][y] !== "#") {
            queueX.push(x + 1);
            queueY.push(y);
        }
        if (y + 1 < lengthY && map[x][y + 1] !== "x" && map[x][y + 1] !== "#") {
            queueX.push(x);
            queueY.push(y + 1);
        }
        if (x - 1 > 0 && map[x - 1][y] !== "x" && map[x - 1][y] !== "#") {
            queueX.push(x - 1);
            queueY.push(y);
        }
        if (y - 1 > 0 && map[x][y - 1] !== "x" && map[x][y - 1] !== "#") {
            queueX.push(x);
            queueY.push(y - 1);
        }
    }
    return false;
};
const map = [
    [" ", "#", " ", " ", " "],
    [" ", " ", " ", " ", " "],
    [" ", "#", " ", " ", " "],
    [" ", "#", " ", "#", "#"],
    [" ", "#", " ", " ", "E"]
];

const temp1 = findPath_bfs(0, 0, map);
console.log(temp1);
