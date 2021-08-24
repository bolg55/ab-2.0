import styles from '../styles/PendingBets.module.css';
import { Create, Delete } from '@material-ui/icons';
import { useRouter } from 'next/router';
import { API_URL } from '../config';
import { toast, ToastContainer } from 'react-toastify';

const PendingBets = ({ betData, title }) => {
  const router = useRouter();

  // sets Amount and Net Profit fields to $ amounts
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Formats the Date column to Mmm dd, yyyy
  const formatDateForInput = (date) => {
    let options = {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    };
    const formatted = new Date(date).toLocaleDateString('en-US', options);
    return formatted;
  };

  const deleteBet = async (index) => {
    if (confirm('Are you sure?')) {
      const res = await fetch(`${API_URL}/bets/${betData[index].id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success('🚀 Bet removed successfully.');
        router.push('/addbets');
      }
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        draggable
        pauseOnHover
      />

      <div className={styles.tableContainer}>
        <h2 className={styles.tableTitle}>{title}</h2>
        <table className={styles.allBetsTable}>
          <tbody>
            <tr className={styles.allBetsRowHeader}>
              <th className={`${styles.allBetsTh} ${styles.displayLeft}`}>
                Date
              </th>
              <th className={`${styles.allBetsTh} `}>League</th>
              <th className={styles.allBetsTh}>Bet Type</th>
              <th className={styles.allBetsTh}>Bet Info</th>
              <th className={styles.allBetsTh}>Amount</th>
              <th className={styles.allBetsTh}>Odds</th>
              <th className={styles.allBetsTh}>Result</th>

              <th>Edit</th>
              <th>Delete</th>
            </tr>

            {betData
              .filter((val) => {
                if (val.outcome.toLowerCase() === 'pending') return val;
              })
              .map((sport, index) => (
                <tr key={sport.id} className={styles.allBetsTr}>
                  <td>{formatDateForInput(`${sport.date}`)}</td>
                  <td className={styles.displayCenter}>{sport.sport}</td>
                  <td className={styles.displayCenter}>{sport.wager_type}</td>
                  <td className={styles.displayCenter}>{sport.wager_info}</td>
                  <td className={styles.displayCenter}>
                    {formatter.format(`${sport.wager_amt}`)}
                  </td>
                  <td className={styles.displayCenter}>{sport.odds}</td>
                  <td
                    className={`${styles[`${sport.outcome}`]} ${
                      styles.outcome
                    }`}>
                    {sport.outcome}
                  </td>
                  <td className={`${styles.displayCenter} ${styles.iconEdit}`}>
                    <Create />
                  </td>
                  <td
                    className={`${styles.displayCenter} ${styles.iconDel}`}
                    onClick={() => deleteBet(index)}>
                    <Delete />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingBets;
