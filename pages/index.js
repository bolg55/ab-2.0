import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout />

      <main className={styles.main}>
        <h1>Coming Soon</h1>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://kellenbolger.ca'
          target='_blank'
          rel='noopener noreferrer'>
          Built by{" "}
          <span className={styles.logo}>
            <Image
              src='/largeKBShort.png'
              alt='Kellen Bolger Web Developer'
              width={25}
              height={25}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
