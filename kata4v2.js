// function add(a, b) {
//   return String(BigInt(a) + BigInt(b)); // Fix me!
// }
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));

function add(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let digit1 = i >= 0 ? Number(a[i]) : 0;
    let digit2 = j >= 0 ? Number(b[j]) : 0;
    let sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }

  return result;
}
