/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 != 0) return false;
    const temp = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
            temp.push(s[i]);
            continue;
        }

        if (s[i] == ")" && temp.pop() != "(") return false;
        if (s[i] == "]" && temp.pop() != "[") return false;
        if (s[i] == "}" && temp.pop() != "{") return false;
    }
    return temp.length == 0;
};

const res = isValid("()");
