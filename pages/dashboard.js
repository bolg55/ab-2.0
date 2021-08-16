import styles from "../styles/Dashboard.module.css";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";

const Dashboard = () => {
  return (
    <Layout currentURL='http://localhost:3000/dashboard'>
      <div className={styles.container}>
        <Sidebar />
        <Home />
      </div>
    </Layout>
  );
};

export default Dashboard;
