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

// Formats the Date column to Mmm dd, yyyy
export const formatDateForInput = (date) => {
  let options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };
  const formatted = new Date(date).toISOString('en-US', options).slice(0, 10);
  return formatted;
};

// sets Amount and Net Profit fields to $ amounts
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
