import styles from '../styles/AddBets.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import AddBets from '../components/AddBets';
import { API_URL } from '../config';
import axios from 'axios';

const addbets = ({ data }) => {
  return (
    <Layout currentURL='http://localhost:3000/addbets'>
      <div className={styles.outerWrapper}>
        <Sidebar />
        <AddBets data={data} title='Add bet' />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${API_URL}/bets?_sort=date:DESC`);
  const data = await res.data;

  return {
    props: { data },
  };
};

export default addbets;
