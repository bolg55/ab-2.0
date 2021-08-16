import { dashboardItems } from "../constants/dashboardItems";
import styles from "../styles/Sidebar.module.css";
import { useState } from "react";

const SidebarItem = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {dashboardItems.map((item) => (
        <div key={item.id} className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>{item.title}</h3>
          <ul className={styles.sidebarList}>
            {item.listItem.map((item) => (
              <li
                key={item.id}
                onClick={() => setIsActive(!isActive)}
                className={`${styles.sidebarListItem} ${
                  isActive ? `${styles.active} ` : ""
                }`}>
                {item.listIcon}
                {item.itemName}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SidebarItem;
