function orderWeight(strng) {
  let numbers = strng.split(' ');
  numbers.sort(function (x, y) {
    if (toNumber(x) < toNumber(y)) return -1;
    else if (toNumber(x) > toNumber(y)) return 1;
    else if (x > y) return 1;
    else if (x < y) return -1;
    return 0;
  });
  return numbers.join(' ');
}

function toNumber(strNumber) {
  return strNumber.split('').reduce(function(s, e) { 
    return s + parseInt(e); 
  }, 0);
}

export function test() {
  console.assert(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
  console.assert(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
}
