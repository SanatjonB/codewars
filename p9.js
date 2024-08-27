function getCount(str) {
  let totalVowel = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      totalVowel += 1;
    }
  }

  return totalVowel;
}
console.log(getCount("Hello"));
