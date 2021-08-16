import styles from "../styles/Featured.module.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Recent Profit</span>
        <div className={styles.featuredProfitContainer}>
          <span className={styles.featuredProfit}>$420</span>
          <span className={styles.featuredROI}>
            {" "}
            <ArrowDownward
              className={`${styles.featuredIcon} ${styles.downArrow}`}
            />
            -6% ROI
          </span>
        </div>
        <span className={styles.featuredSub}> Compared to last month</span>
      </div>
      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>Year to Date Profit</span>
        <div className={styles.featuredProfitContainer}>
          <span className={styles.featuredProfit}>$2,021</span>
          <span className={styles.featuredROI}>
            {" "}
            <ArrowUpward
              className={`${styles.featuredIcon} ${styles.upArrow}`}
            />
            +36% ROI
          </span>
        </div>
        <span className={styles.featuredSub}> Compared to last year</span>
      </div>

      <div className={styles.featuredItem}>
        <span className={styles.featuredTitle}>All Time Profit</span>
        <div className={styles.featuredProfitContainer}>
          <span className={styles.featuredProfit}>$19,890</span>
          <span className={styles.featuredROI}>
            {" "}
            <ArrowUpward
              className={`${styles.featuredIcon} ${styles.upArrow}`}
            />
            +69% ROI
          </span>
        </div>
        <span className={styles.featuredSub}> Since Signup</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
