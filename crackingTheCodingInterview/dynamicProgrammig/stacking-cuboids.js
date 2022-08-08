var maxHeight = function (cuboids) {
    let maxTowerHeight = 0;
    let maxTower = [];

    const canPlace = (c1, c2) => {
        if (c1[0] >= c2[0] && c1[1] >= c2[1] && c1[2] >= c2[2]) return true;
        else return false;
    };
    const getTowerHeight = (tower) => {
        return tower.map((cub) => cub[2]).reduce((prev, current) => prev + current, 0);
    };
    const checkHeight = (tower) => {
        const currentTowerHeight = getTowerHeight(tower);
        if (currentTowerHeight > maxTowerHeight) {
            maxTowerHeight = currentTowerHeight;
            maxTower = [...tower];
        }
    };
    const getCubsWithRot = () => {
        const allRotations = [
            [0, 1, 2],
            [0, 2, 1],
            [1, 0, 2],
            [1, 2, 0],
            [2, 0, 1],
            [2, 1, 0]
        ];
        const cubsWithRot = [];
        cuboids.forEach((cube) => {
            const cubWithRot = [];
            allRotations.forEach((rotation) => {
                const version = [cube[rotation[0]], cube[rotation[1]], cube[rotation[2]]];
                cubWithRot.push(version);
            });
            cubsWithRot.push(cubWithRot);
        });
        return cubsWithRot;
    };
    const placeNext = (cub, cubs, tower) => {
        checkHeight(tower);
        for (let i = 0; i < cubs.length; i++) {
            const restCubs = cubs.filter((cube, index) => index !== i);
            cubs[i].forEach((nextCub) => {
                if (canPlace(cub, nextCub)) {
                    tower.push(nextCub);
                    placeNext(nextCub, restCubs, tower);
                    tower.pop();
                }
            });
        }
    };

    const cubsWithRot = getCubsWithRot();

    for (let i = 0; i < cuboids.length; i++) {
        const restCubs = cubsWithRot.filter((cube, index) => index !== i);
        cubsWithRot[i].forEach((cub) => {
            placeNext(cub, restCubs, [cub]);
        });
    }

    return maxTowerHeight;
};

const temp = maxHeight([
    [74, 66, 55],
    [97, 97, 38],
    [21, 69, 43],
    [88, 83, 87],
    [11, 4, 96],
    [17, 98, 21],
    [45, 43, 12],
    [19, 67, 24],
    [72, 5, 81],
    [30, 53, 100],
    [38, 30, 29],
    [81, 53, 42],
    [78, 80, 9],
    [3, 80, 66],
    [74, 16, 92],
    [18, 17, 70],
    [66, 88, 56],
    [7, 51, 49],
    [9, 59, 13],
    [44, 67, 21],
    [9, 95, 14],
    [88, 100, 37],
    [23, 76, 24],
    [15, 38, 41],
    [47, 98, 66],
    [25, 39, 23],
    [74, 49, 28],
    [100, 82, 62],
    [96, 73, 52],
    [9, 22, 5],
    [83, 99, 28],
    [9, 35, 5],
    [26, 53, 33],
    [53, 98, 93]
]);
console.log(temp);
