function nextBigger(n) {
    return getNextBigger(n, String(n).split('').sort(), []);
}

function getNextBigger(number, numberArr, biggerNumberArr) {
    for (let i = 0; i < numberArr.length; i++) {
        let tempBiggerNumber = [...biggerNumberArr];
        let tempNumber = [...numberArr];
        tempBiggerNumber.push(String(numberArr[i]));
        tempNumber.splice(i, 1);
        if (tempNumber.length == 0 && parseInt(tempBiggerNumber.join('')) > number) return parseInt(tempBiggerNumber.join(''));
        else if (tempNumber.length == 0) continue;
        let result = getNextBigger(number, tempNumber, tempBiggerNumber)
        if (result != -1) return result;
    }
    return -1;
}


console.assert(nextBigger(12), 21)