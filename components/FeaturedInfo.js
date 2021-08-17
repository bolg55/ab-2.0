import styles from "../styles/Featured.module.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const featureData = [
  {
    id: 1,
    title: "Recent Profit",
    profit: 500,
    icon: (
      <ArrowDownward className={`${styles.featuredIcon} ${styles.downArrow}`} />
    ),
    iconTitle: "-6% ROI",
    featuredSub: "Compared to last month",
  },
  {
    id: 2,
    title: "Year to Date Profit",
    profit: 2021,
    icon: <ArrowUpward className={`${styles.featuredIcon}`} />,
    iconTitle: "+36% ROI",
    featuredSub: "Compared to last year",
  },
  {
    id: 3,
    title: "All Time Profit",
    profit: 19890,
    icon: <ArrowUpward className={`${styles.featuredIcon}`} />,
    iconTitle: "+86% ROI",
    featuredSub: "Since Sign-up",
  },
];

const FeaturedInfo = () => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <div className={styles.featured}>
      {featureData.map((data) => (
        <div key={data.id} className={styles.featuredItem}>
          <span className={styles.featuredTitle}>{data.title}</span>
          <div className={styles.featuredProfitContainer}>
            <span className={styles.featuredProfit}>
              {formatter.format(`${data.profit}`)}
            </span>
            <span className={styles.featuredROI}>
              {data.icon}
              {data.iconTitle}
            </span>
          </div>
          <span className={styles.featuredSub}>{data.featuredSub}</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedInfo;
