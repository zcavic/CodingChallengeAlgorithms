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
    const getSubStr = (str) => {
        const subStr = [];
        for (let i = 0; i < str.length; i++) {
            for (let j = i; j < str.length; j++) {
                subStr.push(str.slice(i, j + 1));
            }
        }
        return subStr;
    };
    const subStr = getSubStr(s);
    subStr.forEach((sub) => {
        if (devMap.has(sub)) return devMap.get(sub);
        const dev = getDeviation(sub);
        devMap.set(sub, dev);
        if (maxDev == -1 || dev > maxDev) maxDev = dev;
    });

    return maxDev;
}

const t = getMaxFreqDeviation(
    "beaffcabaecdeadccedaadaeddbfccfdfadcfbccebdbcdbcacbeecaabfccccddbcafcffaadddaaaccdaecfebcdcdedaaceceabebfdcdfcbfdacacbdfebbefbfeacadebbfebeafcefbaebfbbeabffdbefbfddfcdaaedbefacafddffbfaffbdbcddffdeaaefdcddacdbcafcdfccccfcccffbfdfacbdefabaabcfaecababdefefccdcadbbbbdbbafbeefedeebccdadacbacbadffebcfefeedeebfcbffadefbdfadfeebdfebcaffdadefeaceacacbfbedcccabadaaddecccabfccbaedbdaadedbefbbddcabbcfdbffabcdedbbcaaffebedfaaabdcefdeffcbccfbfdadacfdfffffbdfcbabceebddcdcaddabbdfdacbbdcabecdcddceeedeccecfedadcaadaabcedcfaefcedbadafcadcbeafbbcbbecebadafdcbffedeacceeefddfdfececeecaabccdbaceceeceedfcafbadcedbecebdfffaeaaaddadecaefeebdaccaefcadebaeebbcddfafdaffcdfcdbdcdeaedbbbbfadecdecbacacffbccadfeaefcdddedbfcbabefcdcfbaabdccbfefdeefdacedafacbbfbfecedecbfacbfebfeeebfbffabdeeeebebfaabbdafaafbebefeccedebcaddebabefdebfbedeefbceaefcbfabbbabeeadbafecccabfdccbbdbeacbfababcfcebbbeceadcafadccdcdedbcbcdfecbfdcdcdddddcbeacebbdadeafabefabbcfcfdddcffbcbaeeaaeceafbebfcabddaddbebcffdefdcedaceedefdddaedaeaedacbebcedffbcfaacddfcbfcfecccfadafdcdcacfefcddaaafcabbcbadaaacaeaaefeccedaaedabdbceccedbeefbeaedbcbefbfabcfebcfcdfacafabdcaabecbbcdbbacbfcdaaffccbaffeacedabbacacdedfcbbbcdfbbaadedfaebdbdbbaccdcfaaffbdccacabdbaadbedcfabfbdffccffbbdabcbefabbeacdfeaefbbcfdadaeabafddcfcfeaaaeeddfbaffaebfeeeacffacafcadcdddecddbdf"
);
console.log(t);
