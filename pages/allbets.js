import styles from '../styles/Dashboard.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import AllBets from '../components/AllBets';
import { API_URL } from '../config';
import axios from 'axios';

const allbets = ({ data }) => {
  return (
    <Layout currentURL='http://localhost:3000/models'>
      <div className={styles.container}>
        <Sidebar />
        <AllBets data={data} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get(`${API_URL}/bets`);
  const data = await res.data;

  return {
    props: { data },
  };
};

export default allbets;
