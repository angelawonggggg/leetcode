let a = "11",
  b = "11";
//        110

var addBinary = function (a, b) {
  let result = "";

  // indices for a and b
  let i = a.length - 1;
  let j = b.length - 1;

  let carry = 0;

  // coz a and b might be the same length
  while (i >= 0 || j >= 0) {
    let sum = carry;

    // add sum
    if (i >= 0) {
      // '0' = to transform number into string
      sum += a[i--] - "0";
    }
    if (j >= 0) {
      sum += b[j--] - "0";
    }

    // add to result
    result = (sum % 2) + result;

    // modify carry
    carry = parseInt(sum / 2);
  }

  // final check if carry exists

  if (carry > 0) {
    result = 1 + result;
  }

  return result;
};

console.log(addBinary(a, b));
