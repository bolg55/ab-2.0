import styles from "../styles/Home.module.css";
import FeaturedInfo from "./FeaturedInfo";

const Home = () => {
  let userName = "notHotdog";
  const logins = 1;

  return (
    <div className={styles.container}>
      <h3 className={styles.greeting}>
        {logins < 1
          ? `Welcome to Action Backers, ${userName}`
          : `Welcome back, ${userName}`}
      </h3>
      <div>
        <FeaturedInfo />
      </div>
    </div>
  );
};

export default Home;
