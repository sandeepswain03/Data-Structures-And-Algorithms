function coinSum(amount, coins, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount == 0) return true;
  if (amount < 0) return false;

  for (let i = 0; i < coins.length; i++) {
    if (coinSum(amount - coins[i], coins, memo)) {
      memo[amount] = true;
      return true;
    }
  }
  memo[amount] = false;
  return false;
}

let coins = [4, 6, 10];
let amount = 15;

console.log(coinSum(amount, coins));