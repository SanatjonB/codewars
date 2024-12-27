const colors = ["Red", "Blue", "Green"];
colors.push("Yellow");
colors.unshift("Purple");
colors.pop();
console.log(colors);
const numbers = [5, 10, 15, 20, 25];
const doubledNumbers = numbers.map((num) => num * 2);
const above20Numbers = numbers.filter((num) => num > 20);
console.log(numbers, doubledNumbers, above20Numbers);

const actions = ["Learn", "Practice", "Master"];
actions.forEach((word, index) => {
  console.log(`Action: ${word} Index:${index}`);
});
