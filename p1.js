function narcissistic(value) {
  // Code me to return true or false
  let numberString = value.toString();
  let totalValue = 0;
  for (let i = 0; i < numberString.length; i++) {
    let number = numberString[i];

    totalValue += number ** numberString.length;
  }

  return totalValue == value;
}

console.log(narcissistic(343));
