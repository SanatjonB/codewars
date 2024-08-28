function squareDigits(num) {
  let finalString = "";
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    let number = parseFloat(stringNum[i]);
    finalString += number * number;
  }
  return parseInt(finalString);
}
console.log(squareDigits(9119));
