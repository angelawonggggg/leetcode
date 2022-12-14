let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let max = 0;

  while (right < prices.length) {
    let profit = prices[right] - prices[left];
    if (profit > max) {
      max = profit;
    }

    if (profit < 0) {
      left = right;
    }
    right += 1;
  }

  return max;
};

console.log(maxProfit(prices));
