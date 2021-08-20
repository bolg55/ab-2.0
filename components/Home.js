import styles from '../styles/Home.module.css';
import FeaturedInfo from './FeaturedInfo';
import Topbar from './Topbar';
import Chart from './Chart';
import { data } from '../constants/dummydata';

const Home = () => {
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
        <FeaturedInfo />
      </div>
      <Chart title='Profit' data={data} />
    </div>
  );
};

export default Home;
