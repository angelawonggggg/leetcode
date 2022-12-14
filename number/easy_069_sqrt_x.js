let x = 9;

// non-negative
// sq root of x -> down to integer

var mySqrt = function (x) {
  let start = 1;
  let end = x;
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid * mid <= x) {
      start = mid + 1;
      ans = mid;
    } else {
      end = mid - 1;
    }
  }

  return ans;
};

var mySqrtBruteForce = function (x) {
  if (x == 0) return 0;
  for (let i = 0; i <= x; i++) {
    if (i * i == x) return i;
    if (i * i > x) return i - 1;
  }
};

console.log(mySqrt(x));
