/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Sidebar.module.css';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <img
          className={styles.logo}
          src='/ab_21.png'
          alt='Action Backers Logo'
        />
        <SidebarItem />
      </div>
    </div>
  );
};

export default Sidebar;
