import styles from '../styles/AllBets.module.css';
import { Cancel, CheckCircle, SwapHorizontalCircle } from '@material-ui/icons';
import Topbar from './Topbar';

const AllBets = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <div className={styles.allBetsLg}>
        <div className={styles.titleContainer}>
          <h3 className={styles.allBetsTitle}>All bets</h3>
        </div>

        <table className={styles.allBetsTable}>
          <tr className={styles.allBetsTr}>
            <th className={styles.allBetsTh}>Date</th>
            <th className={styles.allBetsTh}>Sport</th>
            <th className={styles.allBetsTh}>Wager Type</th>
            <th className={styles.allBetsTh}>Wager Info</th>
            <th className={styles.allBetsTh}>Wager Amt</th>
            <th className={styles.allBetsTh}>Odds</th>
            <th className={styles.allBetsTh}>Outcome</th>
            <th className={styles.allBetsTh}>Net Profit</th>
          </tr>

          <tr className={styles.allBetsTr}>
            <td className={styles.displayLeft}>June 23, 2021</td>
            <td className={styles.displayLeft}>Baseball</td>
            <td>Moneyline</td>
            <td>Toronto Blue Jays</td>
            <td>$100</td>
            <td>-105</td>
            <td className={styles.outcome}>
              <Cancel className={styles.lose} />
            </td>
            <td>-$100</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default AllBets;
