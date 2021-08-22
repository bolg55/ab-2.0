import styles from '../styles/Footer.module.css';

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
