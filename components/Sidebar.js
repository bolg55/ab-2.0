import styles from "../styles/Sidebar.module.css";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <SidebarItem />
      </div>
    </div>
  );
};

export default Sidebar;
