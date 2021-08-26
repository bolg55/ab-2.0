import styles from '../styles/FlexContainer.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import { API_URL } from '../config';
import axios from 'axios';

const dashboard = ({ allBets, recentBets }) => {
  return (
    <Layout currentURL='http://localhost:3000/dashboard'>
      <div className={styles.container}>
        <Sidebar />
        <Dashboard recentBets={recentBets} allBets={allBets} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const reqOne = axios.get(`${API_URL}/bets?_sort=date:DESC&_limit=7`);
  const reqTwo = axios.get(`${API_URL}/bets`);

  const [recentBets, allBets] = await Promise.all([reqOne, reqTwo]);
  return {
    props: { recentBets: recentBets.data, allBets: allBets.data },
  };
};

export default dashboard;
