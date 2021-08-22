import styles from '../styles/AllBets.module.css';
import { Cancel, CheckCircle, SwapHorizontalCircle } from '@material-ui/icons';
import Topbar from './Topbar';

const AllBets = ({ data }) => {
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

          {data.map((sport) => (
            <tr key={sport.id} className={styles.allBetsTr}>
              <td className={styles.displayLeft}>{sport.date}</td>
              <td className={styles.displayLeft}>{sport.sport}</td>
              <td>{sport.wager_type}</td>
              <td>{sport.wager_info}</td>
              <td>{sport.wager_amt}</td>
              <td>{sport.odds}</td>
              <td className={`${styles[`${sport.outcome}`]} ${styles.outcome}`}>
                {sport.outcome}
              </td>
              <td>
                {`${sport.outcome}` === 'lose'
                  ? -`${sport.wager_amt}`
                  : sport.odds * sport.wager_amt - sport.wager_amt}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllBets;
