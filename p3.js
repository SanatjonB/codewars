function generateHashtag(str) {
  let trimmedString = str.trim();
  let String = trimmedString
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")
    .replace(/\s+/g, "");

  let finalString = `#${String}`;
  if (finalString === "#") {
    return false;
  }
  if (finalString[1] === "#") {
    finalString = finalString.slice(1);
  }
  if (finalString.length > 140) {
    return false;
  } else {
    return finalString;
  }
}
console.log(generateHashtag("whats up man"));
console.log(generateHashtag("#Do We have A Hashtag"));
// for (let i = 0; i < newArray.length; i++) {
//     newArraySlices.push(str[newArray[i]].toUpperCase());
//   }
