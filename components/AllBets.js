import Topbar from './Topbar';
import BetHistory from './BetHistory';
import styles from '../styles/Bets.module.css';

const AllBets = ({ betData }) => {
  return (
    <div className={styles.container}>
      <Topbar />
      <BetHistory betData={betData} title='All bets' />
    </div>
  );
};

export default AllBets;
