function filter_list(l) {
  // Return a new array with the strings filtered out
  arr = l.filter((item) => !isNaN(item));
  arr = arr.filter((item) => typeof item === "number");
  return arr;
}

console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
