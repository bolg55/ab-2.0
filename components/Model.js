import styles from '../styles/Model.module.css';
import Topbar from './Topbar';

const Model = () => {
  return (
    <div className={styles.container}>
      <Topbar />
      <h2>Betting models</h2>
    </div>
  );
};

export default Model;
