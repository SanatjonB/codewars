function squareSum(numbers) {
  //   let sum = 0;
  //   for (let i = 0; i < numbers.length; i++) {
  //     sum = sum + numbers[i] ** 2;
  //   }
  //   return sum;
  return numbers.reduce((sum, number) => sum + number ** 2, 0);
}
console.log(squareSum([1, 2, 2]));
