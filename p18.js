function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0) {
    return number * 8;
  }
  return number * 9;
}
console.log(simpleMultiplication(2));

function simpleMultiplicationV2(number) {
  return number * (number & 2 ? 9 : 8);
}
