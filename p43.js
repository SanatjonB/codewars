function isTriangle(a, b, c) {
  if (a > 0 && b > 0 && c > 0) {
    return a + b > c && a + c > b && b + c > a;
  }
  return false;
}
console.log(isTriangle(3, 4, 5));
console.log(isTriangle(1, 10, 12));
