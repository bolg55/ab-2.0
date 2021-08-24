import { dashboardItems } from '../constants/dashboardItems';
import styles from '../styles/Sidebar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

const SidebarItem = () => {
  const router = useRouter();

  return (
    <>
      {dashboardItems.map((item) => (
        <div key={item.id} className={styles.sidebarMenu}>
          <h3 className={styles.sidebarTitle}>{item.title}</h3>
          <ul className={styles.sidebarList}>
            {item.listItem.map((item) => (
              <Link key={item.id} href={item.link}>
                <a>
                  <li
                    className={`${styles.sidebarListItem} ${
                      router.pathname === item.link && ` ${styles.active}`
                    }`}>
                    {item.listIcon}
                    {item.itemName}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default SidebarItem;
