function digitize(n) {
  //code here
  return n.toString().split("").reverse().map(Number);
}
console.log(digitize(35231));
