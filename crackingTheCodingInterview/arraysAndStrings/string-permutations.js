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

console.log(getAllPermutations("abcdefg"));
