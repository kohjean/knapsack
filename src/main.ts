type items = [
  {
    weight: number;
    value: number;
  }
];

export const knapsack = (n: number, W: number, items: items): number => {
  let dp = [...Array(items.length)].map(() => Array(W + 1).fill(0));
  for (let j = 0; j <= W; j++) {
    if (items[0].weight <= j) {
      dp[0][j] = items[0].value;
    }
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= W; j++) {
      const preValue = dp[i - 1][j];
      if (items[i].weight > j) {
        dp[i][j] = preValue;
      } else {
        const addedNowValue = dp[i - 1][j - items[i].weight] + items[i].value;
        dp[i][j] = Math.max(preValue, addedNowValue);
      }
    }
  }
  // console.table(dp)
  return dp[n-1][W];
};