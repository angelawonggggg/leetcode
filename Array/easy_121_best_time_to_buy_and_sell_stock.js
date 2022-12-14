let prices = [0];

var maxProfit = function (prices) {
    let result = 0; 
    let min = prices[0]
    for(i=1; i<prices.length; i++) {
        min = Math.min(min, prices[i])
        result = Math.max(result, prices[i] - min)
    }
    return  result
}

console.log(maxProfit(prices))
// var maxProfit = function (prices) {
//   let buyPrice = Math.min(...prices);
//   let buyDayIndex = prices.indexOf(buyPrice);

//   if (buyDayIndex === prices.length - 1 && prices.length > 1) {
//     let newPrices = prices.splice(prices.length - 1, 1);

//     buyPrice = Math.min(...prices);
//     buyDayIndex = prices.indexOf(buyPrice);
//     arrayAfterBuy = prices.splice(0, buyDayIndex);
//     sellPrice = Math.max(...prices);
//     let profit = sellPrice - buyPrice;

//     return profit;
//   } else if ((buyDayIndex !== prices.length - 1) && prices.length > 1 ) {
//     buyPrice = Math.min(...prices);
//     buyDayIndex = prices.indexOf(buyPrice);
//     arrayAfterBuy = prices.splice(0, buyDayIndex);
//     sellPrice = Math.max(...prices);
//     let profit = sellPrice - buyPrice;

//     if (sellPrice < buyPrice || sellPrice == buyPrice ) {
//       profit = 0;
//     }

//     return profit;
//   } else if(prices.length <= 1) {
//       return 0; 
//   }
// } ;

// console.log(maxProfit(prices));
