const someString = "abc";

const getAllPermutations = (inputString) => {
    if (!inputString || inputString.length === 0) {
        return [];
    } else if (inputString.length === 1) {
        return [inputString];
    } else {
        const newString = inputString.slice(0, inputString.length - 1);
        const lastLetter = inputString.slice(-1);
        const newPermutations = [];
        const permutations = getAllPermutations(newString);
        permutations.forEach((element) => {
            for (let i = 0; i < element.length; i++) {
                const newPermutation = element.slice(0, i) + lastLetter + element.slice(i);
                newPermutations.push(newPermutation);
            }
            newPermutations.push(element + lastLetter);
        });
        return newPermutations;
    }
};

const getAllPermutations_2 = (str) => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
        .split("")
        .reduce((acc, letter, i) => acc.concat(getAllPermutations_2(str.slice(0, i) + str.slice(i + 1)).map((val) => letter + val)), []);
};

console.log(getAllPermutations("abcdefg"));
console.log(getAllPermutations_2("abcdefg"));
