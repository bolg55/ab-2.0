import styles from '../styles/Dashboard.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Home from '../components/Home';
import { API_URL } from '../config';
import axios from 'axios';

const Dashboard = ({ data }) => {
  return (
    <Layout currentURL='http://localhost:3000/dashboard'>
      <div className={styles.container}>
        <Sidebar />
        <Home data={data} />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${API_URL}/bets?_sort=date:DESC&_limit=7`);
  const data = await res.data;

  return {
    props: { data },
  };
};

export default Dashboard;
