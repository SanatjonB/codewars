function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let classAvg =
    classPoints.reduce((sum, currentNum) => sum + currentNum, 0) /
    classPoints.length;
  return yourPoints > classAvg;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
