import styles from '../styles/Widget.module.css';
import { Cancel, CheckCircle, SwapHorizontalCircle } from '@material-ui/icons';
import Link from 'next/link';

const WidgetLg = () => {
  return (
    <div className={styles.widgetLg}>
      <div className={styles.titleContainer}>
        <h3 className={styles.widgetTitle}>Recent bets</h3>
        <Link href='/allbets'>
          <a className={styles.allBetsLink}>All bets</a>
        </Link>
      </div>

      <table className={styles.widgetTable}>
        <tr className={styles.widgetTr}>
          <th className={styles.widgetTh}>Date</th>
          <th className={styles.widgetTh}>Sport</th>
          <th className={styles.widgetTh}>Wager Type</th>
          <th className={styles.widgetTh}>Wager Info</th>
          <th className={styles.widgetTh}>Wager Amt</th>
          <th className={styles.widgetTh}>Odds</th>
          <th className={styles.widgetTh}>Outcome</th>
          <th className={styles.widgetTh}>Net Profit</th>
        </tr>

        <tr className={styles.widgetTr}>
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
        <tr className={styles.widgetTr}>
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
        <tr className={styles.widgetTr}>
          <td className={styles.displayLeft}>June 23, 2021</td>
          <td className={styles.displayLeft}>Baseball</td>
          <td>Moneyline</td>
          <td>Toronto Blue Jays</td>
          <td>$100</td>
          <td>-105</td>
          <td className={styles.outcome}>
            <SwapHorizontalCircle className={styles.refund} />
          </td>
          <td>$0</td>
        </tr>
        <tr className={styles.widgetTr}>
          <td className={styles.displayLeft}>June 22, 2021</td>
          <td className={styles.displayLeft}>Baseball</td>
          <td>Moneyline</td>
          <td>Toronto Blue Jays</td>
          <td>$100</td>
          <td>-105</td>
          <td className={styles.outcome}>
            <CheckCircle className={styles.win} />
          </td>
          <td>$100</td>
        </tr>
        <tr className={styles.widgetTr}>
          <td className={styles.displayLeft}>June 20, 2021</td>
          <td className={styles.displayLeft}>Baseball</td>
          <td>Moneyline</td>
          <td>Toronto Blue Jays</td>
          <td>$100</td>
          <td>-105</td>
          <td className={styles.outcome}>
            <CheckCircle className={styles.win} />
          </td>
          <td>$100</td>
        </tr>
        <tr className={styles.widgetTr}>
          <td className={styles.displayLeft}>June 20, 2021</td>
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
        <tr className={styles.widgetTr}>
          <td className={styles.displayLeft}>June 19, 2021</td>
          <td className={styles.displayLeft}>Baseball</td>
          <td>Moneyline</td>
          <td>Toronto Blue Jays</td>
          <td>$100</td>
          <td>-105</td>
          <td className={styles.outcome}>
            <SwapHorizontalCircle className={styles.refund} />
          </td>
          <td>$0</td>
        </tr>
        <tr className={styles.widgetTr}>
          <td className={styles.displayLeft}>June 17, 2021</td>
          <td className={styles.displayLeft}>Basketball</td>
          <td>LA -15</td>
          <td>Los Angeles Lakers</td>
          <td>$60</td>
          <td>-115</td>
          <td className={styles.outcome}>
            <CheckCircle className={styles.win} />
          </td>
          <td>$54</td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
