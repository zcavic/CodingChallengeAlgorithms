function anagrams(word, words) {
    let sortWord = word.split('').sort().join('');
    return words.filter(x => sortWord == x.split('').sort().join(''));
}

let pairs = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
console.log(pairs);