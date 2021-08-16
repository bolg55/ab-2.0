import { dashboardItems } from "../constants/dashboardItems";
import styles from "../styles/Sidebar.module.css";
import { useState } from "react";

const SidebarItem = () => {
  const [isActive, setIsActive] = useState(false);

  // for (let i = 0; i < dashboardItems.length; i++) {
  //   for (let j = 0; j < dashboardItems[i].listItem.length; j++) {
  //     const dbId = dashboardItems[i].listItem[j].id;
  //     console.log(dbId);
  //   }
  // }

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
                className={styles.sidebarListItem}>
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
