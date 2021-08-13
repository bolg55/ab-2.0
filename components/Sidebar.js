import styles from "../styles/Sidebar.module.css";
import {
  LineStyle,
  AttachMoney,
  Timeline,
  ListAlt,
  SportsFootball,
  SportsBasketball,
  SportsHockey,
  SportsBaseball,
} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <LineStyle className={styles.icon} /> Home
            </li>
            <li className={styles.sidebarListItem}>
              <ListAlt className={styles.icon} /> Recent Bets
            </li>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <AttachMoney className={styles.icon} /> Profit
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.icon} />
              Bet Tracker
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Sports Betting</h3>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <SportsFootball className={styles.icon} /> Football
            </li>
            <li className={styles.sidebarListItem}>
              <SportsBasketball className={styles.icon} /> Basketball
            </li>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <SportsHockey className={styles.icon} /> Hockey
            </li>
            <li className={styles.sidebarListItem}>
              <SportsBaseball className={styles.icon} />
              Baseball
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>Dashboard</h3>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <LineStyle className={styles.icon} /> Home
            </li>
            <li className={styles.sidebarListItem}>
              <ListAlt className={styles.icon} /> Recent Bets
            </li>
            <li className={`${styles.sidebarListItem} ${styles.active}`}>
              <AttachMoney className={styles.icon} /> Profit
            </li>
            <li className={styles.sidebarListItem}>
              <Timeline className={styles.icon} />
              Bet Tracker
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
