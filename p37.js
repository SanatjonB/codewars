function digPow(n, p) {
  // ...
  let total = 0;
  let numberArr = n.toString().split("");
  for (let i = 0; i < numberArr.length; i++) {
    total += numberArr[i] ** p;
    p++;
  }
  if (total % n === 0) {
    return total / n;
  }
  return -1;
}
console.log(digPow(695, 2));
