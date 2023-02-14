/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    const mapS = new Map();
    const mapT = new Map();
    for (let i = 0; i < s.length; i++) {
        if (mapS.has(s[i])) mapS.set(s[i], mapS.get(s[i]) + 1);
        else mapS.set(s[i], 1);
        if (mapT.has(t[i])) mapT.set(t[i], mapT.get(t[i]) + 1);
        else mapT.set(t[i], 1);
    }
    for (var [key, val] of mapS) {
        if (!mapT.has(key) || mapT.get(key) != val) return false;
    }
    return true;
};

const s = "rat",
    t = "car";
const res = isAnagram(s, t);
