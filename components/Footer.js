import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.footerLogo}
        href='https://kellenbolger.ca'
        target='_blank'
        rel='noopener noreferrer'>
        {`Built by {k`}
        <span className={styles.logo}>{`B`}</span>
        {`}`}
      </a>
    </div>
  );
};

export default Footer;
