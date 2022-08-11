/*
 * Complete the 'countFamilyLogins' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING_ARRAY logins as parameter.
 */

function countFamilyLogins(logins) {
    let count = 0;
    // Write your code here
    const nextCar = (ch) => {
        let i = (parseInt(ch, 36) + 1) % 36;
        return (!i * 10 + i).toString(36);
    };
    const transform = (memeber) => {
        let memeberArr = memeber.split("");
        for (let i = 0; i < memeberArr.lenght; i++) {
            console.log(nextCar(memeberArr[i]));
            memeberArr[i] = nextCar(memeberArr[i]);
        }
        console.log(memeber);
        console.log(memeberArr);
        return memeberArr.join("");
    };
    for (let i = 0; i < logins.length - 1; i++) {
        for (let j = i + 1; j < logins.length; j++) {
            if (logins[i] === transform(logins[j]) || logins[j] === transform(logins[i])) count++;
        }
    }
    return count;
}

const t = countFamilyLogins(["cub", "bst", "cbu"]);
console.log(t);
