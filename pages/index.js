import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import { API_URL } from '../config';

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout>
        <main className={styles.main}>
          <h1>Coming Soon</h1>
          <h2>{API_URL}</h2>
        </main>
      </Layout>
    </div>
  );
}
