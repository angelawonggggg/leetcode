let prices = [7, 1, 5, 3, 6, 4];

var maxProfit = function (prices) {
  let max = 0;
  let left = 0;
  let right = 1;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];

    if (profit > max) {
      max = profit;
    }

    // if we can't make profit it means we have discovered a new lower price to buy, then continue
    if (profit < 0) {
      left = right;
    }

    right += 1;
  }

  return max;
};

console.log(maxProfit(prices));
