var isSquare = function (n) {
  if (n < 0) {
    return false;
  }
  let squareRoot = Math.sqrt(n);
  return squareRoot === Math.floor(squareRoot);
};
console.log(isSquare(4));
