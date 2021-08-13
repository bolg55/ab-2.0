/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Topbar.module.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
        <div className={styles.topLeft}>
          <span>
            <img
              className={styles.logo}
              src='/ab_2021_header.png'
              alt='Action Backers Logo'
            />
          </span>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topbarIconContainer}>
            <NotificationsNone />
            <span className={styles.topIconBadge}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
            <Language />
          </div>
          <div className={styles.topbarIconContainer}>
            <Settings />
          </div>

          <img
            className={styles.topAvatar}
            src='/KellenAvatar.png'
            alt='Profile Avatar'
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
