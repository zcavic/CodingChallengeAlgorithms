// https://www.codewars.com/kata/5dcde0b9fcb0d100349cb5c0/train/javascript

function longest_palindrome(s) {
  const letters = s.split('');
  const palindrome = [];
  const lettersMap = letters.reduce((res, letter) => {
    return res.set(letter, ((res.get(letter) || 0) + 1))
  }, new Map());
  let max = [...lettersMap.entries()].reduce((a, e) => (e[1] > a[1] && e[1] % 2 !== 0) ? e : a, ['', 0]);
  for (let i = 0; i < max[1]; i++) palindrome.push(max[0]);

  lettersMap.forEach((value, key, map) => {
    if (value % 2 === 0) {
      for (let i = 1; i < value + 1; i++) {
        if (i % 2 == 0) palindrome.push(key);
        else palindrome.unshift(key);
      }
    }
  });
  return palindrome.join('');
}

let x = longest_palindrome('nnaaa')
console.log(x);


function palindromePermutation(sentence) {
  let allPalindromes = new Set();
  let sentenceArray = sentence.split('');
  for (let i = 0; i < sentenceArray.length; i++) {
    permute(sentenceArray, 0, allPalindromes);
  }
  return allPalindromes;
}

function permute(sentenceArray, i, allPalindromes) {
  console.log(sentenceArray.join(''))
  if (isPalindrome(sentenceArray)) {
    allPalindromes.add(sentenceArray.join(''));
  }
  else if (i === sentenceArray.length - 1) {
    return '';
  }
  [sentenceArray[i], sentenceArray[i + 1]] = [sentenceArray[i + 1], sentenceArray[i]];
  return permute(sentenceArray, ++i, allPalindromes);
}

function isPalindrome(stringArray) {
  let originalArray = [...stringArray];
  let originalString = originalArray.join('');
  originalString.toLowerCase();
  originalString = originalString.replace(/\s/g, '');
  let reverseArray = [...stringArray];
  reverseArray.reverse();
  let reverseString = reverseArray.join('')
  reverseString.toLowerCase();
  reverseString = reverseString.replace(/\s/g, '');

  if (reverseString === originalString)
    return true;
  else {
    return false;
  }
}

