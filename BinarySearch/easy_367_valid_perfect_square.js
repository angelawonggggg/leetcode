let num = 64;

var isPerfectSquare = function (num) {
  let start = 0;
  let end = num;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (mid * mid > num) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }

    if (mid * mid === num) {
      return true;
    }
  }
  return false;
};

console.log(isPerfectSquare(num));
