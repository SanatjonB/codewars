class RomanNumerals {
  static toRoman(num) {
    let romanString = "";
    const roman = {
      1000: "M",
      900: "CM",
      500: "D",
      400: "CD",
      100: "C",
      90: "XC",
      50: "L",
      40: "XL",
      10: "X",
      9: "IX",
      5: "V",
      4: "IV",
      1: "I",
    };
    let keys = Object.keys(roman)
      .map(Number)
      .sort((a, b) => b - a);
    while (num > 0) {
      for (let key of keys) {
        if (num >= key) {
          romanString += roman[key];
          num -= key;
          break;
        }
      }
    }

    return romanString;
  }

  static fromRoman(str) {
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
      O: 0,
    };
    let sum = 0;
    str = str + "O";
    for (let i = 0; i < str.length; i++) {
      if (roman[str[i]] >= roman[str[i + 1]]) {
        sum += Number(roman[str[i]]);
      } else if (roman[str[i]] < roman[str[i + 1]]) {
        let twoNumber = str[i] + str[i + 1];
        sum += Number(roman[twoNumber]);
        i++;
      }
    }
    return sum;
  }
}
console.log(RomanNumerals.toRoman(3876), RomanNumerals.fromRoman("MMMCMXCIX"));
// |    M   |  1000 |
// |   CM   |   900 |
// |    D   |   500 |
// |   CD   |   400 |
// |    C   |   100 |
// |   XC   |    90 |
// |    L   |    50 |
// |   XL   |    40 |
// |    X   |    10 |
// |   IX   |     9 |
// |    V   |     5 |
// |   IV   |     4 |
// |    I   |     1 |
