import styles from '../styles/Bets.module.css';
import Link from 'next/link';

const RecentBets = ({ data, title }) => {
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formatDateForInput = (date) => {
    let options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const formatted = new Date(date).toLocaleDateString('en-US', options);
    return formatted;
  };
  return (
    <div className={styles.containerHome}>
      <div className={styles.tableContainer}>
        <div className={styles.titleContainer}>
          <h3 className={styles.tableTitleSm}>{title}</h3>
          <Link href='/allbets'>
            <a className={styles.allBetsLink}>All bets</a>
          </Link>
        </div>
        <table className={styles.allBetsTable}>
          <tbody>
            <tr className={styles.allBetsRowHeader}>
              <th className={`${styles.allBetsTh} ${styles.displayLeft}`}>
                Date
              </th>
              <th className={`${styles.allBetsTh} `}>League</th>
              <th className={styles.allBetsTh}>Bet Type</th>
              <th className={styles.allBetsTh}>Bet Info</th>
              <th className={styles.allBetsTh}>Amount</th>
              <th className={styles.allBetsTh}>Odds</th>
              <th className={styles.allBetsTh}>Result</th>
              <th className={`${styles.allBetsTh} ${styles.displayRight}`}>
                Net Profit
              </th>
            </tr>
            {data.map((sport) => (
              <tr key={sport.id} className={styles.allBetsTr}>
                <td>{formatDateForInput(`${sport.date}`)}</td>
                <td className={styles.displayCenter}>{sport.sport}</td>
                <td className={styles.displayCenter}>{sport.wager_type}</td>
                <td className={styles.displayCenter}>{sport.wager_info}</td>
                <td className={styles.displayCenter}>
                  {formatter.format(`${sport.wager_amt}`)}
                </td>
                <td className={styles.displayCenter}>{sport.odds}</td>
                <td
                  className={`${styles[`${sport.outcome}`]} ${styles.outcome}`}>
                  {sport.outcome}
                </td>
                <td className={styles.displayRight}>
                  {formatter.format(
                    `${
                      `${sport.outcome}` === 'lose'
                        ? sport.wager_amt * -1
                        : `${sport.outcome}` === 'win'
                        ? sport.odds * sport.wager_amt - sport.wager_amt
                        : 0
                    }`
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBets;
