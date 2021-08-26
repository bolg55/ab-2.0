import styles from '../styles/FlexContainer.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import EditBets from '../components/EditBets';
import { API_URL } from '../config';
import axios from 'axios';

const editbets = ({ data }) => {
  return (
    <Layout currentURL='http://localhost:3000/editbets'>
      <div className={styles.container}>
        <Sidebar />
        <EditBets data={data} title='Edit bet' />
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

export default editbets;
