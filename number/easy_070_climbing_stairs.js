let n = 5;

// Fibonacci

var climbStairs = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let array = [1, 2, 3];

  for (let i = 3; i <= n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }

  return array[n - 1];
};

console.log(climbStairs(n));
