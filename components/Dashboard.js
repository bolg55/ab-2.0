import styles from '../styles/Dashboard.module.css';
import FeaturedInfo from './FeaturedInfo';
import Topbar from './Topbar';
import Chart from './Chart';
import RecentBets from './RecentBets';
import { sportData, userSports } from '../constants/dummydata';

const Dashboard = ({ recentBets, allBets }) => {
  let userName = 'notHotdog';
  const logins = 1;

  return (
    <div className={styles.container}>
      <Topbar />
      <h3 className={styles.greeting}>
        {logins < 1 ? `Welcome to Action Backers, ` : `Welcome back, `}
        <span className={styles.userName}>{userName}</span>
      </h3>
      <div>
        <FeaturedInfo allBets={allBets} />
      </div>

      <Chart
        title='Profit'
        data={sportData}
        userPrefs={userSports}
        dataKeyX='month'
        dataKey='overall'
      />
      <div className={styles.widgetContainer}>
        <RecentBets recentBets={recentBets} title='Recent bets' />
      </div>
    </div>
  );
};

export default Dashboard;
