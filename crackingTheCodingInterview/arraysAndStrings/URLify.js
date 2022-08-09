const URLify = (input) => {
    const stringArray = input.split("");
    const ulrMark = "%20";

    const replaceWhiteSpaces = () => {
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray[i] == " ") {
                for (let j = i; j < stringArray.length; j++) {
                    if (stringArray[j] == " ") {
                        continue;
                    } else {
                        stringArray.splice(i, j - i, ulrMark);
                        break;
                    }
                }
            }
        }
    };
    const removeWhiteSpacesFromBegging = () => {
        for (let i = 0; i < stringArray.length; i++) {
            if (stringArray[i] == " ") {
                continue;
            } else {
                stringArray.splice(0, i);
                break;
            }
        }
    };
    const removeWhiteSpacesFromEnd = () => {
        for (let i = stringArray.length - 1; i > 0; i--) {
            if (stringArray[i] == " ") {
                continue;
            } else {
                stringArray.splice(i + 1, stringArray.length - i); // remove empty spaces at the end, (start index, number of element for deleting)
                break;
            }
        }
    };

    removeWhiteSpacesFromBegging();
    removeWhiteSpacesFromEnd();
    replaceWhiteSpaces();
    return stringArray.join("");
};

const temp = URLify(" This       is test     ");
console.log(temp);
