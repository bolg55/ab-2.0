/*   function to calculate net profit of each wager   */
export const netProfit = (wager, odds, result) => {
  let profit = 0;
  if (result === 'lose') {
    profit = wager * -1;
  } else if (result === 'win') {
    profit = wager * odds - wager;
  } else {
    return profit;
  }
  return profit;
};
