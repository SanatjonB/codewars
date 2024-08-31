function sumTwoSmallestNumbers(numbers) {
  //Code here
  let sortedNumber = numbers.sort((a, b) => a - b);
  return sortedNumber[0] + sortedNumber[1];
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
