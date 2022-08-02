const getFirstNonRepeatingCharacter = (inputString) => {
    const characters = new Map();
    inputString.split("").forEach((letter) => {
        let count = characters.get(letter) || 0;
        count++;
        characters.set(letter, count);
    });
    let first = "_";
    characters.forEach((value, key, map) => {
        if (value === 1) first = key;
    });
    return first;
};

const temp = getFirstNonRepeatingCharacter("aaasssdddttrrrrr");
console.log(temp);
