function findOdd(A) {
  //happy coding!
  const counts = {};
  A.forEach((element) => {
    if (!counts[element]) {
      counts[element] = 1;
    } else {
      counts[element]++;
    }
  });
  for (const element in counts) {
    if (counts[element] % 2 !== 0) {
      return parseInt(element);
    }
  }
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
