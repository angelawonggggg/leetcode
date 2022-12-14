let memo = {};

var fib = function (n) {
  // 用memo儲低recursion計算過的結果，如果有就直接用，唔洗計多次
  if (memo[n] !== undefined) {
    return memo[n];
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  // recursion
  return (memo[n] = fib(n - 1) + fib(n - 2));
};

let n = 6;
console.log(fib(n));
