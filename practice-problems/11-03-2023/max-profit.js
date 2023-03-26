// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let minimunStockPrice = prices[0];
  let maximumProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minimunStockPrice) {
      minimunStockPrice = prices[i];
    }

    const tempProfit = prices[i] - minimunStockPrice;

    if (tempProfit > maximumProfit) {
      maximumProfit = tempProfit;
    }
  }

  return maximumProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
