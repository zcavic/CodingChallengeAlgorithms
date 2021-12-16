// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    let maxNumOfCakes = Number.MAX_VALUE;
    for (const ingredient in recipe) {
        if (recipe[ingredient] == 0) continue;
        let numOfCakes = parseInt(available[ingredient] / recipe[ingredient]);
        if (isNaN(numOfCakes)) return 0;
        if (numOfCakes < maxNumOfCakes) maxNumOfCakes = numOfCakes;
    }
    if (maxNumOfCakes === Number.MAX_VALUE) maxNumOfCakes = 0;
    return maxNumOfCakes;
}

export function test() {
    let recipe = { flour: 500, sugar: 200, eggs: 1 };
    let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    //console.assert(cakes(recipe, available), 2, 'Wrong result for example #1');

    recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    available = { sugar: 500, flour: 2000, milk: 2000 };
    //console.assert(cakes(recipe, available), 0, 'Wrong result for example #2');

    recipe = { cream: 17, eggs: 81, apples: 0 };
    available = { sugar: 200, oil: 7000, nuts: 2200, cocoa: 9200, eggs: 1100, cream: 2600, chocolate: 9800, milk: 1000, apples: 600, crumbles: 6900, flour: 5200, pears: 4300, butter: 6600 };
    console.assert(cakes(recipe, available), 0, 'Wrong result for example #2');
}
