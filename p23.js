function printerError(s) {
  // your code
  let errorCount = 0;
  let allowedLetter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ];
  for (let i = 0; i < s.length; i++) {
    if (!allowedLetter.includes(s[i])) {
      errorCount++;
    }
  }
  return `${errorCount}/${s.length}`;
}

console.log(
  printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")
);
