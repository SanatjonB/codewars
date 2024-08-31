function alphabetPosition(text) {
  const Lower = "a".charCodeAt(0);
  const Upper = "z".charCodeAt(0);
  return text
    .toLowerCase()
    .split("")
    .filter((c) => Lower <= c.charCodeAt(0) && c.charCodeAt(0) <= Upper)
    .map((c) => c.charCodeAt(0) - Lower + 1)
    .join(" ");
}
console.log(alphabetPosition("The sunset sets at twelve o' clock."));
