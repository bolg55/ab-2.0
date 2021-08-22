import {
  LineStyle,
  AttachMoney,
  Timeline,
  List,
  SportsFootball,
  SportsBasketball,
  SportsHockey,
  SportsBaseball,
  AccountBalanceWallet,
  TrendingUp,
  Computer,
} from '@material-ui/icons';
import styles from '../styles/Sidebar.module.css';

export const dashboardItems = [
  {
    id: 1,
    title: 'Dashboard',
    listItem: [
      {
        id: 1,
        link: '/dashboard',
        itemName: 'Home',
        listIcon: <LineStyle className={styles.icon} />,
      },
      {
        id: 2,
        link: '/allbets',
        itemName: 'All Bets',
        listIcon: <List className={styles.icon} />,
      },
      {
        id: 3,
        link: '/dashboard',
        itemName: 'Profit',
        listIcon: <AttachMoney className={styles.icon} />,
      },
      {
        id: 4,
        link: '/dashboard',
        itemName: 'Bet Tracker',
        listIcon: <Timeline className={styles.icon} />,
      },
    ],
  },
  {
    id: 2,
    title: 'Sports Betting',
    listItem: [
      {
        id: 5,
        link: '/models',
        itemName: 'Football',
        listIcon: <SportsFootball className={styles.icon} />,
      },
      {
        id: 6,
        link: '/models',
        itemName: 'Basketball',
        listIcon: <SportsBasketball className={styles.icon} />,
      },
      {
        id: 7,
        link: '/models',
        itemName: 'Hockey',
        listIcon: <SportsHockey className={styles.icon} />,
      },
      {
        id: 8,
        link: '/models',
        itemName: 'Baseball',
        listIcon: <SportsBaseball className={styles.icon} />,
      },
    ],
  },
  {
    id: 3,
    title: 'Video Courses',
    listItem: [
      {
        id: 9,
        link: '#',
        itemName: 'Fundamentals',
        listIcon: <List className={styles.icon} />,
      },
      {
        id: 10,
        link: '#',
        itemName: 'Bankroll Management',
        listIcon: <AccountBalanceWallet className={styles.icon} />,
      },
      {
        id: 11,
        link: '#',
        itemName: 'Profit Without a Model',
        listIcon: <TrendingUp className={styles.icon} />,
      },
      {
        id: 12,
        link: '#',
        itemName: 'Building a Model',
        listIcon: <Computer className={styles.icon} />,
      },
    ],
  },
];
