function highAndLow(numbers) {
  // ...
  let array = numbers.split(" ").map(Number);
  let highest = array[0];
  let lowest = array[0];
  for (let i = 0; i < array.length; i++) {
    if (highest < array[i]) {
      highest = array[i];
    }
    if (lowest > array[i]) {
      lowest = array[i];
    }
  }
  return `${highest} ${lowest}`;
}
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
