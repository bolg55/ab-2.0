import styles from "../styles/Dashboard.module.css";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const Dashboard = () => {
  return (
    <Layout currentURL='http://localhost:3000/dashboard'>
      <Topbar />
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.other}>Other Stuff</div>
      </div>
    </Layout>
  );
};

export default Dashboard;
