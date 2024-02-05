let num = 266219;
console.log(num.toString());


function multiplyDigits(number) {
  let changeNumberToString = number.toString();
  let splitNumbers = changeNumberToString.split('');
  let result = 1;

  splitNumbers.forEach((num) => {
    let modifyToNumber = +num;
    result *= modifyToNumber;
  });

  return result;
}

console.log(multiplyDigits(num));

let resNumber = multiplyDigits(num);
const multiplyResNumber = resNumber ** 3;

console.log(resNumber ** 3);
console.log(parseInt(multiplyResNumber.toString().slice(0, 2)));