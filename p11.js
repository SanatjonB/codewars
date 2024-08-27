function century(year) {
  if (year % 100 === 0) {
    return year / 100;
  } else if (year < 100) {
    return 1;
  } else {
    return Math.trunc(year / 100) + 1;
  }
}
console.log(century(1900));
