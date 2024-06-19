function minCoinSum(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount == 0) return 0;
  if (amount < 0) return -1;

  let minCoin = Infinity;

  for (let i = 0; i < coins.length; i++) {
    const result = minCoinSum(amount - coins[i], coins, memo);
    if (result !== -1) {
      minCoin = Math.min(minCoin, 1 + result);
    }
  }

  memo[amount] = minCoin === Infinity ? -1 : minCoin;
  return memo[amount];
}

let coins = [4, 6, 10];
let amount = 15;

console.log(coinSum(amount, coins));
