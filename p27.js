function getMiddle(s) {
  //Code goes here!
  let middle;
  if (s.length % 2 === 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  }
  return s.substring(s.length / 2, s.length / 2 + 1);
}
console.log(getMiddle("testing"));
