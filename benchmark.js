function squareDigitsMap(num) {
  return Number(
    ("" + num)
      .split("")
      .map(function (val) {
        return val * val;
      })
      .join("")
  );
}

function squareDigitsLoop(num) {
  let finalString = "";
  let stringNum = num.toString();
  for (let i = 0; i < stringNum.length; i++) {
    let number = parseFloat(stringNum[i]);
    finalString += number * number;
  }
  return parseInt(finalString);
}

function benchmark(func, input, iterations = 1000000) {
  console.time(func.name);
  for (let i = 0; i < iterations; i++) {
    func(input);
  }
  console.timeEnd(func.name);
}

let testNum = 123456789;

benchmark(squareDigitsMap, testNum);
benchmark(squareDigitsLoop, testNum);
