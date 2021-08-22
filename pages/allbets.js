import styles from '../styles/Dashboard.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import AllBets from '../components/AllBets';

const allbets = () => {
  return (
    <Layout currentURL='http://localhost:3000/models'>
      <div className={styles.container}>
        <Sidebar />
        <AllBets />
      </div>
    </Layout>
  );
};

export default allbets;
