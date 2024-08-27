function isIsogram(str) {
  const lowerCaseStr = str.toLowerCase();
  const letters = new Set();
  for (let i = 0; i < str.length; i++) {
    if (letters.has(lowerCaseStr[i])) {
      return false;
    }
    letters.add(lowerCaseStr[i]);
  }
  return true;
}
console.log(isIsogram("mOOse"));
