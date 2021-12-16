function orderWeight(strng) {
  let numbers = string.split(" ");
  let changedNumber = [];
  for (let i = 0; i < numbers.length; i++) {
    changedNumber.push(toNumber(numbers[i]));
  }
}

function toNumber(strNumber) {
  let number = 0;
  for(let i=0;i<strNumber.length;i++) {
    number +=strNumber[i];
  }
  return number;
}

export function Test() {
  console.assert(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
  console.assert(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
}
