/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
    return maxProfit;
};

let prices;
let res;
prices = [7,1,5,3,6,4];
res = maxProfit(prices);
console.log(res);

prices = [7,6,4,3,1]
res = maxProfit(prices);
console.log(res);

prices = [2,4,1];
res = maxProfit(prices);
console.log(res);