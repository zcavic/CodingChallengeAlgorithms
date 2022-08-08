var numIslands = function (grid) {
    let numberOfIslands = 0;
    let i = 0;
    let j = 0;
    const findNextIsland = () => {
        for (i = 0; i < grid.length; i++) {
            for (j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === "1") {
                    return true;
                }
            }
        }
        return false;
    };

    const markIsland = () => {
        const xStack = [i];
        const yStack = [j];
        grid[i][j] = "x";
        while (xStack.length > 0) {
            const x = xStack.shift();
            const y = yStack.shift();
            if (x + 1 < grid.length && grid[x + 1][y] == "1") {
                xStack.push(x + 1);
                yStack.push(y);
                grid[x + 1][y] = "x";
            }
            if (y + 1 < grid[0].length && grid[x][y + 1] == "1") {
                xStack.push(x);
                yStack.push(y + 1);
                grid[x][y + 1] = "x";
            }
            if (x - 1 >= 0 && grid[x - 1][y] == "1") {
                xStack.push(x - 1);
                yStack.push(y);
                grid[x - 1][y] = "x";
            }
            if (y - 1 >= 0 && grid[x][y - 1] == "1") {
                xStack.push(x);
                yStack.push(y - 1);
                grid[x][y - 1] = "x";
            }
        }
        numberOfIslands++;
    };
    while (findNextIsland()) {
        markIsland();
    }
    return numberOfIslands;
};

const temp = numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]);
console.log(temp);
