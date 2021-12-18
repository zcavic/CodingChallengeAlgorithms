let fibNumber = new Map();

function productFib(prod) {
    for (let i = 1; i < prod; i++) {
        if (getFibNumb(i) * getFibNumb(i + 1) == prod) return [getFibNumb(i), getFibNumb(i + 1), true];
        else if (getFibNumb(i) * getFibNumb(i + 1) > prod) return [getFibNumb(i), getFibNumb(i + 1), false];
    }
}

function getFibNumb(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (fibNumber.has(n)) return fibNumber[n];
    let fibNUmber = getFibNumb(n - 2) + getFibNumb(n - 1);
    fibNumber[n] = fibNUmber;
    return fibNUmber;
}


console.assert(productFib(4895), [55, 89, true])