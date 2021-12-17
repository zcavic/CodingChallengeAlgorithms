function spinWords(string) {
    return string.split(' ')
        .map(x => {
            if (x.length > 4) return x.split('').reverse().join('');
            else return x;
        })
        .join(' ');
}

console.assert(spinWords("Welcome"), "emocleW");
console.assert(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.assert(spinWords("This is a test"), "This is a test");
console.assert(spinWords("This is another test"), "This is rehtona test");
console.assert(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.assert(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.assert(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");