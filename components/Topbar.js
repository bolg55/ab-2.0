/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Topbar.module.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbarWrapper}>
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
          <div className={styles.topbarIconContainer}>
            <p className={styles.topLogout}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
