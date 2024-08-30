function tribonacci(signature, n) {
  //your code here
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [signature[0]];
  }
  if (n === 2) {
    return [signature[0], signature[1]];
  }
  let result = signature;
  for (let i = 3; i < n; i++) {
    let nextNum = result[i - 3] + result[i - 2] + result[i - 1];
    result.push(nextNum);
  }
  return result;
}
console.log(tribonacci([1, 1, 1], 10));
