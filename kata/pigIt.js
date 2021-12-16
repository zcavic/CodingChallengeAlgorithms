function pigIt(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let letter = '';
    if (words[i].length == 1 && words[i].match(/[a-z]/i)) {
      words[i] += 'ay';
      continue;
    }
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j].match(/[a-z]/i)) {
        letter = words[i][j];
        words[i] = words[i].substring(j + 1);
        break;
      }
    }
    for (let j = words[i].length - 1; j >= 0; j--) {
      if (words[i][j].match(/[a-z]/i)) {
        words[i] = [words[i].slice(0, j + 1), letter + 'ay', words[i].slice(j + 1)].join('');
        break;
      }
    }
  }
  return words.join(' ');
}

function pigIt2(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

function pigIt3(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}

export function test() {
 }