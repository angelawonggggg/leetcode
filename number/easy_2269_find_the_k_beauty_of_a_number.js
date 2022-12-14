let num = 765,
  k = 2;

var divisorSubstrings = function (num, k) {
  let s = num.toString();
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (i >= k - 1) {
      let divisor = s.slice(i - k + 1, i + 1);
      console.log("divisor", divisor);
      if (num % +divisor === 0 && divisor !== 0) {
        count++;
      }
    }
  }

  return count;
};

console.log(divisorSubstrings(num, k));
