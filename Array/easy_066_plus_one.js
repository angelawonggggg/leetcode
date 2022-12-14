let digits = [3, 8, 8];

var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 == 10) {
      digits[i] = 0;
    } else {
      digits[i]++;
      return digits;
    }
  }

  return [1, ...digits];
};

console.log(plusOne(digits));
