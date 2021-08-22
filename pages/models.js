import styles from '../styles/Dashboard.module.css';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Model from '../components/Model';

const Models = () => {
  return (
    <Layout currentURL='http://localhost:3000/models'>
      <div className={styles.container}>
        <Sidebar />
        <Model />
      </div>
    </Layout>
  );
};

export default Models;
