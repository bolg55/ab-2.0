import styles from '../styles/Featured.module.css';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

// CALCULATES NET PROFIT OF ALL BETS VERY IMPORTANT //
const FeaturedInfo = ({ allBets }) => {
  /*   function to calculate net profit of each wager   */
  const netProfit = (wager, odds, result) => {
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

  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const netProfitCalc = () => {
    let total = [];
    for (let i = 0; i < allBets.length; i++) {
      const wager_amt = allBets[i].wager_amt;
      const odds = allBets[i].odds;
      const outcome = allBets[i].outcome;

      total.push(netProfit(wager_amt, odds, outcome));
    }
    const netP = formatter.format(total.reduce((a, b) => a + b, 0));
    return netP;
  };

  const featureData = [
    {
      id: 1,
      title: 'Recent Profit',
      profit: 500,
      icon: (
        <ArrowDownward
          className={`${styles.featuredIcon} ${styles.downArrow}`}
        />
      ),
      iconTitle: '-6% ROI',
      featuredSub: 'Compared to last month',
    },
    {
      id: 2,
      title: 'Year to Date Profit',
      profit: 2021,
      icon: <ArrowUpward className={`${styles.featuredIcon}`} />,
      iconTitle: '+36% ROI',
      featuredSub: 'Compared to last year',
    },
    {
      id: 3,
      title: 'All Time Profit',
      profit: netProfitCalc(),
      icon: <ArrowUpward className={`${styles.featuredIcon}`} />,
      iconTitle: '+86% ROI',
      featuredSub: 'Since Sign-up',
    },
  ];

  return (
    <div className={styles.featured}>
      {featureData.map((data) => (
        <div key={data.id} className={styles.featuredItem}>
          <span className={styles.featuredTitle}>{data.title}</span>
          <div className={styles.featuredProfitContainer}>
            <span className={styles.featuredProfit}>{data.profit}</span>
            <span className={styles.featuredROI}>
              {data.icon}
              {data.iconTitle}
            </span>
          </div>
          <span className={styles.featuredSub}>{data.featuredSub}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedInfo;
