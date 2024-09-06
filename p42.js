function reverseWords(str) {
  // Go for it
  //   let reverseStr = "";
  //   for (let i = str.length; 0 >= i; i--) {
  //     reverseStr += str[i];
  //   }

  let finalWord = "";
  let word = "";

  for (let i = 0; i < str.length; i++) {
    console.log(word);

    if (str[i] === " ") {
      finalWord += word + " ";
      word = "";
    } else {
      word = str[i] + word;
    }
  }
  finalWord += word;
  return finalWord;
}
console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
