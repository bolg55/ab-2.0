import styles from '../styles/Dashboard.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import AllBets from '../components/AllBets';
import { API_URL } from '../config';
import axios from 'axios';

const allbets = ({ betData }) => {
  return (
    <Layout currentURL='http://localhost:3000/models'>
      <div className={styles.container}>
        <Sidebar />
        <AllBets betData={betData} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${API_URL}/bets?_sort=date:DESC`);
  const betData = await res.data;

  return {
    props: { betData },
  };
};

export default allbets;
