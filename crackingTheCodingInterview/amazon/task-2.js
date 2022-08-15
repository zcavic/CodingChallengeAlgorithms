function getMaxFreqDeviation(s) {
    const devMap = new Map();
    // Write your code here
    let maxDev = -1;
    const getDeviation = (str) => {
        const numberOf = new Map();
        let min = -1;
        let max = -1;
        for (let i = 0; i < str.length; i++) {
            if (numberOf.has(str[i])) numberOf.set(str[i], numberOf.get(str[i]) + 1);
            else numberOf.set(str[i], 1);
        }
        for (const value of numberOf.values()) {
            if (max == -1 || value > max) max = value;
            if (min == -1 || value < min) min = value;
        }
        return max - min;
    };

    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if (j - i < maxDev) continue;
            const subStr = s.slice(i, j + 1);
            let dev = 0;
            if (devMap.has(subStr)) dev = devMap.get(subStr);
            else dev = getDeviation(subStr);
            if (maxDev == -1 || dev > maxDev) maxDev = dev;
        }
    }

    return maxDev;
}

function getMaxFreqDeviation_2(s) {
    let ans = 0;
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    const kadane = (a, b) => {
        let ans = 0;
        let countA = 0;
        let countB = 0;
        let canExtendPrevB = false;

        for (let i = 0; i < s.length; i++) {
            const c = s[i];
            if (c != a && c != b) continue;
            if (c == a) ++countA;
            else ++countB;
            if (countB > 0) {
                // an interval should contain at least one b
                ans = Math.max(ans, countA - countB);
            } else if (countB == 0 && canExtendPrevB) {
                // edge case: consider previous b
                ans = Math.max(ans, countA - 1);
            }
            // reset if # of b > # of a
            if (countB > countA) {
                countA = 0;
                countB = 0;
                canExtendPrevB = true;
            }
        }

        return ans;
    };

    for (let i = 0; i <= alphabet.length; i++) {
        for (let j = 0; j <= alphabet.length; j++) {
            const c1 = alphabet[i];
            const c2 = alphabet[j];
            if (c1 != c2) {
                ans = Math.max(ans, kadane(c1, c2));
            }
        }
    }

    return ans;
}
const t_2 = getMaxFreqDeviation_2("aab");

const t_3 = getMaxFreqDeviation(
    "beaffcabaecdeadccedaadaeddbfccfdfadcfbccebdbcdbcacbeecaabfccccddbcafcffaadddaaaccdaecfebcdcdedaaceceabebfdcdfcbfdacacbdfebbefbfeacadebbfebeafcefbaebfbbeabffdbefbfddfcdaaedbefacafddffbfaffbdbcddffdeaaefdcddacdbcafcdfccccfcccffbfdfacbdefabaabcfaecababdefefccdcadbbbbdbbafbeefedeebccdadacbacbadffebcfefeedeebfcbffadefbdfadfeebdfebcaffdadefeaceacacbfbedcccabadaaddecccabfccbaedbdaadedbefbbddcabbcfdbffabcdedbbcaaffebedfaaabdcefdeffcbccfbfdadacfdfffffbdfcbabceebddcdcaddabbdfdacbbdcabecdcddceeedeccecfedadcaadaabcedcfaefcedbadafcadcbeafbbcbbecebadafdcbffedeacceeefddfdfececeecaabccdbaceceeceedfcafbadcedbecebdfffaeaaaddadecaefeebdaccaefcadebaeebbcddfafdaffcdfcdbdcdeaedbbbbfadecdecbacacffbccadfeaefcdddedbfcbabefcdcfbaabdccbfefdeefdacedafacbbfbfecedecbfacbfebfeeebfbffabdeeeebebfaabbdafaafbebefeccedebcaddebabefdebfbedeefbceaefcbfabbbabeeadbafecccabfdccbbdbeacbfababcfcebbbeceadcafadccdcdedbcbcdfecbfdcdcdddddcbeacebbdadeafabefabbcfcfdddcffbcbaeeaaeceafbebfcabddaddbebcffdefdcedaceedefdddaedaeaedacbebcedffbcfaacddfcbfcfecccfadafdcdcacfefcddaaafcabbcbadaaacaeaaefeccedaaedabdbceccedbeefbeaedbcbefbfabcfebcfcdfacafabdcaabecbbcdbbacbfcdaaffccbaffeacedabbacacdedfcbbbcdfbbaadedfaebdbdbbaccdcfaaffbdccacabdbaadbedcfabfbdffccffbbdabcbefabbeacdfeaefbbcfdadaeabafddcfcfeaaaeeddfbaffaebfeeeacffacafcadcdddecddbdf"
);

const t = getMaxFreqDeviation_2(
    "beaffcabaecdeadccedaadaeddbfccfdfadcfbccebdbcdbcacbeecaabfccccddbcafcffaadddaaaccdaecfebcdcdedaaceceabebfdcdfcbfdacacbdfebbefbfeacadebbfebeafcefbaebfbbeabffdbefbfddfcdaaedbefacafddffbfaffbdbcddffdeaaefdcddacdbcafcdfccccfcccffbfdfacbdefabaabcfaecababdefefccdcadbbbbdbbafbeefedeebccdadacbacbadffebcfefeedeebfcbffadefbdfadfeebdfebcaffdadefeaceacacbfbedcccabadaaddecccabfccbaedbdaadedbefbbddcabbcfdbffabcdedbbcaaffebedfaaabdcefdeffcbccfbfdadacfdfffffbdfcbabceebddcdcaddabbdfdacbbdcabecdcddceeedeccecfedadcaadaabcedcfaefcedbadafcadcbeafbbcbbecebadafdcbffedeacceeefddfdfececeecaabccdbaceceeceedfcafbadcedbecebdfffaeaaaddadecaefeebdaccaefcadebaeebbcddfafdaffcdfcdbdcdeaedbbbbfadecdecbacacffbccadfeaefcdddedbfcbabefcdcfbaabdccbfefdeefdacedafacbbfbfecedecbfacbfebfeeebfbffabdeeeebebfaabbdafaafbebefeccedebcaddebabefdebfbedeefbceaefcbfabbbabeeadbafecccabfdccbbdbeacbfababcfcebbbeceadcafadccdcdedbcbcdfecbfdcdcdddddcbeacebbdadeafabefabbcfcfdddcffbcbaeeaaeceafbebfcabddaddbebcffdefdcedaceedefdddaedaeaedacbebcedffbcfaacddfcbfcfecccfadafdcdcacfefcddaaafcabbcbadaaacaeaaefeccedaaedabdbceccedbeefbeaedbcbefbfabcfebcfcdfacafabdcaabecbbcdbbacbfcdaaffccbaffeacedabbacacdedfcbbbcdfbbaadedfaebdbdbbaccdcfaaffbdccacabdbaadbedcfabfbdffccffbbdabcbefabbeacdfeaefbbcfdadaeabafddcfcfeaaaeeddfbaffaebfeeeacffacafcadcdddecddbdf"
);
console.log(t);
