function isPangram(string) {
  //...
  const alphabetSet = new Set();
  let lowerCasedString = string.toLowerCase();
  for (let char of lowerCasedString) {
    if (char >= "a" && char <= "z") {
      alphabetSet.add(char);
    }
  }
  return alphabetSet.size === 26;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
